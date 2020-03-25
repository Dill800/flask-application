import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const [state, setState] = useState('empty message')

  function update() {
    axios.get('/endpoint')
    .then((response) => {
      console.log(response)
    })
  }

  return (
    <div className="App">
      <p>{state}</p>
      <button onClick={update}>Hit Endpoint</button>
    </div>
  );
}

export default App;
