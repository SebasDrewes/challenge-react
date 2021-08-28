import { Link } from 'react-router-dom'

const Results = ({heroes, addHero}) => {
    return (
    <div className="row">
    {heroes ? heroes.map(hero => {
      return (
      <div key={hero.id} className="col heroCard"> 
      <h1>{hero.name}</h1>
      <img src={hero.image.url} alt={hero.name}/>
      <button onClick={() => addHero(hero)}>Add Hero</button>
      <Link to={`/search/${hero.id}`}>Details</Link>
      </div>)
      }): null}
  </div>)
}
export default Results