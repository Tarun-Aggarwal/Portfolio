import "../styles/Console.css";
import { useState } from "react";
import {data} from "../Utils/consoleData";

export default function Console() {
    const [val, setVal] = useState("");
    const [commands, setCommands] = useState([]);

    function handleKeyDown(e) {
        if(e.key === "Enter") {
            if(val.toLowerCase() === "clear") {
                setCommands([]);
                setVal("");
                return;
            }
            for(let key in data) {
                if(key === val.toLowerCase()) {
                    setCommands((prevCommands) => {
                        return [...prevCommands, {"key":val, "value":data[key]}];
                    })
                    setVal("");
                }
            }
        }
    }

    return (
        <div className="console">
            <h2><span>Commands Supported: </span>about, education, projects, skills, contact, hobbies, clear</h2>
            <div className="terminal"> 
                <div className="command-container">
                    {
                        commands.length > 0 && commands.map((command, idx) => <div key={idx} className="command">
                            <p style={{color: "#00ffae"}}><i class="fa-solid fa-greater-than"></i> &nbsp;&nbsp; {command.key}</p>
                            <p>{command.value}</p>
                        </div>)
                    }
                </div>
                
                <div className="inp-box">
                    &nbsp;&nbsp;&nbsp;&nbsp; <i class="fa-solid fa-greater-than"></i> &nbsp;&nbsp;
                    <input onChange={(e) => setVal(e.target.value)} onKeyDown={(e) => handleKeyDown(e)} value={val}/>
                </div>
            </div>
        </div>
    )
}