# Soulverse — Testes Manuais (QA)

## Sobre o Projeto

Este repositório contém a documentação de **Testes Manuais** do jogo **Soulverse**.

**Soulverse** é um MMORPG 2D em estilo pixel art, inspirado no universo de **BLEACH**, com diversas classes jogáveis e sistemas como:

* Sistema de Login e Cadastro
* Criação de Personagem
* Classes (Shinigami, Hollow, Quincy e Ryoka)
* Dungeons
* Missões (Quests)
* Cartas (inspiradas em Ragnarok)
* Raid Boss
* Guildas e Guerra de Guildas
* Mercado global
* Itens customizados

---

## Meu Papel no Projeto

Atuei na **idealização do projeto e criação do conteúdo jogável**, além de ser responsável por:

* Planejamento de testes
* Criação de cenários de teste
* Execução de testes manuais
* Registro de defeitos (bugs)
* Coleta de evidências (prints e GIFs)
* Organização da documentação em GitHub

---

## Objetivo deste Repositório

Demonstrar:

* Organização de testes
* Metodologia de QA
* Boas práticas de documentação
* Rastreabilidade entre cenários, execuções e defeitos
* Experiência prática com testes funcionais em aplicação real

---

## Estrutura do Repositório

```
Soulverse-Testes-Manuais/
│
├── Plano-de-testes/
├── Analise-de-requisitos/
├── Cenario-de-teste/
│
├── Evidencias/
│   ├── Login/
│   ├── Cadastro/
│   ├── Criacao-Personagem/
│   └── Evidencias.md
│
├── Registro-de-Defeitos/
└── README.md
```

---

## Técnicas de Teste Aplicadas

### Testes Funcionais

Validação das funcionalidades principais do sistema, garantindo que atendem aos requisitos.

Exemplos:

* Login com credenciais válidas e inválidas
* Cadastro de usuário
* Criação de personagem

---

### Testes Positivos

Validação de fluxos com dados corretos.

Exemplo:

* Cadastro realizado com sucesso
* Login com usuário e senha válidos

---

### Testes Negativos

Validação do comportamento do sistema diante de entradas inválidas.

Exemplos:

* Campos obrigatórios em branco
* Senha ou usuário inválido
* Servidor offline
* Nome de personagem com tamanho excessivo

---

### Testes de Validação de Entrada

Verificação de regras de negócio e limites de campos.

Exemplos:

* Tamanho mínimo/máximo
* Caracteres inválidos
* Formatos incorretos

---

### Testes de Fluxo do Usuário

Validação da jornada completa do usuário:

Cadastro → Login → Criação de personagem → Entrada no jogo

---

### Testes Exploratórios

Execução livre do sistema para identificar comportamentos inesperados e possíveis falhas não previstas.

---

## Registro de Defeitos

Os bugs encontrados são documentados contendo:

* ID do defeito
* Módulo afetado
* Severidade e Prioridade
* Passos para reprodução
* Resultado esperado vs obtido
* Evidência visual

---

## Evidências

Cada cenário executado contém:

* Status (Pass / Fail)
* Data de execução
* Ambiente
* Versão testada
* GIF ou print demonstrando o resultado

---

## Ambiente de Teste

* Cliente Desktop (Beta)
* Testes manuais
* Execução local
* Servidor de desenvolvimento

---

## Ferramentas Utilizadas

* GitHub (documentação e versionamento)
* Markdown
* ScreenToGif / Captura de tela
* Cliente do jogo (Desktop)

---

## Status do Projeto

Em evolução — novos cenários e módulos serão adicionados conforme o avanço dos testes.

---

## Contato

Daniel Chicotti

https://www.linkedin.com/in/danielchicotti/

QA | Testes Manuais | Game Testing
