# 🧪 API-USER-011 — DELETE Remover Usuário

---

## 📌 Módulo

Usuários

---

## 🔎 Tipo de Teste

Funcional / Remoção de Recurso (DELETE)

---

## ⚡ Prioridade

Alta

---

## 🌐 Endpoint

DELETE https://reqres.in/api/users/2

---

## 📄 Headers

- x-api-key: [oculto]

---

## 📦 Body (Request)

Não aplicável

---

## ✅ Validações

- Status code deve ser **204 No Content**
- Corpo da resposta deve estar vazio
- Tempo de resposta menor que **2 segundos**

---

## 🎯 Resultado Esperado

O endpoint deve remover o recurso informado e retornar status **204 No Content**, sem corpo na resposta.

---

# ▶ Execução do Teste

- **Status:** ✔ Pass
- **Data da execução:** 26/02/2026
- **Versão testada:** ReqRes API v1
- **Ambiente:** Postman
- **Executor:** Daniel Chicotti

---

## 📊 Resultado Obtido

- Status retornado: **204 No Content**
- Corpo da resposta vazio conforme esperado
- Tempo de resposta dentro do esperado

---

## 📝 Observação

A API mock retornou corretamente o status **204 No Content**, indicando sucesso na remoção.

Como se trata de uma API mock, o recurso não é realmente excluído de forma persistente.

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-USER-011_Sucesso.png)