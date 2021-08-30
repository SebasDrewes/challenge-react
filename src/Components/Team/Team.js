import { Link } from 'react-router-dom';
import './Team.css';
const Team = ({team, setTeam}) => {

    const deleteHero = (id) => {
        const newTeam = (team.filter(hero => hero.id !== id))
        setTeam(newTeam)
        localStorage.setItem('team', JSON.stringify(newTeam))
      }
    
    return (
    <div id="team">
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
    )
}
export default Team