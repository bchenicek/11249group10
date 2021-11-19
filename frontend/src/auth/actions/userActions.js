import axios from 'axios';
import { sessionService } from 'redux-react-session';

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