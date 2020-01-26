import React from 'react';
import { connect }  from "react-redux";

class Users extends React.Component {
    componentDidMount = () => {
        this.props.getMovies();
    }

    render() {
        return <>
            <input 
                type="text"
                value={this.props.title}
                className="form-control"
                onChange={e => this.props.setTitle(e.target.value)}
            />
            <ul className="list-group">
                {this.props.movies.map(movie => {
                    return <li key={movie.id} className="list-group-item">{movie.title}</li>
                })}
            </ul>
        </>
    }
}

function getGlobalMovies() {
    return dispatch => {
        return fetch('https://facebook.github.io/react-native/movies.json')
            .then(response => response.json())
            .then(responseJson => {
                dispatch({
                    type: "FETCHED_MOVIES",
                    payload: responseJson.movies
                });
            })
            .catch(error => {
                console.error(error);
            });
    };
  }


const mapStateToProps = state => {
    return { 
        movies: state.movies,
        title: state.title
    }
};
const mapStateToDispatch = dispatch => {
    return {
        getMovies: () => dispatch(getGlobalMovies()),
        setTitle: title => dispatch({
            type: "SET_TITLE", 
            payload: title
        })
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Users);