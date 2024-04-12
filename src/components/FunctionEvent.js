
// function handleClick(){
//     alert('Button is clicked')
// }

const handleClick = () => {
    console.log('button is clicked')
    alert('Button is clicked')
}
function FunctionEvent(){
    return(
        <div>
            functional component
            <button onClick = {handleClick}>Click here</button>
        </div>
    );
}

export default FunctionEvent;