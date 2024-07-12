import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch } from "react-redux";
import { setsyamdata } from "../slices/dataSlice";
import { useNavigate } from "react-router-dom";

const Data = () => {
  const [show, setshow] = useState([]);
  const [single, setsingle] = useState({});

  const [value,setvalue]=useState({
    name:"redmi",
    price:2000
  })
  console.log(value,"value")

  const [change, setchange] = useState();
  let data = {
    price: value[0],
  };
  useEffect(() => {
    alldata();
  }, [show]);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alldata = async () => {
    const req = {
      method: "GET",
    };
    const one = await fetch("https://fakestoreapi.com/products", req);
    const main = await one.json();
    setshow(main);
    setsingle(main[0]);
  };

  const handleSelect = (e) => {
    setsingle(e);
  };
  const [some,setsome]=useState(1)
  const decm=()=>{
    if(some==1)
        {
           return null 
        }
    else{
        setsome(some-1)
    }
   
  }
  const incm=()=>{
    if(some==10)
        {
           alert("you can add items upto 10 only") 
        }
    else{
        setsome(some+1)
    }
  }
  return (
    <div className="card-container">
        <div>
            <button className="buttoncolor" disabled={some==1}  onClick={()=>{decm()}}>-</button>
            <h5>{some}</h5>
            <button disabled={some==10} onClick={()=>{incm()}}>+</button>
        </div>
      <div>
        <h2>Price:{data.price}</h2>
        <input
          type="text"
          onChange={(e) => {
            setchange(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            setvalue(change);
          }}
        >
          update
        </button>
      </div>
      <h2>{single.price}</h2>
      <h1>----------------</h1>
      {show.map((e) => {
        return (
          <div
            className="card"
            key={e.id}
            onClick={() => {
              handleSelect(e);
            }}
          >
            <h4>{e.price}</h4>
            <button
              onClick={() => {
                navigate("/parent");
                dispatch(setsyamdata(e));
              }}
            >
              submit
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default Data;
