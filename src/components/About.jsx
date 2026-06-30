import React from 'react'
import { motion } from 'framer-motion'

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.12, ease: 'easeOut' },
  }),
}

const STATS = [
  { value: '2', unit: '年', label: '设计经验' },
  { value: '1000+', unit: '', label: '完成项目' },
  { value: '盐津铺子', unit: '', label: '合作品牌' },
  { value: '林大鸽', unit: '', label: '合作品牌' },
]

export default function About() {
  return (
    <section
      id="about"
      className="screen-section"
      style={{ background: 'var(--bg-deep)' }}
    >
      <div className="section-container" style={{ width: '100%' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 80,
            alignItems: 'center',
          }}
        >
          {/* Left: Avatar Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            style={{
              aspectRatio: '1 / 1',
              maxWidth: 460,
              borderRadius: 'var(--radius-lg)',
              background: 'linear-gradient(135deg, #1a1a28 0%, #111118 100%)',
              border: '1px solid var(--border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Decorative accent glow */}
            <div
              style={{
                position: 'absolute',
                width: '60%',
                height: '60%',
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(108,92,231,0.15) 0%, transparent 70%)',
                filter: 'blur(40px)',
              }}
            />
            <span
              style={{
                position: 'relative',
                fontSize: 'clamp(3rem, 6vw, 5rem)',
                fontWeight: 800,
                color: 'var(--accent)',
                letterSpacing: '0.05em',
                opacity: 0.7,
              }}
            >
              GFL
            </span>
          </motion.div>

          {/* Right: Content */}
          <div>
            <motion.h2
              custom={0}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="section-title"
            >
              关于<span className="accent-text">我</span>
            </motion.h2>

            <motion.p
              custom={1}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{
                fontSize: '1.05rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.9,
                marginBottom: 28,
              }}
            >
              一名专注于品牌视觉与AI融合的设计师。2年设计经验，累计完成
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>1000+</span> 个项目，
              服务过盐津铺子、林大鸽等知名品牌。擅长将前沿AI工具与传统设计方法论结合，
              为客户打造兼具美学与商业价值的设计方案。
            </motion.p>

            <motion.div
              custom={2}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{
                padding: '18px 24px',
                borderRadius: 'var(--radius)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                display: 'inline-block',
                marginBottom: 36,
              }}
            >
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                联系方式：{' '}
              </span>
              <span style={{ color: '#fff', fontWeight: 600, letterSpacing: '0.02em' }}>
                19272616153
              </span>
            </motion.div>

            {/* Stats */}
            <motion.div
              custom={3}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: 16,
              }}
            >
              {STATS.map((stat, i) => (
                <div
                  key={i}
                  style={{
                    textAlign: 'center',
                    padding: '20px 12px',
                    borderRadius: 'var(--radius)',
                    background: 'var(--bg-card)',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div
                    style={{
                      fontSize: '1.6rem',
                      fontWeight: 700,
                      color: 'var(--accent)',
                      marginBottom: 4,
                    }}
                  >
                    {stat.value}
                    <span style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-secondary)' }}>
                      {' '}{stat.unit}
                    </span>
                  </div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
