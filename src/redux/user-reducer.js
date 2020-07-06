import { ADD_PLAYER, INCREMENT_WINS } from './user-action'
const initialState = {
    players: [
        { id: 'X', name: '', wins: 0 },
        { id: 'O', name: '', wins: 0 },
    ],
}

export function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_PLAYER:
            let players = state.players.map((player => {
                // editing one item
                if (player.id === action.payload.id) {
                    return Object.assign({}, player, { name: action.payload.name })
                }
                // return all the ones we're not changing
                return player;
            }))
            return { players }
        case INCREMENT_WINS:
            let wplayers = state.players.map((player => {
                // editing one item

                if (player.id === action.payload.id) {
                    return Object.assign({}, player, { wins: player.wins + 1 })
                }
                // return all the ones we're not changing
                return player;
            }))
            return { players: wplayers }
        default:
            return state
    }
}