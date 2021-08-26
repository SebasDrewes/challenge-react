import { Redirect } from 'react-router-dom'
const Search = ({authorized}) => {

if(!authorized){
    return <Redirect to="/login" />
  }
  return(
    <h2 id="title">Search</h2>
  );
}
export default Search


// search https://www.superheroapi.com/api.php/4333347540058740/search/bat