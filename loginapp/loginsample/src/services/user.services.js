import { authHeader } from '../helper/AuthHelper'


export const userService = {
    login,
    logout,
    getAll,
};

function login(username, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    };

    return fetch(`${process.env.REACT_APP_API}/users/authenticate`, requestOptions)
        .then(handleResponse)
        .then(user => {

            if (user) {
                user.authdata = window.btoa(username + ':' + password);
                localStorage.setItem('user', JSON.stringify(user))
            }
            return user;
        });

}


function logout() {
    localStorage.removeItem('user');
}

function getAll() {
    let requestOptions = {
        method: "GET",
        headers: authHeader()
    }

    return fetch(`${process.env.REACT_APP_API}/users`, requestOptions)
        .then(handleResponse);

}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                
                logout();            
                // eslint-disable-next-line no-restricted-globals
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}