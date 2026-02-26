# 🧪 Testes de API – Soulverse

Este diretório contém os testes de API realizados para validação de comportamentos de backend simulados no projeto **Soulverse**.

Os testes foram executados utilizando **Postman** contra a API pública de testes **ReqRes**.

---

## 🎯 Objetivo

Validar o comportamento do endpoint de autenticação (`/login`), cobrindo:

- Cenários positivos
- Cenários negativos
- Validação de status codes
- Estrutura da resposta JSON
- Tempo de resposta
- Validação de método HTTP

O foco é demonstrar aplicação de boas práticas de QA em testes de API REST.

---

## 🌐 API Utilizada

Base URL: https://reqres.in/api


Endpoint testado: POST /login


---

## 📂 Estrutura da Pasta

API-Testes/

├── Cenarios/ → Documentação detalhada de cada teste

├── Evidencias/ → Prints das execuções no Postman

├── Colecao-Postman/ → Export da coleção Postman

└── README.md


---

## 🧩 Cenários Implementados

### 🔐 Autenticação – Login

| ID | Cenário | Tipo de Teste | Status |
|----|----------|---------------|--------|
| API-LOGIN-001 | Login com credenciais válidas | Funcional | ✔ Pass |
| API-LOGIN-002 | Login sem senha | Negativo | ✔ Pass |
| API-LOGIN-003 | Login com email inválido | Negativo | ✔ Pass |
| API-LOGIN-004 | Login com body vazio | Negativo | ✔ Pass |
| API-LOGIN-005 | Método HTTP inválido (GET) | Negativo / Contrato HTTP | ✔ Pass |

---

### 👤 Usuários – CRUD

| ID | Cenário | Tipo de Teste | Status |
|----|----------|---------------|--------|
| API-USER-006 | GET Listagem de usuários | Funcional | ✔ Pass |
| API-USER-007 | GET Usuário inexistente | Negativo | ✔ Pass |
| API-USER-008 | POST Criar usuário | Funcional | ✔ Pass |
| API-USER-009 | PUT Atualizar usuário | Funcional | ✔ Pass |
| API-USER-010 | PATCH Atualização parcial | Funcional | ✔ Pass |
| API-USER-011 | DELETE Remover usuário | Funcional | ✔ Pass |

---

## 📋 Padrão de Documentação

Cada cenário contém:

- Módulo
- Tipo de Teste
- Prioridade
- Endpoint
- Headers
- Body (Request)
- Validações
- Resultado Esperado
- Execução do Teste
- Resultado Obtido
- Evidência

---

## 📊 Evidências

As evidências estão organizadas na pasta: API-Testes/Evidencias/


Cada print mostra:
- Método utilizado
- Endpoint
- Status retornado
- Body da resposta

---

## 📦 Coleção Postman

A coleção utilizada está disponível em: API-Testes/Colecao-Postman/Soulverse_API.postman_collection.json


### Como executar:

1. Abrir o Postman
2. Clicar em **Import**
3. Selecionar o arquivo `.json`
4. Executar os requests individualmente
5. Validar status code e resposta JSON

---

## 🔍 Validações Realizadas

- Status Code esperado (200 / 400)
- Presença ou ausência de token
- Mensagem de erro correta
- Estrutura JSON válida
- Tempo de resposta inferior a 2 segundos
- Comportamento correto para método HTTP não suportado

---

## 📌 Observações Técnicas

- A API ReqRes é um serviço mock, não valida autenticação real.
- O teste de senha incorreta pode retornar 200 se o email for válido.
- O método GET não executa autenticação, apesar de retornar status 200.
- O comportamento foi analisado com base no contrato REST esperado.

---

## 🛠 Ferramentas Utilizadas

| Ferramenta | Finalidade |
|------------|------------|
| Postman | Execução dos testes de API |
| ReqRes | API mock pública |
| GitHub | Versionamento e organização |
| VS Code | Estruturação da documentação |

---

## 🚀 Evoluções Futuras

Possíveis melhorias:

- Validação de schema JSON
- Scripts automáticos com `pm.test`
- Execução via Newman (CLI)
- Integração com pipeline CI/CD
- Testes com autenticação real e token Bearer

---

## 👨‍💻 Autor

Daniel Chicotti  
QA Manual | Testes de Software | Game Testing  

Projeto desenvolvido com foco em boas práticas profissionais para portfólio de QA Júnior.







