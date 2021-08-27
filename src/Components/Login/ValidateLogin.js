import axios from 'axios';
import { useState } from 'react';

const ValidateLogin = async (credentials) => {
  const [errorMessage, setErrorMessage] = useState(null)
  setErrorMessage('123')
    try {
    const response = await axios.post('http://challenge-react.alkemy.org/', credentials)
    const token = response.data.token
    localStorage.setItem('token', token)
    // si todo ok, refresca pagina
    window.location.reload();

    } catch (error) {
      console.log(errorMessage)
    }
}


export default ValidateLogin;
