"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"

import "./global.scss"
import { NavLinks } from "@/constants"

const Header = () => {

    const [open, setOpen] = useState(true)
    const [scrolled, setScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <header className={`header ${scrolled ? "scrolled-header" : "unscrolled-header"}`}>
            <Link href={"/"}>
                <Image
                    src={'/icons/carti.png'}
                    width={100}
                    height={50}
                    alt="logo"
                />
            </Link>
            <button onClick={() => setOpen((prevOpen) => !prevOpen)}>
                {
                    open ? (
                        <Image
                            src={"/icons/toggle-menu.png"}
                            width={50}
                            height={50}
                            alt="menu"
                        />
                    ) : (
                        <Image
                            src={"/icons/cancel.png"}
                            width={50}
                            height={50}
                            alt="menu"
                        />
                    )
                }
            </button>
            <nav className={open ? "closed" : "open"}>
                <ul>
                    {NavLinks.map((items) => (
                        <li key={items.id}>
                            <Link href={items.href}>
                                <Image
                                    src={items.img}
                                    width={50}
                                    height={50}
                                    alt={items.name}
                                />
                                <div>{items.name}</div>
                            </Link>
                        </li>
                    ))}
                </ul>
                <div>
                    <Link href={''}>
                        <button>Apply now</button>
                    </Link>
                    <Link href={''}>
                        <button>Sign in</button>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Header