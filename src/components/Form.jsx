import React, { useState } from 'react';
import '../css/Form.css';
import TextInput from './TextInput';
import Button from './Button';

const Form = ({ onSubmit }) => {
  const [mascota, setMascota] = useState('');
  const [propietario, setPropietario] = useState('');
  const [fecha, setFecha] = useState('');
  const [hora, setHora] = useState('');
  const [sintomas, setSintomas] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ mascota, propietario, fecha, hora, sintomas });
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextInput label="Nombre Mascota" value={mascota} onChange={setMascota} />
      <TextInput label="Nombre Dueño" value={propietario} onChange={setPropietario} />
      <TextInput type="date" label="Fecha" value={fecha} onChange={setFecha} />
      <TextInput type="time" label="Hora" value={hora} onChange={setHora} />
      <div>
        <label>Sintomas</label>
        <textarea name="sintomas" className="u-full-width" value={sintomas} onChange={(e) => setSintomas(e.target.value)}></textarea>
      </div>
      <Button type="submit" className="u-full-width button-primary">Agregar Cita</Button>
    </form>
  );
};

export default Form;
