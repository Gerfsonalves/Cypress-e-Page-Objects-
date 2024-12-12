<div align="center"><b><h1> Projeto de Testes Automatizados com Cypress - ToDo MVC</h1></b>
<p>Este projeto utiliza o framework de testes Cypress para automatizar o teste da aplicação ToDo MVC. O objetivo principal é validar a funcionalidade de gerenciamento de tarefas da aplicação, garantindo que os fluxos principais, como adicionar, listar e interagir com tarefas, funcionem conforme o esperado.</p>

<h2>Estrutura do Projeto</h2>

<b>O projeto segue uma arquitetura modular, com a separação de responsabilidades para facilitar a manutenção e escalabilidade:</b>

<b>Page Objects:</b> Localizados em support/PageObjects, encapsulam as interações com elementos da interface, garantindo reutilização de código.

<b>Element Selectors:</b> Definidos em support/elements, contêm os seletores CSS utilizados nos testes.

<b>Test Cases:</b> Os cenários de teste estão definidos na pasta cypress/e2e.

<h2>Funcionalidades Testadas</h2>

Adicionar uma nova tarefa à lista.

Validar se a tarefa foi adicionada corretamente.

Interagir com os elementos da lista de tarefas.

<h2>Tecnologias Utilizadas</h2>

<b>Cypress:</b> Framework de automação de testes.

<b>JavaScript:</b> Linguagem principal do projeto.

<b>Estratégia de Page Objects:</b> Para organização do código.