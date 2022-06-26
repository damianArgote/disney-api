import { Personaje } from "../models/index.js";

const getPersonajes = async (req, res) => {
  const { name, age, movies } = req.query;
  try {
    if (!name && !age && !movies) {
      const personajes = await Personaje.findAll({
        attributes: ["nombre", "imagen"],
      });
      return res.json(personajes);
    }

    if (!name && !movies && age) {
      const personajes = await Personaje.findAll({
        attributes: ["nombre", "imagen"],
        where: {
          edad: age,
        },
      });
      return res.json(personajes);
    }
    if (name && !age && !movies) {
      const personajes = await Personaje.findAll({
        attributes: ["nombre", "imagen"],
        where: {
          nombre: name,
        },
      });
      return res.json(personajes);
    }

    if (!name && !age && movies) {
      const personajes = await Personaje.findAll({
        attributes: ["nombre", "imagen"],
        where: {
          peliculaId: movies,
        },
      });
      return res.json(personajes);
    }
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};

const postPersonajes = async (req, res) => {
  try {
    const nuevoPersonaje = await Personaje.create(req.body);
    res.json({ msg: "Nuevo Personaje agregado" });
  } catch (error) {
    res.json({ error: "Error en la creacion" });
  }
};
const putPersonajes = async (req, res) => {
  const { id } = req.params;
  try {
    const personaje = await Personaje.findByPk(id);

    if (!personaje) {
      res.json({ error: "El personaje no existe" });
    } else {
      await Personaje.update(req.body, {
        where: {
          id,
        },
      });
      res.json({ msg: "Personaje actualizado" });
    }
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};
const deletePersonajes = async (req, res) => {
  const { id } = req.params;
  try {
    const personaje = await Personaje.findByPk(id);
    if (!personaje) {
      res.json({ error: "El personaje no existe" });
    } else {
      await Personaje.destroy({
        where: {
          id,
        },
      });
      res.json({ msg: "Personaje Borrado" });
    }
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};

const getPersonajeById = async (req, res) => {
  const { id } = req.params;
  try {
    const personaje = await Personaje.findByPk(id);

    if (!personaje) {
      res.json({ error: "El personaje no existe" });
    } else {
      res.json(personaje);
    }
  } catch (error) {
    res.json({ error: "Hubo un error" });
  }
};

export {
  getPersonajes,
  postPersonajes,
  putPersonajes,
  deletePersonajes,
  getPersonajeById,
};
