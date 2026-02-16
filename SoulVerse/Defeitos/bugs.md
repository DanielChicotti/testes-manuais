# Registro de Defeitos — Soulverse

---

## BUG-001 — Desconexão ao inserir nome de personagem muito longo

**Módulo:** Criação de Personagem
**Severidade:** Alta
**Prioridade:** Alta
**Status:** Aberto
**Ambiente:** Cliente Desktop — Beta
**Data:** 16/02/2026
**Reportado por:** Daniel Chicotti

---

### Descrição

Ao inserir um nome de personagem com muitos caracteres (sem limite definido), o sistema desconecta o usuário do jogo.

---

### Passos para reproduzir

1. Realizar login no sistema
2. Acessar a tela de criação de personagem
3. No campo "Nome do personagem", inserir um texto muito longo (ex: mais de 50 caracteres)
4. Clicar em **Criar**

---

### Resultado esperado

O sistema deve:

* Impedir a inserção acima do limite permitido **ou**
* Exibir mensagem de validação informando o limite de caracteres

---

### Resultado obtido

O cliente é desconectado do servidor.

---

### Evidência
