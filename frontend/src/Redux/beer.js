export function addNewBeer(beer) {
    return {
        type: "ADD_NEW_BEER",
        payload: beer
    }
}

export function deleteBeer() {
    return {
        type: "DELETE_BEER"
    }
}

export const initialBeerState = {
    beerName: "",
    abv: "",
    beerType: "",
    description: "",
    beerImg: null
}

export default function beerReducer(beer ={initialBeerState}, action) {
    switch(action.type) {
        case "ADD_NEW_BEER":
            return {
                ...beer,
                beerName: action.payload.beerName,
                abv: action.payload.abv,
                beerType: action.payload.beerType,
                description: action.payload.description,
                beerImg: action.payload.beerImg
            }
        case "DELETE_BEER":
            return {
                beerName: "",
                abv: "",
                beerType: "",
                description: "",
                beerImg: null
            }
        default:
            return beer
    }
}

