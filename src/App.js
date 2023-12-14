import logo from './logo.svg';
import { Link } from "react-router-dom";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';

import './index.scss';
import './App.scss';
import FrontEnd from './pages/Frontend/FrontEnd';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Frontend" element={<FrontEnd />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;