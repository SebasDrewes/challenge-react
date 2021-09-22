import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import { removeHero } from '../../redux'
import Powerstat from "./Powerstat";
import "./Team.css";
const Team = () => {
  const heroTeam = useSelector(state => state.hero.heroTeam)
  const dispatch = useDispatch()

  return (
    <div id="team">
      {heroTeam && heroTeam.length ? (
        heroTeam.map((hero) => {
          return (
            <div key={`team${hero.id}`} className="teamMember">
              <div className="heroNameContainer">
                <h1 className="heroName">{hero.name}</h1>
              </div>
              <img
                src={hero.image.url}
                alt={hero.name}
                draggable={false}
                className="teamMemberImg"
              />
              <div className="buttons btn-group dropdown dropup">
                <button
                  type="button"
                  className="btn btn-dark dropdown-toggle btnTeam"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Powerstats
                </button>
                <Powerstat hero={hero} />
                <Link to={`challenge-react/${hero.id}`}>
                  <button className="btn btn-dark btnTeam">Detalles</button>
                </Link>
                <button
                  className="btn btn-dark btnTeam"
                  onClick={() => dispatch(removeHero(hero))}
                >
                  Eliminar
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <h1 id="noTeam">Agrega héroes a tu equipo!</h1>
      )}
    </div>
  );
};
export default Team;
