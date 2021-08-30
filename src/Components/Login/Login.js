import { useState } from 'react'
import axios from 'axios';
import { Redirect } from 'react-router-dom'
import { Formik, Field, Form } from "formik";
import './Login.css';

const Login = () => {
    //state
    const [errorMessage, setErrorMessage] = useState(false)
    const [sucessfullLogin, setSucessfullLogin] = useState(false)

    // si ya esta logeado, carga home
    const token = localStorage.getItem('token')

    if(token){
      return <Redirect to="/" />
    }
    //////

    //fetch token function
    const ValidateLogin = async (credentials) => {
      try {
      const response = await axios.post('http://challenge-react.alkemy.org/', credentials)
      const token = response.data.token
      localStorage.setItem('token', token);
      // si todo ok, redirecciona a home
      setSucessfullLogin(true)
      //
  
      } catch {
        setErrorMessage(true)
      }
    }

    //validate form functions
    const validateEmail = (value) => {
        let error;
        if (!value) {
          error = 'Requerido';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
          error = 'Email invalido';
        }
        return error;
      }
    const validatePassword = (value) => {
        let error;
        if(!value) {
            error = 'Requerido';
        }
        return error
    }

    return (
    <div>
      <div id="form">
        <h1 className="title">SuperHero App</h1>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values) => {ValidateLogin(values)}}
        >
          {({ errors, touched }) => (<Form>
          <div className="mb-3">
           <label htmlFor="email" className="form-label">Email</label>
            <Field name="email" type="email" className="form-control" validate={validateEmail}/>
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            </div>
            <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <Field name="password" type="password" className="form-control" validate={validatePassword}/>
            {errors.password && touched.password ? <div>{errors.password}</div> : null}
            </div>
            <button type="submit" className="btn btn-dark">Enviar</button>
          </Form>
          )}
        </Formik>
      </div>
      { errorMessage &&
      <div className="alert alert-danger alert-dismissible fade show" role="alert">
      Email o contraseña incorrectos.
      <button type="button" className="btn-close" data-bs-dismiss="alert" 
      aria-label="Close" onClick={() => setErrorMessage(false)}></button>
      </div>}
      { sucessfullLogin &&
        <Redirect to="/" />}
    </div>
)
}
export default Login