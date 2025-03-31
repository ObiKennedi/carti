import Link from "next/link";

import ProgramsCard from "../programs-card";
import { ProgramPackage } from "@/constants";
import "./globals.scss"

const Programs = () => {
  return (
    <section id="programs">
      <h2>Our Programs</h2>
      <div>
        Choose from our specialized caregiving programs designed to provide you
        with comprehensive skills and knowledge for a successful career in
        professional caregiving
      </div>
      <div>
        {ProgramPackage.map((items)=>(
            <ProgramsCard 
                key={items.id}
                duration={items.duration}
                program={items.program}
                writeUp={items.writeUp}
                href={items.href}             
            />
        ))}
      </div>
      <Link href={"/programs"}>View all programs</Link>
    </section>
  );
};

export default Programs;
