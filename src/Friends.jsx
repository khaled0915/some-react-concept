import { useEffect, useState } from 'react'
import './friends.css'
import Friend from './Friend';
export default function Friends() {

    const [friends  ,setFriends] = useState ([]);


    useEffect ( () => {

        fetch ('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => setFriends(data))



    }, [])




    return (
        <div className='box'>
            <h2>friends : {friends.length}</h2>
            {
                friends.map( friend => <Friend friend={friend}></Friend> )
            }
        </div>
    )
}


/*

1. state to hold data

2. useEffect with call back and dependency array

3.use fetch to load data

4.set the data to State using setUSer 




*/