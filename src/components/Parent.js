import React, { useEffect, useState } from "react";
import Child from "./Child";
import { useSelector } from "react-redux";

const Parent = () => {
  const [email, setemail] = useState("");
  const [count,setscount]=useState(0)
  useEffect(()=>{
    main()
  },[])

  const main=()=>{
    setscount(count=>count+1)
    setscount(count=>count+1)
    setscount(count=>count+1)

  }

  

  const [password, setpassword] = useState("");
  const [disable, setdisable] = useState(false);
  const [tin,settin]=useState([])
  const [one, setone] = useState([]);
  const [digit,setdigit]=useState("")
  const [thing,setthing]=useState([])
  const [color,setcolor]=useState("green")
  console.log(thing,"thing---")

  const emails = (e) => {
    setemail(e.target.value);
  };

  const passwords = (e) => {
   
    setpassword(e.target.value);
  };

  useEffect(()=>{
  mainthing()
  },[email,password])


  const mainthing=()=>{
    if(email.length >=4 && password.length >=4)
        {
            setdisable(true)
        }
    else{
        setdisable(false)
    }
  }

  const sai = useSelector((e) => e?.reusable?.syamdata);

  const handledata = (e, f) => {
    setone(f);
  };

  useEffect(()=>{
    // getdata()
  },[])

  const sinlgledigit=(e)=>{
    console.log(e,"sdfsf")
    setdigit(e.target.value)

  }

  const sumnitone=()=>{

    setthing([...thing,digit])
    setdigit(" ")

  }

  const jamdelete=(s)=>{

    const ddd=thing.filter((e)=>{
        return e!=s
    })
    setthing(ddd)

  }

 


 

  return (
    <div style={{backgroundColor:color, height:"100%",width:"100%"}}>
      {count}
      <h1>welcome to parent and child components...</h1>
      <Child handledata={handledata}></Child>
      <h1>thi is syamsundarsai file</h1>
      <h1>{sai.price}</h1>

      <form>
        <div>
          <label>email</label>
          <input
            type="email"
            onChange={(e) => {
              emails(e);
            }}
          ></input>
        </div>
        <div>
          <label>password</label>
          <input
            type="email"
            onChange={(e) => {
              passwords(e);
            }}
          ></input>
        </div>
        {disable && <button>submit</button>}
      </form>

     <div>
        <input type="text" value={digit} onChange={(e)=>{sinlgledigit(e)}}></input>
        <button onClick={()=>{sumnitone()}}>click</button>
        {
           thing.map((e)=>{
            return (
                <div>
                    <h4>{e}</h4>
                    <button onClick={()=>{jamdelete(e)}}>delete</button>
                </div>
            )
           }) 
        }
     </div>
     <input type="color" onChange={(e)=>{setcolor(e.target.value)}}></input>
    </div>
  );
};

export default Parent;
