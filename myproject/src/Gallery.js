import React,{useEffect, useState} from "react";


function Clock(){
    const [time, setTime] = useState(new Date())
    console.log(time)
    useEffect(() => {
        setTimeout(() => {
            setTime(new Date())
        }, 2000)
    }, [])
}


function Gallery(){
    return (
        <div>
            <Clock />
        </div>
    )
}

export default Gallery;