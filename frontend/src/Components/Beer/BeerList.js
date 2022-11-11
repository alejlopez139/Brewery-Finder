import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'
import { fetchBeers } from '../../Redux/beerList'
import './BeerList.css'

function mapStateToProps(state) {
    return {
        beers: state.beers.beers,
        loading: state.beers.loading,
        error: state.beers.error
    }
}

function BeerList(props) {

    useEffect(() => {
        props.dispatch(fetchBeers())
    }, [])

    const { error, loading, beers } = props

    if (error) {
        return <div>Error! {error.message}</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }

    console.log(beers)

    return (
        <div>
            {beers.map(beer =>

                <div className="bmenu--beer">
                    <div className="bmenu--beertitle">
                        <Link to={beer.url} className="bmenu--link">{beer.name}</Link>
                    </div>
                    <div className="bmenu--beerdetails">
                        <li>{beer.birth_year}</li>
                        <li>{beer.homeworld}</li>
                    </div>
                </div>
            
            )}
        </div>
    )
}

export default connect(mapStateToProps)(BeerList)