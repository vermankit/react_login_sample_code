
export function configureFakeBackEnd() {
    let users = [{ id: 1, username: 'Ankit', password: 'Ankit', firstname: 'test', lastname: 'test' }];
    let realFetch = window.fetch;
    window.fetch = function (url, options) {
        return new Promise((resolve, reject) => {

            setTimeout(() => {
                if (url.endsWith('/users/authenticate') && options.method === 'POST') {


                    let params = JSON.parse(options.body);

                    let filteredUser = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });

                    if (filteredUser.length) {

                        let user = filteredUser[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstname: user.firstname,
                            lastname: user.lastname
                        }
                        resolve({ ok: true, text: () => JSON.stringify(responseJson) })
                    }
                    else {
                        reject("username : password wrong")
                    }

                    return
                }
                // get users
                if (url.endsWith('/users') && options.method === 'GET') {
                    // check for fake auth token in header and return users if valid, this security 
                    // is implemented server side in a real application
                    if (options.headers && options.headers.Authorization === `Basic ${window.btoa('test:test')}`) {
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(users)) });
                    } else {
                        // return 401 not authorised if token is null or invalid
                        resolve({ status: 401, text: () => Promise.resolve() });
                    }

                    return;
                }

                // pass through any requests not handled above
                realFetch(url, options).then(response => resolve(response));

            }, 500);
        });

    }

}


