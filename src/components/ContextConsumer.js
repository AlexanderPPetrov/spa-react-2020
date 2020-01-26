import React from "react";
import AppContext from "../context/ApplicationContex";

class ConsumerContext extends React.Component {
    render = () => {
        return <AppContext.ApplicationConsumer>
            {context => (
                <>
                    <h1>{context.title}</h1>
                    <button
                        onClick={() => context.setTitle("New title")} 
                        type="button" 
                        className="btn btn-danger"
                    >Change Global Counts</button>
                </>
            )}
        </AppContext.ApplicationConsumer>
    }
}
export default ConsumerContext;