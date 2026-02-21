# Especificação de Layout (Direção de Arte) - Japaratinga Lounge Resort

## Resumo Global
- **Tipografia:** Fonte Principal: `Playfair Display` (Headings) / Fonte Apoio: `Source Sans 3` (Body).
- **Cores Oficiais:** 
  - Green Dark: `#00362f`
  - Green Emerald: `#004F46`
  - Green Light: `#e8efe9`
  - Sand (Acento/Premium): `#C39F6D`
  - Sand Light: `#EAE2D6`
  - Offwhite (Fundo Principal): `#FDFBF7`
  - Black (Texto): `#1A1A1A`
  - White: `#FFFFFF`

---

## Seção 1: Hero

### Arquétipo e Constraints
- **Arquétipo:** Hero Dominante
- **Constraints:** Imagem Fullbleed, Overlap Elements
- **Justificativa:** Estabelece um impacto imediato e de autoridade. O mar de Japaratinga deve dominar 100% da tela inicial comunicando a experiência premium de forma imersiva e suntuosa.

### Conteúdo
- **Hero Badge:** Resort All Inclusive Premium
- **Headline:** O Primeiro All Inclusive Premium Inédito no Brasil
- **Subheadline:** Descubra o paraíso na Praia de Japaratinga. Estrutura completa, mar verde esmeralda e experiências inesquecíveis 24 horas por dia.
- **CTA:** Quero Garantir Minha Reserva →

### Layout
- **Container Principal:** `width: 100vw`, `height: 100vh`, `min-height: 700px`, `position: relative`, `overflow: hidden`, `display: flex`, `align-items: center`, `padding: 2rem 5vw`.
- **Fundo:** Imagem absoluta ocupando 100% com `object-fit: cover` posicionada em `center 30%`.
- **Conteúdo Central:** `max-width: 900px`, `position: relative`, `z-index: 2`.

### Tipografia
- **Headline:** `font-family: Playfair Display`, `font-size: clamp(3rem, 7vw, 6.5rem)`, `line-height: 1`, `color: #FFFFFF`, `letter-spacing: -1px`. A palavra "Premium Inédito" usa `font-style: italic` e color `#C39F6D`.
- **Subheadline:** `font-family: Source Sans 3`, `font-size: clamp(1.1rem, 2vw, 1.4rem)`, `font-weight: 300`, `opacity: 0.9`, `max-width: 600px`, `margin-bottom: 4rem`.

### Cores e Efeitos Visuais
- **Fundo:** Filtro overlay de vidro com `background: linear-gradient(135deg, rgba(0, 54, 47, 0.85) 0%, rgba(0, 79, 70, 0.4) 100%)` e `mix-blend-mode: multiply` para afundar a imagem realista (Resort/Mar) e ressaltar o texto.
- **Scroll Indicator:** Elemento vertical no canto inferior esquerdo com texto "Descubra" rotacionado (`transform: rotate(-90deg)`) e uma barra fina.

### Animações (Pós-load)
- **Texto Headline:** Revelação em Fade Up usando split text (GSAP ou manual). `transform: translateY(30px) to 0`, `opacity: 0 to 1`, durando `800ms`, `cubic-bezier(0.165, 0.84, 0.44, 1)`.
- **Scroll Line:** Pseudo-elemento animado descendo o track com `animation: scrollLine 2s infinite`.

### Interatividade
- **CTA Secundário:** Efeito ripple ou sweeping de background color white (`transform: scaleX(1)`). Seta com hover de translate horizontal `5px`.

### Responsividade
- **Mobile (max: 768px):** Ajustar flex-direction se precisar, headline reduzida para clamp base 2.5rem. O badge ganha menos espaçamento lateral. Padding de tela de `5vw`.

---

## Seção 2: Benefícios / All Inclusive Premium

### Arquétipo e Constraints
- **Arquétipo:** Split Assimétrico
- **Constraints:** Layered, Float Loop
- **Justificativa:** O split 40/60 tira a monotonia de um texto central e as imagens em camadas com movimento solido comunicam abundância.

### Conteúdo
- **Título:** Uma Experiência Premium a Qualquer Hora
- **Conteúdo:** Já imaginou ter tudo incluso a qualquer hora do dia? Desfrute de uma ampla variedade de pratos, petiscos e bebidas (alcoólicas e não alcoólicas) preparadas por renomados chefs, trazendo as melhores gastronomias do Brasil e do mundo diretamente para você. Tudo à sua disposição 24h.

