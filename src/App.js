import React, { useState, useEffect} from 'react'
import axios from 'axios';
import './App.css';
//import { useField } from 'formik';


function App() {
  const [data, setData] = useState([])

  const validateLogin = async () => {
    const credentials = {
      email: 'challenge@alkemy.org',
      password: 'react'
    }
    const response = await axios.post('http://challenge-react.alkemy.org/', credentials)
    setData(response)
  }
  useEffect (() => {
    validateLogin();
  }, [])
  return (
    <div className="App">
      <button onClick={() => console.log(data)}>console</button>
    </div>
  );
}

export default App;
