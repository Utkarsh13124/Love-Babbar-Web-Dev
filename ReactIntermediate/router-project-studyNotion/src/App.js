import "./App.css"
import {Route , Routes} from "react-router-dom"
import Navbar from "./Components/Navbar"
import { useState } from "react"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Dashboard from "./pages/Dashboard"


function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <div>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}/>

            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path="/dashboard" element={<Dashboard />} />

            </Routes>
        </div>
    )
}

export default App; 