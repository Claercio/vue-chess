export function getGamePgn (state) {
  return state.boards.pgn
}
export function getGameTurn (state) {
  return state.boards.turn
}
export function getGameTimesUsers (state) {
  const times = {
    white: state.boards.twhite,
    black: state.boards.tblack
  }
  return times
}
