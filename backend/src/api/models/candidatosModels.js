const { Model, DataTypes } = require("sequelize");

class Candidatos extends Model {
  static init(sequelize) {
    super.init(
      {
        can_nome: DataTypes.STRING,
        can_apelido: DataTypes.DATE,
        can_sexo: DataTypes.DATE,
        can_partido: DataTypes.DATE,
      },
      { sequelize }
    );
  }
}

module.exports = Candidatos;
