import { useState } from 'react'
import { Redirect, Link } from 'react-router-dom';
import Nav from '../Nav/Nav'
import Team from '../Team/Team'
import './Home.css'
const Home = () => {
  const token = localStorage.getItem('token')
  const [team, setTeam] = useState(JSON.parse(localStorage.getItem('team')))
  if(!token){
    return <Redirect to="/login" />
  }
  return(
    <div>
    <Nav/>
    <div id="home">
    <div id="header">
      <h1 id="teamTitle">Tu equipo</h1>
      {team && team.length !== 6 ?
      <Link to="/search">
      <button className="btn addHero">Agregar Hero</button>
      </Link> : null}
    </div>
    <Team team={team} setTeam={setTeam}/>
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