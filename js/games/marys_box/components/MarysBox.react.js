import React, { Component } from "react";
import { connect } from "react-redux";

class MarysBox extends Component {
    row(values) {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    height: 100,
                    width: 400,
                    // border: "10px solid grey",
                    // backgroundColor: "grey",
                    boxSizing: "border-box"
                }}
            >{
                values.map((value) => {
                    return this.box(value);
                })
            }</div>
        );
    }

    box(value) {
        let backgroundColor = "lightgrey";
        if (value === undefined) {
            backgroundColor = "grey";
        }

        return (<div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 100,
            backgroundColor: backgroundColor,
            margin: 10,
        }}
            >{value}</div>);
    }

    render() {
        return (
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    backgroundColor: "darkgrey",
                    boxSizing: "content-box",
                    width: 400,
                    height: 400,
                    border: "25px solid pink",
                    margin: 50
                }}
            >
            {this.row([2, 8, 4, 2])}
            {this.row([2, 4, 8, undefined])}
            {this.row([2, undefined, 8, undefined])}
            {this.row([2, 4, undefined, 16])}
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
