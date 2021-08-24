import { useState } from 'react'
import axios from 'axios';

const ValidateLogin = async (credentials) => {
    try {
        console.log(credentials)
    const response = await axios.post('http://challenge-react.alkemy.org/', credentials)
    const token = response.data.token
    localStorage.setItem('token', token)
    console.log(token)
    } catch (error) {
      console.error(error)
    }
}


export default ValidateLogin;
