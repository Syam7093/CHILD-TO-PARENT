import React, { useState } from 'react'
import "../App.css"
import { name } from './Utils'


const Calculator = () => {
    console.log(name,"name")

    const color={
        backgroundColor:"green",
        color:"white",
        padding:"10px",
        height:"50px",
        fontWeight:"bold"
    }

   const [show,setshow]=useState(true)
   const [visible,setvisible]=useState(false)

   const mainthing=()=>{
    setshow(false)
    setvisible(true)
   }

   const [counter,setcounter]=useState(0)
   const single=()=>{
    setshow(true)
    setvisible(false)
    console.log([]+[],"sai")
   }

  return (
    <div style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:"20px"}}>
        <h1>{counter}</h1>
        <button onClick={()=>{setcounter(counter+1)}}>submit</button>
       <div style={{border:"2px solid black",width:"200px",padding:"25px"}}>
       <div >
            {show && <p style={color}>welcome to india</p>}
            {visible && <h1>my name is jameela</h1>}
        </div>
        <div>
            {show && <input type="text"></input>}
           {visible && <img src="https://media.istockphoto.com/id/519611160/vector/flag-of-india.jpg?s=612x612&w=0&k=20&c=0HueaQHkdGC4Fw87s3DbeTE9Orv3mqHRLce88LV47E4=" height={"60px"} width={"70px"}></img>}
        </div>
        <div>
            <button onClick={()=>{single()}} style={{backgroundColor:"red",color:"white",marginTop:"10px" ,height:"30px",width:"50px",borderRadius:"5px"}}>Cancel</button>
            <button onClick={()=>{
                mainthing()
            }} style={{backgroundColor:"green",color:"white",marginTop:"10px" ,height:"30px",width:"50px",borderRadius:"5px"}}>submit</button>
        </div>
       </div>
    </div>
  )
}

export default Calculator