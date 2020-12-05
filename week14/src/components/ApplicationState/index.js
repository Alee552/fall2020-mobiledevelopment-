let defaultState ={
    count:0
};

function reducer(state, action){
    switch (action.type) {
    case 'increment' :
        return {count: state.count + 1};
   case 'decrement': 
    return {count :state.count - 1 };
    default:
        return state();
    }
}
export {defaultState,reducer};