import { Redirect, Link } from 'react-router-dom';
import Nav from '../Nav/Nav'
import Team from '../Team/Team'
import './Home.css'
const Home = () => {
  const token = localStorage.getItem('token')

  if(!token){
    return <Redirect to="/login" />
  }
  
  return(
    <div>
    <Nav/>
    <Link to="/search">
      <button>Agregar Heroes</button>
    </Link>
    <Team/>
    </div>
  );
}
export default Home


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat