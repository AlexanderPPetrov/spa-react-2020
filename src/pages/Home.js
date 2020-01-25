import React from 'react';
import QuantityInput from '../components/QuantityInput';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            counts: [1,2,3,4,5],
        }
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
        })
    }
    render() {
        return <div className="col-md-3">
                <button
                    onClick={this.changeCounts} 
                    type="button" 
                    className="btn btn-primary"
                >Change Counts</button>
            {this.getQuantityInputs()}
        </div>
    }
}

export default Home;