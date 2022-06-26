import { Pelicula } from "../models/index.js";

const getPeliculas = async (req, res) => {
  try {
    const peliculas = await Pelicula.findAll({
      attributes: ["titulo", "imagen"],
    });
    res.json(peliculas);
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};

const postPelicula = async (req, res) => {
  try {
    const nuevaPelicula = await Pelicula.create(req.body);
    res.json({ msg: "Nueva Pelicula agregada" });
  } catch (error) {
    res.json({ error: "Error en la creacion" });
  }
};
const putPelicula = async (req, res) => {
  const { id } = req.params;
  try {
    const pelicula = await Pelicula.findByPk(id);

    if (!pelicula) {
      res.json({ error: "La pelicula no existe" });
    } else {
      await Pelicula.update(req.body, {
        where: {
          id,
        },
      });
      res.json({ msg: "Pelicula actualizada" });
    }
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};
const deletePelicula = async (req, res) => {
  const { id } = req.params;
  try {
    const pelicula = await Pelicula.findByPk(id);
    if (!pelicula) {
      res.json({ error: "La pelicula no existe" });
    } else {
      await Pelicula.destroy({
        where: {
          id,
        },
      });
      res.json({ msg: "Pelicula Borrada" });
    }
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};

const getPeliculaById = async (req, res) => {
  const { id } = req.params;
  try {
    const pelicula = await Pelicula.findByPk(id);

    if (!pelicula) {
      res.json({ error: "La pelicula no existe" });
    } else {
      res.json(pelicula);
    }
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};

export {
  getPeliculaById,
  deletePelicula,
  putPelicula,
  postPelicula,
  getPeliculas,
};
