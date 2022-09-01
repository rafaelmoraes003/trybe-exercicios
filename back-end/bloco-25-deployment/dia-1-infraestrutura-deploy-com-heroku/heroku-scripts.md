Exercício 1: Crie uma API simples no node utilizando express. 
No arquivo index.js, crie uma rota do tipo get com o endereço raiz / que entregue 
como resposta o texto "some message..". Faça o deploy no Heroku utilizando o CLI.

- `heroku create`
- `git add .`
- `git commit -m '<message>'`
- `git push heroku master`

###

Exercício 2: Agora, modifique a API para responder a uma nova mensagem:
1. Crie uma nova variável de ambiente com um texto qualquer;
2. Modifique o código da sua API para que ela responda na rota get / com o 
mesmo texto contido na variável criada no passo anterior.

- `heroku config:set SOME_TEXT="algum texto" -a calm-shore-67053`

###

Exercício 3. Simule o deploy em multi-ambientes (produção e homologação). Para isso:
1. Renomeie o remote do deploy dos exercícios anteriores para homolog;
2. Crie um novo remote a partir do mesmo projeto. Dessa vez, o remote deverá se chamar prod;
3. Em seguida, configure as variáveis de ambiente para terem valores diferentes por ambiente.

- `git remote rename heroku homolog`
- `heroku create --remote prod`
- `heroku config:set PROD_VAR="env prod" -a hidden-springs-12100`
- `heroku config:set HOMOLOG_VAR="env homolog" -a calm-shore-67053`
- `git push prod master`
- `git push homolog master`

###

Exercício 4: Faça deploy de uma aplicação React.
1. Crie uma aplicação React utilizando create-react-app;
2. Crie um novo app utilizando o buildpack mars/create-react-app;
3. Então, faça o deploy do app no Heroku.

- `npx create-react-app react-heroku-deploy`
- `cd react-heroku-deploy`
- `heroku create -b mars/create-react-app`
- `heroku stack:set heroku-20`
- `git add .`
- `git commit -m '<message>'`
- `git push heroku master`