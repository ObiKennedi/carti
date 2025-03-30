"use client"; 

import { useState, useEffect } from "react";
import "./globals.scss";
import { partners } from "@/constants";

const Partners = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % partners.length);
        }, 4000); 

        return () => clearInterval(interval); 
    }, []);

    return (
        <section className="partners">
            <h2>Our partners</h2>
            <div>
                {partners.map((item, i) => (
                    <p key={item.id} className={i === index ? "active" : ""}>
                        {item.name}
                    </p>
                ))}
            </div>
        </section>
    );
};

export default Partners;
