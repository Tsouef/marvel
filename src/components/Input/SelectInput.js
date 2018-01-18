import React from 'react';

const SelectInput = ({
  name,
  className,
  onSelectChange,
  type,
  placeholder,
  value,
  children
}) => {
  return (
    <select className={className} onChange={onSelectChange}>
      {children}
    </select>
  );
};

export default SelectInput;
