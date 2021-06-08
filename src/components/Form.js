import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Proptypes from 'prop-types';

const Form = ({ createAppointment }) => {
  // create appointments
  const [appointment, setAppointment] = useState({
    pet: '',
    owner: '',
    date: '',
    hour: '',
    symptoms: '',
  });
  const [error, updateError] = useState(false);

  // update inputs
  const handleChange = (ev) => {
    setAppointment({
      ...appointment,
      [ev.target.name]: ev.target.value,
    });
  };
  // extract values with destructuring to shorten the code
  const { pet, owner, date, hour, symptoms } = appointment;

  // what happens when the user clicks on 'arrange appointment'
  const submitAppointment = (ev) => {
    ev.preventDefault();

    // validation
    if (
      pet.trim() === '' ||
      owner.trim() === '' ||
      date.trim() === '' ||
      hour.trim() === '' ||
      symptoms.trim() === ''
    ) {
      updateError(true);
      return;
    }
    // remove previous message
    updateError(false);

    // asign ID
    // i've installed and imported a library to generate IDs "npm i uuid"
    appointment.id = uuidv4();

    // create appointment
    createAppointment(appointment);

    // empty form
    setAppointment({
      pet: '',
      owner: '',
      date: '',
      hour: '',
      symptoms: '',
    });
  };
  return (
    <>
      <h2>Arrange appointment</h2>
      {/* remember not to put an if here, only a ternary */}
      {error ? <p className="alerta-error">All fields are required</p> : null}

      <form onSubmit={submitAppointment}>
        <label>Pet</label>
        <input
          type="text"
          name="pet"
          className="u-full-width"
          placeholder="Pet name"
          onChange={handleChange}
          value={pet}
        />
        <label>Owner</label>
        <input
          type="text"
          name="owner"
          className="u-full-width"
          placeholder="Owner name"
          onChange={handleChange}
          value={owner}
        />
        <label>Date</label>
        <input
          type="date"
          name="date"
          className="u-full-width"
          onChange={handleChange}
          value={date}
        />
        <label>Hour</label>
        <input
          type="time"
          name="hour"
          className="u-full-width"
          onChange={handleChange}
          value={hour}
        />
        <label>Describe your pet symptoms</label>
        <textarea
          name="symptoms"
          className="u-full-width"
          onChange={handleChange}
          value={symptoms}
        ></textarea>
        <button type="submit" className="u-full-width button-primary">
          Arrange appointment
        </button>
      </form>
    </>
  );
};

Form.propTypes = {
  createAppointment: Proptypes.func.isRequired,
};
export default Form;
