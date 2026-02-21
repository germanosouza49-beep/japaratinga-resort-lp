---
description: gerar-design
---

# Instrucoes

Voce vai definir a identidade visual da landing page criando uma demonstracao real e impressionante: o Hero + a secao seguinte. Essa demonstracao vai guiar toda a criacao da pagina.

## ESCOPO DESTE WORKFLOW

Este workflow APENAS:
- Coleta informacoes sobre preferencias visuais do usuario
- Cria o Hero + primeira secao como demonstracao de design
- Estabelece a linguagem visual que guiara o resto da pagina

Este workflow NAO:
- Cria a pagina inteira
- Cria todas as secoes
- Cria o layout completo
- Executa nenhuma etapa seguinte

A pagina completa sera criada APENAS quando o usuario usar `/desenvolver` apos aprovar o `/gerar-layout`.

---

## Etapa 1: Coletar Informacoes

### Identificar a Pasta da Pagina

Primeiro, identifique em qual pasta voce esta trabalhando. O `/gerar-copy` ja deve ter criado a pasta da pagina (ex: `pagina-vendas/`).

Leia o arquivo `copy.md` dentro da pasta da pagina. Se nao existir, pergunte ao usuario.

### Versao Alternativa (se aplicavel)

Se o usuario pedir uma NOVA versao ou versao alternativa (ex: "quero mais claro", "faz outra versao"):

1. **Criar backup da versao atual:**
   - Verificar qual e o proximo numero de backup (se existe `_backup_v1/`, criar `_backup_v2/`)
   - Criar pasta `_backup_vN/` dentro da pasta da pagina
   - Mover `index.html` e `style.css` atuais para a pasta de backup

2. **Criar nova versao na raiz da pasta da pagina:**
   - O novo `index.html` e `style.css` ficam na raiz da pasta da pagina
   - Esta e a versao ATIVA

Exemplo:
```
pagina-vendas/
├── index.html          ← nova versao (ATIVA)
├── style.css
├── copy.md
├── _backup_v1/         ← versao anterior
│   ├── index.html
│   └── style.css
```

### Perguntar Referencias (OPCIONAL)

Faca esta pergunta ao usuario:

"Voce tem alguma referencia visual para este projeto?
- Sites que gosta do estilo
- Marcas com identidade visual similar
- Cores da marca / logo
- Prints de inspiracao

Pode mandar links, imagens, ou descrever. Se nao tiver, tudo bem - vou criar algo baseado na copy."

### Se o usuario NAO enviar referencias

Analise a copy e use senso comum para definir a direcao visual:
- Produto/servico premium → design sofisticado, espacos generosos
- Produto/servico acessivel → design amigavel, cores vibrantes
- Tecnologia → design moderno, clean
- Saude/bem-estar → design calmo, organico
- Educacao → design claro, confiavel
- Etc.

### Se o usuario enviar referencias

Use as referencias como guia principal para as escolhas de arquetipo, constraints e paleta de cores.

---

## Etapa 2: Consultar a Skill Creative Reference (OBRIGATORIO)

ANTES de fazer qualquer escolha criativa, LEIA o arquivo:
`.agent/skills/creative-reference/SKILL.md`

Este arquivo contem TODAS as opcoes disponiveis. Voce DEVE consulta-lo.

---

## Etapa 3: Fazer as Escolhas Criativas

Apos ler a skill correspondente (`creative-reference`), faca suas escolhas sem se basear em combinacoes obvias ou exemplos passados. 

### 1. Arquetipo, Constraints e Tipografia
- Escolha **UM Arquetipo** para o Hero.
- Escolha **2 ou mais Constraints** de categorias DIFERENTES.
- Escolha um **Font Pairing** da lista curada na skill.

**PROIBIDO DAR EXEMPLOS NA DECLARACAO:** Apenas informe os nomes oficiais do que escolheu na skill, por exemplo: "Hero: [Seu Arquetipo Escolhido]", "Constraints: [Suas Escolhas]", "Fontes: [Suas Escolhas]".

**FONTES E PADROES PROIBIDOS:**
- NUNCA use as combinacoes overused listadas na skill (ex: Montserrat/Open Sans, Inter/Inter).
- NUNCA use layouts genericos (Hero centralizado obvio, 3 cards lado a lado, visual padrao de SaaS).

---

## Etapa 4: Criar a Demonstracao (O FATOR "WOW")

Apos definir arquetipo e constraints, crie o Hero + primeira secao no `index.html` e `style.css`.
O objetivo central desta etapa e criar um design **ABSURDAMENTE LOUCO e de tirar o folego**, extremamente complexo e com muita personalidade estetica. Destaque-se de templates. ESQUECA totalmente o padrao SAAS generico gerado por IA.

