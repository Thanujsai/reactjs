import { Component } from "react";

class Counter extends Component{

    constructor() {
        super();//call to base call constructor(Component)
        this.state = {
            counter:0,
        };//to create a state inside a class component,state and props are object therefore use curly braces
    }

    increment(){
        //this.state.counter++;//nothing happens with this, no error too, this is not the way, we have to use setstate method,Directly modifying this.state doesn't trigger a re-render of your component, so your UI won't reflect the updated state.
        this.setState({
            counter: this.state.counter+1
        })
        console.log('increment');
    }

    decrement(){
        //this.state.counter++;//nothing happens with this, no error too, this is not the way, we have to use setstate method
        this.setState({
            counter: this.state.counter-1//unlike props value of state can be changed
        })
        console.log('decrement');
    }

    render() {
        return <>{/*//inside a single html element*/}
            <h2>Count value is: {this.state.counter}</h2>
            <button onClick = {() => this.increment()}>Increment</button>
            <button onClick = {() => this.decrement()}>Decrement</button>
        </>
    }
}

export default Counter;