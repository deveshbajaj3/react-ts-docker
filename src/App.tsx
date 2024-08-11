import React from 'react';
import './App.css';
import Counter from './components/Counter';
import Header from './components/Header';
import Form from './components/Form';

function App() {
  const performance= [
    {
      year:2022,
      grade:'A'
    },
    {
      year:2021,
      grade:'B'
    },
    {
      year:2023,
      grade:'A'
    },
  ]
  const counter = 10;
  const personName = {
    firstName:'Devesh',
    lastName:'Bajaj'
  }
  return (
    <div className="App">
      <Form />
     <Counter performance={performance} 
     count={counter} name="Devesh" email="devesh.email.com" personName={personName}
     ><Header /></Counter>
    </div>
  );
}

export default App;
