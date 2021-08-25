import axios from 'axios';

const ValidateLogin = async (credentials) => {
    try {
    const response = await axios.post('http://challenge-react.alkemy.org/', credentials)
    const token = response.data.token
    localStorage.setItem('token', token)
    // si todo ok, refresca pagina
    window.location.reload();

    } catch (error) {
      console.error(error)
    }
}


export default ValidateLogin;
