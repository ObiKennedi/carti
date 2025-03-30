import Image from "next/image";
import "./globals.scss";

declare type TestimoniesProps = {
    name: string;
    image: string;
    postion: string;
    testimony: string;
    stars: number;
};

const TestimonyCard = ({ name, image, postion, testimony, stars }: TestimoniesProps) => {
    return (
        <div className="testimony-card">
            <div>
                <Image 
                    src={image} 
                    width={300} 
                    height={300} 
                    alt={`${name}'s profile`} 
                />
                <div>
                    <h3>{name}</h3>
                    <p>{postion}</p>
                </div>
            </div>
            <p>"{testimony}"</p>
            <div className="stars">
                {[...Array(stars)].map((_, idx) => (
                    <Image
                        key={idx}
                        src="/icons/rating-star.gif"
                        alt="Star"
                        width={20}
                        height={20}
                    />
                ))}
            </div>
        </div>
    );
};

export default TestimonyCard;
