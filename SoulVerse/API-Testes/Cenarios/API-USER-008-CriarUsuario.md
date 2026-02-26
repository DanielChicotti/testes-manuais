# 🧪 API-USER-008 — POST Criar Usuário

---

## 📌 Módulo

Usuários

---

## 🔎 Tipo de Teste

Funcional / Criação de Recurso (POST)

---

## ⚡ Prioridade

Alta

---

## 🌐 Endpoint

POST https://reqres.in/api/users

---

## 📄 Headers

- Content-Type: application/json  
- x-api-key: [oculto]

---

## 📦 Body (Request)

```json
{
  "name": "Ichigo",
  "job": "Shinigami"
}
```

---

## ✅ Validações

- Status code deve ser **201 Created**
- Campo **id** deve ser retornado na resposta
- Campo **createdAt** deve ser retornado
- Estrutura JSON válida
- Tempo de resposta menor que **2 segundos**

---

## 🎯 Resultado Esperado

O endpoint deve criar um novo usuário e retornar status **201 Created**, incluindo um **id gerado automaticamente** e o timestamp de criação (**createdAt**).

---

# ▶ Execução do Teste

- **Status:** ✔ Pass
- **Data da execução:** 26/02/2026
- **Versão testada:** ReqRes API v1
- **Ambiente:** Postman
- **Executor:** Daniel Chicotti

---

## 📊 Resultado Obtido

- Status retornado: **201 Created**
- Campo **id** retornado com valor gerado automaticamente
- Campo **createdAt** retornado com timestamp
- Estrutura JSON válida
- Tempo de resposta dentro do esperado

---

## 📝 Observação

A API mock criou o recurso corretamente e retornou os campos esperados.  
O campo `id` é gerado dinamicamente pelo serviço de teste.  
Como se trata de uma API mock, o recurso não é persistido permanentemente.

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-USER-008_Sucesso.png)