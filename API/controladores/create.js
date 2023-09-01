import { v4 as uuidv4 } from "uuid";

export function createUser(req, res) {
  try {
    const { nome, email, idade } = req.body;

    const novoUsuario = {
      id: uuidv4(),
      nome,
      email,
      idade,
    };

    res.status(201).json(novoUsuario);
  } catch (error) {
    console.error("Erro ao criar o usuário:", error);
    res.status(500).json({ error: "Erro ao criar o usuário" });
  }
}
