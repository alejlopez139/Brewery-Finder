export function fetchBeers() {
    return async dispatch => {
       dispatch(fetchBeersBegin())
       return fetch("https://swapi.dev/api/people")
        .then(handleErrors)
        .then(res => res.json())
        .then(json => {
            // console.log(json.results)
            dispatch(fetchBeersSuccess(json.results))
            return json.results
        })
        .catch(error => dispatch(fetchBeersFailure(error)))
    }
}

function handleErrors(response) {
    if (!response.ok) {
        throw Error(response.statusText)
    }
    return response;
}

export function fetchBeersBegin() {
    return {
        type: "FETCH_BEERS_BEGIN"
    }
}

export function fetchBeersSuccess(beers) {
    return {
        type: "FETCH_BEERS_SUCCESS",
        payload: beers
    }
}

export function fetchBeersFailure(error) {
    return {
        type: "FETCH_BEERS_FAILURE",
        payload: error
    }
}

const initialState = {
    beers: [],
    loading: false,
    error: null
}

export default function beersReducer(state = initialState, action) {
    switch(action.type) {
        case "FETCH_BEERS_BEGIN":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "FETCH_BEERS_SUCCESS":
            return {
                ...state,
                loading: false,
                beers: action.payload
            }
        case "FETCH_BEERS_FAILURE":
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                beers: []
            }
        default:
            return state
    }
}