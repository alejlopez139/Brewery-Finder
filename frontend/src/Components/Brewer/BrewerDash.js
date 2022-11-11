import React from 'react'
import {connect} from 'react-redux'

import './Brewer.css'
import BeerList from '../Beer/BeerList'
import BreweryInfo from '../Brewery/BreweryInfo'

function mapStateToProps(globalState) {
    return {
        user: globalState.user.username
    }
}

function BrewerDash(props) {
    return (
        <div className="bdash">
            <div className="bdash--notifications">
                <div className="bdash--notifications--icons">
                    <a href='/beer-form'>
                        <button>Add A Beer</button>
                    </a>
                    <button>Delete A Beer</button>
                </div>
                <div className="bdash--notifications--welcome">Welcome {props.user}</div>
            </div>
            <div className="bdash--container">
                <div className="bdash--beers">
                    <BeerList />
                </div>
                <div className="bdash--binfo">
                    <BreweryInfo />
                </div>
            </div>
        </div>
    )
}

export default connect(mapStateToProps)(BrewerDash)