import React from 'react'
import { useNavigate } from 'react-router-dom';




const Labs = () => {

    const navigate = useNavigate();
    const clickHandler = () => {
        navigate('/about');
    }

  return (
    <div>
        <button onClick={clickHandler} >Go to About</button>
        <div>Labs</div>
    </div>
  )
}

export default Labs;