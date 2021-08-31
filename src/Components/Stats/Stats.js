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

    let teamType = Math.max(totalCombate, totalDurabilidad, totalInteligencia,
        totalPoder, totalVelocidad, totalFuerza)

    return (
        <div>
            <button type="button" className="btn btn-dark dropdown-toggle statsBtn" data-bs-toggle="dropdown" aria-expanded="false">
            Estadisticas
            </button>
            <div className="dropdown-menu statsDropdown">
            <div className="row">
            <p className="col teamType"><strong>Tipo de Equipo: </strong>Inteligencia</p>
            </div>
            <div className="row">
            <p className="col"><strong>Peso promedio: </strong>{Math.round(totalPeso / team.length)}</p>
            <p className="col"><strong>Altura promedio: </strong>{Math.round(totalAltura / team.length)}</p>
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