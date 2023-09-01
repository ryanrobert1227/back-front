import React, { useState } from "react";

function UserForm({ onSubmit }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    onSubmit({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Nome:
          <input
            type="text"
            value={name}
            placeholder="Nome"
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          E-mail:
          <input
            type="text"
            value={email}
            placeholder="E-mail"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button type="submit">Adicionar</button>
      </form>
    </div>
  );
}

export default UserForm;
