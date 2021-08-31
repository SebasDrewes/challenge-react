// filtro para no poder agregar al mismo heroes mas de una vez.
    const noRepeat = (team, hero) => {
    if (team.some(member => member.id === hero.id)){
        return false
    } return true 
    }

    const validAlignment = (team, hero) => {
      const heroAlignment = hero.biography.alignment
      // si el hero es neutral, no se puede agregar.
      if (heroAlignment === 'neutral') {
        return false 
      } else {
        // si hay mas de tres heroes good or bad, no deja agregar.
        const teamAlignment = team.filter(member => member.biography.alignment === heroAlignment)
        if (teamAlignment.length >= 3) {
          return false
        } return true
      }
     }

export {noRepeat, validAlignment}