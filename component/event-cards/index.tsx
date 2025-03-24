import Image from "next/image";
import "./globals.scss"

declare type EventProps = {
    name: string;
    date: string;
    time: string;
    location: string;
    writeUp: string;
}

const EventCards = ({name, date, time, location, writeUp}:EventProps) =>{
    return(
        <div className="event-card">
            <h2>{name}</h2>
            <div>
                <Image 
                    src={'/icons/date.gif'}
                    width={24}
                    height={24}
                    alt="date"
                />
                <div>{date}</div>
            </div>
            <div>
                <Image 
                    src={'/icons/time.gif'}
                    width={24}
                    height={24}
                    alt="time"
                />
                <div>{time}</div>
            </div>
            <div>
                <Image 
                    src={'/icons/location.gif'}
                    width={24}
                    height={24}
                    alt="location"
                />
                <div>{location}</div>
            </div>
            <div>{writeUp}</div>
        </div>
    )
}

export default EventCards