import React from 'react';

const SelectInput = ({
  name,
  className,
  onSelectChange,
  type,
  placeholder,
  value,
  children
}) => (
  <select className={className} onChange={onSelectChange}>
    {children}
  </select>
);

export default SelectInput;
