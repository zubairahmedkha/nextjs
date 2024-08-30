import Image from "next/image";
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from "lucide-react";
import Link from "next/dist/client/link";


 export default async function Homepage() {
 let res = await fetch("https://simple-books-api.glitch.me/books")
  let data = await res.json()
  // console.log(data);
  // {data[0].name}
 return (
    
   <div>
    <div className="flex  items-center bg-yellow-400
justify-between ">
 <div className="bg-red-500 m-4 w-24 h-24">          </div>
 <div className="bg-red-500 m-4 w-24 h-24">          </div>
 {/* <div className="bg-red-500 m-4 w-24 h-24">          </div> */}
 <Sheet>
<SheetTrigger> <Menu /></SheetTrigger>
<SheetContent>
<p> Hello world</p>
<Link href="/"> Home</Link>
<Link href="/api"> Api</Link>


</SheetContent>
</Sheet>

</div>
 <div> {data[0].name} </div>       
 <div> {data[1].name} </div>       
 <div> {data[2].name} </div>       
 <div> {data[3].name} </div>       
 <div> {data[4].name} </div>       
    
</div> 


   
  )}
  