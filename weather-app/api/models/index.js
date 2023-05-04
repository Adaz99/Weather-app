import { Sequelize } from "sequelize";

export const Weather = Sequelize.define(
  
    "weather",
    {
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      location: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      temp: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      conditions: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
    }
},

  );