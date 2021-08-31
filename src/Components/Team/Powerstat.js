import './Powerstat.css'

const Powerstat = ({hero}) => {
    return (
        <ul className="dropdown-menu powerStatDropdown">
        <div className="progress-bar" role="progressbar" 
        style={{width:`${hero.powerstats.combat}%`}}
        aria-valuenow={hero.powerstats.combat} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Combate: </strong>{hero.powerstats.combat}</li>
        </div>
        <div className="progress-bar" role="progressbar" 
        style={{width:`${hero.powerstats.durability}%`}}
        aria-valuenow={hero.powerstats.durability} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Durabilidad: </strong>{hero.powerstats.durability}</li>
        </div>
        <div className="progress-bar" role="progressbar" 
        style={{width:`${hero.powerstats.intelligence}%`}}
        aria-valuenow={hero.powerstats.intelligence} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Inteligencia: </strong>{hero.powerstats.intelligence}</li>
        </div>
        <div className="progress-bar" role="progressbar" 
        style={{width:`${hero.powerstats.power}%`}}
        aria-valuenow={hero.powerstats.power} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Poder: </strong>{hero.powerstats.power}</li>
        </div>
        <div className="progress-bar" role="progressbar" 
        style={{width:`${hero.powerstats.speed}%`}}
        aria-valuenow={hero.powerstats.speed} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Velocidad: </strong>{hero.powerstats.speed}</li>
        </div>
        <div className="progress-bar " role="progressbar" 
        style={{width:`${hero.powerstats.strength}%`}}
        aria-valuenow={hero.powerstats.strength} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Fuerza: </strong>{hero.powerstats.strength}</li>
        </div>
        </ul>
    )
}
export default Powerstat