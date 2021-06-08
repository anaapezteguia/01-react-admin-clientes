import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {
  // local storage
  let initialAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!initialAppointments) {
    initialAppointments = [];
  }

  // appointments array
  const [appointments, setNewAppointments] = useState(initialAppointments);

  // use effect to control appointment's life cycle
  useEffect(() => {
    localStorage.setItem('appointments', JSON.stringify(appointments));
  }, [appointments]);

  // appointment's handler function
  // here we do spread of appointments so that in case
  // there is more than 1 saved they are not erased
  const createAppointment = (appointment) => {
    setNewAppointments([...appointments, appointment]);
  };

  // this function removes an appointment by its ID
  const removeAppointment = (id) => {
    const newAppointments = appointments.filter(
      (appointment) => appointment.id !== id
    );
    setNewAppointments(newAppointments);
  };

  // conditional message
  const title =
    appointments.length === 0
      ? 'There are no appointments'
      : 'Manage your appointments';

  return (
    <>
      <h1>Vet clinic “Petting my pet”</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form createAppointment={createAppointment} />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map((appointment) => (
              <Appointment
                key={appointment.id}
                appointment={appointment}
                removeAppointment={removeAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
