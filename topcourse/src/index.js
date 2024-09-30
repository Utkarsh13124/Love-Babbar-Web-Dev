import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <div>
   <App />  
   <ToastContainer/>
   {/* har ek toast ko show krne ke liye ek toast container bnana padega. 
   iske liye mujhe ToastContainer and uska css package import krna padega */}
 </div>
);


