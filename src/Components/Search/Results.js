import { Link } from "react-router-dom";

const Results = ({ recentSearch, validateAddedHero, setIsLoading }) => {
  console.log(recentSearch)
  return (
    <div className="searchResults">
      {recentSearch && recentSearch.length
        ? recentSearch.map((hero) => {
            return (
              <div key={`team${hero.id}`} className="teamMember">
                <div className="heroNameContainer">
                  <h1 className="heroName">{hero.name}</h1>
                </div>
                <img
                  src={hero.image.url}
                  alt={hero.name}
                  draggable={false}
                  onLoad={() => setIsLoading(false)}
                  className="teamMemberImg"
                />
                <div className="buttons">
                  <Link to={`/search/${hero.id}`}>
                    <button className="btn btn-dark btnTeam">Detalles</button>
                  </Link>
                  <button
                    className="btn btn-dark btnTeam"
                    onClick={() => validateAddedHero(hero)}
                  >
                    Agregar
                  </button>
                </div>
              </div>
            );
          })
        : null}
    </div>
  );
};
export default Results;
