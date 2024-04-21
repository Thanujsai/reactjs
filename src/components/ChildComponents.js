import React from 'react'

function ChildComponent(props) {
    console.log('props')
    console.log(props)
  return (
    <div>
        <button onClick={() => props.greetHandler('child')}>Greet Parent</button>{/* called a method which is present in parent component from child component, use arrow function syntax in ordr to pass a parameter to greethandler*/}
    </div>
  )
}

export default ChildComponent