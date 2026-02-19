# BUG-001 — Login bloqueado sem mensagem quando servidor está offline

**Módulo:** Login

**Severidade:** Média

**Prioridade:** Média

**Status:** Aberto

**Ambiente:** Cliente Desktop — Beta

**Data:** 18/02/2026

**Reportado por:** Daniel Chicotti

---

## Descrição

Quando o servidor está offline, o sistema impede o login, porém **não exibe nenhuma mensagem informando ao usuário que o servidor está indisponível**.

---

## Passos para reproduzir

1. Deixar o servidor offline
2. Abrir o cliente
3. Informar usuário e senha válidos
4. Clicar em **Entrar**

---

## Resultado esperado

O sistema deve exibir uma mensagem, por exemplo:

> "Servidor offline. Tente novamente mais tarde."

---

## Resultado obtido

O login é bloqueado sem exibir qualquer mensagem ao usuário.

---

## Impacto

O usuário não entende o motivo da falha, podendo acreditar que:

* Digitou dados incorretos
* O sistema está travado
* O cliente apresentou erro

---

## Evidência

Evidência: [Visualizar GIF](../Evidencias/Login/CT-LOG-007_Fail.gif)
