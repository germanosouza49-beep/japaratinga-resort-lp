// ==========================================
// CRAFT E EFEITOS GLOBAIS
// ==========================================

// 1. MAGNETIC CURSOR
const cursor = document.getElementById('magnetic-cursor');
let mouseX = window.innerWidth / 2;
let mouseY = window.innerHeight / 2;
let cursorX = mouseX;
let cursorY = mouseY;
const speed = 0.2;

// Capturar Posição Real do Mouse
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Loop de interpolação do Cursor (Smooth ease)
function animateCursor() {
    let distX = mouseX - cursorX;
    let distY = mouseY - cursorY;
    
    cursorX = cursorX + (distX * speed);
    cursorY = cursorY + (distY * speed);
    
    // Atualizar posição (Usa translate3d para aceleração de hardware)
    if(cursor) {
        cursor.style.transform = `translate3d(calc(${cursorX}px - 50%), calc(${cursorY}px - 50%), 0)`;
    }
    
    requestAnimationFrame(animateCursor);
}
if(window.matchMedia("(pointer: fine)").matches) {
    animateCursor();
}

// Hover effects no cursor
const interactiveElements = document.querySelectorAll('a, button, .faq-summary, .masonry-img-wrapper, .promo-card');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => cursor?.classList.add('hovering'));
    el.addEventListener('mouseleave', () => cursor?.classList.remove('hovering'));
});


// ==========================================
// SCROLL ENGINE E ANIMAÇÕES (LAZY LOAD)
// ==========================================

// Função utilitária para lazy load de módulos complexos
function lazyLoadModule(selector, loadFn, rootMargin = '200px') {
    const el = document.querySelector(selector);
    if (!el) return;
    const obs = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) { 
          obs.disconnect(); 
          loadFn(); 
      }
    }, { rootMargin: rootMargin });
    obs.observe(el);
}

// Inicializar LENIS (Smooth Scroll)
let lenis;
async function initLenis() {
    try {
        const Lenis = (await import('https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.29/+esm')).default;
        lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // default
            smoothWheel: true,
            wheelMultiplier: 1,
            touchMultiplier: 2,
        });

        function raf(time) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);
    } catch(e) {
        console.error("Lenis falhou:", e);
    }
}
initLenis();


// HERO ANIMAÇÕES (Podemos carregar via GSAP após script JS engatar)
async function initHeroAnimations() {
    const { gsap } = await import('https://cdn.jsdelivr.net/npm/gsap@3.12.2/+esm');
    
    // Revelar Headline
    const lines = document.querySelectorAll('.hero-headline .line');
    gsap.fromTo(lines, 
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power4.out", delay: 0.2 }
    );
    
    // Revelar Badge e Sub
    gsap.fromTo(['.hero-badge', '.hero-subheadline', '.cta-button'],
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power2.out", delay: 0.8 }
    );
}
// Disparar o Hero quase imediatamente (mas sem travar render)
setTimeout(initHeroAnimations, 100);


// EXPERIENCES E MASONRY (ScrollTrigger)
lazyLoadModule('.experience-section', async () => {
    const { gsap } = await import('https://cdn.jsdelivr.net/npm/gsap@3.12.2/+esm');
    const { ScrollTrigger } = await import('https://cdn.jsdelivr.net/npm/gsap@3.12.2/ScrollTrigger/+esm');
    gsap.registerPlugin(ScrollTrigger);

    // Fade Up Text
    gsap.fromTo('.experience-text-block', 
        { y: 50, opacity: 0 },
        { 
            y: 0, opacity: 1, duration: 1, 
            scrollTrigger: { trigger: '.experience-section', start: 'top 70%' }
        }
    );

    // Parallax Imagem Secundaria
    gsap.to('.wrapper-2', {
        y: -60,
        ease: "none",
        scrollTrigger: {
            trigger: '.experience-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
}, '400px');


// DESTINO (Parallax Nativo CSS x ScrollTrigger)
lazyLoadModule('.destino-section', async () => {
    const { gsap } = await import('https://cdn.jsdelivr.net/npm/gsap@3.12.2/+esm');
    const { ScrollTrigger } = await import('https://cdn.jsdelivr.net/npm/gsap@3.12.2/ScrollTrigger/+esm');
    gsap.registerPlugin(ScrollTrigger);

    // Mover a imagem de fundo levemente
    gsap.to('.destino-parallax-img', {
        yPercent: 30, // move para baixo enquanto rola para baixo, criando distancia
        ease: "none",
        scrollTrigger: {
            trigger: '.destino-section',
            start: 'top bottom',
            end: 'bottom top',
            scrub: true
        }
    });
    
    // Revelar Card Flutuante
    gsap.fromTo('.destino-card', 
        { y: 50, opacity: 0 },
        { 
            y: -50, opacity: 1, duration: 1, 
            scrollTrigger: { trigger: '.destino-section', start: 'top 50%' }
        }
    );
});


// FAQ Accordion Logica Exclusiva (CSS Transitions cuidam da animação, JS só do toggle)
const details = document.querySelectorAll('details.faq-accordion');
details.forEach((targetDetail) => {
  targetDetail.addEventListener("click", () => {
    details.forEach((detail) => {
      if (detail !== targetDetail) {
        detail.removeAttribute("open");
      }
    });
  });
});
