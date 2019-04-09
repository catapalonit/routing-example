import React from "react"


const User = props => {
    console.log(props.match.params.id)
    return (
        <div>
            <h1>{props.match.params.id}'s Page</h1>
        </div>
    )
}


export default User