import { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Search from '../Search/Search'
import Team from '../Team/Team'
import './Home.css'
const Home = ({authorized}) => {

  const [team, setTeam] = useState([])

  if(!authorized){
    return <Redirect to="/login" />
  }
  return(
    <div>
    <h2 id="title">Home</h2>
    <Search team={team} setTeam={setTeam}/>
    <Team team={team} />
    </div>
  );
}
export default Home


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat