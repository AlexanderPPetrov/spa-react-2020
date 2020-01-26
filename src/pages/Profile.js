import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import setActionCount from "../redux/actions/counter";

const Profile = props => {
    const title = useSelector(state => state.title);
    const dispatch = useDispatch();

    const setCounter = count => dispatch(setActionCount(count))
    return <div>
        <h1>{title}</h1>
        <button
            onClick={() => setCounter(20)} 
            type="button" 
            className="btn btn-danger"
        >Change Global Counts</button>
    </div>
}

export default Profile;