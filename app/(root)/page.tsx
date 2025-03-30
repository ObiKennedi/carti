import Portfolio from "@/component/portfolio"
import Hero from "@/component/hero-section"
import Programs from "@/component/programs"
import UpcomingEvents from "@/component/upcoming-event"
import Pathners from "@/component/pathners"
import Testimony from "@/component/testimonials"

const Home = () =>{
    return(
        <main>
            <Hero/>
            <Portfolio/>
            <Programs/>
            <UpcomingEvents/>
            <Pathners/>
            <Testimony/>
        </main>
    )
}

export default Home