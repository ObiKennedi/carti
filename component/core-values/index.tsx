import Image from "next/image";
import './globals.scss'

declare type ValuesProps = {
    icons: string;
    heading: string;
    writeUp: string;
}

const CoreValues = ({icons, heading, writeUp}:ValuesProps) =>{
    return(
        <div className="core-values">
            <Image 
                src={icons}
                width={50}
                height={50}
                alt={heading}
            />
            <h2>{heading}</h2>
            <div>{writeUp}</div>
        </div>
    )
}

export default CoreValues