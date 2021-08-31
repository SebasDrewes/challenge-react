import { Link } from 'react-router-dom'

const Results = ({heroes, addHero}) => {
  return (
    <div className="searchResults">
      {heroes && heroes.length ? heroes.map(hero => {
        return (
          <div key={`team${hero.id}`} className="teamMember"> 
          <div className="heroNameContainer">
            <h1 className="heroName">{hero.name}</h1>
          </div>
            <img src={hero.image.url} alt={hero.name} draggable={false} className="teamMemberImg"/>
            <div className="buttons">
            <Link to={`/${hero.id}`}><button className="btn btn-dark btnTeam" >Detalles</button></Link>
            <button className="btn btn-dark btnTeam" onClick={() => addHero(hero)}>Agregar</button>
            </div>
          </div>)
      })  : null }
          </div>
    )
}
export default Results