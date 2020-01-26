import React, { Component, createContext } from "react";

const { Provider, Consumer } = createContext();

class ApplicationContextProvider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: "Default Title",
            counter: 1,
            movies: []
        }
    }

    setTitle = title => this.setState({ title })

    render = () => {
        const value = {
            ...this.state,
            setTitle: this.setTitle
        }
        return <Provider value={value}>
            {this.props.children}
        </Provider>
    }
}

export default {
    ApplicationContextProvider,
    ApplicationConsumer: Consumer
}