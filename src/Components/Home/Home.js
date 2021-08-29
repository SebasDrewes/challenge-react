import { Redirect, Link } from 'react-router-dom';
import Nav from '../Nav/Nav'
import './Home.css'
const Home = () => {
  const token = localStorage.getItem('token')

  if(!token){
    return <Redirect to="/login" />
  }
  const team = JSON.parse(localStorage.getItem('team'))

  return(
    <div>
    <Nav/>
    <div id="home">
    <div id="header">
      <h1 id="teamTitle">Tu equipo</h1>
      <Link to="/search">
      <button className="btn addHero" >Agregar Hero</button>
      </Link>
    </div>
      <div id="team">
      {team ? team.map(hero => {
        return (
          <div key={`team${hero.id}`} className="teamMember"> 
          <div className="heroNameContainer">
            <h1 className="heroName">{hero.name}</h1>
          </div>
            <img src={hero.image.url} alt={hero.name} draggable={false} className="teamMemberImg"/>
            <div className="buttons">
             <div className="btn-group dropup">
            <button type="button" className="btn btn-dark dropdown-toggle btnTeam" data-bs-toggle="dropdown" aria-expanded="false">
             Powerstats
            </button>
              <ul className="dropdown-menu">
                <li className="powerstat"><strong>Combate: </strong>{hero.powerstats.combat}</li>
                <li className="powerstat"><strong>Durabilidad: </strong>{hero.powerstats.durability}</li>
                <li className="powerstat"><strong>Inteligencia: </strong>{hero.powerstats.inteligence}</li>
                <li className="powerstat"><strong>Poder: </strong>{hero.powerstats.power}</li>
                <li className="powerstat"><strong>Velocidad: </strong>{hero.powerstats.speed}</li>
                <li className="powerstat"><strong>Fuerza: </strong>{hero.powerstats.strength}</li>
              </ul>
             </div>
            <Link to={`/${hero.id}`}><button className="btn btn-dark btnTeam" >Detalles</button></Link>
            <button className="btn btn-dark btnTeam" >Eliminar</button>
            </div>
          </div>)
      }): null}
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