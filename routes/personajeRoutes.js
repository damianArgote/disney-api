import { Router } from "express";
import {
  getPersonajes,
  postPersonajes,
  putPersonajes,
  deletePersonajes,
  getPersonajeById,
} from "../controllers/personajeController.js";
const router = Router();

router.get("/", getPersonajes);
router.get("/:id", getPersonajeById);
router.post("/", postPersonajes);
router.put("/:id", putPersonajes);
router.delete("/:id", deletePersonajes);

export default router;
