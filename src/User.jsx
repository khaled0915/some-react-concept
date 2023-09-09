import { useEffect, useState } from "react"


// useEffect 
export default function User () {

    const [users, setUsers]  = useState([]);

    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setUsers(data))
    } , [])

    return (
        <div>

            This is User

            <h3>users : {users.length}</h3>

        </div>
    )
}



/* 

steps :

1. declare a state to hold the data

2. useEffect with call back and dependency array

3.use fetch to load data

4.set the data to State using setUSer 









*/