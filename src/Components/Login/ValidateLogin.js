import axios from 'axios';

const ValidateLogin = async (credentials, history) => {
    try {
    const response = await axios.post('http://challenge-react.alkemy.org/', credentials)
    const token = response.data.token
    localStorage.setItem('token', token)
    history.push('/home')
    } catch (error) {
      console.error(error)
    }
}


export default ValidateLogin;
