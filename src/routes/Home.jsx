import image from "../assets/home.jpg";
import { Link } from "react-router";
import "../styles/Home.css";
import Typewriter from "../components/Typewriter.jsx";

export default function Home() {
    return (
        <div className="home">
            <div className="main-info">
                <h1>
                    Hi There, <br/>
                    I'm <span className="name">Tarun Aggarwal</span>
                </h1>
                <div className="info">
                    <Typewriter
                        words={[
                        "Welcome to my Portfolio",
                        "I am a MERN Stack Developer",
                        "AIML Enthusiast",
                        "Java DSA 600+ Problems solved",
                        ]}
                    />
                </div>
                <div className="try-console">
                    <Link to="/console">Try Console &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-brands fa-telegram"></i></Link>
                </div>
            </div>

            <div className="main-img">
                <img src={image}/>
            </div>
        </div>
    )
}