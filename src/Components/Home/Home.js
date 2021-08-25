import { Redirect } from 'react-router-dom'
const Home = ({authorized}) => {
if(!authorized){
    return <Redirect to="/login" />
  }
  return(
    <h2>Home</h2>
  );
}
export default Home