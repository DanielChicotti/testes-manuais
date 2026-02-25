# 🧪 API-LOGIN-005 — Login com body vazio

---

## 📌 Módulo

Autenticação

## 🔎 Tipo de Teste

Funcional / Negativo / Validação de Entrada

## ⚡ Prioridade

Média

---

## 🌐 Endpoint

`POST https://reqres.in/api/login`

---

## 📄 Headers

* Content-Type: application/json
* x-api-key: [oculto]

---

## 📦 Body (Request)

```json
{}
```

---

## ✅ Validações

* Status code = **400 Bad Request**
* Mensagem de erro retornada
* API não deve retornar token

---

## 🎯 Resultado Esperado

Sistema deve rejeitar a requisição por ausência de dados obrigatórios.

---

# ▶ Execução do Teste

* **Status:** ✔ Pass
* **Data da execução:** 25/02/2026
* **Versão testada:** ReqRes API v1
* **Ambiente:** Postman
* **Executor:** Daniel Chicotti

---

## 📊 Resultado Obtido

* Status retornado: **400 Bad Request**
* Mensagem retornada: `"error": "Missing email or username"`
* Nenhum token gerado

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-LOGIN-004_Sucesso.png)
