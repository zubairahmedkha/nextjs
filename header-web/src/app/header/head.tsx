
import Image from "next/image";
import { Button } from "@/components/ui/button"
import Link from "next/link";
import { Mails, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



export default function Header() {
  return (
    
        
<header className="flex justify-between sm:bg-green-500 md:bg-red-500 lg:bg-teal-400 " >
      <h1 className="text-8xl font-bold text-amber-400">Z.</h1>
      <ul className="text-2xl font-bold ">
      <Sheet>
  <SheetTrigger> <Menu /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.Iam sohappy
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        
      
<li> <Link href= " /"> Home</Link></li>
<li><Link href= " /about"> about</Link>  </li>
<li><Link href= " /blog"> Blog</Link>
</li>
<Button variant="destructive"> <Mails /> <Link href= " /mail"> click here </Link>   </Button>
</ul>
      </header>
    
  
  
    
  )}