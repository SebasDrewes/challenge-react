import Nav from '../Nav/Nav'
import Results from './Results'
import { useState} from 'react'
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import {validLength, noRepeat, validAlignment} from './ValidHero'
import './Search.css'
const Search = () => {
    const [heroes, setHeroes] = useState([])
    const [validSelection, setValidSelection] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')

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
    return (
        <div>
          <Nav/>
          <Formik
            initialValues={{ search: ""}}
            onSubmit={(value) => {searchHero(value.search)}}
          >
              <Form>
            <div className="mb-3">
             <label htmlFor="search" className="form-label">Buscar SuperHero</label>
              <Field name="search" type="text" className="form-control"/>
              </div>
              <button type="submit" className="btn btn-dark">Ingresar</button>
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