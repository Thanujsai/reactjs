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
    return (
        <div>
            <div>Welcome Thanuj</div>
            <div>Welcome Guest</div>
      </div>
    )
  }
}

export default UserGreeting