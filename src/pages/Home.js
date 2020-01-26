import React from 'react';
import { connect } from "react-redux";
import QuantityInput from '../components/QuantityInput';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            counts: [1,2,3,4,5],
        }
        console.log(props.counter);
        console.log(props.setCounter);
    }
    getQuantityInputs = () => {
        const counts = this.state.counts;

        const inputs = counts.map(element => {
            return <QuantityInput 
                key={element} 
                count={element}/>
        })

        return inputs;
    }
    changeCounts = () => {
        this.setState({
            counts: [7, 2]
        });
    }
    changeGlobalCount = () => {
        this.props.setCounter(10);
    }
    render() {
        return <div className="col-md-3">
                <button
                    onClick={this.changeCounts} 
                    type="button" 
                    className="btn btn-primary"
                >Change Counts</button>
                <button
                    onClick={this.changeGlobalCount} 
                    type="button" 
                    className="btn btn-danger"
                >Change Global Counts</button>
            {this.getQuantityInputs()}
        </div>
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counterOne
    }
};

const mapStateToDispatch = dispatch => {
    return {
        setCounter: count => dispatch(setActionCount(count))
    }
};

const setActionCount = count => {
    return {
        type: "INCREMENT_COUNT",
        payload: count
    }
}

export default connect(mapStateToProps, mapStateToDispatch)(Home);

 