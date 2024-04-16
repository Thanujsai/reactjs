import { Component } from "react";

class ClassEvent extends Component{

    handleClick(){
        console.log('class based event handling')
    }//method
    render(){
        return(
            <div>
                This is a class based component
                <button onClick = {this.handleClick}>click</button>{/*this keyword must be used */}
            </div>
        )
    }
}

export default ClassEvent;