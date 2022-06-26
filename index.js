import express from "express";
import dotenv from "dotenv";
import personajeRoutes from "./routes/personajeRoutes.js";
import peliculaRoutes from "./routes/peliculaRoutes.js";
import usuarioRoutes from "./routes/usuarioRoutes.js";
import db from "./config/db.js";
dotenv.config({ path: ".env" });
const app = express();

//Conexion a base de datos
try {
  await db.authenticate();
  await db.sync();
  console.log("Conectado a la base de datos");
} catch (error) {
  console.error("Error de conexion:", error);
}
//midlewares
app.use(express.urlencoded({ extended: true }));

//rutas
app.use("/api/v1/characters", personajeRoutes);
app.use("/api/v1/movies", peliculaRoutes);
app.use("/api/v1/auth", usuarioRoutes);

app.listen(process.env.PORT, () => console.log("Server funcionando"));
