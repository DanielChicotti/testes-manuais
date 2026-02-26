# 🧪 API-USER-007 — GET Usuário Inexistente

---

## 📌 Módulo

Usuários

---

## 🔎 Tipo de Teste

Funcional / Negativo / Validação de Recurso Inexistente

---

## ⚡ Prioridade

Alta

---

## 🌐 Endpoint

GET https://reqres.in/api/users/999

---

## 📄 Headers

x-api-key: [oculto]

---

## 📦 Body (Request)

Não aplicável

---

## ✅ Validações

- Status code deve ser **404 Not Found**
- Corpo da resposta deve estar vazio
- API não deve retornar dados de usuário
- Tempo de resposta menor que 2 segundos

---

## 🎯 Resultado Esperado

O endpoint deve retornar **404 Not Found** ao consultar um usuário inexistente e não deve retornar dados no corpo da resposta.

---

## ▶ Execução do Teste

- **Status:** ✔ Pass  
- **Data da execução:** 26/02/2026  
- **Versão testada:** ReqRes API v1  
- **Ambiente:** Postman  
- **Executor:** Daniel Chicotti  

---

## 📊 Resultado Obtido

- Status retornado: **404 Not Found**
- Corpo da resposta vazio
- Nenhum dado de usuário retornado
- Tempo de resposta dentro do esperado

---

## 📝 Observação

A API tratou corretamente a requisição para um recurso inexistente, retornando o status apropriado (404) conforme boas práticas REST.

Este teste valida o comportamento esperado para consulta de recursos inválidos ou inexistentes.

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-USER-007_Sucesso.png)