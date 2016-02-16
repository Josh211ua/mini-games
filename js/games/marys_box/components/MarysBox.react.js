import React, { Component } from "react";
import { connect } from "react-redux";

function slideRow(inputArr, reverse){
	var arr = inputArr.slice(0);
	var tempArray = [];
	if (reverse){
	    arr.reverse();
	}
	for (var i = 0; i < arr.length; i++){
	    if (arr[i] !== undefined) {
			tempArray.push(arr[i]); 
	    }
	}
	var nextArray = []
	for (var i = 0; i < tempArray.length; i++){
	    if (tempArray[i] === tempArray[i+1]){
			nextArray.push(tempArray[i]*2);
			i++;
	    }
	    else {
			nextArray.push(tempArray[i])
	    }
	}
	for (var i = nextArray.length; i < arr.length; i++){
	    nextArray.push(undefined)
	}
	if (reverse){
	    nextArray.reverse();
	}
	console.log(nextArray)
	return nextArray;
}

function slide(data, reverse) {
    var newArray = data.map(function(row){
	    return slideRow(row, reverse);
	})
    return newArray; 
}
function addNum(data) {
    for (var row = 0; row < data.length; row++){
	    for (var column = 0; column < data[row].length; column++) {
		    if (data[row][column] === undefined) {
			    data[row][column] = 2;
				return data;
			}
    	}
	}
    return data;
}
function rotate(data, reverse){
    var arr = data;
	console.table(arr);
	console.log(arr.length);
	console.log(arr[0].length);
	var newArray = [[],[],[],[]]
	for (var row = 0; row < arr.length; row++) {
	    for (var column = 0; column < arr[row].length; column++) {
		    
		    var value = arr[arr.length - column - 1][row];
			if (reverse) {
			  value = arr[column][arr.length - row - 1];
			}
		    newArray[row][column] = value;
		}
	}
	console.table(newArray);
    return newArray;
}

class MarysBox extends Component {
    constructor(props) {
        super(props);
		this.state = {
		   data: [[undefined, 2, 2, undefined],
		         [4, undefined, undefined, undefined],
		         [undefined, undefined, undefined, undefined],
		         [undefined, undefined, undefined, undefined]]
		}    
    }
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
    onKeyDown(event) {
        switch(event.keyCode) {
			case 38: // UP
			    this.setState({data: addNum(rotate(slide(rotate(this.state.data, true))))})
				event.preventDefault();
				break;
			case 40: // DOWN
			    this.setState({data: addNum(rotate(slide(rotate(this.state.data, true), true)))})
				event.preventDefault();
				break;
			case 37: // LEFT
			    console.log(event.keyCode);
				this.setState({data: addNum(slide(this.state.data))});
				event.preventDefault();
				break;
			case 39: // RIGHT
				this.setState({
					data: addNum(slide(this.state.data, true))});
				event.preventDefault();
				break;
			default: 
				return;
		}
    }
    componentDidMount() {
        window.addEventListener("keydown", this.onKeyDown.bind(this));
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
            {this.row(this.state.data[0])}
            {this.row(this.state.data[1])}
            {this.row(this.state.data[2])}
            {this.row(this.state.data[3])}
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
