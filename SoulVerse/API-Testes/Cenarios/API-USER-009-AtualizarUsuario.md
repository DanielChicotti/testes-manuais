# 🧪 API-USER-009 — PUT Atualizar Usuário

---

## 📌 Módulo

Usuários

---

## 🔎 Tipo de Teste

Funcional / Atualização Completa de Recurso (PUT)

---

## ⚡ Prioridade

Alta

---

## 🌐 Endpoint

PUT https://reqres.in/api/users/2

---

## 📄 Headers

- Content-Type: application/json  
- x-api-key: [oculto]

---

## 📦 Body (Request)

```json
{
  "name": "Ichigo Kurosaki",
  "job": "Captain"
}
```

---

## ✅ Validações

- Status code deve ser **200 OK**
- Campo **updatedAt** deve ser retornado
- Dados enviados devem estar refletidos na resposta
- Estrutura JSON válida
- Tempo de resposta menor que **2 segundos**

---

## 🎯 Resultado Esperado

O endpoint deve atualizar completamente o recurso informado e retornar status **200 OK**, incluindo o campo **updatedAt** com o timestamp da modificação.

---

# ▶ Execução do Teste

- **Status:** ✔ Pass
- **Data da execução:** 26/02/2026
- **Versão testada:** ReqRes API v1
- **Ambiente:** Postman
- **Executor:** Daniel Chicotti

---

## 📊 Resultado Obtido

- Status retornado: **200 OK**
- Campo **updatedAt** retornado com timestamp
- Dados enviados refletidos corretamente na resposta
- Estrutura JSON válida
- Tempo de resposta dentro do esperado

---

## 📝 Observação

A API mock processou corretamente a requisição de atualização via método PUT.  
O campo `updatedAt` confirma que a modificação foi registrada.

Como se trata de uma API mock, a alteração não é persistida permanentemente.

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-USER-009_Sucesso.png)