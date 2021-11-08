import axios from 'axios';

export const createGroup = (group, history) => {
    axios.post('http://localhost:5000/groups/create', group)
        .then(res => console.log(res.data))
        .catch(err => console.log(err));
}