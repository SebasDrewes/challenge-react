import { useState, useEffect } from 'react'
import { Formik, Field, Form } from "formik";
import { Link } from 'react-router-dom'
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
          <div className="row">
            {heroes ? heroes.map(hero => {
              return (
              <div key={hero.id} className="col heroCard"> 
              <h1>{hero.name}</h1>
              <img src={hero.image.url} alt={hero.name}/>
              <button onClick={() => addHero(hero)}>Add Hero</button>
              <Link to={`/search/${hero.id}`}>Details</Link>
              </div>)
              }): null}
          </div>
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