import React, {useState} from "react";




function LogIn(){
    return <button className="button">LogIn</button>
}
function LogOut(){
    return <button className="button">LogOut</button>
}


function Navbar(){
     const [isLogged, setLogged] = useState(false)
    // isLogged = false
    function handleClick(){
       setLogged(!isLogged)
    }
    return(
        <div>
        <button onClick={handleClick}>{isLogged ? <LogIn /> : <LogOut />}</button>
        </div>
    )

}


export default Navbar;

