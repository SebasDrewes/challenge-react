import Nav from '../Nav/Nav'
import {Redirect} from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios';
const Details = ({match}) => {

    const token = localStorage.getItem('token')

    const [heroDetails, setHeroDetails] = useState([])

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
       const fetchedData = await axios.get(`https://www.superheroapi.com/api.php/4333347540058740/${match.params.id}`)
       setHeroDetails(fetchedData.data)
       console.log(fetchedData.data)
    }

    if(!token){
        return <Redirect to="/login" />
    }

    return (
        <div>
            <Nav/>
            {heroDetails.response && 
             <div key={`details${heroDetails.id}`} className="col heroCard">
             <img src={heroDetails.image.url} alt={heroDetails.name}/>
             <h1>Peso: {heroDetails.appearance.weight[1]}</h1>
             <h1>Altura: {heroDetails.appearance.height[1]}</h1>
             <h1>Nombre completo: {heroDetails.biography["full-name"]}</h1>
             <h1>Alias: {heroDetails.biography["aliases"].join(", ")}</h1>
             <h1>Color de ojos: {heroDetails.appearance["eye-color"]}</h1>
             <h1>Color de pelo: {heroDetails.appearance["hair-color"]}</h1>
             <h1>Lugar de trabajo: {heroDetails.work.base}</h1>
            </div>}
        </div>
        );
    };

export default Details