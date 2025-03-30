import Image from "next/image"
import "./globals.scss"

const Subscribe = () =>{
    return(
        <div className="subscribe">
            <h2>Stay Updated</h2>
            <div>Subscribe to our newsletter for the latest updates and insights.</div>
            <form action="">
                <input type="email" placeholder="Enter your email" required/>
                <button>
                    <Image
                        src={'/icons/paper-plane.png'}
                        width={30}
                        height={30}
                        alt=""
                    />
                </button>
            </form>
        </div>
    )
}

export default Subscribe