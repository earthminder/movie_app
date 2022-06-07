
import React from 'react';
import Home from './routes/Home'
import './App.css';
import {BrowserRouter, HashRouter, Routes, Route} from 'react-router-dom';
import About from './routes/About';
import Navigation from './components/Navigation';
import Detail from './routes/Detail';

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path="/" exact={true} element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="movie-detail" element={<Detail/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
