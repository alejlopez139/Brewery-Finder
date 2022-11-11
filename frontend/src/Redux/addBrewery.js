export function addBrewery(brewery) {
    return {
        type: "ADD_BREWERY",
        payload: brewery
    }
}

export const initialBreweryState = {
    name: '',
    address: '',
    city: '',
    zipcode: '',
    phoneNumber: '',
    activeStatus: '',
    userId: '',
    hours: '',
    breweryLogoUrl: ''
}

export default function addBreweryReducer(brewery = initialBreweryState, action) {
    switch(action.type) {
        case "ADD_BREWERY":
            return {
                ...brewery,
                name: action.payload.name,
                address: action.payload.address,
                city: action.payload.city,
                zipcode: action.payload.zipcode,
                phoneNumber: action.payload.phoneNumber,
                activeStatus: 'ACTIVE',
                userId: action.payload.userId,
                hours: action.payload.hours,
                breweryLogoUrl: action.payload.breweryLogoUrl
            }
        default: 
            return brewery
    }
}