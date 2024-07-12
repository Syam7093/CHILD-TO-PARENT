import React, { useState,useEffect } from 'react'

const Child = ({handledata}) => {

    const [user,setUser]=useState("SYAMSUNDARSAI")
    const [data,setdata]=useState([])
    // console.log(data,"datda")
    useEffect(() => {
        handledata(user,data);
    }, [user, handledata,data]);

    useEffect(()=>{
        alldata()
    },[])

    const alldata=async()=>{
        const req={
            method:"GET"
        }
        const one=await fetch("https://fakestoreapi.com/products",req)
        const main=await one.json()
        // console.log(main,"main")
        setdata(main)
    }
  return (
    <div>
    {/* {data.map((e)=>{
        return(
            <div>
                <h1>{e.price}</h1>
                <img src={e.image} height="40px" width={"40px"}></img>
            </div>
        )
    })} */}
    </div>
  )
}

export default Child