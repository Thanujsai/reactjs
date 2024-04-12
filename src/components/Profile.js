function Profile(props){
    console.log('props')
    console.log(props)//{name: 'Thanuj'}
    console.log(props.name)
    //we cannot change the value of props.name since it's immutable => problem
    //props.name = "hey";//problem: cannot assign to read only properties, props are immutable, therefore it's not dynamic => we use state

    //destructuring props
    const {name, lastName} = props;//destructuring
    console.log('Name :' + props.name+' '+props.lastName)
    return (
    <h1>Name: {name} {lastName} {props.children}</h1>//can pass dynamic data now
    )
}

export default Profile;


//props are immutable
//props are objects that hold info to control behaviour of a component
//problem with props is that they are immutable, cannot be changed inside a component
//state is also an object that hold some info but that info may change over the lifetime of that component => dynamic
