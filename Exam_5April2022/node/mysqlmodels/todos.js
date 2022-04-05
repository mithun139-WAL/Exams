const {Sequelize, DataTypes} = require('sequelize');

const db = require('../dbsq');

const Todos = db.define(
  'todos',
  {
    status: {
      type: DataTypes.TINYINT,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  {
    freezeTableName: true,
  }
);

module.exports = Todos;
