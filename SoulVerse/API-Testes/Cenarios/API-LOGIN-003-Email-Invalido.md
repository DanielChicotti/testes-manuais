# 🧪 API-LOGIN-003 — Login com Email Inválido

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
  "email": "teste@invalido.com",
  "password": "123456"
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

Sistema deve impedir o login e retornar mensagem informando falha na autenticação.

Observação: A API de teste ReqRes não valida o valor da senha, apenas a presença do campo, por isso o teste foi feito com email inválido.

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
* Mensagem retornada: `"user not found"`
* Tempo de resposta dentro do esperado

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-LOGIN-003_Sucesso.png)
