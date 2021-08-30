import { useState } from 'react'
import { Redirect, Link } from 'react-router-dom';
import Nav from '../Nav/Nav'
import './Home.css'
const Home = () => {
  const token = localStorage.getItem('token')
  const [team, setTeam] = useState(JSON.parse(localStorage.getItem('team')))
  if(!token){
    return <Redirect to="/login" />
  }

  const deleteHero = (id) => {
    const newTeam = (team.filter(hero => hero.id !== id))
    setTeam(newTeam)
    localStorage.setItem('team', JSON.stringify(newTeam))
  }

  return(
    <div>
    <Nav/>
    <div id="home">
    <div id="header">
      <h1 id="teamTitle">Tu equipo</h1>
      {team && team.length !== 6 ?
      <Link to="/search">
      <button className="btn addHero" >Agregar Hero</button>
      </Link> : null}
    </div>
      <div id="team">
        {console.log(team)}
      {team && team.length ? team.map(hero => {
        return (
          <div key={`team${hero.id}`} className="teamMember"> 
          <div className="heroNameContainer">
            <h1 className="heroName">{hero.name}</h1>
          </div>
            <img src={hero.image.url} alt={hero.name} draggable={false} className="teamMemberImg"/>
            <div className="buttons btn-group dropdown dropup">
            <button type="button" className="btn btn-dark dropdown-toggle btnTeam" data-bs-toggle="dropdown" aria-expanded="false">
             Powerstats
            </button>
              <ul className="dropdown-menu">
                <li className="powerstat"><strong>Combate: </strong>{hero.powerstats.combat}</li>
                <li className="powerstat"><strong>Durabilidad: </strong>{hero.powerstats.durability}</li>
                <li className="powerstat"><strong>Inteligencia: </strong>{hero.powerstats.intelligence}</li>
                <li className="powerstat"><strong>Poder: </strong>{hero.powerstats.power}</li>
                <li className="powerstat"><strong>Velocidad: </strong>{hero.powerstats.speed}</li>
                <li className="powerstat"><strong>Fuerza: </strong>{hero.powerstats.strength}</li>
              </ul>
            <Link to={`/${hero.id}`}><button className="btn btn-dark btnTeam" >Detalles</button></Link>
            <button className="btn btn-dark btnTeam" onClick={() => deleteHero(hero.id)}>Eliminar</button>
            </div>
          </div>)
      })  :         <h1 id="noTeam">Tu equipo esta vacio, agrega heroes! ↑</h1>}
          </div>
        </div>
    </div>
  );
}
export default Home


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat

/*powerstats:
combat: "90"
durability: "55"
intelligence: "81"
power: "63"
speed: "29"
*/