### Layout
- **Wrapper:** `background: #FDFBF7`, `padding: 8rem 5vw`.
- **Grid:** `display: grid`, `grid-template-columns: 1fr 1.2fr`, `gap: 8rem`, `max-width: 1400px`, `margin: 0 auto`, `align-items: center`.
- **Visual Block:** `position: relative`, `height: 700px`. Imagem principal no fundo à direita (`width: 80%`, `height: 100%`). Imagem secundária sobreposta no rodapé à esquerda (`width: 55%`, `height: 60%`, `bottom: -10%`, `left: 0`), com borda sólida `#FDFBF7` de `15px`.

### Tipografia
- **Título:** `Playfair Display`, `clamp(2.5rem, 5vw, 4.5rem)`, color `#00362f`.
- **Conteúdo:** `Source Sans 3`, `1.15rem`, color `#4a4a4a`, `line-height: 1.6`, `max-width: 500px`.

### Elementos Visuais e Animações
- **Sombras:** Imagens texturizadas com `box-shadow: 0 30px 60px -15px rgba(0, 54, 47, 0.2)` criando hierarquia.
- **Scroll Anim:** O bloco de texto fade-up on scroll (`IntersectionObserver`, trigger a 20%, `duration 800ms`).
- **Float Loop:** A foto secundária tem uma micro animação eterna de levitação (`translateY -10px a 0`, `duration 4s ease-in-out alternate loop`).

### Responsividade
- **Mobile (max: 991px):** Quebra do grid para 1 coluna (`1fr`). A altura do bloco visual cai para `500px`. Espaçamentos internos reduzidos a `4rem`.

---

## Seção 3: Estrutura & Lazer

### Arquétipo e Constraints
- **Arquétipo:** Masonry
- **Constraints:** Bleed Right, Hover Zoom/Scale
- **Justificativa:** Mostrar muitas imagens (Piscina, Spa, Quartos) simultaneamente sem parecer álbum quadrado. O grid em degraus convida à exploração.

### Conteúdo
- **Título:** Conforto Absoluto de Frente para o Mar
- **Conteúdo:** Nosso resort foi desenhado para o seu máximo relaxamento. Com piscinas naturais exuberantes, um SPA exclusivo para renovar suas energias e acomodações modernas, cada detalhe foi pensado para criar momentos inesquecíveis. E com nossa recente expansão, o paraíso ficou ainda maior.

### Layout
- **Wrapper:** `padding: 10rem 0 10rem 5vw` (Margem direita zerada para sangria).
- **Conteúdo Textual:** `max-width: 600px`, alinhado à esquerda.
- **Galeria Masonry:** Um container com `display: flex`, `gap: 2rem`, vazando a lateral direita (`overflow: visible` ou alinhado com um scroll horizontal oculto em mobile). Alturas de colunas desalinhadas intencionalmente via `padding-top`.

### Tipografia
- **Título:** `Playfair Display`, color `#00362f`, `3.5rem`.
- **Texto:** `Source Sans 3`, color `#4a4a4a`, `1.15rem`, `margin-bottom: 4rem`.

### Cores e Efeitos Visuais
- **Fundo:** `#EAE2D6` (Sand Light puxando para o offwhite, criando um bloco quente).
- **Hover Reveal nas imagens:** Todas as imagens possuem um wrap de overflow hidden. No `hover`, as imagens recebem `transform: scale(1.05)` (duration 600ms, curva suave). As imagens recebem um pseudo-elemento escuro translúcido revelando uma tag ("SPA", "Nova Expansão", "Piscinas").

### Animacoes
- **Stagger Fade In:** As imagens da galeria carregam em cascata via gsap ScrollTrigger (stagger de `150ms`).

### Responsividade
- **Mobile:** O masonry cola à esquerda, quebra para slider horizontal natural em CSS puro (`display: flex`, `overflow-x: auto`, `scroll-snap-type: x mandatory`).

---

## Seção 4: O Destino Japaratinga

