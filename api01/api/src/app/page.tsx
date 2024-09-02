import Image from "next/image";
import { Button } from "@/components/ui/button"
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

      
   

export default function Home() {
  return (<div><header className="flex justify-between 
  sm:bg-blue-400  md:bg-slate-600  xl:bg-green-400    ">
    
    
     <h1 className=" m-4 h-20 w-20 bg-red-400"> </h1>
     <h1 className=" m-4 h-20 w-20 bg-red-400"> </h1>
     <h1 className=" m-4 h-20 w-20 bg-red-400"> </h1>
     
     <Sheet>
  <SheetTrigger> <Menu /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.it is grat
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

     
     
     

     
     </header>
<div className="flex justify-end"> 
<Button variant="destructive"> Click here</Button>
</div> 
<div>
  <p>hello this is my first webpage</p>

</div>
    
  </div>
  
    )}