import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'

function App() {

  const [imageURL, setImageURL] = useState('')
  const [name, setName] = useState('mewtwo')

  function update() {
    axios.get('/pokemon-img/' + name)
    .then((response, err) => {
      if(err) {
        console.log('there weas an earra', err)
        return;
      }
      setImageURL(response.data)
    })
  }

  function updateName(event) {
    console.log(event.target.value)
    setName(event.target.value)
  }

  function submit(event) {
    event.preventDefault();
    update()
  }

  return (
    <div className="App">
      
      <button onClick={update}>Hit Endpoint</button>
      <form onSubmit={submit}>
          <label>
            Poke-Dude:
            <input type="text" onChange={updateName} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      <img alt='nothin' src={imageURL}></img>
    </div>
  );
}

export default App;
