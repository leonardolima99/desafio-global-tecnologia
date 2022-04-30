# Desafio Global Tecnologia - API

### API desenvolvida para o desafio proposto pela **Global Tegnologia**. Uma aplicação com funcionalidade de _login_, _CRUD de usuários_, consumo de _api externa_, _nível de acesso_ e _rotas autenticadas_.

---

<br />

## 🚶‍♂️ Passos para executar

<br />

### Faça um clone do projeto.

```
git clone https://github.com/leonardolima99/desafio-global-tecnologia-api.git
```

### Em seguida entre na pasta do projeto e instale as dependências, com um dos comandos abaixo.

```
yarn install # caso use yarn
```

```
npm install # caso use npm
```

### Agora você pode iniciar o servidor.

```
yarn start # com yarn
```

```
npm start # com npm
```

---

<br />

## 🎲 Banco de dados

<br />

### Nessa etapa você criará um banco de dados local, e o preencherá com os dados iniciais.

### Crie o banco rodando,

```
npx knex migrate:up
```

### e o preencha com dados.

```
npx knex seed:run
```

### Agora com o banco de dados pronto, você pode usar a API.

---

<br />

## 🏃‍♂️ Endpoints

<br />

### Com exceção de `/login` todas os recursos são _restritos_ para usuários cadastrados.

<br />

### Os usuários cadastrados são:

```
▪︎ Funcionário
  email: usuariocomum@mail.com
  senha: 123456

▪︎ Administrador
  email: usuarioadministrador@mail.com
  senha: 123456
```

<br />

> Faça login usando ambos os usuários para testar todas as funcionalidades.

<br />

### POST `/login`

### Form Encoded

```
  email: usuarioadministrador@mail.com
  senha: 123456
```

### Esse recurso retorna um _token_, que você usará para se _autenticar_ nos outros recursos.

### Para se autenticar você adiciona um header na requisição chamado `Authentication` e com o valor `Bearer TOKEN-AQUI`. Faça isso nas próximas requisições.

<br />

### GET `/hearth-check`

<br />

> Os próximos recursos estão disponíveis apenas para administradores.

<br />

### GET `/users`

<br />

### POST `/users`

### body json \*nivel_acesso pode ser **funcionario** ou **administrador**

```
{
  "email": "algumemail@mail.com",
  "nivel_acesso": "funcionario",
  "senha": "suasenha"
}
```

<br />

### PUT `/users/:id` \*substitua :id pelo id

### body json \*com dados atualizados, mantenha a estrutura mesmo que não atualize algum dado.

```
{
  "email": "algumemail@mail.com",
  "nivel_acesso": "funcionario",
  "senha": "suasenha"
}
```

<br />

### DELETE `/users/:id` \*substitua :id pelo id
