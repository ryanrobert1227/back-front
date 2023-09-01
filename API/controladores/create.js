
export async function createUser(req, res) {
  try {
    const { nome, email, idade } = req.body;

    const novoUsuario = {
      id: Math.random().toString(36).substr(2, 9),
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
