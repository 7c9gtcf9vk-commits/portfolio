import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="hero"
      className="screen-section"
      style={{
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        textAlign: 'left',
        overflow: 'hidden',
        paddingTop: '18vh',
      }}
    >
      {/* CSS Animated Background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          background: `
            radial-gradient(ellipse 80% 60% at 50% 30%, rgba(108,92,231,0.08) 0%, transparent 55%),
            radial-gradient(ellipse 50% 50% at 80% 70%, rgba(108,92,231,0.05) 0%, transparent 50%),
            radial-gradient(ellipse 50% 50% at 20% 40%, rgba(162,155,254,0.03) 0%, transparent 50%),
            #08080a
          `,
        }}
      />

      {/* Grid texture overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          opacity: 0.14,
          backgroundImage: `
            linear-gradient(rgba(108,92,231,0.06) 1px, transparent 1px),
            linear-gradient(90deg, rgba(108,92,231,0.06) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Video placeholder */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <div
          style={{
            width: '100%',
            height: '100%',
            opacity: 0.08,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
            }}
          >
            [ video background placeholder — add .mp4 here ]
          </span>
        </div>
      </div>

      {/* Content */}
      <div
        className="section-container"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
        }}
      >
        {/* /// Decorative slash */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            fontSize: 'clamp(1.2rem, 2vw, 1.6rem)',
            fontWeight: 700,
            letterSpacing: '0.12em',
            color: '#8b7cf6',
            marginBottom: 'clamp(12px, 2vh, 24px)',
            fontFamily: 'monospace',
          }}
        >
          / / /
        </motion.div>

        {/* Main Title — oversized, tight tracking, brutalism style */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={{
            fontSize: 'clamp(6rem, 14vw, 12rem)',
            fontWeight: 900,
            letterSpacing: '-0.05em',
            lineHeight: 0.92,
            marginBottom: 8,
            color: '#e0dcf7',
            textTransform: 'none',
          }}
        >
          高福临
        </motion.h1>

        {/* English subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          style={{
            fontSize: 'clamp(0.9rem, 1.2vw, 1.1rem)',
            fontWeight: 600,
            letterSpacing: '0.25em',
            color: 'var(--text-muted)',
            marginBottom: 'clamp(18px, 3vh, 32px)',
            textTransform: 'uppercase',
          }}
        >
          Gao Fulin
        </motion.p>

        {/* Identity tagline */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          style={{
            fontSize: 'clamp(0.95rem, 1.4vw, 1.15rem)',
            fontWeight: 500,
            color: '#c4b5fd',
            letterSpacing: '0.06em',
            marginBottom: 'clamp(32px, 5vh, 48px)',
          }}
        >
          视觉设计师&nbsp;&nbsp;&frasl;&nbsp;&nbsp;AI设计师&nbsp;&nbsp;&frasl;&nbsp;&nbsp;品牌设计师
        </motion.p>

        {/* CTA Buttons — white rect style from reference */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
        >
          <a
            href="#projects"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '16px 40px',
              borderRadius: 6,
              background: '#ffffff',
              color: '#111118',
              fontSize: '0.95rem',
              fontWeight: 700,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#e0dcf7'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#ffffff'
            }}
          >
            查看作品
          </a>
          <a
            href="#contact"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
              padding: '16px 40px',
              borderRadius: 6,
              background: 'transparent',
              color: '#ffffff',
              fontSize: '0.95rem',
              fontWeight: 600,
              letterSpacing: '0.04em',
              textTransform: 'uppercase',
              border: '1.5px solid rgba(255,255,255,0.25)',
              transition: 'all 0.25s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.45)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.25)'
            }}
          >
            联系我
          </a>
        </motion.div>

        {/* Attitude manifesto — bottom right, brutalism style */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.8 }}
          style={{
            position: 'absolute',
            right: 0,
            bottom: 'clamp(-80px, -8vh, -40px)',
            textAlign: 'right',
            lineHeight: 1.1,
          }}
        >
          <div
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#8b7cf6',
              textTransform: 'uppercase',
            }}
          >
            DESIGN
          </div>
          <div
            style={{
              fontSize: 'clamp(2rem, 4.5vw, 4rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              textTransform: 'uppercase',
            }}
          >
            IS VISION
          </div>
        </motion.div>
      </div>

      {/* Grid animation keyframes */}
      <style>{`
        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(64px, 64px); }
        }
      `}</style>
    </section>
  )
}
