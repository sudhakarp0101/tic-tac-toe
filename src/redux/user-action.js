export const ADD_PLAYER = 'ADD_PLAYER';
export const INCREMENT_WINS = 'INCREMENT_WINS';

export const addPlayer = (payload) => ({
    type: ADD_PLAYER,
    payload,
})
export function handleAddPlayer(id, playerName) {
    return (dispatch) => {
        return dispatch(addPlayer({
            id: id,
            name: playerName
        }))
    }
}
export const incrementWins = (payload) => ({
    type: INCREMENT_WINS,
    payload
})
export function handleIncrementWins(id) {
    return (dispatch) => {
        return dispatch(incrementWins({
            id: id
        }))
    }
}