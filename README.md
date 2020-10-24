# API de disciplinas

## Requisitos para execução

- Banco de dados MongoDB rodando na porta 27017
- Ao baixar o código, executar o comando "yarn" para download das dependências
- Executar o comando "yarn dev" para subir a API
- Executar as requisições na porta 3000

## Rotas

- GET /disciplinas : Lista todas as disciplinas cadastradas.

- POST /disciplinas - Cria disciplinas, Recebe os seguintes campos: "code" (number), "name" (string), "teacher" (string), "department"
(string), credits (number).

- PUT /disciplinas/{id} : Atualiza os dados de uma disciplina

- DELETE /disciplinas/{id} : Deleta uma disciplina