import React from 'react';

function Card(props) {
  return (
    <div style={props.styles} className={props.additionalClass}>
      {props.children}
    </div>
  );
}

export default Card;
