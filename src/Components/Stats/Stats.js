import "./Stats.css"

const Stats = ({team}) => {

    let [totalPeso, totalAltura, totalCombate, totalDurabilidad, totalInteligencia,
    totalPoder, totalVelocidad, totalFuerza]  = Array(8).fill(0)

    console.log(team)
    team.forEach(hero => {
        totalPeso += parseInt(hero.appearance.weight[1])
        totalAltura += parseInt(hero.appearance.height[1])
        totalCombate += parseInt(hero.powerstats.combat);
        totalDurabilidad += parseInt(hero.powerstats.durability);
        totalInteligencia += parseInt(hero.powerstats.intelligence);
        totalPoder += parseInt(hero.powerstats.power);
        totalVelocidad += parseInt(hero.powerstats.speed);
        totalFuerza += parseInt(hero.powerstats.strength);
    })

    const highestStat = Math.max(totalCombate, totalDurabilidad, totalInteligencia,
        totalPoder, totalVelocidad, totalFuerza)
        console.log(highestStat === totalCombate)

    let teamType
        // switch para elegir teamType
    switch (highestStat) {
        case totalCombate:
            teamType = 'Combate';
            break;
        case totalDurabilidad:
            teamType = 'Durabilidad';
            break;
        case totalInteligencia:
            teamType = 'Inteligencia';
            break;
        case totalPoder:
            teamType = 'Poder';
            break;
        case totalVelocidad:
            teamType = 'Velocidad';
            break;
        case totalFuerza:
            teamType = 'Fuerza';
            break;
        default:
            teamType = 'Desconocido';

        }

    return (
        <div className="container">
            <button type="button" className="btn btn-dark dropdown-toggle statsBtn" data-bs-toggle="dropdown" aria-expanded="false">
            Estadisticas
            </button>
            <div className="dropdown-menu statsDropdown">
            <div className="clearfix">
            <p className="col teamType"><strong>Tipo de Equipo: </strong>{teamType}</p>
            </div>
            <div className="row">
            <p className="col"><strong>Peso promedio: </strong>{`${Math.round(totalPeso / team.length)} kg`}</p>
            <p className="col"><strong>Altura promedio: </strong>{`${Math.round(totalAltura / team.length)} cm`}</p>
            </div>
            <div className="row">
            <p className="col"><strong>Combate: </strong>{totalCombate}</p>
            <p className="col"><strong>Durabilidad: </strong>{totalDurabilidad}</p>
            </div>
            <div className="row">
            <p className="col"><strong>Inteligencia: </strong>{totalInteligencia}</p>
            <p className="col"><strong>Poder: </strong>{totalPoder}</p>
            </div>
            <div className="row">
            <p className="col"><strong>Velocidad: </strong>{totalVelocidad}</p>
            <p className="col"><strong>Fuerza: </strong>{totalFuerza}</p>
        </div>
        </div>
        </div>
    )
}
export default Stats