const { Model, DataTypes } = require("sequelize");

class Empresas extends Model {
  static init(sequelize) {
    super.init(
      {
        emp_nome: DataTypes.STRING,
        emp_contato: DataTypes.DATE,
        emp_email: DataTypes.DATE,
      },
      { sequelize }
    );
  }
}

module.exports = Empresas;
