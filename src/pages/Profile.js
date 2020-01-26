import React from 'react';
import { connect } from "react-redux";

class Profile extends React.Component {

    render() {
        return <div>
            <h1>{this.props.counter}</h1>
        </div>
    }
}

export default connect(state => ({ counter: state.counterOne}))(Profile);