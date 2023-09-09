import { useState } from "react"


export default function Team () {

    const [team , setTeam] = useState (11);

    const handle = () => {
        const addTeam = team +1 ;
        setTeam(addTeam);
    }

    const reduce = () => {
        setTeam(team-1);
    }

    const teamStyle = {
        border : '2px solid blue' ,
        margin : '20px' ,
        padding : '20px' ,
        borderRadius : '10px'
    }
    return (
        <div style={teamStyle}>
            <h2>
                players : {team}
            </h2>

            <button onClick={handle} > add</button>

            <button onClick={reduce}>remove</button>
        </div>
    )
}