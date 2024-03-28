import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'; // Import BrowserRouter
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router> 
        <Header />
      </Router>
    </div>
  );
}

export default App;
