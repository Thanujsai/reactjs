import { Component } from "react";

//class component
class Message extends Component{//message class is a react component now

    constructor(){
        super()//call to base call constructor(Component)
        this.state = {
            message: 'Welcome visitor',
            name: 'thanuj'
        }
    }

    click(){
        console.log('hey')
        this.setState({
            message: 'thank you for subscribing',
            name:'thanuj sai'
        })
    }
    render() {
        return( <div>
            <h1>Message: {this.props.messageContent} {this.props.messageCode}</h1>{/*this is jsx i.e. javascript xml, we can write javascript here*/}
            <h1>{this.state.message} i.e. {this.state.name}</h1>
            <button onClick={() => this.click()}> Subscribe </button>
        </div>
        )
    }
}

export default Message;