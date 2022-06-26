import { Router } from "express";
import {
  getPeliculaById,
  deletePelicula,
  putPelicula,
  postPelicula,
  getPeliculas,
} from "../controllers/peliculaController.js";
const router = Router();

router.get("/", getPeliculas);
router.get("/:id", getPeliculaById);
router.post("/", postPelicula);
router.put("/:id", putPelicula);
router.delete("/:id", deletePelicula);

export default router;
