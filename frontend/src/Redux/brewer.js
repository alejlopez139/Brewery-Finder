export function addBrewer(brewer) {
    return {
        type: "ADD_BREWER",
        payload: brewer
    }
}

export function deleteBrewer() {
    return {
        type: "DELETE_BREWER"
    }
}

export const initialBrewerState = {
    username: '',
    password: '',
    authorities: []
}

export default function brewerReducer(brewer = initialBrewerState, action) {
    switch(action.type) {
        case "ADD_BREWER": 
            return {
                ...brewer,
                username: action.payload.username,
                password: action.payload.password,
                authorities: [{name: 'ROLE_BREWER'}]
            }
        case "DELETE_BREWER":
            return {
                username: '',
                password: '',
                authorities: []
            }
        default:
            return brewer
    }
}