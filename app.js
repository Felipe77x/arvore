import { Router } from "express";
import volunteers from "../data/volunteers.json" assert { type: "json" };

export const volunteersRouter = Router();

// Rota para obter a lista de todos os voluntários de plantação
volunteersRouter.get("/", (req, res) => {
  res.json(volunteers);
});

// Rota para obter informações de um voluntário específico por ID
volunteersRouter.get("/:id", (req, res) => {
  const volunteerId = parseInt(req.params.id);
  const volunteer = volunteers.find(v => v.id === volunteerId);
  if (volunteer) {
    res.json(volunteer);
  } else {
    res.status(404).json({ message: "Voluntário não encontrado" });
  }
});
