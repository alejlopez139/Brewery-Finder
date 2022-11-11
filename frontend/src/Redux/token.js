export function addToken(token) {
    return {
        type: "ADD_TOKEN",
        payload: token
    }
}

export default function tokenReducer(token = {undefined}, action) {
    switch(action.type) {
        case "ADD_TOKEN":
            return {
                ...token,
                token: action.payload
            }
        default:
            return token
    }
}