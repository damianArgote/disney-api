import { Router } from "express";
import {
  getPersonajes,
  postPersonajes,
  putPersonajes,
  deletePersonajes,
  getPersonajeById,
} from "../controllers/personajeController.js";
import verificarToken from "../middleware/auth.js";
const router = Router();

router.get("/", getPersonajes);
router.get("/:id", getPersonajeById);
router.post("/", verificarToken, postPersonajes);
router.put("/:id", verificarToken, putPersonajes);
router.delete("/:id", verificarToken, deletePersonajes);

export default router;
