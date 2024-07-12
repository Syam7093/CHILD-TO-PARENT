import React from 'react'
import DoubleProp from './DoubleProp'

const Singleprop = () => {
    let data={
        id:1,
        name:"syamsundarsai",
        age:20,
        gender:"male"
    }
  return (
    <div>
        <h1 style={{color:"green"}}>Sending data from parent component to child component data </h1>
        {/* <DoubleProp name={data.name} age={data.age}></DoubleProp> */}
        <DoubleProp {...data}></DoubleProp>

    </div>
  )
}

export default Singleprop