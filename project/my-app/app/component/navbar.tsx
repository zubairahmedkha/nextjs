import Link from "next/link"

export default function Nav (){
    return (
        <><ul>
        <li><Link href="/"> HomePage </Link></li>
        <li><Link href="/about"> AboutPage</Link></li>
        <li><Link href="/products"> ProductPage</Link></li>
        <li><Link href="/products/product"> Sub Product Page</Link></li>
      </ul>
        
        </>
    )
}
