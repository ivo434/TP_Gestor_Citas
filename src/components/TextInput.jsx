import React from 'react';
import '../css/TextInput.css';

const TextInput = ({ type = "text", label, value, onChange }) => (
  <div>
    <label>{label}</label>
    <input 
      type={type}
      className="u-full-width"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);

export default TextInput;
