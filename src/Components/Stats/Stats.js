const Stats = ({team}) => {
    console.log(team)
    let [totalCombate, totalDurabilidad, totalInteligencia,
    totalPoder, totalVelocidad, totalFuerza]  = Array(6).fill(0)

    team.forEach(hero => {
        console.log(totalCombate)
        totalCombate += parseInt(hero.powerstats.combat);
        totalDurabilidad += parseInt(hero.powerstats.durability);
        totalInteligencia += parseInt(hero.powerstats.intelligence);
        totalPoder += parseInt(hero.powerstats.power);
        totalVelocidad += parseInt(hero.powerstats.speed);
        totalFuerza += parseInt(hero.powerstats.strength);
    })

    return (
        <div>
            <h1><u>Estadisticas</u></h1>
            <p><strong>Tipo de Equipo: </strong>{'asd'} </p>
            <p><strong>Peso promedio: </strong>{'hero.powerstats.speed'}</p>
            <p><strong>Altura promedio: </strong>{'hero.powerstats.strength'}</p>
            <p><strong>Combate: </strong>{totalCombate}</p>
            <p><strong>Durabilidad: </strong>{totalDurabilidad}</p>
            <p><strong>Inteligencia: </strong>{totalInteligencia}</p>
            <p><strong>Poder: </strong>{totalPoder}</p>
            <p><strong>Velocidad: </strong>{totalVelocidad}</p>
            <p><strong>Fuerza: </strong>{totalFuerza}</p>
        </div>
    )
}
export default Stats