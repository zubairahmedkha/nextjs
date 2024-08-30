"use client";
import {useState,useEffect} from "react"
// import Image from "next/image";
import Nav from "./navbar";

export default function Home() {
   const [name, setName] = useState("ali"); // state hook for
  const [age, setAge] = useState(40)
  const [count, setCount] = useState(0)
  useEffect(()=>{
   console.log("useEffect function fire")
  },[])
   //  l/et name = "ali"
  const changeName = () =>{
    setName("Essa")
    setAge(19); // change statetName("Essa"); // change state
  }
  // let name= "Essa";
  // console.log(name);
  return (<div>

  <Nav/>
 
  
  <h3> This is Home Rout group</h3>
  <p> React  </p>
  <br></br>
  <p> {name} is {age}</p>
  <button onClick={changeName} > Click Button</button>
  <br></br>
  <button onClick={()=>setCount(count+2)} > Click Count +1 ={count}</button>
  
  </div>
  )}