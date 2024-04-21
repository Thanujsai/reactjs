import React, { Component } from 'react'
import ChildComponent from './ChildComponents'

 class ParentComponent extends Component {

    constructor(props){
        super(props)

        this.state = {
            parentName:'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childname){
        alert(`hello ${this.state.parentName} from ${childname}`)
    }
  render() {
    return (
      <div>
        <ChildComponent greetHandler = {this.greetParent}/>{/*passing a method as props*/}
      </div>
    )
  }
}

export default ParentComponent