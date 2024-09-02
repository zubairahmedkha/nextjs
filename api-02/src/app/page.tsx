import Image from "next/image";

export default async function Homepage() {
let res =await fetch("https://simple-books-api.glitch.me/books");
let data = await res.json();
// console.log(data);


  return (
    <div>
 <h1> {data[0].id}</h1>
<h1> {data[0].id}</h1>
<h1> {data[1].name}</h1>
<h1> {data[2].name}</h1>
<h1> {data[4].name}</h1>
<h1> {data[5].name}</h1>
    </div>)
}
