
// useState, useEffect
// Conditional rendering
 
function Home({title}){
    return (
        <div id="home">
            <h1>{title}</h1>
            <Images />
            
        </div>
    )
    
}

const paragraph = "Photography is as elegant a craft as art, literature and music,"

function Images(){
    return (
        <div>
            {paragraph}
        <div id="images">
            <img src="https://i.pinimg.com/236x/85/7d/c2/857dc2900420b05cd7990b1b75f708b5.jpg"/>
            <img src="https://i.pinimg.com/236x/41/97/52/4197528f344e1553b66a4694eb94c65c.jpg"/>
            {/* <img src="https://i.pinimg.com/236x/31/f6/e3/31f6e36af44df75f70f89322d77bcd35.jpg"/> */}
        </div>
        </div>
    )
}










export default Home;