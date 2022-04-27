exports.up = function (knex) {
  return knex.schema.createTable("users", (table) => {
    table.increments("id").primary();
    table.string("email").notNullable().unique();
    table.string("nivel_acesso").notNullable();
    table.string("senha").notNullable();
    table.timestamps();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("users");
};
