import React from "react";

const Hi = () => {
    // return (<div>
    //     <h1>Hi Thanuj</h1>using jsx
    //     </div>
    // )

    //without using jsx
    return React.createElement('div',null,'h1', 'Hello Thanuj')
}

export default Hi;