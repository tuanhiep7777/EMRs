import * as types from '../constants/ActionTypes';

var initialState = JSON.parse(localStorage.getItem('tasks'));;

var displayItem = item => {

    // var itemIndex = finItemIdex(item.id);
    // if (itemIndex !== -1) // if found: means what we want to do is editting
    //     tasks.splice(itemIndex, 1); // then del

    initialState.push(item);
    
    localStorage.setItem('tasks', JSON.stringify(initialState));
}

var reducer = (state = initialState, action) => {

    switch (action.type) {
        case types.LIST_ALL:
            return state;
        case types.ADD_TASK:
            displayItem(action.task);
            return state;
        default:
            return state;
    }

    return state;
};

export default reducer;