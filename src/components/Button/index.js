import React from 'react';

//Stylings
import './Button.css';

function Button({ text, clickHandler }) {
  return (
    <button className="buttonComponentPrimary" onClick={clickHandler}>
      {text}
    </button>
  );
}

export default Button;
