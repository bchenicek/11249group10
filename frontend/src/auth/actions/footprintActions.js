import axios from 'axios';
import { sessionService } from 'redux-react-session';

export const userFootprint = (footprint, history) => {
    axios.post('http://localhost:5000/users/footprint', footprint)
}