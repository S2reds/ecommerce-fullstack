"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.User, { foreignKey: "user" });
    }
  }
  Review.init(
    {
      id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      rating: DataTypes.FLOAT,
      comment: DataTypes.STRING,
      user: {
        type: DataTypes.INTEGER,
        references: {
          model: "User",
          key: "id",
        },
      },
      productId: {
        type: DataTypes.INTEGER,
        references: {
          model: "Product",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "Review",
    }
  );
  return Review;

};
