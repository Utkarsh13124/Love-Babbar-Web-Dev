import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../assets/Logo.svg"
import toast from 'react-hot-toast'

const Navbar = (props) => {
    let isLoggedIn = props.isLoggedIn;
    let setIsLoggedIn = props.setIsLoggedIn;

    function loginHandler(){
        toast.success(isLoggedIn ? "Logged Out " : "Logged In");
        setIsLoggedIn(!isLoggedIn);
    }
  return (
    <div className='flex'>
        
        <Link to="/">
        {/* created a img which on clicking will direct us towards the home page */}
            <img src={logo} alt='Logo' width={160} height={32} loading='lazy'/>
        </Link> 

        <nav className='flex gap-3' > 
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/">About</Link>
                </li>
                <li>
                    <Link to="#">Contact</Link>
                </li>
            </ul>
        </nav>
        
        {/* Login - SignUp - Logout - Dashboard 
            neeche humne isLoggedIn ka condition lagaya hi , jab ye loggedin ke basis pr conditions lagayi hi
            that's wy we uses curly bracket to to write condition*/ }
        <div>
            {   !isLoggedIn &&
                <Link to="/login">
                    <button onClick={loginHandler}>
                        Login
                    </button>
                </Link>
            }
            {   !isLoggedIn &&
                <Link to="/signup">
                    <button onClick={loginHandler}>
                        Signup
                    </button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/">
                    <button onClick={loginHandler}>
                        Logout
                    </button>
                </Link>
            }
            {   isLoggedIn &&
                <Link to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            }
        </div>

    </div>
  )
}

export default Navbar