// src/App.js
import { useState } from 'react';
import './global.css';
import Form from './components/Form';
import Card from './components/Card';

const App = () => {
  const [citas, setCitas] = useState([]);

  const addCita = (cita) => {
    setCitas([...citas, cita]);
  };

  const deleteCita = (index) => {
    const newCitas = [...citas];
    newCitas.splice(index, 1);
    setCitas(newCitas);
  };

  return (
    <div className="container">
      <h1>ADMINISTRADOR DE PACIENTES</h1>
      <div className="row">
        <div className="one-half column">
          <h2>Crear mi Cita</h2>
          <Form onSubmit={addCita} />
        </div>
        <div className="one-half column">
          <h2>Administra tus citas</h2>
          {citas.map((cita, index) => (
            <Card key={index} {...cita} onDelete={() => deleteCita(index)} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
