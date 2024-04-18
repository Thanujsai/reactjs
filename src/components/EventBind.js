import React, { Component } from 'react'

export class EventBind extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         message: 'Hello'
      }

    //   this.clickHandler = this.clickHandler.bind(this);{/*3rd method*/}
    }
    
    // clickHandler(){
    //     this.setState({
    //         message: 'hello Thanuj'
    //     })
    //     console.log(this)//undefined when bind(this) is not used
    // }

    clickHandler = () => {
        this.setState({
                     message: 'hello Thanuj'
                 })
    }// 4th approach is to use an arrow function instead of a normal function, this way we wont have to bind the handler

  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
        {/*2nd approach or user an arrow function in the render method*/}
        <button onClick = {() => {this.clickHandler()}} >Click </button>
        <button onClick = {this.clickHandler} >Click 2 </button>{/*this is possible since this.clickHandler has been binder at line 12 or by making clickHandler an arrow function*/}
      </div>
    )
  }
}

export default EventBind
