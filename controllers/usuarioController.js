import { check, validationResult } from "express-validator";
import { Usuario } from "../models/index.js";
import { emailBienvenida } from "../helpers/email.js";

const registro = async (req, res) => {
  const { nombre, email, password } = req.body;
  //Validar los campos
  await check("nombre")
    .notEmpty()
    .withMessage("El nombre es obligatorio")
    .run(req);

  await check("email").isEmail().withMessage("No es un email valido").run(req);

  await check("password")
    .isLength({ min: 4 })
    .withMessage("El password tiene que tener al menos 4 caracteres")
    .run(req);

  let resultados = validationResult(req);

  if (!resultados.isEmpty()) {
    return res.json(resultados.array());
  }

  //Verificar no exista
  const usuario = await Usuario.findOne({
    where: {
      email,
    },
  });

  if (usuario) {
    return res.json({ msg: "El usuario ya esta registrado" });
  }
  //Crear usuario
  const nuevoUsuario = await Usuario.create({
    nombre,
    email,
    password,
  });

  emailBienvenida({ nombre: nuevoUsuario.nombre, email: nuevoUsuario.email });

  res.json({
    resultado: "Usuario registrado",
    msg: "Te enviamos un mail bienvenida",
  });
};

const login = (req, res) => {};

export { registro, login };
