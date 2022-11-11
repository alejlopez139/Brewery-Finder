// import React from 'react'
// // import {Link} from 'react-router-dom'
// import BeerCard from './BeerCard'
// import { baseUrl } from '../../Shared/baseUrl'
// import axios from 'axios'
// // import axios from 'axios'

// const [beerData, setBeerData] = React.useState({})


// export default function handleDelete(){
//     const res = axios.delete(baseUrl + "/beerList/id", 
//     { data: JSON.stringify(beerData) });
//     res.data.json;
// }



// export default function handleCreate(){
// const beerCard = beerData.map(prop =>{
//     return (
//         <BeerCard
//             key={prop.id}
//             {...prop}
//         />
//     )
//    }) 

// /** Possible axios call. Not sure if it is written write */
// axios.post(baseUrl + '/beerList', {
//    data: JSON.stringify(beerCard)
// })
// .then(res => {
//         console.log(res)
//         setBeerData=res.data
//    });
   
//    return(
//         <div className='beers'>
//         {beerCard}
//         </div>
//    )
// }