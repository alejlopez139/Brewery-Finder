export function addUser(user) {
    return {
        type: "ADD_USER",
        payload: user
    }
}

export function deleteUser() {
    return {
        type: "DELETE_USER"
    }
}

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

export default function userReducer(user = {
    id: null, 
    username: '',
    authorities: []
}, action) {
    switch(action.type) {
        case "ADD_USER":
            return {
                ...user,
                id: action.payload.id,
                username: action.payload.username,
                authorities: action.payload.authorities
            }
        case "DELETE_USER":
            return {
                id: null, 
                username: '',
                authorities: []
            }
        default:
            return user
    }
}