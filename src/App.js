import React, { useState } from 'react';
import Form from './components/Form';

function App() {
  // array citas
  const [citas, setNuevasCitas] = useState([]);

  // función manejadora citas
  // aqui hacemos spread de citas para que en caso de que haya
  // mas de 1 cita guardada no las machaque
  const crearCita = (cita) => {
    setNuevasCitas([...citas, cita]);
  };

  return (
    <>
      <h1>Clínica veterinaria “Petting my pet”</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form crearCita={crearCita} />
          </div>
          <div className="one-half column"></div>
        </div>
      </div>
    </>
  );
}

export default App;
