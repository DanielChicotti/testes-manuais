## CT-HUD-001 — Validar informações exibidas no canto superior esquerdo

**Pré-condição:**  
Usuário logado e dentro do jogo.

**Passos:**

1. Entrar no jogo com personagem válido
2. Observar o canto superior esquerdo da tela

**Resultado esperado:**  
Devem ser exibidas corretamente as seguintes informações:
- Chance de Esquiva (%)
- FPS
- Coordenadas X e Y do mouse no mapa
- Coordenadas X e Y do personagem no mapa e número do mapa atual
- Campo "Dano Mapa" deve aparecer apenas para usuário com permissão ADM

Execução do Teste

- Status:✔ Pass
- Data da execução: 03/03/2026
- Versão testada: Beta
- Ambiente: Cliente Desktop
- Executor: Daniel Chicotti

**Evidência:** [Visualizar PRINT](../../Evidencias/HUD/CT-HUD-001_Sucesso.png)

---

## CT-HUD-002 — Validar exibição de informações VIP no chat ao logar

**Pré-condição:**  
Usuário com conta VIP ativa.

**Passos:**

1. Realizar login
2. Observar mensagens automáticas no chat

**Resultado esperado:**  
Sistema deve exibir mensagem informando a validade do VIP.

Execução do Teste

- Status:✔ Pass
- Data da execução: 03/03/2026
- Versão testada: Beta
- Ambiente: Cliente Desktop
- Executor: Daniel Chicotti

**Evidência:** [Visualizar PRINT](../../Evidencias/HUD/CT-HUD-002_Sucesso.png)

---

## CT-HUD-003 — Validar que usuário não VIP não recebe mensagem de VIP

**Pré-condição:**  
Usuário sem VIP ativo.

**Passos:**

1. Realizar login
2. Observar mensagens automáticas no chat

**Resultado esperado:**  
Sistema não deve exibir nenhuma mensagem relacionada a VIP.

Execução do Teste

- Status:✔ Pass
- Data da execução: 03/03/2026
- Versão testada: Beta
- Ambiente: Cliente Desktop
- Executor: Daniel Chicotti

**Evidência:** [Visualizar PRINT](../../Evidencias/HUD/CT-HUD-003_Sucesso.png)

---

## CT-HUD-004 — Validar exibição de jogadores online no chat

**Pré-condição:**  
Usuário logado.

**Passos:**

1. Entrar no jogo
2. Observar o chat após login

**Resultado esperado:**  
Sistema deve exibir a quantidade de jogadores online no momento do login.

Execução do Teste

- Status:✔ Pass
- Data da execução: 03/03/2026
- Versão testada: Beta
- Ambiente: Cliente Desktop
- Executor: Daniel Chicotti

**Evidência:** [Visualizar PRINT](../../Evidencias/HUD/CT-HUD-004_Sucesso.png)

---

## CT-HUD-005 — Validar exibição do Ping no canto superior direito

**Pré-condição:**  
Usuário logado e conectado ao servidor.

**Passos:**

1. Entrar no jogo
2. Observar canto superior direito da tela

**Resultado esperado:**  
Sistema deve exibir o Ping atual em milissegundos (ms).

Execução do Teste

- Status:✔ Pass
- Data da execução: 03/03/2026
- Versão testada: Beta
- Ambiente: Cliente Desktop
- Executor: Daniel Chicotti

**Evidência:** [Visualizar PRINT](../../Evidencias/HUD/CT-HUD-005_Sucesso.png)

---

## CT-HUD-006 — Validar exibição da missão ativa

**Pré-condição:**  
Usuário com missão ativa.

**Passos:**

1. Entrar no jogo
2. Observar o painel de missão no canto superior direito

**Resultado esperado:**  
Sistema deve exibir:
- Nome da missão
- Objetivo
- Progresso (ex: 0/5)

Execução do Teste

- Status:✔ Pass
- Data da execução: 03/03/2026
- Versão testada: Beta
- Ambiente: Cliente Desktop
- Executor: Daniel Chicotti

**Evidência:** [Visualizar PRINT](../../Evidencias/HUD/CT-HUD-006_Sucesso.png)

