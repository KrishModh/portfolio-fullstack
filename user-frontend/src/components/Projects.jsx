import { useEffect, useState } from 'react'
import { API_BASE_URL, NGROK_HEADERS, BACKEND_BASE_URL } from '../apiConfig'
// import { BACKEND_BASE_URL } from '../apiConfig'

function Projects() {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const url = `${API_BASE_URL}/projects`
        console.log('Projects API URL:', url)

        const res = await fetch(url, {
          headers: NGROK_HEADERS,
        })

        if (!res.ok) {
          throw new Error(`Status ${res.status}`)
        }

        const data = await res.json()
        console.log('Projects data:', data)
        setProjects(data)
      } catch (err) {
        console.error('Projects fetch error:', err)
        setError('Unable to load projects right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  return (
    <div className="projects">
      <h2 className="section-title">Projects</h2>

      {loading && <p style={{ color: '#9ca3af' }}>Loading projects...</p>}
      {error && <p style={{ color: '#f97373' }}>{error}</p>}

      {!loading && !error && projects.length === 0 && (
        <p style={{ color: '#9ca3af' }}>No projects added yet.</p>
      )}

      <div className="projects-grid">
        {projects.map((p) => (
          <div key={p.id} className="card project-card">

            {p.image_url && (
              <img
                src={
                  p.image_url.startsWith('/uploads')
                    ? `${BACKEND_BASE_URL}${p.image_url}${BACKEND_BASE_URL.includes('ngrok')
                      ? (p.image_url.includes('?') ? '&' : '?') +
                      'ngrok-skip-browser-warning=true'
                      : ''
                    }`
                    : p.image_url.startsWith('http')
                      ? p.image_url
                      : `${window.location.origin}${p.image_url}`
                }
                alt={p.title}
                className="project-image"
              />
            )}



            <h3>{p.title}</h3>
            <p className="project-desc">{p.description}</p>

            {p.tech_stack && (
              <div className="tech-stack">
                {p.tech_stack.split(',').map((t, i) => (
                  <span key={i} className="tech-badge">{t.trim()}</span>
                ))}
              </div>
            )}

            <div className="project-links">
              {p.github_link && (
                <a href={p.github_link} target="_blank" className="btn github-btn">
                  View GitHub
                </a>
              )}

              {p.demo_link && (
                <a href={p.demo_link} target="_blank" className="btn demo-btn">
                  Live Demo
                </a>
              )}
            </div>

          </div>
        ))}
      </div>

    </div>
  )
}

export default Projects
