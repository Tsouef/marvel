import React from 'react';

const TextInput = ({
  name,
  id,
  className,
  onChange,
  type,
  placeholder,
  value
}) => (
  <input
    id={id}
    className={className}
    name={name}
    onChange={onChange}
    type={type}
    placeholder={placeholder}
    value={value}
  />
);

export default TextInput;
