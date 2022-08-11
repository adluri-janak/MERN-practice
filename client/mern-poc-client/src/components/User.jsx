import React from 'react'
import axios from "axios"

const User = () => {
    //const [userData,setUserdata] = React.useState([])
    
    const getData=async ()=>{
        const data = await axios.get("http://localhost:3000/user")
        console.log(data.data)
    }
    return (
        <div>
            <h2>users</h2>
            <button onClick={()=>getData()}>click</button>
        </div>
    )
}

export default User