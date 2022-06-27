import jwt from "jsonwebtoken";

const verificarToken = (req, res, next) => {
  const token = req.header("auth");
  if (!token) {
    return res.json({ msg: "No hay token" });
  }
  try {
    jwt.verify(token, process.env.SECRETO);
    next();
  } catch (error) {
    res.json({ msg: "Token no valido" });
  }
};

export default verificarToken;
