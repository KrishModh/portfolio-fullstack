import { useEffect, useState } from 'react'
import { API_BASE_URL, NGROK_HEADERS, BACKEND_BASE_URL } from '../apiConfig'

function Certificates() {
  const [certs, setCerts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchCerts = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/certificates`, {
          headers: NGROK_HEADERS,
        })

        if (!res.ok) throw new Error('Failed to load certificates')

        const data = await res.json()
        setCerts(data)
      } catch (err) {
        console.error('Certificates fetch error:', err)
        setError('Unable to load certificates right now.')
      } finally {
        setLoading(false)
      }
    }

    fetchCerts()
  }, [])

  return (
    <section className="certificates">
      <h2 className="section-title" style={{ paddingTop: "35px", paddingLeft: "35px" }}>Certificates</h2>

      {loading && <p style={{ color: '#9ca3af' }}>Loading certificates...</p>}
      {error && <p style={{ color: '#f97373' }}>{error}</p>}

      {!loading && !error && certs.length === 0 && (
        <p style={{ color: '#9ca3af' }}>No certificates added yet.</p>
      )}

      <div className="cert-grid">
        {certs.map((c) => (
          <div key={c.id} className="card cert-card">
            {c.image_url && (
              <img
                className="cert-image"
                src={
                  c.image_url.startsWith('/uploads')
                    ? `${BACKEND_BASE_URL}${c.image_url}`
                    : c.image_url.startsWith('http')
                      ? c.image_url
                      : `${window.location.origin}${c.image_url}`
                }
                alt={c.title}
              />
            )}

            <h3>{c.title}</h3>
            <p className="cert-issuer">Issued by: {c.issuer}</p>
            <p className="cert-year">Year: {c.year}</p>

            {c.cert_link && (
              <a
                href={c.cert_link}
                target="_blank"
                className="btn github-btn"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default Certificates
