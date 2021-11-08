import axios from 'axios';
import { sessionService } from 'redux-react-session';

export const loginUser = (user, history) => {
    axios.post('http://localhost:5000/users/login', user, {
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(res => {
            const {data} = res;

            if (data.status === "login_successful") {
                const userData = data.account_data;
                const token = userData._id;

                sessionService.saveSession(token)
                    .then(() => {
                        sessionService.saveUser(userData)
                            .then(() => {
                                history.push('/dashboard');
                            })
                            .catch(err => {
                                console.log(err);
                            })
                    })
                    .catch(err => {
                        console.log(err);
                    })
            } else {
                console.log("FAIL");
            }
        })
        .catch(err => console.log(err));
}

export const createUser = (user, history) => {
    axios.post('http://localhost:5000/users/create', user)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}

export const logoutUser = (history) => {
    sessionService.deleteSession();
    sessionService.deleteUser();

    history.push('/');
}