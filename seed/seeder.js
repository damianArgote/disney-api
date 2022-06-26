import generos from "./generos.js";
import peliculas from "./peliculas.js";
import personajes from "./personajes.js";
import { Genero, Pelicula, Personaje } from "../models/index.js";
import db from "../config/db.js";

const importarDatos = async () => {
  try {
    //Conectarse a la db
    await db.authenticate();
    //Crear la tabla
    await db.sync();
    //Crear los generos
    await Genero.bulkCreate(generos);
    //Crea peliculas
    await Pelicula.bulkCreate(peliculas);
    //crea personajes
    await Personaje.bulkCreate(personajes);

    console.log("Datos importados correctamente");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

const eliminarDatos = async () => {
  try {
    //Conectarse a la db
    await db.authenticate();
    //Crear la tabla
    await db.sync();
    //borrar personajes
    await Personaje.destroy({ where: {} });
    //borrar peliculas
    await Pelicula.destroy({ where: {} });
    //borrar los generos
    await Genero.destroy({ where: {} });

    console.log("Datos borrados correctamente");
    process.exit();
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

if (process.argv[2] === "-i") {
  importarDatos();
}

if (process.argv[2] === "-e") {
  eliminarDatos();
}
