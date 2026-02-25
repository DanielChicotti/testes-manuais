# 🧪 API-LOGIN-006 — Método HTTP inválido (GET)

---

## 📌 Módulo

Autenticação

## 🔎 Tipo de Teste

Funcional / Negativo / Validação de Método HTTP

## ⚡ Prioridade

Média

---

## 🌐 Endpoint

`GET https://reqres.in/api/login`

---

## 📄 Headers

* x-api-key: [oculto]

---

## 📦 Body (Request)

Não aplicável

---

## ✅ Validações

* A autenticação **não deve ser realizada via método GET**
* Nenhum **token** deve ser retornado
* A resposta deve conter estrutura JSON válida
* Tempo de resposta menor que **2 segundos**

---

## 🎯 Resultado Esperado

O endpoint não deve permitir autenticação utilizando o método GET e não deve retornar token de acesso.

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
* Nenhum token retornado
* A resposta contém dados paginados (lista de recursos)
* O endpoint não executou autenticação via método GET
* Tempo de resposta dentro do esperado

---

## 📝 Observação

A API ReqRes é um serviço mock e não valida métodos HTTP de forma rígida.
Embora o status retornado seja **200 OK**, o endpoint não realizou autenticação nem retornou token.
O comportamento foi considerado conforme esperado, pois o método GET não executa a operação de login.

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-LOGIN-005_Sucesso.png)
