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

Execução do Teste

- Status: ✔ Pass

- Data da execução: 16/02/2026

- Versão testada: Beta

- Ambiente: Cliente Desktop

- Executor: Daniel Chicotti

**Evidência:** [Visualizar GIF](../Evidencias/Cadastro/CT-CAD-001_Sucesso.gif)

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


## 📌 Módulo: Login

### CT-LOG-001 — Login com credenciais válidas (servidor Online)
- **Pré-condição:** Server status = **Online** e usuário cadastrado
- **Dados de teste:**
  - Usuário: `Teste1`
  - Senha: `123456`
- **Passos:**
  1. Abrir o cliente do jogo
  2. Confirmar que o **Server status** está **Online**
  3. Informar Usuário e Senha válidos
  4. Clicar em **Entrar**
- **Resultado esperado:** Login realizado com sucesso e redirecionar para a próxima tela (ex: seleção de personagem)

---

### CT-LOG-002 — Tentar entrar com campos vazios
- **Pré-condição:** Server status = **Online**
- **Passos:**
  1. Deixar Usuário e Senha vazios
  2. Clicar em **Entrar**
- **Resultado esperado:** Sistema impede login e exibe validação de campos obrigatórios

---

### CT-LOG-003 — Usuário com menos de 3 letras
- **Pré-condição:** Server status = **Online**
- **Dados de teste:** Usuário: `ab`
- **Passos:**
  1. Preencher Senha com valor válido
  2. Informar Usuário com menos de 3 letras
  3. Clicar em **Entrar**
- **Resultado esperado:** Sistema impede login e informa regra de mínimo 3 letras para Usuário

---

### CT-LOG-004 — Senha com menos de 3 caracteres
- **Pré-condição:** Server status = **Online**
- **Dados de teste:** Senha: `ab`
- **Passos:**
  1. Preencher Usuário com valor válido
  2. Informar Senha com menos de 3 caracteres
  3. Clicar em **Entrar**
- **Resultado esperado:** Sistema impede login e informa regra de mínimo 3 caracteres para Senha

---

### CT-LOG-005 — Usuário inexistente
- **Pré-condição:** Server status = **Online**
- **Dados de teste:** Usuário: `usuario_que_nao_existe`
- **Passos:**
  1. Informar usuário inexistente e uma senha qualquer
  2. Clicar em **Entrar**
- **Resultado esperado:** Sistema não loga e exibe mensagem de credenciais inválidas: "That account name does not exist."

---

### CT-LOG-006 — Senha incorreta para usuário existente
- **Pré-condição:** Server status = **Online** e usuário cadastrado
- **Passos:**
  1. Informar Usuário válido
  2. Informar Senha incorreta
  3. Clicar em **Entrar**
- **Resultado esperado:** Sistema não loga e exibe mensagem de erro: "You've entered an incorrect password."

---

### CT-LOG-007 — Tentar logar com servidor Offline
- **Pré-condição:** Server status = **Offline**
- **Passos:**
  1. Abrir o cliente
  2. Confirmar que o Server status está **Offline**
  3. Informar Usuário e Senha válidos
  4. Clicar em **Entrar**
- **Resultado esperado:** Sistema impede login e informa que o servidor está indisponível/offline

---

### CT-LOG-008 — Link “Clique aqui” leva para cadastro
- **Pré-condição:** Estar na tela de login
- **Passos:**
  1. Clicar em **Clique aqui** (Ainda não possui conta?)
- **Resultado esperado:** Abrir a tela de cadastro/registro

---

### CT-LOG-009 — Botão “X” fecha a janela de login
- **Pré-condição:** Janela de login aberta
- **Passos:**
  1. Clicar no botão **X**
- **Resultado esperado:** Janela de login é fechada (sair do jogo)

---

## 📌 Módulo: Seleção de Personagem

### CT-SEL-001 — Exibir slots vazios corretamente
- **Pré-condição:** Login realizado com conta sem personagens criados
- **Passos:**
  1. Realizar login com sucesso
- **Resultado esperado:**
  - Exibir 8 slots
  - Cada slot deve mostrar "Slot de Personagem Vazio"

---

### CT-SEL-002 — Botão Criar redireciona para criação
- **Pré-condição:** Estar na tela de seleção
- **Passos:**
  1. Clicar em "Criar"
- **Resultado esperado:**
  - Sistema deve abrir tela de criação de personagem

---

### CT-SEL-003 — Botão Voltar retorna para tela anterior
- **Pré-condição:** Estar na tela de seleção
- **Passos:**
  1. Clicar em "Voltar"
- **Resultado esperado:**
  - Retornar para tela anterior (login ou menu principal)

---

### CT-SEL-004 — Scroll lateral funciona corretamente
- **Pré-condição:** Tela aberta
- **Passos:**
  1. Utilizar a barra de rolagem
- **Resultado esperado:**
  - Rolagem suave
  - Nenhum travamento visual
