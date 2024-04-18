import React from "react";

// function Greet(){
//     return <h1>Greeting Thanuj</h1>
// }

const Greet = ({name,heroName}) => {//destructuring using curly braces, previously it was props and used inside method as props.name and props.heroName
    //props.name = 'fklnakl'//returns an error since props are read only properties, cannot alter them, immutable
    //or we can name the parameters as props and destructure it inside the method like
    // const {name,heroName} = props;
    return (//we can return only one element
    
    <div>
        <h1>Greeting {name}, their hero's name is {heroName}</h1>
    </div>

    )
}

export default Greet;