### Arquétipo e Constraints
- **Arquétipo:** Parallax Layers
- **Constraints:** Imagem Recortada, Scroll Parallax
- **Justificativa:** Criar o ar de "janela para o destino" com o texto flutuando entre a paisagem e o leitor, puxando o sentimento natural do litoral de Alagoas.

### Conteúdo
- **Título:** Descubra o Paraíso Quase Inexplorado
- **Conteúdo:** Localizado no coração da Costa dos Corais, bem do ladinho de Maragogi, Japaratinga é um refúgio natural formidável. Relaxe em meio a coqueirais, mergulhe em barreiras de corais e viva a tranquilidade que você e sua família merecem.

### Layout
- **Container Principal:** `height: 120vh` (para permitir área de scroll generosa). `position: relative`.
- **Imagem de Fundo Fixa:** Usando `clip-path: polygon(5% 10%, 95% 0%, 100% 90%, 0% 100%)` (Formato orgânico). Container com `clip-path` fixo e Imagem com parallax de translação no Y.
- **Card de Texto:** Flutua sobreposto à imagem (`position: absolute`, `right: 15%`, `top: 50%`, `transform: translateY(-50%)`), container com tamanho limitado a `450px`.

### Tipografia e Cores
- **Card Fundo:** `#FFFFFF` com 90% opacity e `backdrop-filter: blur(10px)`.
- **Título no Card:** `Playfair Display`, `color: #00362f`, `3rem`.
- **Texto e Sombras:** Texto em `#1A1A1A`. Sombra de elevação extrema `box-shadow: 0 40px 100px -20px rgba(0,54,47, 0.4)`.

### Interatividade e Animações
- **Move on Scroll:** A imagem principal sobe num ritmo de `15%` em relação ao scroll. O card branco sobe a uma velocidade diferente para gerar descolamento óptico (efeito Lenis-style visual parallax).

### Responsividade
- **Mobile:** Fundo perde o clip-path complexo. Altura reduz para `100vh`. O Card branco muda de posicionado absoluto para bloco padrão em bottom (`bottom: 0`, `width: 100%`) que sobe e se acopla.

---

## Seção 5: Promoções e Oportunidades

### Arquétipo e Constraints
- **Arquétipo:** Card Stack (Sticky Elements)
- **Constraints:** Off-Grid Element, Neumorphism suave
- **Justificativa:** Organizar três promoções de longo prazo onde o usuário não as ignora girando o scroll seco. O formato stack trava o usuário e o força a assimilar o valor.

### Conteúdo
- **Título da Seção:** Condições Exclusivas para as Suas Férias
- **Card 1:** **Fevereiro e Março (15% OFF)** - Curta dias únicos com desconto exclusivo na diária! Diárias a partir de R$ 2.549,14.
- **Card 2:** **Semana Santa 2026** - Vem curtir o feriadão de Páscoa no melhor All Inclusive. Diárias a partir de R$ 2.699,00.
- **Card 3:** **Mês de Abril 2026** - Sol garantido mesmo após o fim do verão. Diárias a partir de R$ 2.899,00.

### Layout
- **Wrapper Background:** `#00362f` (Quebra drástica de cor, forçando atenção).
- **Sticky Track:** Uma div mãe com `height: 300vh` (100vh por card).
- **Cards (Containers):** Cada card possui `position: sticky`, `top: 20vh`, empilhando-se um sobre o outro (Card 2 cobre o 1, Card 3 cobre o 2).

### Especificação de Design dos Cards Promocionais
- **Dimensões:** `max-width: 800px`, `margin: 0 auto`, `background: #FFFFFF`, `border-radius: 24px`, `padding: 4rem`.
- **Tipografia Interna:** Header do card em `#C39F6D` (Dourado de areia), Título da promo em `Playfair Display` `2.5rem` (`#1A1A1A`), Valor Ancora com peso extra no descritivo `bold` (Source Sans).
- **Sombras:** As bordas superiores empilhadas geram sombras escuras para projetar separação.

### Responsividade
- **Mobile:** Elimina-se o sticky complexo. Alternar para fluxo vertical em lista com gap de `2rem`, `padding: 2rem` em cada card, e arredondamento `16px`. Fundo do wrapper se mantém `#00362f`.

---

## Seção 6: FAQ

