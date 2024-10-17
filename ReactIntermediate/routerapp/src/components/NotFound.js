import React from 'react'
import { useNavigate } from 'react-router-dom';
const NotFound = () => {
    const navigate = useNavigate();
    const backHandler = () => {
      navigate(-1);
    };
  return (
    <div>
        <div>NotFound</div>
        <button onClick={backHandler}>Go Back</button>
    </div>
  )
}

export default NotFound;