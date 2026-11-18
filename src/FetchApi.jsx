import { useEffect, useState } from "react";

const FetchApi = () => {
    const [user, setUser] = useState();
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users").then(response => {
            if(!response.ok){
                throw new Error("Failed to get data from API");
            }
            return response.json();
        })
        .then(data =>{
            setUser(data);
            console.log(data);
        })
        .catch(error => {
            console.log(error.message);
        })
    },[])
    return (
        <div>
            <h1>This is Fetch API</h1>
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
    );
}
export default FetchApi;