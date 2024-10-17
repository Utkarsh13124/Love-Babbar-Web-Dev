import './App.css';
import { Routes, Route, NavLink } from'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Labs from './components/Labs';
import Support from './components/Support';
import NotFound from './components/NotFound';
import { Link } from 'react-router-dom';
import MainHeader from './components/MainHeader';
function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            //Using Navlink provides us active class to us , while in link we have no active class provided, so using navlink gives us active class which we could use to colour the current active routes.
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/support'>Support</NavLink>
          </li>
          <li>
            <NavLink to='/labs'>Labs</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/"  element={<div><MainHeader/></div>} >
          <Route index element={<div><Home/></div>}/>
          <Route path="/about" element={<div><About/></div>} />
          <Route path="/support" element={<div><Support/></div>} />
          <Route path="/Labs" element={<div><Labs/></div>} />
          <Route path="*" element={<div><NotFound/></div>} />
        </Route>
        
      </Routes>
    </div>
  );
}

export default App;
