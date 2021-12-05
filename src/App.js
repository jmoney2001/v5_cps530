import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Page2 from './Page2';
import Page3 from './Page3';
import Page4 from './Page4';
import Page5 from './Page5';
import Page6 from './Page6';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/page2" exact element={<Page2 />} />
        <Route path="/page3" exact element={<Page3 />} />
        <Route path="/page4" exact element={<Page4 />} />
        <Route path="/page5" exact element={<Page5 />} />
        <Route path="/page6" exact element={<Page6 />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
