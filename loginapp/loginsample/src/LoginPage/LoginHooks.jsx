import React, { useState } from 'react';

import { userService } from '../services/user.services';
const LoginHooks = (props) => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmit] = useState(false);    

    let handleSubmit = function (e) {
        e.preventDefault();
        console.log(submitted);
        setSubmit(true);        
        userService.login(username, password)
            .then(
                user => console.log(user)
            );
    };
  
    return (
        <div className="login-box">
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div className="text-box">
                    <i className="fa fa-user"></i>
                    <input type="text" name="username" defaultValue={username} onChange={({target}) => setUsername(target.value)} placeholder="Username" />
                </div>
                <div className="text-box">
                    <i className="fa fa-lock" />
                    <input type="password" name="password" defaultValue={password} onChange={({target}) => setPassword(target.value)} placeholder="Passward" />
                </div>
                <button className="btn" value="login">Sign in</button>
            </form>
        </div>
    );
}


export default LoginHooks;