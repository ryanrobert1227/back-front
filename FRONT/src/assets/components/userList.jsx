import React from "react";

function UserList({ people, onDelete }) {
  return (
    <div className="cards">
      {people.map((person) => (
        <div key={person.id}>
          <span>{person.name}</span>
          <button onClick={() => onDelete(person.id)}>Excluir</button>
        </div>
      ))}
    </div>
  );
}

export default UserList;
