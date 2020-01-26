
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

const title = function(title = "Default Title", action) {
    switch(action.type) {
        case "SET_TITLE": {
            return action.payload;
        }
        default:
            return title;
        
    }
}

const movies = function(movies = [], action) {
    switch(action.type) {
        case "FETCHED_MOVIES": {
            return [...action.payload];
        }
        default:
            return movies;
        
    }
}

export default combineReducers({
    counterOne: counter,
    movies,
    title
})