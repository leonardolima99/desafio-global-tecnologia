exports.index = function (req, res) {
  res.end("Rota para listar os usuários.");
};

exports.create = function (req, res) {
  res.end("Rota para criar um usuário.");
};

exports.update = function (req, res) {
  res.end("Rota para atualizar um usuário.");
};

exports.delete = function (req, res) {
  res.end("Rota para deletar um usuário.");
};
