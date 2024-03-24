

import React from 'react';

import {BrowserRouter as Router,
  Routes,
  Route,
  Link} from "react-router-dom";
import Hometest from './components/Hometest/Hometest';

function App() {
  return (
   
    <Router>
      <Routes>
      <Route path='/' element={<Hometest/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
