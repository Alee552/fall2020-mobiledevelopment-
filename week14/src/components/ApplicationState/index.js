let defaultState ={
    count:0, count2:0
};

function reducer(state, action){
    switch (action.type) {
    case 'increment' :
        return {...state, count: state.count + 1 };
    case 'decrement': 
        return {...state, count :state.count - 1 };
    case 'increment2' :
        return {...state, count2: state.count2 + 1 };
    case 'decrement2': 
        return {...state, count2: state.count2 - 1 };
    default:
        return state;
    }
}
export {defaultState,reducer};