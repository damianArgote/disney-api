import { DataTypes } from "sequelize";
import db from "../config/db.js";

const Pelicula = db.define("peliculas", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  imagen: {
    type: DataTypes.STRING,
  },
  calificacion: {
    type: DataTypes.INTEGER,
    validate: { min: 1, max: 5 },
    allowNull: false,
  },
});

export default Pelicula;
