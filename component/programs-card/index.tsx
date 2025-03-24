import Link from "next/link"
import "./globals.scss"

declare type CardProps = {
    program: string;
    duration: string;
    writeUp: string;
    href: string;
}

const ProgramsCard = ({program, duration, writeUp, href}:CardProps) =>{
    return(
        <Link href={href} className="programs-card">
            <h2>{program}</h2>
            <div>{duration}</div>
            <p>{writeUp}</p>
            <button>Learn more</button>
        </Link>
    )
}

export default ProgramsCard