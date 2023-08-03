const {
  Model,
} = require('sequelize');

const { ROLES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class Rol extends Model {
    static associate(models) {
      models.Rol.hasOne(models.User, { foreignKey: 'roles_id' });
    }
  }
  Rol.init({
    rol: DataTypes.STRING, /* Not Null */
  }, {
    sequelize,
    timestamps: false,
    tableName: ROLES_TABLE_NAME,
  });
  return Rol;
};
