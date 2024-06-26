import React from 'react';
import '../css/Card.css';
import Button from './Button';

const Card = ({ mascota, propietario, fecha, hora, sintomas, onDelete }) => (
  <div className="cita">
    <p>Mascota: <span>{mascota}</span></p>
    <p>Dueño: <span>{propietario}</span></p>
    <p>Fecha: <span>{fecha}</span></p>
    <p>Hora: <span>{hora}</span></p>
    <p>Sintomas: <span>{sintomas}</span></p>
    <Button className="eliminar u-full-width" onClick={onDelete}>Eliminar ×</Button>
  </div>
);

export default Card;
