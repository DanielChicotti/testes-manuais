# 🧪 API-USER-006 — GET Listagem de Usuários

---

## 📌 Módulo

Usuários

---

## 🔎 Tipo de Teste

Funcional / Validação de Consulta

---

## ⚡ Prioridade

Média

---

## 🌐 Endpoint

GET https://reqres.in/api/users?page=2

---

## 📄 Headers

x-api-key: [oculto]

---

## 📦 Body (Request)

Não aplicável

---

## ✅ Validações

- Status code deve ser **200 OK**
- Campo **page** presente na resposta
- Campo **per_page** presente
- Campo **total** presente
- Campo **data** deve ser um array
- Estrutura JSON válida
- Tempo de resposta menor que 2 segundos

---

## 🎯 Resultado Esperado

O endpoint deve retornar a lista paginada de usuários da página 2 com estrutura JSON válida.

---

## ▶ Execução do Teste

- **Status:** ✔ Pass  
- **Data da execução:** 26/02/2026  
- **Versão testada:** ReqRes API v1  
- **Ambiente:** Postman  
- **Executor:** Daniel Chicotti  

---

## 📊 Resultado Obtido

- Status retornado: **200 OK**
- Campo **page = 2**
- Campo **data** retornado contendo lista de usuários
- Estrutura JSON válida
- Tempo de resposta dentro do esperado

---

## 📝 Observação

A API retornou corretamente a lista paginada de usuários conforme esperado.  
Os campos obrigatórios da paginação foram validados com sucesso.

---

**Evidência:** [Visualizar PRINT](../Evidencias/API-USER-006_Sucesso.png)