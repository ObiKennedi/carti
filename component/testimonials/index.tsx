import Image from "next/image"
import "./globals.scss"
import TestimonyCard from "../testimonies-card"
import { testimomies } from "@/constants"

const Testimony = () => {
    return (
        <section className="testiomonies">
            <h2>What our students have to say</h2>
            <div>
                <div>
                    <Image
                        src={'/icons/rating-star.gif'}
                        width={24}
                        height={24}
                        alt="ratings"
                    />
                    <Image
                        src={'/icons/rating-star.gif'}
                        width={24}
                        height={24}
                        alt="ratings"
                    />
                    <Image
                        src={'/icons/rating-star.gif'}
                        width={24}
                        height={24}
                        alt="ratings"
                    />
                    <Image
                        src={'/icons/rating-star.gif'}
                        width={24}
                        height={24}
                        alt="ratings"
                    />
                    <Image
                        src={'/icons/rating-star.gif'}
                        width={24}
                        height={24}
                        alt="ratings"
                    />
                </div>
                <div>Rated 5.0 on Trustpilot</div>
            </div>
            <div>
                {testimomies.map((items)=>(
                    <TestimonyCard
                        key={items.id}
                        name={items.name}
                        image={items.image}
                        postion={items.postion}
                        testimony={items.testimony}
                        stars={items.stars}
                    />
                ))}
            </div>
        </section>
    )
}

export default Testimony