import React, { useEffect, useState } from 'react'
import "../App.css"
import Card from './Card'
import user from "../images/logo512.png"
import Syam from './Syam'
import Sai from './Sai'
import { Link } from 'react-router-dom'

const DoubleProp = ({name,age}) => {
    console.log(name,"syam")

    const [input,setinput]=useState('')
    const [kin,setkin]=useState([])
    console.log(kin,"kin...")
    const [data,setdata]=useState([])
    const submitdata=()=>{
        setdata([...data,input])
        setinput("")
    }
    const onedelete=(m)=>{
        const del=data.filter((e)=>{
            return e!==m
        })
        setdata(del)

    }

    const handleClick=(E)=>{
        console.log(E)
        setinput(input+E)
    }
    const submit=()=>{
      let one=  eval(input)
      setinput(one)
    }
    const clear=()=>{
        // let one=  eval(input)
        setinput("")
      }

      const alldata=async()=>{
        const req={
            method:"GET"
        }
        const one=await fetch("https://fakestoreapi.com/products",req)
        const main=await one.json()
        console.log(main,"main")
        setkin(main)
    }

    useEffect(()=>{
        alldata()
    },[])

    if(kin.length==0)
        {
            return (<h1>fetching data from api...</h1>)
        }
  return (
    <div>
        <button><Link to="lll">user</Link></button>
        <button>Profile</button>
        {kin.map((e)=>{
            return(
                <div>
                    {/* <Card {...e}></Card> */}
                    {/* <img src={"../../"}></img> */}
                </div>
            )
        })}
        <h1>welcome to props concept</h1>
        <img src={user} height="300px" width="300px"></img>
        <p>name:{name}</p>
        <p>age:{age}</p>

        <div>
            <h4>Todo</h4>
            {/* <input  value={input} type="text" onChange={(e)=>{setinput(e.target.value)}}></input><button onClick={()=>{submitdata()}}>submit</button> */}
            {
                data.map((e)=>{
                    return (
                      
                        <div>
                            <ul>
                              
                               <li >{e}</li><button onClick={()=>{onedelete(e)}}>x</button>
                              
                            </ul>
                            
                        </div>
                )
                })
            }
        </div>
        <div className='main'>
                                <h1>sai</h1>
                            <input className='rahul' value={input} type="text" onChange={(e)=>{setinput(e.target.value)}}></input>
                            <div>
                               <button className='buttons' onClick={()=>{clear()}}>AC</button>
                                <button className='buttons'  onClick={()=>{handleClick("%")}}>%</button>
                                <button className='buttons' onClick={()=>{handleClick("/")}}>/</button>
                                <button className='buttons' onClick={()=>{handleClick("+")}}>+</button>
                            </div>
                            <div>
                               <button className='buttons' onClick={()=>{handleClick("7")}}>7</button>
                                <button className='buttons' onClick={()=>{handleClick("8")}}>8</button>
                                <button className='buttons' onClick={()=>{handleClick("9")}}>9</button>
                                <button className='buttons' onClick={()=>{handleClick("*")}}>X</button>
                            </div>
                            <div>
                               <button className='buttons' onClick={()=>{handleClick("4")}}>4</button>
                                <button className='buttons' onClick={()=>{handleClick("5")}}>5</button>
                                <button className='buttons' onClick={()=>{handleClick("6")}}>6</button>
                                <button className='buttons' onClick={()=>{handleClick("-")}}>--</button>
                            </div>
                            <div>
                               <button className='buttons' onClick={()=>{handleClick("1")}}>1</button>
                                <button className='buttons' onClick={()=>{handleClick("2")}}>2</button>
                                <button className='buttons' onClick={()=>{handleClick("3")}}>3</button>
                                <button className='buttons' onClick={()=>{handleClick("+")}}>+</button>
                            </div>
                            <div>
                               <button className='buttons' onClick={()=>{handleClick("0")}}>0</button>
                                <button className='buttons' onClick={()=>{handleClick(".")}}>.</button>
                                <button className='buttons' onClick={()=>{submit()}}>=</button>
                                <button className='buttons' onClick={()=>{clear()}}>c</button>
                            </div>
                                
                            </div>

    </div>
  )
}

export default DoubleProp