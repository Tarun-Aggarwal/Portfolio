import Project from "../components/Project"
import { fullStack, reactProjects } from "../Utils/projectData"
import "../styles/Projects.css";
import {skills} from "../Utils/skills.js";

export default function Projects() {
    return (
        <div style={{backgroundColor: "#1a1a1a"}}>
            <div className="projects"> <br />
                <h2>Full Stack Projects</h2> <br/><br/>
                {
                    Object.keys(fullStack).map((key, idx) => (
                        <Project key={idx} name={key} value={fullStack[key]} />
                    ))
                }
                <br/><br/>
                <h2>React Projects</h2> <br/><br/>
                {
                    Object.keys(reactProjects).map((key, idx) => (
                        <Project key={idx} name={key} value={reactProjects[key]} />
                    ))
                }
                <h3 style={{textAlign: "center"}}>And many more like React based Portfolio, Chat Application, Password generator, Stop Watch etc.</h3> <br /><br/> <br/><br/>
            </div>

            <h2>Skills</h2> <br/> <br/>
            <div className="skills"> <br/>
                {
                    skills.map((skill, idx) => (
                        <div className="skill" key={idx}><img src={skill}/></div>
                    ))
                }
            </div>
            <br/><br/><br/>
        </div>
    )
}