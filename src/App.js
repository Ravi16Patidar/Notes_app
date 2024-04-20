import { Fragment } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EntryPage from './Components/EntryPage/EntryPage';
import Dashboard from './Components/Dashboard/Dashboard';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EntryPage />}/>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Routes> 
    </Router>
  );
}

export default App;
