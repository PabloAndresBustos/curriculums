const {
  Model,
} = require('sequelize');

const { PROFILES_EXPERIENCES_TABLE_NAME } = require('../helpers/sequelize.helper');

module.exports = (sequelize, DataTypes) => {
  class ProfileExperience extends Model {
  }
  ProfileExperience.init({
    experiences_id: DataTypes.INTEGER, /* Not Null */
    profiles_id: DataTypes.INTEGER, /* Not Null */
  }, {
    sequelize,
    timestamps: false,
    tableName: PROFILES_EXPERIENCES_TABLE_NAME,
  });
  return ProfileExperience;
};
