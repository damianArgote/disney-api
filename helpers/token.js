import jwt from "jsonwebtoken";

const generarToken = () =>
  Date.now().toString(32) + Math.random().toString(32).substring(2);

const generarJwt = (id, nombre) => {
  return jwt.sign({ id, nombre }, process.env.SECRETO, { expiresIn: "1d" });
};

export { generarToken, generarJwt };
