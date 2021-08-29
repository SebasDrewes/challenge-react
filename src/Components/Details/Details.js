import Nav from '../Nav/Nav'
import {Redirect} from 'react-router-dom'
import { useState, useEffect} from 'react'
import axios from 'axios';
import'./Details.css';
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
             <div key={`details${heroDetails.id}`} id="detailsCard">
             <img src={heroDetails.image.url} alt={heroDetails.name} id="detailsImg" draggable={false}/>
             <div id="details">
             <h1 id="heroTitle">{heroDetails.name}</h1>
             <hr/>
             <p className="info"><strong>Peso:</strong> {heroDetails.appearance.weight[1]}</p>
             <p className="info"><strong>Altura:</strong> {heroDetails.appearance.height[1]}</p>
             <p className="info"><strong>Nombre completo:</strong> {heroDetails.biography["full-name"]}</p>
             <p className="info"><strong>Alias:</strong> {heroDetails.biography["aliases"].join(", ")}</p>
             <p className="info"><strong>Color de ojos:</strong> {heroDetails.appearance["eye-color"]}</p>
             <p className="info"><strong>Color de pelo:</strong> {heroDetails.appearance["hair-color"]}</p>
             <p className="info"><strong>Lugar de trabajo:</strong> {heroDetails.work.base}</p>
             </div>
            </div>}
        </div>
        );
    };

export default Details