function ScoreReducer(score, action) {
  let totalGames = 0;
  switch (action.type) {
    case "won": {
      const updatedWon = score.won + 1;
      totalGames = updatedWon + score.lost;
      return {
        ...score,
        won: updatedWon,
        ratio: Math.round((updatedWon / totalGames) * 100) || 0,
      };
    }
    case "lost": {
      const updatedLost = score.lost + 1;
      totalGames = score.won + updatedLost;
      return {
        ...score,
        lost: updatedLost,
        ratio: Math.round((score.won / totalGames) * 100) || 0,
      };
    }
    default:
      return score;
  }
}

export default ScoreReducer;
