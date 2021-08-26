import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Search from '../Search/Search'
import './Home.css'
const Home = ({authorized}) => {

  const [team, setTeam] = useState([])

  const displayTeam = () => {
    const heroesTeam = [];
    if(team)
    for (let i = 0; i < team.length; i += 1) {
       heroesTeam.push(
            <div key={team[i].id} className="col heroCard"> 
                <h1>{team[i].name}</h1>
                <img src={team[i].image.url} alt={team[i].name}/>
                <button>Add Hero</button>
            </div>
        )
    }
    return heroesTeam || null
  }


  if(!authorized){
    return <Redirect to="/login" />
  }
  return(
    <div>
    <h2 id="title">Home</h2>
    <Search team={team} setTeam={setTeam}/>
    {displayTeam()}
    </div>
  );
}
export default Home


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat