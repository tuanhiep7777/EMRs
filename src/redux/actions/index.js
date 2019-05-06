import axios from 'axios';

import * as types from '../constants/ActionTypes';

const url = process.env.NODE_ENV === 'production' ? "/api" : "http://localhost:5000/api"

export const getUserInfo = (email) => {
    return (dispatch) => {
        return axios.get(url + '/user' + '/' + email)
            .then((response) => {
                dispatch({
                    type: types.GET_USER_INFO,
                    userInfo: response.data
                });
            })
            .catch((error) => {
                console.log('err: ', error);
            });
    }
}

// export const getUserInfo = (email) => {
//     console.log('++++++++++++++++++++++++++', url + '/user' +'/' + email, '+++++++++++++++++++++++++++++++++++');
//     axios.get(url + '/user' +'/' + email)
//         .then(function (response) {
//             console.log(response);
//             return {
//                 type: types.GET_USER_INFO,
//                 userInfo: response.data
//             }
//         })
//         .catch(function (error) {
//             console.log('err: ', error);
//         })
//         .then(function () {
//             // always executed
//         });
// }