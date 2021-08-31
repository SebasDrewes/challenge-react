const Stats = ({team}) => {
    console.log(team)
    let totalCombate = 0
    team.forEach(hero => totalCombate += parseInt(hero.powerstats.combat));
    console.log(totalCombate)
    return (
        <div>
            <h1><u>Estadisticas</u></h1>
            <p><strong>Tipo de Equipo: </strong>{'asd'} </p>
            <p><strong>Peso promedio: </strong>{'hero.powerstats.speed'}</p>
            <p><strong>Altura promedio: </strong>{'hero.powerstats.strength'}</p>
            <p><strong>Combate: </strong>{'hero.powerstats.combat'}</p>
            <p><strong>Durabilidad: </strong>{'hero.powerstats.durability'}</p>
            <p><strong>Inteligencia: </strong>{'hero.powerstats.intelligence'}</p>
            <p><strong>Poder: </strong>{'hero.powerstats.power'}</p>
            <p><strong>Velocidad: </strong>{'hero.powerstats.speed'}</p>
            <p><strong>Fuerza: </strong>{'hero.powerstats.strength'}</p>
        </div>
    )
}
export default Stats