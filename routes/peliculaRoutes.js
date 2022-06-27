import { Router } from "express";
import {
  getPeliculaById,
  deletePelicula,
  putPelicula,
  postPelicula,
  getPeliculas,
} from "../controllers/peliculaController.js";
import verificarToken from "../middleware/auth.js";

const router = Router();

router.get("/", getPeliculas);
router.get("/:id", getPeliculaById);
router.post("/", verificarToken, postPelicula);
router.put("/:id", verificarToken, putPelicula);
router.delete("/:id", verificarToken, deletePelicula);

export default router;
