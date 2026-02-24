## BUG-003 — Sistema permite criação de personagem com caracteres especiais no nome

**Módulo:** Criação de Personagem
**Severidade:** Média
**Prioridade:** Média
**Status:** Aberto
**Ambiente:** Cliente Desktop — Beta
**Data:** 24/02/2026
**Reportado por:** Daniel Chicotti

---

### Descrição

O sistema permite a criação de personagens com caracteres especiais no nome, sem realizar validação ou exibir mensagem de erro.

Isso pode causar inconsistência de dados e problemas de exibição ou compatibilidade em outras partes do sistema.

---

### Passos para reproduzir

1. Realizar login no sistema
2. Acessar a tela de criação de personagem
3. No campo "Nome do personagem", inserir: **AB@@@**
4. Clicar em **Criar**

---

### Resultado esperado

O sistema deve:

* Permitir apenas caracteres válidos (letras e números) **ou**
* Exibir mensagem de validação informando caracteres não permitidos

---

### Resultado obtido

O personagem é criado com caracteres especiais no nome, sem validação.

---

### Evidência

**Evidência:** [Visualizar GIF](../Evidencias/Criacao-Personagem/CT-CHAR-006_Fail.gif)
