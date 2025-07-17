import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/navbar';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Navbar />
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Zy
        </a>
      </header>
{/*}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<Productos />} />
          <Route path="/contact" element={<Sesion />} />
        </Routes>{*/}


    </div>
    </Router>
  );
}

export default App;
