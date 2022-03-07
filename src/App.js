import React from 'react';
import Navbar from './Navbar';
import Home from "./Home"
import About from './About';
import Dashboard from './Dashboard';
import { BrowserRouter,Route,Routes } from 'react-router-dom';


 const App = () => {
  return (
<div>
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route exact path="/:name" element={<Home />}></Route>   
        <Route exact path="/About/:fullname" element={<About />}></Route>
        <Route exact path="/DaShboard/:content" element={<Dashboard />}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App;
