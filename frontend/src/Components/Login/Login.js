import { Component } from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import { addToken } from '../../Redux/token'
import { addUser } from '../../Redux/user'
import {baseUrl} from '../../Shared/baseUrl'
import axios from 'axios'
import './Login.css'
import './avatar.jpg'



const mapDispatchToProps = (dispatch) => ({
    addToken: () =>  dispatch(addToken()),
    addUser: () => dispatch(addUser()) 
});

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    

    handleLogin = async () => {
        const data = { username: this.state.username, password: this.state.password };
        

        const userWithToken = await axios.post(baseUrl + '/login', data)
        console.log(userWithToken.data)

        
        await this.props.dispatch(addToken(userWithToken.data.token))
        await this.props.dispatch(addUser(userWithToken.data.user));
    }

    handleInputChange = (event) => {
        event.preventDefault()
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    render(){
        return(
            // <div className = "login-container">
            //     <h1 id = "login-header" className>Please Sign In</h1>
            //     <label class="sr-only">Username</label>
            //     <input
            //         type="text"
            //         id="username"
            //         name="username"
            //         class="form-control"
            //         placeholder="Username"
            //         v-model="user.username"
            //         onChange={this.handleInputChange}
            //         required
            //     />
            //     <label class="sr-only">Password</label>
            //     <input
            //         type="password"
            //         id="password"
            //         name="password"
            //         class="form-control"
            //         placeholder="Password"
            //         v-model="user.password"
            //         onChange={this.handleInputChange}
            //         required
            //     />
            //     <Link to="/register">Need an account?</Link>
            //     <button type="submit" onClick={this.handleLogin}>Sign in</button>
            // </div>
            <div className = "login-container">
                <img src = {require('./avatar.jpg')} alt = "login avatar" className="avatar-img"/>
                <h1>Login Here</h1>
                <form>
                     <label class="sr-only">Username</label>
                 <input
                    type="text"
                    id="username"
                    name="username"
                    class="form-control"
                    placeholder="Username"
                    v-model="user.username"
                    onChange={this.handleInputChange}
                    required
                />
                <label class="sr-only">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    class="form-control"
                    placeholder="Password"
                    v-model="user.password"
                    onChange={this.handleInputChange}
                    required
                />
                </form>
                <Link to="/register">Need an account? Register now</Link>
                <button type="submit" onClick={this.handleLogin}>Sign in</button>

                
            </div>
        )
    }
}

export default withRouter(connect(mapDispatchToProps)(Login));