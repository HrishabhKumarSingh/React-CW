import React, { useEffect, useState } from "react";
// import axios from "axios";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(()=>{
        const getUser = async () => {
            try {
                setLoading(true);
                setError(null);
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if(!response.ok){
                    throw new Error("Unable to get data from API");
                }
                const data = await response.json();
                setUser(data);
            }
            catch(err){
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        getUser();
    }, [])
    if(loading) {
        return (
            <div>
                <AiOutlineLoading3Quarters />
                <h2>Loading...</h2>
            </div>
        )
    } 
    if(error) {
        return <div> Error: {error }</div>
    }
    if(user.length === 0) {
        return <h2>No user found</h2>
    }
    return ( 
        <div>
            <h1>Loading Component</h1>
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
export default Loading;