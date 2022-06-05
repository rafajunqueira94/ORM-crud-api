const { Model, DataTypes } = require("sequelize");

class Telefones extends Model {
  static init(sequelize) {
    super.init(
      {
        tel_proprietario: DataTypes.STRING,
        tel_ddd: DataTypes.DATE,
        tel_tipo: DataTypes.DATE,
      },
      { sequelize }
    );
  }
}

module.exports = Telefones;
