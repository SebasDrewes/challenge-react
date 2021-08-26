import { useState } from 'react'
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import './Search.css'
const Search = ({team, setTeam}) => {
    const [heroes, setHeroes] = useState([])

  const searchHero = async (value) => {
    if (value){
    const results = await axios.get(`https://www.superheroapi.com/api.php/4333347540058740/search/${value}`)
    setHeroes(results.data.results)
}
}
const addHero = (e, hero) => {
  e.preventDefault();
  setTeam(team => [...team, hero])
}
const displaySearchHeroes = () => {
    const fetchedHeroes = [];
    if(heroes !== undefined)
    for (let i = 0; i < heroes.length; i += 1) {
        fetchedHeroes.push(
            <div key={heroes[i].id} className="col heroCard"> 
                <h1>{heroes[i].name}</h1>
                <img src={heroes[i].image.url} alt={heroes[i].name}/>
                <button onClick={(e) => addHero(e, heroes[i])}>Add Hero</button>
            </div>
        )
    }
    return fetchedHeroes || null

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
          {displaySearchHeroes()}
          </div>
        </div>
  );
}
export default Search


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat