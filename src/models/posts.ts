"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts.hasMany(models.users, { foreignKey: "id" });
      Posts.belongsToMany(models.categories, {
        through: "postCategories",
        foreignKey: "postId",
      });
    }
  }
  Posts.init(
    {
      userId: DataTypes.INTEGER,
      title: DataTypes.STRING,
      body: DataTypes.TEXT,
      status: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Posts",
    }
  );
  return Posts;
};