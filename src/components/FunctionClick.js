//rfce
import React from 'react'

function FunctionClick() {
    function clickHandler(){
        console.log('button clicked in function')
    }
  return (
    <div>
      <button onClick={clickHandler}>Click</button>
    </div>
  )
}

export default FunctionClick
