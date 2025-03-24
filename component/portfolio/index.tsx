import { PortfolioList } from "@/constants"
import "./globals.scss"

const Portfolio = () =>{
    return(
        <section className="portfolio">
            {PortfolioList.map((items)=>(
                <div key={items.id}>
                    <h2>{items.rate}</h2>
                    <div>{items.value}</div>
                </div>
            ))}
        </section>
    )
}

export default Portfolio