### Projeto de Controle Financeiro para pequenos negocios

Muitos negocios não tem acesso a um sistema de estoque e contabilidade, esse projeto visa dar assistência nessa area a comercios familiares, serviços e outros que precisem controlar de maneira simploes suas finanças e/ou estoques.

### Tecnologias

frontend
![Vite + React + Typescript + Eslint + Prettier](/resources/Screenshot.png)

backend
-Express 
-mysql2 
-sequelize

### Instalação API-DEV

- Clone o repositorio e executa o comando `yarn install` dentro das pastas api e frontend.

Lembrar que necessario ter um servidor mysql e rodar os comando do sequelize-cli.

- Com servidor mysql ativo entre na pasta raiz da api e execute comando no terminal
##yarn:  **yarn sequelize-cli db:create**
##npm: **npx sequelize-cli db:create**


### Start

depois de instalado entre nas respsctivas pastas e execute em ambas: `yarn dev`
