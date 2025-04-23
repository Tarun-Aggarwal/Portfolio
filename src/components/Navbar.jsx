import { Link } from "react-router"
import "../styles/Navbar.css"
import image from '../assets/logo.jpg'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="logo">
                <Link to="/"><img src={image}></img></Link>
            </div>
            
            <div className="nav-options">
                <Link to="/">Home</Link>
                <Link to="console">Console</Link>
                <Link to="projects">Projects</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </div>
    )
}