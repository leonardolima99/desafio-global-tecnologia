# Desafio Global Tecnologia - API

API desenvolvida para o desafio proposto pela **Global Tegnologia**. Uma aplicação com funcionalidade de _login_, _CRUD de usuários_, consumo de _api externa_, _nível de acesso_ e _rotas autenticadas_.

API online [aqui](http://desafio-global-api.herokuapp.com/)

### Testado no **Node.js 14.16.0**

## 🚶‍♂️ Passos para executar

Primeiro tenha certeza de ter o Node.js 14.16.0 em sua máquina, o projeto é configurado para funcionar especificamente com ele. Configure esta versão como padrão seguindo esse [tutorial](https://github.com/nvm-sh/nvm) do nvm.

Faça um clone do projeto.

```
git clone https://github.com/leonardolima99/desafio-global-tecnologia-api.git
```

Em seguida entre na pasta do projeto e instale as dependências, com um dos comandos abaixo.

```
yarn install # caso use yarn
```

```
npm install # caso use npm
```

Agora você precisa criar o arquivo `.env` seguindo o `.env.example`.
Defina um PORT diferente de 3000 (eu uso 3001), e um SECRET que será usado para gerar e validar o token na autenticação.

Em seguida você deve preencher o banco de dados com os usuários mocados.

## 🎲 Banco de dados

Nessa etapa você criará um banco de dados local, e o preencherá com os dados iniciais.

Crie o banco rodando,

```
npx knex migrate:up
```

e o preencha com dados.

```
npx knex seed:run
```

Agora com o banco de dados pronto, você pode usar a API.

## 🏃‍♂️ Endpoints

Agora você pode iniciar o servidor.

```
yarn dev # com yarn
```

```
npm run dev # com npm
```

Com exceção de `/login` todas os recursos são _restritos_ para usuários cadastrados.

Os usuários cadastrados são:

```
▪︎ Funcionário
  email: usuariocomum@teste.com.br
  senha: 123456

▪︎ Administrador
  email: usuarioadm@teste.com.br
  senha: 123456
```

> Faça login usando ambos os usuários para testar todas as funcionalidades.

**POST** `/login`

Form Encoded

```
  email: usuarioadm@teste.com.br
  senha: 123456
```

Este recurso retorna um _token_, que você usará para se _autenticar_ nos outros recursos.

Para se autenticar você adiciona um header na requisição chamado `Authorization` e com o valor `Bearer TOKEN-AQUI`. Faça isso nas próximas requisições.

**GET** `/health-check`

> Os próximos recursos estão disponíveis apenas para administradores.

**GET** `/users`

**POST** `/users`

body json \*nivel_acesso pode ser **funcionario** ou **administrador**

```
{
  "email": "algumemail@mail.com",
  "nivel_acesso": "funcionario",
  "senha": "suasenha"
}
```

**PUT** `/users/:id` \*substitua :id pelo id do usuario pretendido

body json \*com dados atualizados, mantenha a estrutura mesmo que não atualize algum dado.

```
{
  "email": "algumemail@mail.com",
  "nivel_acesso": "funcionario",
  "senha": "suasenha"
}
```

**DELETE** `/users/:id` \*substitua :id pelo id do usuario pretendido
