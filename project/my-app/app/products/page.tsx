import Link from "next/link";
import Nav from "../component/navbar";

export default async function Product (){
    const fetchData = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await fetchData.json()
    console.log(data);
    
    return (
        <div>
            {/* <Nav/> */}

            <h1> Product List</h1>
            <ol>
{
    data.map((item:any,i:number)=>{
      return(
        <li><Link href={`/products/${item.id}`}>{item.title} </Link> </li>
      )  
    })
}

            </ol>
           
        </div>
    )
}