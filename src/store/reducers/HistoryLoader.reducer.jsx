import { GET_HISTORY } from '../actions/HistoryLoader.action';

const INITIAL_STATE ={
    list:[]
}

const historyLoaderReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_HISTORY:
            return {
                ...state,
                list: action.history
            }
        default:
            return state;
    }
}

export default historyLoaderReducer;
