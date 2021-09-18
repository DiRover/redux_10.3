import React from 'react';
import './App.css';
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";
import UnionComponent from './components/UnionComponent';

function App() {
  return (
    <div className="main App">
      <UnionComponent />
    </div>
  );
}

export default App;