### 1. Visuais de Impacto (A Abstracao Cria o Premium)
NUNCA dependa de gerar imagens via IA (elas sao 1x1 e sem fundo transparente, limitando o design). Em vez disso, construa a base visual explorando livremente **CSS/JS Avancado**:

- **Fundos Estruturais Unicos:** Construa suas proprias texturas, composicoes de fundo, filtros e padroes via CSS. Use a interatividade, sombras densas ou iluminacoes pontuais para criar profundidade extrema.
- **Dinamismo Interativo Lider: ** Traga movimento e responsividade as interacoes do usuario usando ferramentas visuais modernas (Canvas, WebGL ou manipuladores DOM avancados) como o centro da experiencia, e nao apenas decorações.
- **Imagens Contextuais Realistas:** Onde pessoas, cenarios ou objetos reais forem indispensaveis para simular um layout premium concluído, crie os frames fisicos no CSS e puxe fotos com `object-fit` direto de bancos de imagens por URL (formatadas pela CDN). NUNCA deixe espacos vazios, cinzas ou placeholders textuais.

### 2. Principios de Execucao (Siga o Conceito, Nao Copie)

**Tipografia:**
- A hierarquia deve ser dramatica. Contraste de pesos extremo e tipografia massiva. Ouse na distorcao ou no tamanho absoluto das Headlines.

**Layout e Composicao:**
- Quebre a monotonia. Explore sobreposicoes ousadas, quebras de alinhamento tradicionais e remocao de barreiras laterais. Espaco negativo e sua principal arma, use-o com agressividade, nao com recato.

**Cor e Textura:**
- A paleta deve gritar a personalidade do briefing. Crie tensoes visuais impensaveis com gradacoes, fusões e esteticas marcantes em vez de depender de cores solidas simples e sem vida.

### 3. Regras de Performance Preventiva (MANDATORIO)

Mesmo o design mais espetacular precisa respeitar core web vitals durante a renderizacao da primeira dobra:

- **Imagens via CDN:** OBRIGATORIO formatar **qualquer imagem** com a CDN local: `/.netlify/images?url=URL_DA_IMAGEM&w=1200&q=80`. Imagens do Hero DEGUEM ter `loading="eager"`.
- **Fontes Sincronizadas:** O carregamento da tipografia deve ocorrer sem gambiarras. Use `preconnect` e `display=swap`. NUNCA use `media="print"` com `onload` sem CSS Critico.
- **Zero Animacao de Entrada (Sem CLS no Hero):** **NUNCA** colodaque pseudo-estados invisiveis (ex: `opacity: 0`, `AOS fade-up`, `transform`) na chegada do Hero. Ele DEVE estar visivel 100% instantaneamente no first paint. Guarde as animacoes para movimentacoes *pos-load*, transicoes e efeitos de scroll.
- **Scripts Dinamicos sempre Lazy:** O uso macico de bibliotecas pesadas de efeito estavel (GSAP, Three.js, particulas) **NUNCA** deve usar `<script src="...">` inicial bloqueante.
  - **OBRIGATORIO:** Inicie modulos ES avulsos usando `IntersectionObserver` aliado a **Imports Dinamicos (`import()`)** apenas quando o elemento e alcancado ou apo o load/idle.

---

## Etapa 5: Apresentar ao Usuario

Apos criar, informe ao usuario:

1. O que foi criado (hero + primeira secao)
2. Qual arquetipo e constraints usados
3. Qual font pairing escolhido
4. Como visualizar: use a skill `local-server` ou `/visualizar-local`
5. Peca feedback: "O que achou? Quer ajustar algo antes de continuarmos?"

---

## Importante

- Esta etapa NAO cria a pagina inteira, apenas Hero + 1 secao
- O objetivo e estabelecer a linguagem visual
- O usuario deve aprovar antes de prosseguir para `/gerar-layout`
- Se o usuario pedir ajustes, faca quantas iteracoes forem necessarias
- Use fontes do Google Fonts (adicione os links necessarios)
- Hero sem animacao de ENTRADA, mas com animacao pos-carregamento

---

## Ao Finalizar

Apos criar o Hero + primeira secao:

1. Informe o que foi criado
2. Explique as escolhas de design (arquetipo + constraints + font pairing)
3. Forneca o link para visualizar (use a skill `local-server` para obter a URL correta) (OBRIGATÓRIO)
4. Pergunte se quer ajustar algo
5. Sugira a proxima etapa: "Quando o design estiver aprovado, use `/gerar-layout` para criar a especificacao detalhada de todas as secoes."
6. **PARE COMPLETAMENTE**

---

## IMPORTANTE: Regras de Comportamento

- NUNCA continue para a proxima etapa automaticamente
- NUNCA crie mais secoes alem do Hero + primeira secao
- Se o usuario aprovar ("ok", "aprovado", etc.), apenas confirme e sugira `/gerar-layout`
- AGUARDE o usuario digitar o proximo comando explicitamente