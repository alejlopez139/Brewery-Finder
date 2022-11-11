import React from "react"
// import {Link} from 'react-router-dom'
import './Beer.css'


export default function BeerCard(props){
        return(
            <div className="beer-card">
               <img src={props.img} alt='Beer'/>
               <h4>{props.name}</h4>
               <div className='hero-text'>{props.desc}</div>
               <span className="hero-text">ABV: {props.abv}</span>
               <span className="hero-text">Brew Type: {props.type}</span>

            </div>
        )
}