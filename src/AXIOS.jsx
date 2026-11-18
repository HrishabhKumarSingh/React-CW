import React, { useEffect, useState } from "react";
import axios from "axios";

const AXIOS = () => {
    const [user, setUser] = useState();
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(response =>{
            setUser(response.data);
        })
    }, [])
    return (
        <div>
            <h1>AXIOS Component</h1>
            <div>
                {
                    user?.map(item => (
                        <div key={item.id}>
                        <h2>{item.name}</h2>
                        <h2>{item.email}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
export default AXIOS;