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
      <button className="btn btn-dark" >Agregar Heroes al equipo</button>
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