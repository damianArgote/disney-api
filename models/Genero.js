import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Genero = db.define("generos", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
  },
});

export default Genero;
