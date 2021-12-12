import React from 'react';
import Header from "../Header";
import Tabs from "../Tabs";
import Filter from '../Filter/Filter';
import './App.css';

const App = ({ store }) => {
  return (
    <div className='main-container'>
      <Header></Header>
      <div className='main-content'>
        <Filter></Filter>
        <Tabs></Tabs>
      </div>
    </div>
  );
};

export default App;