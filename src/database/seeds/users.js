exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    {
      id: 1,
      email: "usuariocomum@teste.com.br",
      nivel_acesso: "funcionario",
      senha: "123456",
    },
    {
      id: 2,
      email: "usarioadm@teste.com.br",
      nivel_acesso: "administrador",
      senha: "123456",
    },
  ]);
};
