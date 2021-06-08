import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Proptypes from 'prop-types';

const Form = ({ crearCita }) => {
  // crear citas
  const [cita, setCita] = useState({
    mascota: '',
    propietario: '',
    fecha: '',
    hora: '',
    sintomas: '',
  });
  const [error, actualizarError] = useState(false);

  // actualizar inputs
  const handleChange = (ev) => {
    setCita({
      ...cita,
      [ev.target.name]: ev.target.value,
    });
  };
  // extraer valores con destructuring para acortar el código
  const { mascota, propietario, fecha, hora, sintomas } = cita;

  // cuando el usuario clica en enviar cita
  const submitCita = (ev) => {
    ev.preventDefault();

    // validar
    if (
      mascota.trim() === '' ||
      propietario.trim() === '' ||
      fecha.trim() === '' ||
      hora.trim() === '' ||
      sintomas.trim() === ''
    ) {
      actualizarError(true);
      return;
    }
    // eliminar el mensaje previo
    actualizarError(false);

    // asignar ID
    // instalamos una librería para generar IDs "npm i uuid" y la importamos
    cita.id = uuidv4();

    // crear cita
    crearCita(cita);

    // vaciar formulario
    setCita({
      mascota: '',
      propietario: '',
      fecha: '',
      hora: '',
      sintomas: '',
    });
  };
  return (
    <>
      <h2>Concertar cita</h2>
      {/* aquí no podemos poner if, ponemos un ternario */}
      {error ? (
        <p className="alerta-error">Todos los campos son obligatorios</p>
      ) : null}

      <form onSubmit={submitCita}>
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

Form.propTypes = {
  crearCita: Proptypes.func.isRequired,
};
export default Form;
