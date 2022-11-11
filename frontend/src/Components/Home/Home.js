import {connect} from 'react-redux'

import UserDash from "../userDash/UserDash";
import AdminDash from "../adminDash/AdminDash";
import BrewerDash from "../Brewer/BrewerDash";

function mapStateToProps(globalState) {
    return {
        authorities: globalState.user.authorities
    }
}

function Home({authorities}) {

    // console.log(authorities)
    let dashboard

    if (authorities.find(auth => auth.name === 'ROLE_ADMIN')) {
        return <AdminDash />
    } else if (authorities.find(auth => auth.name === 'ROLE_BREWER')) {
        return <BrewerDash />
    } else if (authorities.find(auth => auth.name === 'ROLE_USER')) {
        return <UserDash />
    }

    return (
        <div></div>
    )
}

export default connect(mapStateToProps)(Home)