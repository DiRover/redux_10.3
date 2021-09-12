import React from 'react';
import logo from './logo.svg';
import './App.css';
import ServiceFilter from "./components/ServiceFilter";
import ServiceAdd from "./components/ServiceAdd";
import ServiceList from "./components/ServiceList";

function App() {
  return (
    <div className="App">
      <ServiceFilter />
      <ServiceAdd />
      <ServiceList />
    </div>
  );
}

export default App;
