import React from 'react';

class Login extends React.Component {

    render() {
        return (
            <div  className="login-box">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <div className="text-box"> 
                    <i className="fa fa-user"></i>                  
                        <input type="text" placeholder="Username"/>
                    </div>
                    <div className="text-box">   
                    <i className="fa fa-lock"/>                      
                        <input type="text" placeholder = "Passward"/>
                    </div>
                    <button className="btn" value="login">Sign in</button>
                </form>
            </div>
        );
    }
}

export default Login;