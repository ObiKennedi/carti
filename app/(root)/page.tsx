import Portfolio from "@/component/portfolio"
import Hero from "@/component/hero-section"
import Programs from "@/component/programs"
import UpcomingEvents from "@/component/upcoming-event"

const Home = () =>{
    return(
        <main>
            <Hero/>
            <Portfolio/>
            <Programs/>
            <UpcomingEvents/>
        </main>
    )
}

export default Home