### Arquétipo e Constraints
- **Arquétipo:** Accordion / Rule of Thirds
- **Constraints:** Hover Underline, Split Revelador
- **Justificativa:** Perguntas devem ser enxutas mas lúdicas. O grid divide a seção 30% (título "Dúvidas Frequentes" travado na lateral) e 70% (linha das perguntas).

### Conteúdo
*Consultar original*:
1. O que está incluso no sistema All Inclusive Premium?
2. O resort fica de frente para a praia?
3. Há opções de relaxamento extra?

### Layout
- **Grid:** `grid-template-columns: 1fr 2fr` em um `max-width: 1400px`.
- **Lado Esquerdo:** `position: sticky`, `top: 15vh`. Título da seção, fonte gigante, quebra de respiro visual.
- **Lado Direito:** Lista de `<details>` e `<summary>`.

### Design Accordion
- **Linhas:** Border-bottom fina `1px solid rgba(0,0,0,0.1)`. Letra grande e serifa `Playfair Display`, `font-size: 1.8rem`, `padding: 2rem 0`.
- **Cores:** Fundo `#FDFBF7`, Texto `#1A1A1A`.
- **Expansão:** O texto de resposta (Source Sans 3) tem opacity zero, revelando num max-height animado de `0` para `500px` em `400ms`. O ícone direito (um símbolo "+" estilizado) rotaciona `45deg`.

### Responsividade
- **Mobile:** Transforma o Grid em 1 coluna (`1fr`). Remove efeito sticky do título. Fontes de pergunta reduzem para `1.5rem`.

---

## Seção 7: CTA Final

### Arquétipo e Constraints
- **Arquétipo:** Spotlight (Single Focus)
- **Constraints:** Video Loop Silenciado (na ausência, usar fundo dinâmico granulado), Gradient Mesh
- **Justificativa:** Encerrar a experiência em estado extasiante. Foco isolado 100% no clique primário, removendo todas as distrações.

### Conteúdo
- **Título:** Pronto para viver o paraíso?
- **Subheadline:** Não perca a chance de experimentar o melhor resort All Inclusive Premium do Brasil.
- **CTA:** Reservar Minha Estadia Agora

### Layout
- **Wrapper:** `min-height: 80vh`, `display: flex`, `flex-direction: column`, `align-items: center`, `justify-content: center`, `text-align: center`. `overflow: hidden`.
- **Fundo Interativo:** O wrapper usa `background-color: #004F46` mesclado a círculos virtuais com `filter: blur(100px)` e cores `#C39F6D` rotacionando (usando keyframes CSS). Isso simula um gradiente radiante premium (Gradient Mesh).

### Tipografia
- **Título:** `Playfair Display`, `5rem`, cor `#FFFFFF`, centralizado. Respiro de letter-spacing de `0.05em`.
- **Subheadline:** `Source Sans 3`, `1.4rem`, cor `#EAE2D6`, max-width de `600px`, `margin: 2rem auto 4rem`.

### Hover no Botão Final
- Botão sólido de areia `background: #C39F6D`, color `#1A1A1A`, mas no `hover` revela em sweep um botão em branco intenso `background: #FFFFFF` com sombra forte e flutuabilidade (`translateY(-5px)`).

### Responsividade
- **Mobile:** Clamp no título a `2.8rem`. Padding lateral `2rem`.

---

## Elementos de Craft & Micro-Interações Gerais (Aplicação Global)
1. **Cursor Magnético:** No desktop, ao passar o mouse perto dos botões do herói e CTA final, um script de cursor empurra suavemente o container do botão 10px em direção ao cursor para aumentar a área tátil aparente.
2. **Noise Texture (Grain Overlay):** Todo o body receberá uma div fixa transparente com pointer-events none rodando uma imagem base64 de white-noise CSS em block opacity 0.03, matando a lisura do vetor e dando textura orgânica "de papel" unificando a tela.
3. **Smooth Scroll Lenis:** Configurar uma engine de virtual scroll (como lenis.js / javascript custom) apenas modificando a velocidade linear de rolagem para dar o aspecto de fluidez densa e premium encontrada em agências premiadas.
4. **Quebras Assiétricas e Brilhos Íntimos:** Injetar linhas douradas CSS (`max-width: 1px`, `height 20%`) cruzando colunas invisíveis no layout para separar blocos de forma não convencional.
