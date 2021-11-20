import axios from 'axios';
import { sessionService } from 'redux-react-session';

export const createFootprint = (footprint, history) => {
    axios.post('http://localhost:5000/footprints/create', footprint)
        .then(res => {
            console.log(res.data)
            history.push('/footprint-results');
        })
        .catch(err => console.log(err));
}