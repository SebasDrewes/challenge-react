import "./Stats.css";

const Stats = ({ team }) => {
  let [
    totalPeso,
    totalAltura,
    totalCombate,
    totalDurabilidad,
    totalInteligencia,
    totalPoder,
    totalVelocidad,
    totalFuerza,
  ] = Array(8).fill(0);

  //si la api no trae data, no la suma
  const validStat = (powerStat) => {
    if (isNaN(powerStat)) {
      return 0;
    }
    return powerStat;
  };

  //sumatoria de statss
  team.forEach((hero) => {
    totalPeso += validStat(parseInt(hero.appearance.weight[1]));
    totalAltura += validStat(parseInt(hero.appearance.height[1]));
    totalCombate += validStat(parseInt(hero.powerstats.combat));
    totalDurabilidad += validStat(parseInt(hero.powerstats.durability));
    totalInteligencia += validStat(parseInt(hero.powerstats.intelligence));
    totalPoder += validStat(parseInt(hero.powerstats.power));
    totalVelocidad += validStat(parseInt(hero.powerstats.speed));
    totalFuerza += validStat(parseInt(hero.powerstats.strength));
  });

  const highestStat = Math.max(
    totalCombate,
    totalDurabilidad,
    totalInteligencia,
    totalPoder,
    totalVelocidad,
    totalFuerza
  );

  let teamType;
  // switch para elegir teamType
  switch (highestStat) {
    case totalCombate:
      teamType = "Combate";
      break;
    case totalDurabilidad:
      teamType = "Durabilidad";
      break;
    case totalInteligencia:
      teamType = "Inteligencia";
      break;
    case totalPoder:
      teamType = "Poder";
      break;
    case totalVelocidad:
      teamType = "Velocidad";
      break;
    case totalFuerza:
      teamType = "Fuerza";
      break;
    default:
      teamType = "Desconocido";
  }

  return (
    <div className="container">
      <button
        type="button"
        className="btn btn-dark dropdown-toggle statsBtn"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Estadisticas
      </button>
      <div className="dropdown-menu statsDropdown">
        <div className="clearfix">
          <p className="col teamType">
            <strong>Tipo de Equipo: </strong>
            {teamType}
          </p>
        </div>
        <div className="row">
          <p className="col">
            <strong>Peso promedio: </strong>
            {`${Math.round(totalPeso / team.length)} kg`}
          </p>
          <p className="col">
            <strong>Altura promedio: </strong>
            {`${Math.round(totalAltura / team.length)} cm`}
          </p>
        </div>
        <div className="row">
          <p className="col">
            <strong>Combate: </strong>
            {totalCombate}
          </p>
          <p className="col">
            <strong>Durabilidad: </strong>
            {totalDurabilidad}
          </p>
        </div>
        <div className="row">
          <p className="col">
            <strong>Inteligencia: </strong>
            {totalInteligencia}
          </p>
          <p className="col">
            <strong>Poder: </strong>
            {totalPoder}
          </p>
        </div>
        <div className="row">
          <p className="col">
            <strong>Velocidad: </strong>
            {totalVelocidad}
          </p>
          <p className="col">
            <strong>Fuerza: </strong>
            {totalFuerza}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Stats;
