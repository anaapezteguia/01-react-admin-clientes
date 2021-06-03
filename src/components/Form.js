import React, { useState } from 'react';

const Form = () => {
  // crear citas
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });
  // actualizar inputs
  const handleChange = (ev) => {
    setCita({
      ...cita,
      [ev.target.name]: ev.target.value,
    });
  };
  // extraer valores con destructuring
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  return (
    <>
      <h2>Concertar cita</h2>
      <form>
        <label>Mascota</label>
        <input
          type="text"
          name="mascota"
          className="u-full-width"
          placeholder="Nombre de tu mascota"
          onChange={handleChange}
          value={mascota}
        />
        <label>Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
          onChange={handleChange}
          value={propietario}
        />
        <label>Fecha</label>
        <input
          type="date"
          name="fecha"
          className="u-full-width"
          onChange={handleChange}
          value={fecha}
        />
        <label>Hora</label>
        <input
          type="time"
          name="hora"
          className="u-full-width"
          onChange={handleChange}
          value={hora}
        />
        <label>Describe los síntomas</label>
        <textarea
          name="sintomas"
          className="u-full-width"
          onChange={handleChange}
          value={sintomas}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Concertar cita
        </button>
      </form>
    </>
  );
};

export default Form;
