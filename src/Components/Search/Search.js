import Nav from '../Nav/Nav'
import Results from './Results'
import { useState} from 'react'
import { Redirect } from 'react-router';
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import {validLength, noRepeat, validAlignment} from './ValidHero'
import './Search.css'
const Search = () => {
    const [heroes, setHeroes] = useState([])
    const [validSelection, setValidSelection] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')


    // check if team is already full
    const team = JSON.parse(localStorage.getItem('team'))
    if(team.length === 6) {
      return <Redirect to="/" />
    }
    //check if not logged in
    const token = localStorage.getItem('token')
    if(!token){
      return <Redirect to="/login" />
    }

  const searchHero = async (value) => {
    if (value) {
    const results = await axios.get(`https://www.superheroapi.com/api.php/4333347540058740/search/${value}`)
    // si se encuentran resultados, se muestran
    if(results.data.results){
    setHeroes(results.data.results)
    setErrorMessage('')
    // si no se encuentran, se muestra error
   } else {
    setHeroes([])
    setErrorMessage('invalidSearch')
   }
}
}
// funcion para guardar heroes seleccionados en localStorage
const addHero = (hero) => {
  if(errorMessage) {
    setErrorMessage('');
    console.log(errorMessage)
  }
  let team 
  if (localStorage.getItem('team') === null) {
    team = [];
  }else {
    team = JSON.parse(localStorage.getItem('team'));
  }
  // asignacion de valor error message
  validAlignment(team, hero) || setErrorMessage('invalidAlignment')

  noRepeat(team, hero) || setErrorMessage('invalidRepeat')

  validLength(team) || setErrorMessage('invalidLength')

  if (validLength(team) && noRepeat(team, hero) && validAlignment(team, hero)) {
    setValidSelection(true);
    team.push(hero);
    localStorage.setItem('team', JSON.stringify(team))
  } else {
    setValidSelection(false)
  }
}
// si no esta logeado, redirect to login


    return (
        <div>
          <Nav/>
          <Formik
            initialValues={{ search: ""}}
            onSubmit={(value) => {searchHero(value.search)}}
          >

          <Form className="row g-3 align-items-center searchContainer">
            <div className="col-auto">
              <label htmlFor="search" className="form-label">Buscar SuperHero</label>
              </div>
              <div className="col-auto">
              <Field name="search" type="text" className="form-control"/>
              </div>
              <div className="col-auto">
              <button type="submit" className="btn btn-dark">Buscar</button>
              </div>
            </Form>
          </Formik>
          <Results heroes={heroes} addHero={addHero}/>
          
          { errorMessage &&
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
            {errorMessage}
            <button type="button" className="btn-close" data-bs-dismiss="alert" 
            aria-label="Close" onClick={() => setErrorMessage('')}></button>
            </div>}
         { validSelection &&
            <div className="alert alert-success alert-dismissible fade show" role="alert">
          Agregado al team
          <button type="button" className="btn-close" data-bs-dismiss="alert" 
            aria-label="Close" onClick={() => setValidSelection(false)}></button>
          </div>}
          
        </div>
  );
}
export default Search


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat