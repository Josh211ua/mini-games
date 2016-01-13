import React, { Component } from "react";
import { connect } from "react-redux";

import * as Actions from "../actions";

class MarysBox extends Component {
    render() {
        return (
            <div>
                This is the Demo page.
                <div>
                    {this.props.state.counter}
                    <button onClick={() => this.props.dispatch(Actions.increment())}>
                        +
                    </button>
                    <button onClick={() => this.props.dispatch(Actions.decrement())}>
                        -
                    </button>
                    <button onClick={() => this.props.dispatch(Actions.reset())}>
                        CLEAR
                    </button>
                </div>
            </div>
        );
    }
}

function select(state) {
    return {
        state: state.marysBox
    };
}

export default connect(select)(MarysBox);
