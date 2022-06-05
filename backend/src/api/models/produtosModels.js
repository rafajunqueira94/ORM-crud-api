const { Model, DataTypes } = require("sequelize");

class Produtos extends Model {
  static init(sequelize) {
    super.init(
      {
        pro_descricao: DataTypes.STRING,
        pro_vlrcusto: DataTypes.DECIMAL,
        pro_vlrvenda: DataTypes.DECIMAL,
        pro_ativoinativo: DataTypes.STRING,
      },
      { sequelize }
    );
  }
}

module.exports = Produtos;
