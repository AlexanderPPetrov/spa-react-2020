import React from 'react';

const QuantityInput = props => {
    return (
        <div className="input-group mb-3">
            <div className="input-group-prepend">
                <button 
                className="btn btn-success" 
                type="button">
                    <i className="fa fa-minus-circle"></i>
                </button>
            </div>
            <input 
                type="text" 
                className="form-control" 
            />
               <div className="input-group-append">
                <button 
                className="btn btn-success" 
                type="button">
                    <i className="fa fa-plus-circle"></i>
                </button>
            </div>
        </div>
    )
}

export default QuantityInput