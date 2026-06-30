import React from 'react'
import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    period: '2024 — 至今',
    title: '自由设计师',
    subtitle: '品牌视觉 & AI设计',
    desc: '服务盐津铺子、林大鸽等多个品牌客户，负责品牌视觉升级、包装设计、AI创意视觉探索。累计交付项目超1000个。',
  },
  {
    period: '2023 — 2024',
    title: '视觉设计师',
    subtitle: '设计工作室',
    desc: '参与多个品牌项目从0到1的设计过程，积累了扎实的视觉表现与品牌策略能力。',
  },
  {
    period: '2022 — 2023',
    title: '设计学习 & 探索',
    subtitle: '设计系统搭建',
    desc: '系统学习品牌设计、视觉传达、UI/UX 设计方法论，建立个人设计知识体系。同时开始探索AI工具在设计领域的应用。',
  },
]

const itemVariants = {
  hidden: { opacity: 0, x: -30 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay: i * 0.15, ease: 'easeOut' },
  }),
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="screen-section"
      style={{ background: 'var(--bg-deep)', paddingTop: 60, paddingBottom: 60 }}
    >
      <div className="section-container" style={{ width: '100%' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">
            经历<span className="accent-text">时间轴</span>
          </h2>
          <p className="section-subtitle">
            从学习到实践，每一步都在成长
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative', paddingLeft: 40 }}>
          {/* Vertical line */}
          <div
            style={{
              position: 'absolute',
              left: 11,
              top: 0,
              bottom: 0,
              width: 2,
              background: 'linear-gradient(to bottom, var(--accent), rgba(108,92,231,0.1))',
            }}
          />

          {EXPERIENCES.map((exp, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={itemVariants}
              style={{
                position: 'relative',
                marginBottom: i < EXPERIENCES.length - 1 ? 48 : 0,
                paddingLeft: 44,
              }}
            >
              {/* Dot on timeline */}
              <div
                style={{
                  position: 'absolute',
                  left: -32,
                  top: 8,
                  width: 14,
                  height: 14,
                  borderRadius: '50%',
                  background: 'var(--accent)',
                  boxShadow: '0 0 16px var(--accent-glow)',
                  border: '3px solid var(--bg-deep)',
                }}
              />

              {/* Content Card */}
              <div
                style={{
                  padding: '28px 32px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--bg-card)',
                  border: '1px solid var(--border)',
                  transition: 'all 0.3s ease',
                }}
              >
                <span
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: 'var(--accent)',
                    letterSpacing: '0.05em',
                  }}
                >
                  {exp.period}
                </span>
                <h3 style={{ fontSize: '1.3rem', fontWeight: 700, marginTop: 6, color: '#fff' }}>
                  {exp.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', marginTop: 4, marginBottom: 12 }}>
                  {exp.subtitle}
                </p>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7 }}>
                  {exp.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
