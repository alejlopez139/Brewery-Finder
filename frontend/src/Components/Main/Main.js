import {Switch, Route, Redirect, Link} from 'react-router-dom'
import { addToken } from '../../Redux/token'
import { deleteUser } from '../../Redux/user'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import DefaultStyles from '../../DefaultStyles.js'
import BeerForm from '../Beer/BeerForm.js'

import Login from '../Login/Login'
import Register from '../Register/Register'
import Home from '../Home/Home'
import Brewery from '../Brewery/Brewery'
import BrewerDash from '../Brewer/BrewerDash'
import PublicHome from '../public/PublicHome'
import ReviewForm from '../Review/ReviewForm'

import './Main.css'
import BeerList from '../Beer/BeerList'

const mapStateToProps = state => {
        return {
            token: state.token,
            user: state.user
        }
    }

const mapDispatchToProps = (dispatch) => ({
    addToken: () => { dispatch(addToken()) },
    deleteUser: () => { dispatch(deleteUser())}
});

function Main(props) {

    function handleLogout() {
        props.addToken("")
        props.deleteUser()
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar--container">
                    {props.token.token !== undefined ?
                        <div>
                            <Link to='/home' className="link navbar--link">Home</Link> 
                            <Link to='/defaults' className="link navbar--link">Default Styles</Link>
                            <Link to='/beerform'  className='link navbar--link'>Beer Form</Link>
                            <Link to='/breweries/breweryinfo' className="link navbar--link">Brewery Info</Link>
                            <Link to='/review' className="link navbar--link">Review</Link>
                            <Link to='/login' className="link navbar--link" onClick={handleLogout}>logout</Link> 
                            <Redirect to='/home'/>

                        </div>  
                    : 
                    <div>
                        <Link to='/' className="link navbar--link" >Home </Link>
                        <Link to='/login' className="link navbar--link" >Login </Link>
                        <Link to='/register' className="link navbar--link" >Register </Link>
                    </div>
                    }
                </div>
            </nav>
            <Switch>
                <Route exact path='/'>
                    {props.token.token !== undefined ? <Redirect to='/home' /> : <PublicHome />}
                </Route>
                <Route path='/review' component={() => <ReviewForm />}/>
                <Route path='/breweries/breweryinfo' component={() => <Brewery/>}/>
                <Route path='/beerlist'component={() => <BeerList/>} />
                <Route path='/brewer' component={() => <BrewerDash/>}/>
                <Route path='/defaults' component={() => <DefaultStyles/>}/>
                <Route path='/login' component={() => <Login/>}/>
                <Route path='/register'component={() => <Register/>}/>
                <Route path='/home' component={() => <Home />}/>
                <Route path='/beerform' component={() => <BeerForm/>}/>
            </Switch>
        </div>  
    )
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));