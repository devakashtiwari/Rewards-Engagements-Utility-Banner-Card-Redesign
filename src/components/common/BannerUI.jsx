import styles from './BannerUI.module.css'

/**
 * Small numbered tag used in the top-left corner of each banner.
 *
 * @param {React.ReactNode} children - Tag content (e.g. "01", "02", "3", "4", "5")
 * @param {'gold'|'blue'|'navy'|'purple'|'bronze'} [tone='gold'] - Theme color variant
 */
export function SectionTag({ children, tone = 'gold' }) {
  return <span className={`${styles.sectionTag} ${styles[`tone-${tone}`]}`}>{children}</span>
}

/**
 * Pill-shaped eyebrow label with an optional leading icon.
 *
 * @param {React.ReactNode} [icon] - Leading Lucide icon element
 * @param {React.ReactNode} children - Eyebrow label text
 * @param {'gold'|'blue'|'navy'|'purple'|'bronze'} [tone='gold'] - Theme color variant
 */
export function EyebrowPill({ icon, children, tone = 'gold' }) {
  return (
    <span className={`${styles.eyebrowPill} ${styles[`tone-${tone}`]}`}>
      {icon}
      {children}
    </span>
  )
}

/**
 * Primary call-to-action button rendered as a native <button> with keyboard,
 * focus-visible, and touch-target accessibility.
 *
 * @param {React.ReactNode} children - Button label
 * @param {React.ReactNode} [icon] - Trailing icon element
 * @param {'gold'|'blue'|'navy'|'purple'|'bronze'} [tone='gold'] - Theme color gradient variant
 * @param {Function} [onClick] - Click handler
 */
export function CtaButton({ children, icon, tone = 'gold', onClick, className = '', ...rest }) {
  return (
    <button
      type="button"
      className={`${styles.ctaButton} ${styles[`tone-${tone}`]} ${className}`.trim()}
      onClick={onClick}
      {...rest}
    >
      <span>{children}</span>
      {icon}
    </button>
  )
}

/**
 * Small feature pill used for secondary highlights (e.g. "No Daily Cap", "Instant Credits").
 *
 * @param {React.ReactNode} [icon] - Feature icon element
 * @param {React.ReactNode} children - Feature label
 */
export function FeatureChip({ icon, children }) {
  return (
    <span className={styles.featureChip}>
      {icon}
      {children}
    </span>
  )
}

/**
 * A structured info row used in right-hand cards (e.g. Contact Us or Channel Info).
 * Renders as a semantic `<button>` if interactive, or a `<div>` if static.
 *
 * @param {React.ReactNode} icon - Leading icon
 * @param {string} title - Primary row title
 * @param {string} [subtitle] - Secondary description or email string
 * @param {React.ReactNode} [action] - Trailing chevron or status element
 * @param {boolean} [interactive=false] - Whether row responds to clicks with hover styles
 * @param {Function} [onClick] - Click handler if interactive
 */
export function InfoRow({ icon, title, subtitle, action, interactive = false, onClick }) {
  const Tag = interactive ? 'button' : 'div'
  return (
    <Tag
      type={interactive ? 'button' : undefined}
      className={`${styles.infoRow} ${interactive ? styles.infoRowInteractive : ''}`}
      onClick={onClick}
    >
      <span className={styles.infoRowIcon}>{icon}</span>
      <span className={styles.infoRowText}>
        <span className={styles.infoRowTitle}>{title}</span>
        {subtitle && <span className={styles.infoRowSubtitle}>{subtitle}</span>}
      </span>
      {action && <span className={styles.infoRowAction}>{action}</span>}
    </Tag>
  )
}
