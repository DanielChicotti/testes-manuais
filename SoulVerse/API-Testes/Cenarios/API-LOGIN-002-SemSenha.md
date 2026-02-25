# 🧪 API-LOGIN-002 — Login sem senha

---

## 📌 Módulo

Autenticação

## 🔎 Tipo de Teste

Funcional / Negativo

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
  "email": "eve.holt@reqres.in"
}
```

---

## ✅ Validações

* Status code = **400 Bad Request**
* Mensagem de erro retornada
* Estrutura JSON válida
* Tempo de resposta menor que **2 segundos**

---

## 🎯 Resultado Esperado

Sistema deve impedir o login e retornar mensagem informando que a senha não foi fornecida.

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
* Mensagem retornada: `"Missing password"`
* Estrutura da resposta válida
* Tempo de resposta dentro do esperado

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-LOGIN-002_Sucesso.png)
