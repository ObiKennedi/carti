import Image from "next/image";
import "./globals.scss"
import { ourValues } from "@/constants";
import CoreValues from "@/component/core-values";

const About = () => {
    return (
        <main id="about">
            <section>
                <Image
                    src={'/icons/about-background.gif'}
                    width={1000}
                    height={500}
                    alt="background"
                />
                <div>
                    <h1>About CGTII</h1>
                    <div>
                        <div>
                            <h2>Our Mission</h2>
                            <p>
                                To empower individuals with the knowledge, skills, and compassion
                                needed to become exceptional caregivers, making a positive impact
                                in the lives of those they serve.
                            </p>
                        </div>
                        <div>
                            <h2>Our Vision</h2>
                            <p>
                                To be the leading institution in caregiving education, setting the
                                standard for excellence in professional care and making quality
                                healthcare accessible to all communities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <h2>Our Core Values</h2>
                <div>
                    {ourValues.map((items) => (
                        <CoreValues
                            key={items.id}
                            heading={items.heading}
                            icons={items.icon}
                            writeUp={items.writeUp}
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default About;
