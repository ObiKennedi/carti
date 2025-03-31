import Image from "next/image"
import "./globals.scss"

import ProgramDetails from "@/component/program-details"
import { programDetails } from "@/constants"

const ProgramsPage = () =>{
    return(
        <main className="programs-page">
            <Image 
                src={'/icons/programs-background.gif'}
                width={1000}
                height={1000}
                alt="programs background"
            />
            <section>
                {programDetails.map((items)=>(
                    <ProgramDetails
                        key={items.id}
                        heading={items.heading}
                        duration={items.duration}
                        details={items.details}
                        curriculum={items.curriculum}
                    />
                ))}
            </section>
        </main>
    )
}

export default ProgramsPage