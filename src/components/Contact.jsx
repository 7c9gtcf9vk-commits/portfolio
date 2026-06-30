import React from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section
      id="contact"
      className="screen-section"
      style={{
        background: 'var(--bg-deep)',
        justifyContent: 'center',
        textAlign: 'center',
        paddingTop: 60,
        paddingBottom: 60,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background glow */}
      <div
        style={{
          position: 'absolute',
          width: '60vw',
          height: '60vw',
          maxWidth: 700,
          maxHeight: 700,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(108,92,231,0.08) 0%, transparent 70%)',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
        }}
      />

      <div className="section-container" style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2
            className="section-title"
            style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.5rem)' }}
          >
            让设计<span className="accent-text">说话</span>
          </h2>
          <p
            style={{
              fontSize: '1.1rem',
              color: 'var(--text-secondary)',
              maxWidth: 560,
              margin: '0 auto 48px',
              lineHeight: 1.8,
            }}
          >
            如果你有品牌设计、视觉升级或AI创意相关的需求，欢迎随时联系。
          </p>

          {/* Contact Card */}
          <div
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: 20,
              padding: '40px 56px',
              borderRadius: 'var(--radius-lg)',
              background: 'var(--bg-card)',
              border: '1px solid var(--border)',
            }}
          >
            <div
              style={{
                width: 56,
                height: 56,
                borderRadius: '50%',
                background: 'rgba(108,92,231,0.15)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
              }}
            >
              &#9993;
            </div>
            <div>
              <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: 6 }}>
                手机 / 微信
              </div>
              <div
                style={{
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  letterSpacing: '0.03em',
                  color: '#fff',
                }}
              >
                19272616153
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
