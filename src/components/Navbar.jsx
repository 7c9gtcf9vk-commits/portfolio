import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_ITEMS = [
  { id: 'hero', label: '首页' },
  { id: 'about', label: '关于' },
  { id: 'projects', label: '作品' },
  { id: 'skills', label: '能力' },
  { id: 'experience', label: '经历' },
  { id: 'contact', label: '联系' },
]

export default function Navbar() {
  const [active, setActive] = useState('hero')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = NAV_ITEMS.map(item =>
        document.getElementById(item.id)
      )
      const scrollPos = window.scrollY + window.innerHeight / 3

      for (let i = sections.length - 1; i >= 0; i--) {
        const el = sections[i]
        if (el && el.offsetTop <= scrollPos) {
          setActive(NAV_ITEMS[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        padding: scrolled ? '12px 0' : '20px 0',
        background: scrolled
          ? 'rgba(8, 8, 10, 0.78)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(18px) saturate(140%)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255,255,255,0.05)'
          : '1px solid transparent',
        transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      <nav
        style={{
          maxWidth: 1700,
          margin: '0 auto',
          padding: '0 80px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <a
          href="#hero"
          style={{
            fontSize: '1.3rem',
            fontWeight: 700,
            letterSpacing: '-0.01em',
            color: '#fff',
          }}
        >
          G<span style={{ color: 'var(--accent)' }}>.</span>Fulin
        </a>

        {/* Nav links */}
        <ul style={{ display: 'flex', gap: 36, listStyle: 'none', alignItems: 'center' }}>
          {NAV_ITEMS.map(item => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                style={{
                  fontSize: '0.9rem',
                  fontWeight: 500,
                  color: active === item.id ? '#fff' : 'var(--text-secondary)',
                  padding: '6px 0',
                  borderBottom: active === item.id
                    ? '2px solid var(--accent)'
                    : '2px solid transparent',
                  transition: 'all 0.25s ease',
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
          {/* CTA button */}
          <li>
            <a
              href="#contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                padding: '8px 22px',
                borderRadius: 24,
                background: 'var(--accent)',
                color: '#fff',
                fontSize: '0.88rem',
                fontWeight: 600,
                transition: 'all 0.25s ease',
                boxShadow: '0 0 24px var(--accent-glow)',
              }}
            >
              联系我
              <span style={{ fontSize: '0.8rem' }}>&#8595;</span>
            </a>
          </li>
        </ul>
      </nav>
    </motion.header>
  )
}
