import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddResult from './AddResult';
import ViewResult from './ViewResult';
import Header from './Header';
import './App.css';

function App() {
  const [results, setResults] = useState([]);

  const addResult = (result) => {
    const newResult = [result, ...results];
    setResults(newResult);
  };

  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<AddResult addResult={addResult} results={results}/>} />
          <Route path="/viewresult" element={<ViewResult results={results} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
