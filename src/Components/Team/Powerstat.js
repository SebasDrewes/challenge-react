import "./Powerstat.css";

<<<<<<< HEAD
const Powerstat = ({ hero }) => {
  // si la api no trae data, devuelve no disponible
  const validStat = (powerStat) => {
    if (powerStat !== "null") {
      return powerStat;
    }
    return "No Disponible";
  };
  return (
    <ul className="dropdown-menu powerStatDropdown">
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${hero.powerstats.combat}%` }}
        aria-valuenow={hero.powerstats.combat}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Combate: </strong>
          {validStat(hero.powerstats.combat)}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${hero.powerstats.durability}%` }}
        aria-valuenow={hero.powerstats.durability}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Durabilidad: </strong>
          {validStat(hero.powerstats.durability)}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${hero.powerstats.intelligence}%` }}
        aria-valuenow={hero.powerstats.intelligence}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Inteligencia: </strong>
          {validStat(hero.powerstats.intelligence)}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${hero.powerstats.power}%` }}
        aria-valuenow={hero.powerstats.power}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Poder: </strong>
          {validStat(hero.powerstats.power)}
        </li>
      </div>
      <div
        className="progress-bar"
        role="progressbar"
        style={{ width: `${hero.powerstats.speed}%` }}
        aria-valuenow={hero.powerstats.speed}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Velocidad: </strong>
          {validStat(hero.powerstats.speed)}
        </li>
      </div>
      <div
        className="progress-bar "
        role="progressbar"
        style={{ width: `${hero.powerstats.strength}%` }}
        aria-valuenow={hero.powerstats.strength}
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <li className="powerstat">
          <strong>Fuerza: </strong>
          {validStat(hero.powerstats.strength)}
        </li>
      </div>
    </ul>
  );
};
export default Powerstat;
=======
const Powerstat = ({hero}) => {
    // si la api no trae data, devuelve no disponible
    const validStat = (powerStat) => {
        if(powerStat !== 'null') {
            return powerStat
        } return 'No Disponible'
    }
    return (
        <ul className="dropdown-menu powerStatDropdown">
        <div className="progress-bar" role="progressbar" 
        style={{width:`${hero.powerstats.combat}%`}}
        aria-valuenow={hero.powerstats.combat} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Combate: </strong>{validStat(hero.powerstats.combat)}</li>
        </div>
        <div className="progress-bar" role="progressbar" 
        style={{width:`${hero.powerstats.durability}%`}}
        aria-valuenow={hero.powerstats.durability} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Durabilidad: </strong>{validStat(hero.powerstats.durability)}</li>
        </div>
        <div className="progress-bar" role="progressbar" 
        style={{width:`${hero.powerstats.intelligence}%`}}
        aria-valuenow={hero.powerstats.intelligence} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Inteligencia: </strong>{validStat(hero.powerstats.intelligence)}</li>
        </div>
        <div className="progress-bar" role="progressbar" 
        style={{width:`${hero.powerstats.power}%`}}
        aria-valuenow={hero.powerstats.power} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Poder: </strong>{validStat(hero.powerstats.power)}</li>
        </div>
        <div className="progress-bar" role="progressbar" 
        style={{width:`${hero.powerstats.speed}%`}}
        aria-valuenow={hero.powerstats.speed} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Velocidad: </strong>{validStat(hero.powerstats.speed)}</li>
        </div>
        <div className="progress-bar " role="progressbar" 
        style={{width:`${hero.powerstats.strength}%`}}
        aria-valuenow={hero.powerstats.strength} aria-valuemin="0" aria-valuemax="100">
        <li className="powerstat"><strong>Fuerza: </strong>{validStat(hero.powerstats.strength)}</li>
        </div>
        </ul>
    )
}
export default Powerstat
>>>>>>> 9217190eb0002986d6adf747a68f1342e6ac2a12
