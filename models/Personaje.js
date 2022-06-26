import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Personaje = db.define("personajes", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  edad: {
    type: DataTypes.INTEGER(10),
    allowNull: false,
  },
  peso: {
    type: DataTypes.DOUBLE,
    allowNull: false,
  },
  historia: {
    type: DataTypes.TEXT,
  },
  imagen: {
    type: DataTypes.STRING,
  },
});

export default Personaje;
