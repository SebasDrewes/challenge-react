const Team = ({team}) => {
    const displayTeam = () => {
        console.log(team)
        const heroesTeam = [];
        if(team)
        for (let i = 0; i < team.length; i += 1) {
           heroesTeam.push(
                <div key={team[i].id} className="col heroCard"> 
                    <h1>{team[i].name}</h1>
                    <img src={team[i].image.url} alt={team[i].name}/>
                    <button>Add Hero</button>
                </div>
            )
        }
        return heroesTeam || 'null'
      }
    return (
        <div>
            <h1>Team</h1>
        {displayTeam()}
        </div>
  );
}
export default Team