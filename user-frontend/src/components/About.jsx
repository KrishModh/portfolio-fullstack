function About() {
    return (
        <div className="about">
            <h2 className="section-title">About Me</h2>
            <p className="about-text">
                I'm a passionate B.Tech CSE student and Full Stack Web Developer, exploring Cybersecurity to build secure as well as stunning digital experiences.
                I specialize in creating sleek, responsive, and high-performance web applications with clean UI, optimized performance, and real-world functionality.
                To me, development is not just coding — it's crafting secure, impactful solutions that solve problems, protect users, and leave a lasting digital impression.

            </p>

            <div className="about-grid">
                <div className="card">
                    <h3>Skills</h3>
                    <ul className="tag-list">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Node.js</li>
                        <li>Express.js</li>
                        <li>React.js</li>
                        <li>Next.js</li>
                        <li>Auth.js</li>
                        <li>SQL</li>
                        <li>MongoDB</li>
                        <li>mongoose</li>
                        <li>Python</li>
                        <li>Java</li>
                        <li>C</li>
                        <li>C++</li>
                        <li>Git</li>
                        <li>Github</li>
                    </ul>
                </div>
                <div className="card">
                    <h3>Education</h3>
                    <p>B.Tech CSE · Parul University</p>
                    <p>2nd Year</p>
                </div>

                <div className="card">
                    <h3>Connect With Me</h3>
                    <div className="social-links">

                        <a
                            href="https://github.com/krishmodh"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn github"
                        >
                            <svg viewBox="0 0 24 24" className="icon">
                                <path
                                    d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.38 7.86 10.89.58.11.79-.25.79-.56v-2c-3.2.69-3.87-1.37-3.87-1.37-.53-1.36-1.3-1.72-1.3-1.72-1.06-.72.08-.71.08-.71 1.18.08 1.8 1.2 1.8 1.2 1.04 1.79 2.73 1.27 3.4.97.1-.76.4-1.27.72-1.56-2.56-.29-5.26-1.28-5.26-5.72 0-1.27.45-2.31 1.19-3.13-.12-.29-.52-1.47.11-3.06 0 0 .97-.31 3.18 1.19a10.9 10.9 0 012.9-.39 10.9 10.9 0 012.9.39c2.21-1.5 3.18-1.19 3.18-1.19.63 1.59.23 2.77.11 3.06.74.82 1.19 1.86 1.19 3.13 0 4.45-2.71 5.42-5.28 5.7.42.37.76 1.1.76 2.22v3.29c0 .31.21.68.79.56A10.52 10.52 0 0023.5 12C23.5 5.73 18.27.5 12 .5z"
                                />
                            </svg>
                            GitHub
                        </a>

                        <a
                            href="https://www.linkedin.com/in/krish-modh-b38447300?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-btn linkedin"
                        >
                            <svg viewBox="0 0 24 24" className="icon">
                                <path
                                    d="M4.98 3.5a2.25 2.25 0 110 4.5 2.25 2.25 0 010-4.5zM3 8.75h4v12.5H3zM9.5 8.75h3.8v1.71h.05c.53-.95 1.82-1.96 3.74-1.96 4 0 4.74 2.63 4.74 6.05v6.7h-4v-5.93c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.54-2.28 3.14v6.04h-4z"
                                />
                            </svg>
                            LinkedIn
                        </a>

                    </div>
                </div>

                <div className="card">
                    <h3>Beyond Coding</h3>
                    <ul className="tag-list">
                        <li>Chess Player</li>
                        <li>AI & Cyber Security enthusiast</li>
                        <li>Gamer & tech explorer</li>
                        <li>Always learning something new</li>
                    </ul>
                </div>

                <div className="card">
                    <h3>What I Do</h3>
                    <p>
                        I create responsive websites, portfolios and mini SaaS style projects with clean code
                        and focus on performance.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
