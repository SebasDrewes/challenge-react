import { useState } from 'react'
import { Formik, Field, Form } from "formik";
import { Link } from 'react-router-dom'
import axios from 'axios';
import './Search.css'
const Search = () => {
    const [heroes, setHeroes] = useState([])

  const searchHero = async (value) => {
    if (value) {
    const results = await axios.get(`https://www.superheroapi.com/api.php/4333347540058740/search/${value}`)
    setHeroes(results.data.results)
    console.log(heroes)
}
}
// funcion para guardar heroes seleccionados en localStorage
const addHero = (hero) => {
  let team 
  if (localStorage.getItem('team') === null) {
    team = [];
  }else {
    team = JSON.parse(localStorage.getItem('team'));
  }
  team.push(hero)
  alert(team)
  localStorage.setItem('team', JSON.stringify(team))
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
        </div>
  );
}
export default Search


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat