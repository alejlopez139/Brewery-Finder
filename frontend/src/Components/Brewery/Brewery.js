import React from 'react'
import './Brewery.css'

import BreweryInfo from './BreweryInfo'
import BeerList from '../Beer/BeerList'

function Brewery(props) {
    return (
        <div className="brewery">
            <div className="brewery--hero"></div>
            <div className="brewery--title-container">
                <h1 className="brewery--title">Brewery Name</h1>
            </div>

            <div className="brewery--infobox">
                <BreweryInfo />
            </div>
            <div className="brewery--beerList">
                <BeerList />
            </div>
        </div>
    )
}

export default Brewery