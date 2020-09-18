import * as actionTypes from './actionTypes';
import axios from 'axios';

export const initialPrices = (data) => {
    return {
        type: actionTypes.INIT_PRICES,
        data: data
    }
}

export const fetchPrices = () => {
    return dispatch => {
        axios.get('https://meandmaths-1bde4.firebaseio.com/.json')
        .then(res => {
            dispatch(initialPrices(res.data))
        })
    }
}