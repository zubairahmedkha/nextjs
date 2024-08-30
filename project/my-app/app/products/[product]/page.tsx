import Link from "next/link";
import Nav from "@/app/component/navbar";

export default async function Product({params}:{params:{product:string}}) {
    const fetchData = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.product}`,{
        // cache: "no-store",
        next: {revalidate: 3000}
    })
    const data = await fetchData.json()
    console.log(data);
    // console.log(props.params.product);
    
    return (
        <>
            
            <h1>Sub product list</h1>
            {/* <p> {params.product}</p> */}
            <p>{data.id}</p>
            <p>{data.title}</p>
            <p>{data.body}</p>
           
            </>
    )
}