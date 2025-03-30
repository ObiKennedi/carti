import "./globals.scss"

import Image from "next/image"
import Link from "next/link"

const FooterAbout = () => {
    return (
        <div className="footer-about">
            <Image
                src={'/icons/carti.png'}
                width={100}
                height={50}
                alt="carti"
            />
            <div>Empowering compassionate caregivers through quality education and practical training.</div>
            <ul>
                <li>
                    <Link href={''}>
                        <Image
                            src={'/icons/facebook.png'}
                            width={30}
                            height={30}
                            alt=""
                        />
                    </Link>
                </li>
                <li>
                    <Link href={''}>
                        <Image
                            src={'/icons/x.png'}
                            width={30}
                            height={30}
                            alt=""
                        />
                    </Link>
                </li>
                <li>
                    <Link href={''}>
                        <Image
                            src={'/icons/instagram.png'}
                            width={30}
                            height={30}
                            alt=""
                        />
                    </Link>
                </li>
                <li>
                    <Link href={''}>
                        <Image
                            src={'/icons/linkedin.png'}
                            width={30}
                            height={30}
                            alt=""
                        />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default FooterAbout