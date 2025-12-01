import krish from '../assets/krish.png'
import { useEffect, useState } from 'react'

function Hero() {
    const roles = ["Full Stack Developer", "Backend Designer", "Cybersecurity Enthusiast", "Tech Explorer"]
    const [currentRole, setCurrentRole] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentRole((prev) => (prev + 1) % roles.length)
        }, 2000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="hero">
            <div className="hero-left">
                <p className="hero-tag">{roles[currentRole]}</p>

                <h1 className="hero-title">
                    Hi, I'm <span>Krish</span>
                </h1>

                <p className="hero-subtitle">
                    I build modern web applications with clean UI and powerful backend.<br />
                    <span className="highlight-text">You can explore my portfolio ↓</span>
                </p>


                <div className="hero-actions">
                    <a href="/projects" className="btn primary-btn">
                        View Projects
                    </a>

                    <a href="/contact" className="btn secondary-btn">
                        Contact Me
                    </a>

                    <a href="/resume.pdf" className="btn resume-btn" download>
                        Download Resume
                    </a>
                </div>

            </div>

            <div className="hero-right">
                <div className="profile-ring">
                    <img src={krish} alt="Krish" className="profile-image-float" />
                </div>
            </div>
        </div>
    )
}

export default Hero
