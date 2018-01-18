import React from 'react';

const Button = ({
  className,
  type,
  name,
  action,
  onClick,
  children,
  disabled = false
}) => {
  return (
    <button
      className={className}
      type={type}
      name={action}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
