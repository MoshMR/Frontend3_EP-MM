import React, { useState } from "react";
import Card from "./Card";

function Form() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones
    if (
      name.trim().length >= 3 &&
      !name.startsWith(" ") &&
      description.length >= 6
    ) {
      setSubmittedData({ name, description });
      setError(false);
    } else {
      setError(true);
      setSubmittedData(null);
    }
  };

  return (
    <div>
      <h2>Formulario</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Nombre:
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Descripción:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      {error && <p>Por favor chequea que la información sea correcta.</p>}
      {submittedData && (
        <Card
          name={submittedData.name}
          description={submittedData.description}
        />
      )}
    </div>
  );
}

export default Form;
