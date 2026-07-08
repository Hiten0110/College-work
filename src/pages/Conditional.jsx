import React from 'react'
import { useState } from 'react'

function Conditional() {
    const [loggedIn, setLoggedIn] = useState(false)
    // let button, message
    // if (!loggedIn) {
    //     message = <h2>Please Login to continue</h2>
    //     button = <button onClick={() => setLoggedIn(true)}>Logout</button>
    // }
    // else {
    //     message = <h2>Welcome </h2>
    //     button = <button onClick={() => setLoggedIn(false)}>Login</button>
    // }
    //     return (
    //         <>
    //         {message}<br/>
    //         {button}
    //         </>
    //     )
    return (
        <div>
            {!loggedIn ? <><p>Please login to continue </p><button onClick={() => setLoggedIn(true)}>Login</button></> :
                <><p>Welome</p><button onClick={() => setLoggedIn(false)}>logout</button></>

            }
        </div>
    )
}


export default Conditional