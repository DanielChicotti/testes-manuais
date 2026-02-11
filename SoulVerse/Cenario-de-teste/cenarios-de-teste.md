# 🧩 Cenários de Teste – SoulVerse (Testes Manuais)

---

## 📌 Módulo: Cadastro de Conta

### CT-CAD-001 — Cadastro com dados válidos
- **Pré-condição:** Usuário não cadastrado anteriormente
- **Dados de teste:**  
  - Usuário: `Teste1`  
  - Email: `Teste1@gmail.com`  
  - Senha: `123456`  
  - Confirmar senha: `123456`
- **Passos:**
  1. Acessar a tela de cadastro
  2. Preencher Usuário, Email, Senha e Confirmar senha com dados válidos
  3. Clicar em **Registrar**
- **Resultado esperado:** Cadastro realizado com sucesso (exibir mensagem de sucesso: "Your account has been created!")

---

### CT-CAD-002 — Tentar registrar com campos vazios
- **Pré-condição:** Estar na tela de cadastro
- **Passos:**
  1. Deixar todos os campos vazios
  2. Clicar em **Registrar**
- **Resultado esperado:** Sistema impede o cadastro e exibe mensagens de validação para campos obrigatórios

---

### CT-CAD-003 — Usuário com menos de 3 letras
- **Dados de teste:** Usuário: `AB`
- **Passos:**
  1. Preencher todos os campos corretamente, exceto Usuário com menos de 3 letras
  2. Clicar em **Registrar**
- **Resultado esperado:** Sistema impede o cadastro e informa que o Usuário deve ter no mínimo 3 letras

---

### CT-CAD-004 — Senha com menos de 3 caracteres
- **Dados de teste:** Senha: `ab`
- **Passos:**
  1. Preencher todos os campos corretamente, exceto Senha com menos de 3 caracteres
  2. Clicar em **Registrar**
- **Resultado esperado:** Sistema impede o cadastro e informa que a senha deve ter no mínimo 3 caracteres

---

### CT-CAD-005 — Confirmar senha diferente da senha
- **Dados de teste:**  
  - Senha: `abc`  
  - Confirmar senha: `abcd`
- **Passos:**
  1. Preencher todos os campos
  2. Informar Senha e Confirmar senha diferentes
  3. Clicar em **Registrar**
- **Resultado esperado:** Sistema impede o cadastro e exibe mensagem informando que as senhas não coincidem

---

### CT-CAD-006 — Email em formato inválido
- **Dados de teste:** Email: `danielqa.com`
- **Passos:**
  1. Preencher os campos com Email inválido
  2. Clicar em **Registrar**
- **Resultado esperado:** Sistema impede o cadastro e informa que o Email é inválido

---

### CT-CAD-007 — Verificar se o botão Registrar valida antes de enviar
- **Objetivo:** Garantir que ao clicar em Registrar o sistema valida campos obrigatórios e regras mínimas
- **Passos:**
  1. Preencher apenas 1 ou 2 campos
  2. Clicar em **Registrar**
- **Resultado esperado:** Sistema não conclui cadastro e aponta exatamente quais campos/regas faltam
