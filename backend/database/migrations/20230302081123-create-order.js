"use strict";

const { Sequelize } = require("sequelize");
const { DataType } = require("sequelize-typescript");

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Orders", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
        },
      },
      orderItems: {
        type: Sequelize.STRING,
      },

      shippingAddress: {
        type: Sequelize.STRING,
      },
      paymentMethod: {
        type: Sequelize.STRING,
      },
      paymentResult: {
        type: Sequelize.STRING,
      },
      taxPrice: {
        type: Sequelize.FLOAT,
      },
      shippingPrice: {
        type: Sequelize.FLOAT,
      },
      totalPrice: {
        type: Sequelize.FLOAT,
      },
      isPaid: {
        type: Sequelize.BOOLEAN,
      },
      paidAt: {
        type: Sequelize.DATE,
      },
      isDelivered: {
        type: Sequelize.BOOLEAN,
      },
      deliveredAt: {
        type: Sequelize.DATE,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Orders");
  },
};
