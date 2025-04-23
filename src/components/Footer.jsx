import "../styles/Footer.css";

export default function Footer() {
    return (
        <div className="footer">
            <div className="tags">
                <div className="tag"><a href="https://www.linkedin.com/in/tarun-aggarwal7/" target="_blank"><i className="fa-brands fa-linkedin"></i></a></div>
                <div className="tag"><a href="https://www.instagram.com/tarun_aggarwal__/" target="_blank"><i className="fa-brands fa-instagram"></i></a></div>
                <div className="tag"><a href="https://github.com/Tarun-Aggarwal/" target="_blank"><i className="fa-brands fa-github"></i></a></div>
                <div className="tag"><a href="mailto:tarunaggarwal0211@gmail.com" target="_blank"><i className="fa-solid fa-envelope"></i></a></div>
            </div>
            <div className="copyright">Copyright &copy; 2025</div>
        </div>
    )
}