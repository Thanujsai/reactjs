function Profile(props){
    console.log('props')
    console.log(props)//{name: 'Thanuj'}
    console.log('Name :' + props.name+' '+props.lastName)
    return (
    <h1>Name: {props.name} {props.lastName} {props.children}</h1>//can pass dynamic data now
    )
}

export default Profile;