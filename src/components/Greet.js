import React from "react";

// function Greet(){
//     return <h1>Greeting Thanuj</h1>
// }

const Greet = (props) => {
    //props.name = 'fklnakl'//returns an error since props are read only properties, cannot alter them, immutable
    return (//we can return only one element
    
    <div>
        <h1>Greeting {props.name}, their hero's name is {props.heroName}</h1>
        <h2>Children are {props.children}</h2>
    </div>

    )
}

export default Greet;