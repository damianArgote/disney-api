import Genero from "./Genero.js";
import Pelicula from "./Pelicula.js";
import Personaje from "./Personaje.js";
import Usuario from "./Usuario.js";

//Relaciones tablas
Personaje.belongsTo(Pelicula);
Pelicula.belongsTo(Genero);

export { Genero, Pelicula, Personaje, Usuario };
