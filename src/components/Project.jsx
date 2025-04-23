import "../styles/Project.css";

export default function Project({name, value}) {
    return (
        <div className="project">
            <img src={value.img}/>
            <div className="info">
                <h3>{name}</h3>
                <p>{value.info}</p>
                {
                    value.deploy && <a href={value.deploy} target="_blank"><i className="fa-solid fa-globe"></i>&nbsp;&nbsp;&nbsp;Try</a>
                }
                {
                    value.githubRepo && <a href={value.githubRepo} target="_blank"><i className="fa-brands fa-github"></i>&nbsp;&nbsp;&nbsp;Github Repo</a>
                }
            </div>
        </div>
    )
}