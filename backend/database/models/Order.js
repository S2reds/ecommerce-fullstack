"use strict";
const { Model } = require("sequelize");
const { database } = require(".");
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Order.belongsTo(models.User, { foreignKey: "id" });
    }
  }
  Order.init(
    {
      user: DataTypes.INTEGER,
      orderItems: DataTypes.STRING,
      shippingAddress: DataTypes.STRING,
      paymentMethod: DataTypes.STRING,
      paymentResult: DataTypes.STRING,
      taxPrice: DataTypes.FLOAT,
      shippingPrice: DataTypes.FLOAT,
      totalPrice: DataTypes.FLOAT,
      isPaid: DataTypes.DATETIME,
      paidAt: DataTypes.PAIDAT,
      isDelivered: DataTypes.BOOLEAN,
      deliveredAt: DataTypes.DATETIME,
    },
    {
      sequelize,
      modelName: "Orders",
    }
  );
  return Order;
};
