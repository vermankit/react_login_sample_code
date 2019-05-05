import React from 'react';
import {userService} from '../services/user.services';
class Login extends React.Component {

    constructor(props){
        super(props);
        this.state ={
            username:'',
            password:'',
            submitted:false,
            loading:false,
            error:''
        }

        
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    

    handleSubmit(e){      
        e.preventDefault();  
        this.setState({submitted : true});
        const data = this.state; 
        userService.login(data.username, data.password)
            .then(
                user => {
                    const { from } = this.props.location.state || { from: { pathname: "/" } };
                    this.props.history.push(from);
                }
            );            
    }

    handleChange(e){
     const {name,value} = e.target;
     this.setState({[name]:value});

    }

    render() {
        const {...data} = this.state;
        return (
            <div  className="login-box">
                <h1>Travel With Us</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="text-box"> 
                    <i className="fa fa-user"></i>                  
                        <input type="text" name="username" defaultValue={data.username} onChange={this.handleChange} placeholder="Username"/>
                    </div>
                    <div className="text-box">   
                    <i className="fa fa-lock"/>                      
                        <input type="password" name="password" defaultValue={data.password}  onChange={this.handleChange} placeholder = "Passward"/>
                    </div>
                    <button className="btn" value="login">Sign in</button>
                </form>
            </div>
        );
    }
}

export default Login;