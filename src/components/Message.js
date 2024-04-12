import { Component } from "react";

//class component
class Message extends Component{//message class is a react component now
    render() {
        return <h1>Message: {this.props.messageContent} {this.props.messageCode}</h1>//this is jsx i.e. javascript xml, we can write javascript here
    }
}

export default Message;