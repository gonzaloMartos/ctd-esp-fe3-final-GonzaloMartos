import React from "react";
import { useState } from "react";


const Form = () => {
  //Aqui deberan implementar el form completo con sus validaciones
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email } = formData;
    if (name.length <= 5 || !email.includes("@")) {
      setMessage("Por favor verifique su información nuevamente");
    } else {
      setMessage(`Gracias ${name}, te contactaremos cuando antes vía mail`);
      console.log(formData);
    }
  };

  return (
    <div>
      <form>
      <input type="text" placeholder="Nombre completo" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
      <input type="email" placeholder="Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
      <button type="submit">Enviar</button>
      <p>{message}</p>
      </form>
    </div>
  );
};

export default Form;
