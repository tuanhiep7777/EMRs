import * as types from '../constants/ActionTypes';

var initialState = {
    profilePicture: 'https://content001.bet365.com/News/bet365/Article-Large-496x286/Football/Premier-League/man-united/2011x12/110721-wayne-rooney-496x286.jpg',
    name: 'Wayne Rooney',
    dateOfBirth: '24-10-1985'
};

var reducer = (state = initialState, action) => {

    switch (action.type) {
        case types.ADD_INFO:
            return state;
        default:
            return state;
    }
};

export default reducer;