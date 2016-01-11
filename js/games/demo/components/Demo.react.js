import React, { Component } from "react";
import { connect } from "react-redux";

import * as Actions from "../actions";

class Demo extends Component {
    render() {
        return (
            <div>
                This is the Demo page.
                <div>
                    {this.props.counter}
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
        counter: state.demo.counter
    };
}

export default connect(select)(Demo);
