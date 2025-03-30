import "./globals.scss"
import Link from "next/link"

import FooterAbout from "../footer-about"
import Partners from "../pathners"
import FooterLinks from "../footer-links"
import Resources from "../resources"
import Subscribe from "../subscribe"

const Footer = () =>{
    return(
        <footer>
            <section>
                <FooterAbout/>
                <FooterLinks/>
                <Resources/>
                <Subscribe/>
            </section>
            <Partners/>
            <section>
                <p>© 2024 CGTII. All rights reserved.</p>
                <p>Built by <Link href={''}>DEXTER'S LAHB</Link></p>
            </section>
        </footer>
    )
}

export default Footer