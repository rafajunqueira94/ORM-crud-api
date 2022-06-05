const { Model, DataTypes } = require("sequelize");

class Cidades extends Model {
  static init(sequelize) {
    super.init(
      {
        cid_descricao: DataTypes.STRING,
        cid_uf: DataTypes.DATE,
        cid_regiao: DataTypes.DATE,
      },
      { sequelize }
    );
  }
}

module.exports = Cidades;
