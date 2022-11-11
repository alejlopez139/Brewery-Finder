import React, { useEffect } from "react"
import {connect} from "react-redux"
import { fetchDetails } from "../../Redux/brewery"
import './BreweryInfo.css'

function mapStateToProps(state) {
    return {
        details: {...state.brewery.details},
        loading: state.brewery.loading,
        error: state.brewery.error
    }
}

function BreweryInfo(props) {

    useEffect(() => {
        props.dispatch(fetchDetails())
    }, [])

    const { error, loading, details } = props
    
    const {
        birth_year,
        created,
        edited,
        eye_color,
        films,
        gender,
        hair_color,
        height,
        homeworld,
        mass,
        name,
        skinColor,
        species,
        starships,
        url,
        vehicles
    } = details

    if (error) {
        return <div>Error! {error.message}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <ul className="binfo--details">
                <li><span className="hero-text">Name</span> {name}</li>
                <li>Birth Year: {birth_year}</li>
                <li>Gender: {gender}</li>
                <li>Height: {height}</li>
                <li>Homeworld: {homeworld}</li>
            </ul>
        </div>
    )
}

export default connect(mapStateToProps)(BreweryInfo)