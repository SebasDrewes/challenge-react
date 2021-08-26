import { Redirect } from 'react-router-dom'
import './Home.css'
const Home = ({authorized}) => {
if(!authorized){
    return <Redirect to="/login" />
  }
  return(
    <h2 id="title">Home</h2>
  );
}
export default Home


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat