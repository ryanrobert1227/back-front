import React, { useState, useEffect } from "react";
import UserForm from "./assets/components/useForm";
import UserList from "./assets/components/userList";

function App() {
  const url = "";
  const [people, setPeople] = useState([]);

 // pegando dados
  const fetchData = async () => {
    try {
      const response = await fetch(url);

      if (response.ok) {
        const data = await response.json();
        setPeople(data);
      }
    } catch (error) {
      console.error("Erro ao buscar os dados:", error);
    }
  };

 
  useEffect(() => {
    fetchData();
  }, []);
  //inserindo dados
  const handleFormSubmit = async (formData) => {
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setPeople((prevPeople) => [...prevPeople, data]);
      } else {
        console.error(
          "Erro na requisição:",
          response.status,
          response.statusText
        );
      }
    } catch (error) {
      console.error("Erro na requisição:", error);
    }
  };
  //deletando dados
  const handleDelete = async (personId) => {
    try {
      const response = await fetch(`${url}/${personId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPeople(people.filter((person) => person.id !== personId));
      } else {
        console.error("Falha ao excluir o usuário.");
      }
    } catch (error) {
      console.error("Erro ao fazer a requisição DELETE:", error);
    }
  };

  return (
    <div className="container">
      <UserForm onSubmit={handleFormSubmit} />
      <UserList people={people} onDelete={handleDelete} />
    </div>
  );
}

export default App;
