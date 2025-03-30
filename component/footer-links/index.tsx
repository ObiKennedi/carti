import Link from "next/link"
import "./globals.scss"

const FooterLinks = () => {
    return (
        <div className="footer-links">
            <h2>Quick Links</h2>
            <div>
                <Link href={'/'}>About</Link>
                <Link href={''}>Programs</Link>
                <Link href={''}>Admission</Link>
                <Link href={''}>Career Support</Link>
            </div>
        </div>
    )
}

export default FooterLinks 