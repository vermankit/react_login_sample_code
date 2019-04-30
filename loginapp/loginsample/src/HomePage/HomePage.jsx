import React from 'react';
import { userService } from '../services/user.services';


export class HomePage extends React.Component {

    state = {
        user: {},
        users: []
    }

   componentDidMount(){
       this.setState({
           user: JSON.parse(localStorage.getItem('user')),
           users:{loading:true}
       });
       userService.getAll().then(data => this.setState({users : data}));
   }

    render() {
        return (
            <div className="white" >
                <h1>Home Page</h1>
                <div>
                    Sucessfully Logged In
                </div>
            </div>
        );
    }
} 