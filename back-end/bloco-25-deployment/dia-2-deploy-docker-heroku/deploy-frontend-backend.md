1. Realize o deploy de uma aplicação Front-end no Heroku utilizando um build-pack.
- `npx create-react-app my-app`
- `cd my-app`
- `heroku create -b mars/create-react-app`
- `heroku stack:set heroku-20`
- `git add .`
- `git commit -m '<message>'`
- `git push heroku master`

2. Realize o deploy de uma API Node no Heroku utilizando Docker.
- `heroku create`
- `heroku stack:set container`
- `git add .`
- `git commit -m '<message>'`
- `git push heroku master`

3. Crie um banco de dados no SUPABASE.
- `done.`

4. Configure as variáveis de ambiente do Back-end.
- `done`

5. Conecte sua aplicação back-end ao banco de dados.
- `sequelize-cli init`
- `SET config/config.js`

6. Popule o banco de dados com informações de pessoas usuárias ou qualquer tipo de dados que viram uma tabela.
- `npx sequelize-cli db:migrate`
- `npx sequelize-cli db:seed:all`

7. Consuma sua API pela aplicação front-end e renderize todas as informações retornadas da API.
- `~~ app.use(cors())`

8.  Crie Actions do Github de lint para Front-end e Back-end.
- `coded on: .github/workflows/main.yml`