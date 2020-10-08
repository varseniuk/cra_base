import React from 'react';
import { Filters } from './Components/Filters/Filters';
import { Table } from './Components/Table/Table';
import './App.css';


function App() {
  return (
    <div className="App">
      <Table />
      <Filters />
    </div>
  );
}

export default App;
