# 🔍 Análise de Requisitos – SoulVerse (Testes Manuais)

---

## 📌 1. Visão Geral

O SoulVerse é um MMORPG 2D estilo pixel art inspirado no universo de BLEACH.  
Este documento descreve os requisitos iniciais para os fluxos essenciais do jogo, com foco em **autenticação** e **gerenciamento de personagens**, que são a base para acessar os demais sistemas (dungeons, quests, mercado, cartas, guildas etc.).

---

## 👤 2. Perfis de Usuário

- **Jogador (Player):** usuário que cria conta, realiza login e joga com personagens.

---

## ✅ 3. Requisitos Funcionais (RF)

### RF-01 — Cadastro de Conta
**Descrição:** O sistema deve permitir que o usuário crie uma conta.

**Campos mínimos esperados (exemplo):**
- Usuário
- E-mail
- Senha
- Confirmar senha

**Regras:**
- Todos os campos são obrigatórios.
- **Usuário** deve ter no mínimo **3 letras**.
- **Senha** deve ter no mínimo **3 caracteres**.
- **Confirmar senha** deve ser igual à **Senha**.
- **Email** deve ter formato válido.
- Ao clicar no botão **Registrar**, o sistema deve validar os campos e concluir o cadastro quando estiver tudo correto.

**Critérios de aceite:**
- Com dados válidos, exibir confirmação de cadastro e permitir seguir para login.
- Com dados inválidos, bloquear o cadastro e mostrar mensagem clara indicando o problema.

---

### RF-02 — Login
**Descrição:** O sistema deve autenticar o usuário e permitir acesso ao jogo.

**Campos:**
- Usuário
- Senha

**Pré-condição:**
- **Server status deve estar Online** (caso esteja Offline, o login não deve prosseguir)

**Regras:**
- Campos Usuário e Senha são obrigatórios.
- Usuário deve ter no mínimo **3 letras**.
- Senha deve ter no mínimo **3 caracteres**.
- Ao clicar em **Entrar**, o sistema deve validar os campos e autenticar o usuário.

- Com credenciais válidas e servidor Online, o usuário deve acessar a próxima tela (ex: seleção de personagem).
- Com credenciais inválidas, exibir mensagem clara sem travar o cliente.
- Com servidor Offline, impedir login e informar indisponibilidade do servidor.

---

### RF-03 — Logout (se existir)
**Descrição:** O sistema deve permitir sair da conta.

**Critérios de aceite:**
- Encerrar sessão e retornar à tela de login.
- Evitar acesso a telas internas sem autenticação.

---

### RF-04 — Seleção de Personagem
**Descrição:** O sistema deve exibir a lista de personagens do usuário e permitir selecionar um.

**Regras:**
- Exibir lista (ou estado “sem personagens”).
- Permitir selecionar um personagem existente.

**Critérios de aceite:**
- Seleção válida direciona para o jogo.
- Se não houver personagem, orientar a criação.

---

### RF-05 — Criação de Personagem
**Descrição:** O sistema deve permitir criar um personagem para o usuário.

**Campos esperados (exemplo):**
- Nome do personagem
- Classe
- Aparência

**Regras:**
- Nome obrigatório.
- Não permitir nome já existente.
- Restringir caracteres inválidos (ex: símbolos proibidos).


**Critérios de aceite:**
- Ao criar, personagem aparece na lista de seleção.
- Mensagens claras para validações.

---

## ⚙️ 4. Requisitos Não Funcionais (RNF)

- **RNF-01 Usabilidade:** mensagens claras e interface consistente.
- **RNF-02 Estabilidade:** não travar em erros de validação.
- **RNF-03 Performance básica:** telas de login/seleção carregam em tempo aceitável.
- **RNF-04 Compatibilidade:** funcionamento em Windows 10/11.

---

## 📌 5. Regras de Negócio (RN)

- **RN-01:** E-mail deve ser único.
- **RN-02:** Senha deve seguir política mínima (tamanho).
- **RN-03:** Nome do personagem deve ser válido e (provavelmente) único.
- **RN-04:** Usuário precisa estar autenticado para acessar sistemas do jogo.

---

## 🧪 6. Rastreabilidade (mapeamento para testes)

| Requisito | Será testado em |
|----------|------------------|
| RF-01 Cadastro | Cenários de Teste – Cadastro |
| RF-02 Login | Cenários de Teste – Login |
| RF-04 Seleção personagem | Cenários – Personagem |
| RF-05 Criação personagem | Cenários – Personagem |
