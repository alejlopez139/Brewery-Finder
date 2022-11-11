export function fetchDetails() {
    return async dispatch => {
       dispatch(fetchDetailsBegin())
       return fetch("https://swapi.dev/api/people/1")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            // console.log(json)
            dispatch(fetchDetailsSuccess(json))
            return json
        })
        .catch(error => dispatch(fetchDetailsFailure(error)))
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}

export function fetchDetailsBegin() {
    return {
        type: "FETCH_DETAILS_BEGIN"
    }
}

export function fetchDetailsSuccess(brewery) {
    return {
        type: "FETCH_DETAILS_SUCCESS",
        payload: brewery
    }
}

export function fetchDetailsFailure(error) {
    return {
        type: "FETCH_DETAILS_FAILURE",
        payload: error
    }
}

const initialState = {
    details: {},
    loading: false,
    error: null
}

export default function breweryReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_DETAILS_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "FETCH_DETAILS_SUCCESS":
            return {
                ...state,
                loading: false,
                details: {...action.payload}
            }
        case "FETCH_DETAILS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                details: ""
            }
        default:
            return state
    }
}