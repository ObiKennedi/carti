import "./globals.scss"

declare type DetailsProps = {
    heading: string;
    duration: string;
    details: string;
    curriculum: string[]; 
}

const ProgramDetails = ({ heading, duration, details, curriculum }: DetailsProps) => {
    return (
        <div className="program-details">
            <h2>{heading}</h2>
            <p>{duration}</p>
            <div>{details}</div>
            <ul>
                {curriculum.map((item, index) => (
                    <li key={index}>{item}</li> 
                ))}
            </ul>
        </div>
    );
};

export default ProgramDetails;
