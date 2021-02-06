import React from 'react'

//import Icon from '../Atoms/Icon.jsx';
//<Icon svg="right" classes="svg-icon" title="Facebook"/><span>Danos like en facebook</span>

const Button = ({ className ="", children, ...props }) => {
  return (
    <button
      className={`btn ${className}`}
			{...props}
    >
      {children}
    </button>
  );
};

export default Button
