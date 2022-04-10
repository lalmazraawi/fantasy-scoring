const calculatePassingScore = (player) => {
    let stats = player.stats
  
    return stats.passing.touchdowns * 6 + stats.passing.yards / 25 +
    stats.passing.interceptions * -3 + stats.rushing.yards / 10 +
    stats.rushing.touchdowns * 6 + stats.rushing.fumbles * -3
  }
  
  
  const calculateRecAndRush = (player) => {
    let stats = player.stats
  
    return stats.rushing.yards / 10 + stats.rushing.touchdowns * 6 +
    stats.rushing.fumbles * -3 + stats.receiving.receptions +
    stats.receiving.yards / 10 + stats.receiving.touchdowns * 6 +
    stats.receiving.fumbles * -3 + stats.return.kickreturn.yards / 15 +
    stats.return.kickreturn.touchdowns * 6 + stats.return.kickreturn.fumbles * -3 +
    stats.return.puntreturn.yards / 15 + stats.return.puntreturn.touchdowns * 6 +
    stats.return.puntreturn.fumbles * -3
  }
  
  const calculateTe = (player) => {
    let stats = player.stats
  
    return stats.receiving.receptions +
    stats.receiving.yards / 10 +
    stats.receiving.touchdowns * 6 +
    stats.receiving.fumbles * -3
  }
  
  
  const calculateScore = (player) => {
    if (player.position === 'QB')
    { return calculatePassingScore(player)
    }
    if (player.position === 'RB' || player.position === 'WR')
    { return calculateRecAndRush(player)
    }
    if (player.position === 'TE')
    {
      return calculateTe(player)
    }
  
    return 0
  }
  
  
  module.exports = calculateScore



