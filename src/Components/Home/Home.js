import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Team from '../Team/Team'
import './Home.css'
const Home = () => {
  const token = localStorage.getItem('token')

  if(!token){
    return <Redirect to="/login" />
  }
  
  return(
    <div>
    <h2 id="title">Home</h2>
    <Team/>
    </div>
  );
}
export default Home


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat