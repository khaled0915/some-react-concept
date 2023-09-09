
export default function Friend ({friend}){
    console.log(friend)
    const {name , email} = friend;
    return (
        <div className="box">
            <h3>name : {name}</h3>
            <h4>email : {email} </h4>
        </div>
    )
}