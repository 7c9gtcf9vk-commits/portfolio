import React from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    title: '盐津铺子 — 品牌视觉升级',
    category: '品牌设计 / 包装设计',
    desc: '为盐津铺子旗下产品线打造全新视觉体系，涵盖包装、线下物料与数字媒体素材。',
    color: '#6c5ce7',
  },
  {
    title: '林大鸽 — 全域品牌设计',
    category: '品牌设计 / 视觉识别',
    desc: '从Logo到VI规范、线下空间视觉，构建林大鸽完整品牌生态系统。',
    color: '#a29bfe',
  },
  {
    title: 'AI 创意视觉探索',
    category: 'AI设计 / 概念视觉',
    desc: '利用 Midjourney + Stable Diffusion 进行概念视觉生成与商业落地实验。',
    color: '#6c5ce7',
  },
  {
    title: '动态视觉 & 交互动效',
    category: '动态视觉 / 交互设计',
    desc: '品牌视频动效、UI微交互设计，提升数字产品的品质感与用户体验。',
    color: '#a29bfe',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: 'easeOut' },
  }),
}

export default function Projects() {
  return (
    <section
      id="projects"
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
            精选<span className="accent-text">作品</span>
          </h2>
          <p className="section-subtitle">
            每个项目都是对美学与功能的深度思考
          </p>
        </motion.div>

        {/* Project Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: 24,
          }}
        >
          {PROJECTS.map((project, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              style={{
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                overflow: 'hidden',
                transition: 'all 0.35s ease',
                cursor: 'default',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(108,92,231,0.35)'
                e.currentTarget.style.background = 'var(--bg-card-hover)'
                e.currentTarget.style.transform = 'translateY(-3px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Placeholder Image */}
              <div
                style={{
                  height: 220,
                  background: `linear-gradient(135deg, ${project.color}15 0%, ${project.color}08 100%)`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderBottom: '1px solid var(--border)',
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 18,
                    background: `${project.color}20`,
                    border: `2px solid ${project.color}30`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <span style={{ fontSize: '1.6rem', opacity: 0.5 }}>&#9670;</span>
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '28px 32px' }}>
                <span
                  style={{
                    fontSize: '0.78rem',
                    fontWeight: 600,
                    color: project.color,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {project.category}
                </span>
                <h3
                  style={{
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    marginTop: 10,
                    marginBottom: 10,
                    color: '#fff',
                  }}
                >
                  {project.title}
                </h3>
                <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                  {project.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
