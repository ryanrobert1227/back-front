// Em UserForm.js (ou onde você definiu o componente UserForm)
import React, { useState } from 'react';

function UserForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    idade: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Envie os dados para a função onSubmit definida no App.js
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nome"
        placeholder="Nome"
        value={formData.nome}
        onChange={handleChange}
      />
      <input
        type="email"
        name="email"
        placeholder="Email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        type="number"
        name="idade"
        placeholder="Idade"
        value={formData.idade}
        onChange={handleChange}
      />
      <button type="submit">Criar Usuário</button>
    </form>
  );
}

export default UserForm;
