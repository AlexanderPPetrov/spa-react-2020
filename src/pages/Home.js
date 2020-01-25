import React from 'react';
import QuantityInput from '../components/QuantityInput';
class Home extends React.Component {

    render() {
        return <div className="col-md-3">
            <QuantityInput count={5}/>
        </div>
    }
}

export default Home;