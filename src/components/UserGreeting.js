import React, { Component } from 'react'

//conditional rendering
class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn : false
      }
    }const
  render() {
    //adding if-else within jsx is not valid
    // if(this.state.isLoggedIn){
    //   return(
    //     <div>Welcome Thanuj</div>
    //   )
    // }
    // else{
    //   return(
    //     <div>Welcome Guest</div>
    //   )
    // }

    //element variable method
    // let message;//stores element to be rendered
    // if(this.state.isLoggedIn){
    //   message = <div>Welcome Thanuj</div>
    // }
    // else{
    //   message = <div>Welcome Guest</div>
    // }

    // return <div>{message}</div>

    //ternary conditinal operator method
    // return(
    //   this.state.isLoggedIn?<div>Welcome Thanuj</div>:<div>Welcome Guest</div>
    // )

    //short circuit operator method, when u want to render something or nothing
    return(
      this.state.isLoggedIn && <div>Welcome Thanuj</div>//is islogged in is true div tag is displayed
    )

    // return (
    //     <div>
    //         <div>Welcome Thanuj</div>
    //         <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting