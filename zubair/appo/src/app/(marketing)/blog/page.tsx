import Image from "next/image";
import birds from "../../../../image/birds.png"

export default function Blog() {
  return (<div>
  
  <h3 className="text-center  ml-5 text-{24px}"> This is Blog Rout group</h3>
  <Image src={birds} alt={"birds"} 
  width={200}
  height={200}
  loading="lazy"

  className="w-{400px} h-{400px} ml-5  rounded-full"/>
  <Image src={require("../../../../image/pic.png")} alt={"pic"} 
  width={200}
  height={200}
  loading="lazy"

  className="w-{600px} h-{600px} ml-5 rounded-full"/>
  
  </div>
  )}