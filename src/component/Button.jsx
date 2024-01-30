import React from 'react'


function Button(props) {
  return (
    <button id={props.clas} className='btn' onClick={props.onClick}>
      {props.value}
    </button>
  );
};

export default Button;