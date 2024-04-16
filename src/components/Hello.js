// function Hello(){
//     return <h1>Hello World!</h1>
// }

const name = "Thanuj";

const displayMessage = () => {
    return "message";
}
const Hello = () => {//functional component, accepts props returns jsx
    return <>
        <h1>Hello {name}!</h1>
        <h2>Total is {10+10}</h2>
        <h1>The message is: {displayMessage()}</h1>
    </>//this is jsx, curly braces to use variables
}

export default Hello;//default means we can import this component and gve any name