import React from 'react'
import { motion } from 'framer-motion'

const SKILLS = [
  {
    title: '品牌设计',
    desc: '品牌策略、视觉识别系统（VI）、Logo设计、品牌手册，构建完整的品牌视觉语言。',
    icon: '◇',
  },
  {
    title: '视觉设计',
    desc: '海报、画册、包装、线下物料，精准的版式与色彩把控，传达品牌核心信息。',
    icon: '◎',
  },
  {
    title: 'AI 设计',
    desc: 'Midjourney / Stable Diffusion / ComfyUI 工作流，AI赋能创意生成与视觉探索。',
    icon: '✦',
  },
  {
    title: '动态视觉',
    desc: '品牌动效、MG动画、视频剪辑，用动态语言强化视觉叙事与感染力。',
    icon: '▷',
  },
  {
    title: 'UI/UX 设计',
    desc: '界面设计、交互原型、设计系统搭建，关注用户旅程中的每一个触点。',
    icon: '□',
  },
  {
    title: '设计管理',
    desc: '项目流程管理、设计规范制定、团队协作，确保设计交付的质量与效率。',
    icon: '○',
  },
]

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.08, ease: 'easeOut' },
  }),
}

export default function Skills() {
  return (
    <section
      id="skills"
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
            个人<span className="accent-text">优势</span>
          </h2>
          <p className="section-subtitle">
            多维度设计能力矩阵，从策略到执行的全链路覆盖
          </p>
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 20,
          }}
        >
          {SKILLS.map((skill, i) => (
            <motion.div
              key={i}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-40px' }}
              variants={cardVariants}
              style={{
                padding: '32px 28px',
                borderRadius: 'var(--radius-lg)',
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                transition: 'all 0.35s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(108,92,231,0.3)'
                e.currentTarget.style.background = 'var(--bg-card-hover)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'
                e.currentTarget.style.background = 'var(--bg-card)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              {/* Icon */}
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 12,
                  background: 'rgba(108,92,231,0.12)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: 18,
                  fontSize: '1.2rem',
                  color: 'var(--accent)',
                }}
              >
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: 10, color: '#fff' }}>
                {skill.title}
              </h3>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                {skill.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
