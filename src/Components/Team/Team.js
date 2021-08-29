import { Link } from 'react-router-dom'

const Team = () => {
    const team = JSON.parse(localStorage.getItem('team'))
    return (
        <div>
            {team ? team.map(hero => {
              return (
              <div key={`team${hero.id}`} className="col heroCard"> 
              <h1>{hero.name}</h1>
              <img src={hero.image.url} alt={hero.name}/>
              <Link to={`/${hero.id}`}>Details</Link>
              </div>)
              }): null}
        </div>
  );
}
export default Team