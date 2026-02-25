# 🧪 API-LOGIN-001 — Login com credenciais válidas

---

## 📌 Módulo

Autenticação

## 🔎 Tipo de Teste

Funcional

## ⚡ Prioridade

Alta

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
{
  "email": "eve.holt@reqres.in",
  "password": "cityslicka"
}
```

---

## ✅ Validações

* Status code = **200 OK**
* Campo **token** retornado na resposta
* Estrutura JSON válida
* Tempo de resposta menor que **2 segundos**

---

## 🎯 Resultado Esperado

Usuário autenticado com sucesso e retorno de token de acesso.

---

# ▶ Execução do Teste

* **Status:** ✔ Pass
* **Data da execução:** 25/02/2026
* **Versão testada:** ReqRes API v1
* **Ambiente:** Postman
* **Executor:** Daniel Chicotti

---

## 📊 Resultado Obtido

* Status retornado: **200 OK**
* Token recebido com sucesso
* Tempo de resposta dentro do esperado

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-LOGIN-001_Sucesso.png)
