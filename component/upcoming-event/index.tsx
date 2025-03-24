import EventCards from "../event-cards"
import { eventList } from "@/constants"
import "./globals.scss"

const UpcomingEvents = () =>{
    return(
        <section className="events">
            <h2>Upcoming Events</h2>
            <div>
                {eventList.map((items)=>(
                    <EventCards
                        key={items.id}
                        name={items.name}
                        date={items.date}
                        time={items.time}
                        location={items.location}
                        writeUp={items.writeUp}
                    />
                ))}
            </div>
        </section>
    )
}

export default UpcomingEvents