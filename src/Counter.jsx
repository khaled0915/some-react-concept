import { useState } from "react"

export default function () {
    const [count , setCount] = useState(0);

    const handler = () => {

        const newCount = count +1 ;

        setCount(newCount);

    }

    const handler2 = () => {
        const reduce = count -1 ;
        setCount (reduce);
    }
    return (
        <div style={{border : '2px solid red'}}>
            <h3>
                counter : {count}
            </h3>
            <button onClick={handler}> add </button>
            <button onClick={handler2}> reduce </button>
        </div>
    )
}