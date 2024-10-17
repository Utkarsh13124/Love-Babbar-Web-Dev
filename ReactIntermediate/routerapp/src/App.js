import logo from './logo.svg';
import './App.css';
import { Routes, Route } from'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/"  element={<div><Home/></div>} />
        <Route path="/about" element={<div><About/></div>} />
        <Route path="/support" element={<div><Support/></div>} />
        <Route path="/Labs" element={<div><Labs/></div>} />
        <Route path="*" element={<div><NotFound/></div>} />
      </Routes>
    </div>
  );
}

export default App;
