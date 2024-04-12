import { Component } from "react";

class Counter extends Component{

    constructor() {
        super();//call to base call constructor(Component)
        this.state = {
            counter:0,
        };//to create a state inside a class component,state and props are object therefore use curly braces

        //this.increment = this.increment.bind(this);//this line makes "this" accessible to the increment method, other we get Cannot read properties of undefined (reading 'setState')
//TypeError: Cannot read properties of undefined (reading 'setState')
    }

    // increment(){
    //     console.log(this)
    //     //this.state.counter++;//nothing happens with this, no error too, this is not the way, we have to use setstate method,Directly modifying this.state doesn't trigger a re-render of your component, so your UI won't reflect the updated state.
    //     this.setState({
    //         counter: this.state.counter+1
    //     })
    //     console.log('increment');
    // }

    //using an arrow function solves the problem of we get Cannot read properties of undefined (reading 'setState')
//TypeError: Cannot read properties of undefined (reading 'setState')

//it resolves because arrow function has access to this keyword
    
    increment = () => {
        console.log(this)
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
            <button onClick = {this.increment}>Increment</button>{/* Cannot read properties of undefined (reading 'setState'), */}
            <button onClick = {() => this.decrement()}>Decrement</button>{/* or use this method to solve the typeerror, it gets solved since increment event handler has this keyword*/}
        </>
    }
}

export default Counter;