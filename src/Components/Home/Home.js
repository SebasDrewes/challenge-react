import { Redirect, Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import Nav from '../Nav/Nav'
import Stats from '../Stats/Stats'
import Team from '../Team/Team'
import './Home.css'
const Home = () => {
  const heroTeam = useSelector(state => state.heroTeam)
  const token = localStorage.getItem('token')
  //borra recentSearch al cargar home
  sessionStorage.removeItem('recentSearch')
  if(!token){
    return <Redirect to="/login" />
  }
  return(
    <div>
    <Nav/>
    <div data-testid="home" id="home">
    <div id="header">
      <div id="titleContainer">
      <h1 id="teamTitle">Tu equipo</h1>
      {heroTeam && heroTeam.length > 0 ?
      <Stats/>: null}
      </div>
      {(heroTeam === null ) || (heroTeam && heroTeam.length !== 6 )?
      <Link to="/search">
      <button className="btn addHero">Agregar Hero</button>
      </Link> : null}
      </div>
    <Team/>
    </div>
    </div>
  );
}
export default Home