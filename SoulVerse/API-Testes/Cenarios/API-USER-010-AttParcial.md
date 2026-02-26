# 🧪 API-USER-010 — PATCH Atualização Parcial de Usuário

---

## 📌 Módulo

Usuários

---

## 🔎 Tipo de Teste

Funcional / Atualização Parcial de Recurso (PATCH)

---

## ⚡ Prioridade

Alta

---

## 🌐 Endpoint

PATCH https://reqres.in/api/users/2

---

## 📄 Headers

- Content-Type: application/json  
- x-api-key: [oculto]

---

## 📦 Body (Request)

```json
{
  "job": "Bankai Master"
}
```

---

## ✅ Validações

- Status code deve ser **200 OK**
- Campo **updatedAt** deve ser retornado
- Apenas o campo enviado deve ser alterado
- Estrutura JSON válida
- Tempo de resposta menor que **2 segundos**

---

## 🎯 Resultado Esperado

O endpoint deve atualizar parcialmente o recurso informado e retornar status **200 OK**, incluindo o campo **updatedAt** com o timestamp da modificação.

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
- Campo enviado foi atualizado corretamente
- Estrutura JSON válida
- Tempo de resposta dentro do esperado

---

## 📝 Observação

A API mock processou corretamente a requisição via método PATCH, atualizando apenas o campo informado na requisição.

Como se trata de uma API mock, a alteração não é persistida permanentemente.

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-USER-010_Sucesso.png)