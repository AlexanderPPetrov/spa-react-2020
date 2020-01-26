
import { combineReducers } from 'redux'
const counter = function(count = 1, action) {
    switch(action.type) {
        case "INCREMENT_COUNT": {
            return action.payload + 1;
        }
        default:
            return count;
        
    }
}

export default combineReducers({
    counterOne: counter
})