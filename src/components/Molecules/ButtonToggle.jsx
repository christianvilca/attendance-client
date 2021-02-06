import React, {useState} from 'react'

const ButtonToggle = ({ className="", children }) => {
	const [activated, setActivated] = useState(false);
  return (
    <button
      className={`btn ${className}`}
      aria-pressed={activated ? "true" : "false"}
      onClick={() => setActivated(!activated)}
    >
      {children}
    </button>
  );
}

export default ButtonToggle
