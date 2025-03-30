import Link from "next/link"
import "./globals.scss"

const Resources = () =>{
    return(
        <div className="resources">
            <h2>Resources</h2>
           <div>
                <Link href={''}>Blog</Link>
                <Link href={''}>Events</Link>
                <Link href={''}>FAQ</Link>
                <Link href={''}>Contact</Link>
           </div>
        </div>
    )
}

export default Resources