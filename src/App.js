import React, { useState } from 'react';
import Form from './components/Form';
import Cita from './components/Cita';

function App() {
  // array citas
  const [citas, setNuevasCitas] = useState([]);

  // función manejadora citas
  // aqui hacemos spread de citas para que en caso de que haya
  // mas de 1 cita guardada no las machaque
  const crearCita = (cita) => {
    setNuevasCitas([...citas, cita]);
  };

  // función que elimina una cita por su ID
  const eliminarCita = (id) => {
    const nuevasCitas = citas.filter((cita) => cita.id !== id);
    setNuevasCitas(nuevasCitas);
  };

  // mensaje condicional
  const titulo = citas.length === 0 ? 'No hay citas' : 'Administra tus citas';

  return (
    <>
      <h1>Clínica veterinaria “Petting my pet”</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form crearCita={crearCita} />
          </div>
          <div className="one-half column">
            <h2>{titulo}</h2>
            {citas.map((cita) => (
              <Cita key={cita.id} cita={cita} eliminarCita={eliminarCita} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
