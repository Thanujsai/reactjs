function Profile(props){
    console.log('props')
    console.log(props)//{name: 'Thanuj'}
    console.log(props.name)
    //props.name = "hey";//problem: cannot assign to read only properties, props are immutable, therefore it's not dynamic => we use state
    console.log('Name :' + props.name+' '+props.lastName)
    return (
    <h1>Name: {props.name} {props.lastName} {props.children}</h1>//can pass dynamic data now
    )
}

export default Profile;