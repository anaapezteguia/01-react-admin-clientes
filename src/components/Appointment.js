import React from 'react';
import Proptypes from 'prop-types';

const Appointment = ({ appointment, removeAppointment }) => (
  <div className="cita">
    <p>
      Pet: <span>{appointment.pet}</span>
    </p>
    <p>
      Owner: <span>{appointment.owner}</span>
    </p>
    <p>
      Date: <span>{appointment.date}</span>
    </p>
    <p>
      Hour: <span>{appointment.hour}</span>
    </p>
    <p>
      Symptoms: <span>{appointment.symptoms}</span>
    </p>
    <button
      className="button eliminar u-full-width"
      onClick={() => removeAppointment(appointment.id)}
    >
      Remove &times;
    </button>
  </div>
);
Appointment.propTypes = {
  appointment: Proptypes.object.isRequired,
  removeAppointment: Proptypes.func.isRequired,
};
export default Appointment;
