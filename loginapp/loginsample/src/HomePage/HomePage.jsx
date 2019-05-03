import React from 'react';
import { userService } from '../services/user.services';


export class HomePage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: {},
            users: []
        }
    }



    componentDidMount() {
        this.setState({
            user: JSON.parse(localStorage.getItem('user')),
            users: { loading: true }
        });
        userService.getAll().then(data => this.setState({ users: data }));
    }

    render() {
        let {user, users} = this.state;
        return (
            <div className="white" >
                <h1>Home Page</h1>
                <div>
                   Welcome {user.firstName} - Below is the user list
                    { users.length && 
                      <ul>
                         {users.map((user,index) =>
                                <li>
                                   {user.firstName + ' ' + user.lastName}
                                </li>                         
                         )}           
                      </ul>
                    }
                </div>
            </div>
        );
    }
} 