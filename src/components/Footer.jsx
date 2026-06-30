import React from 'react'

export default function Footer() {
  return (
    <footer
      id="footer"
      style={{
        padding: '32px 0',
        borderTop: '1px solid var(--border)',
        background: 'var(--bg-deep)',
      }}
    >
      <div
        className="section-container"
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          &copy; {new Date().getFullYear()} 高福临 · All rights reserved.
        </span>
        <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
          Designed with <span style={{ color: 'var(--accent)' }}>&#9829;</span> by G.Fulin
        </span>
      </div>
    </footer>
  )
}
