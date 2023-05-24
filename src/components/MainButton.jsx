import React from 'react'
import './MainButton.css'

const MainButton = ({onClick, children}) => {
  return (
      <button onClick={onClick} className='main-button'>
      {children}
      </button>
  );
};

export default MainButton;



