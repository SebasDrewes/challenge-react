import { useState } from 'react'
import { Redirect} from 'react-router-dom'
import { Formik, Field, Form } from "formik";
import axios from 'axios';
import './Search.css'
const Search = ({authorized}) => {
    const [heroes, setHeroes] = useState([])

    if(!authorized){
    return <Redirect to="/login" /> }

  const searchHero = async (value) => {
    if (value){
    const results = await axios.get(`https://www.superheroapi.com/api.php/4333347540058740/search/${value}`)
    setHeroes(results.data.results)
}
}
const displaySearchHeroes = () => {
    console.log(heroes)
    const fetchedHeroes = [];
    if(heroes !== undefined)
    for (let i = 0; i < heroes.length; i += 1) {
        fetchedHeroes.push(
            <div key={heroes[i].id} className="col heroCard"> 
                <h1>{heroes[i].name}</h1>
                <img src={heroes[i].image.url} alt={heroes[i].name}/>
                <button>Add Hero</button>
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