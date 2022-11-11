import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { createForms } from 'react-redux-form';

import userReducer from './user';
import tokenReducer from './token';
import breweryReducer from './brewery';
import beersReducer from './beerList';
import brewerReducer from './brewer';
import addBreweryReducer from './addBrewery';
import { initialBeerState } from './beer';
import { initialBrewerState } from './brewer';
import { initialBreweryState } from './addBrewery';


export const store = configureStore({
    reducer: {
        user: userReducer,
        token: tokenReducer,
        brewery: breweryReducer,
        beers: beersReducer,
        brewer: brewerReducer,
        addBrewery: addBreweryReducer,
        ...createForms({
            beer: initialBeerState,
            brewer: initialBrewerState,
            addBrewery: initialBreweryState
        })
    }
}, applyMiddleware(thunk))