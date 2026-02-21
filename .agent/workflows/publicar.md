---
description: publicar
---

# Instrucoes

O usuario quer fazer deploy para producao. Use a skill `deploy` que contem toda a logica necessaria.

## Processo

1. **Leia a skill `deploy`** (`.agent/skills/deploy/SKILL.md`) e siga as instrucoes detalhadas
2. A skill cobre: primeiro deploy, atualizacoes, cenarios A/B/C/D, troubleshooting, e verificacoes pre-deploy
3. **Antes de fazer push**, verifique se o redirect da home esta configurado no `netlify.toml` (ver secao abaixo)

## REGRA DE OURO: Autonomia Total

**VOCE DEVE fazer tudo sozinho. NUNCA peca para o usuario executar comandos manualmente.**

Quando um comando for interativo (como `netlify init`), VOCE deve:
1. Executar o comando
2. Enviar os inputs necessarios para responder aos prompts
3. Continuar ate concluir

Se algo falhar, tente resolver. So peca ajuda ao usuario se realmente nao conseguir resolver sozinho.

## Verificar Redirect da Home

Antes de fazer o push, verifique no `netlify.toml` se existe um redirect da home (`from = "/"`).

Se **NÃO** existir:
1. Identifique a página principal do projeto (a pasta com `index.html` que NÃO seja o template da raiz)
2. Adicione o redirect no `netlify.toml`:
```toml
# Redirect da home para a página principal
[[redirects]]
  from = "/"
  to = "/nome-da-pagina/"
  status = 302
  force = true
```
3. Inclua esta alteração no commit de deploy

Isso evita que o visitante veja uma página em branco ao acessar a raiz do site.

## Ao Finalizar

Apos o deploy:

1. Informe que o site esta no ar
2. Identifique a página principal pelo redirect `from = "/"` no `netlify.toml` (campo `to`)
3. Forneça o link DIRETO para a página principal (ex: `https://nome.netlify.app/pagina-vendas/`). NUNCA forneça apenas o link raiz — a raiz contém apenas o template base
4. **PARE COMPLETAMENTE E AGUARDE**

## IMPORTANTE: Regras de Comportamento

- Apos o deploy, PARE e aguarde instrucao do usuario
- NUNCA continue fazendo alteracoes automaticamente
- NUNCA rode outros workflows automaticamente
