import Image from "next/image";
import Link from "next/link";
import { Mails, Menu } from "lucide-react";
import {  Button } from "@/components/ui/button"
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
    <>
    
    <header className=" flex justify-between sm:bg-green-400 md:bg-red-400 xl:bg-blue-400 ">
        <h1  className="text-8xl font-bold text-amber-400  "> Z.</h1>
<ul className=" font-bold text-2xl">
  
  <Sheet>
  <SheetTrigger> <Menu /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>Are you absolutely sure?</SheetTitle>
      <SheetDescription>
        This action cannot be undone. This will permanently delete your account
        and remove your data from our servers.
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

  <li> <Link href="/">Home</Link> </li>
  <li> <Link href="/about">About</Link> </li>
  <li> <Link href="/contact">Contact</Link> </li>
  <Button variant="destructive"  >  <Mails /> click here</Button>
  
</ul>

    </header>
    </>
  )}
