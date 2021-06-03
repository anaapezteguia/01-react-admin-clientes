import React from 'react';

const Form = () => {
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
        />
        <label>Dueño</label>
        <input
          type="text"
          name="propietario"
          className="u-full-width"
          placeholder="Nombre del dueño"
        />
        <label>Fecha</label>
        <input type="date" name="fecha" lassName="u-full-width" />
        <label>Hora</label>
        <input type="time" name="hora" lassName="u-full-width" />
        <label>Describe los síntomas</label>
        <textarea name="sintomas" className="u-full-width"></textarea>
        <button type="submit" className="u-full-width button-primary">
          Concertar cita
        </button>
      </form>
    </>
  );
};

export default Form;
