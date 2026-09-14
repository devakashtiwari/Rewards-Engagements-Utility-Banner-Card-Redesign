import { PlayCircle, ArrowRight, Shield, Zap } from 'lucide-react'
import { SectionTag, EyebrowPill, CtaButton, FeatureChip } from '../common/BannerUI.jsx'
import bannerImage from '../../assets/B2_Watch_Ad_s_Earn_Banner.avif'
import styles from './WatchAdBanner.module.css'

/**
 * WatchAdBanner Component (Banner 02)
 *
 * Promotes watching advertisements to earn instant VEs without daily caps.
 *
 * @param {Function} onWatchAndEarn - Callback invoked when "Watch & Earn" CTA is clicked
 */
export default function WatchAdBanner({ onWatchAndEarn }) {
  return (
    <section className={styles.banner} aria-labelledby="watchad-heading">
      {/* Left Column: Eyebrow, Heading, Description, Feature Chips & CTA */}
      <div className={styles.textCol}>
        <div className={styles.eyebrowRow}>
          <SectionTag tone="blue">02</SectionTag>
          <EyebrowPill tone="blue" icon={<PlayCircle strokeWidth={2.2} />}>
            ON-DEMAND REWARDS
          </EyebrowPill>
        </div>

        <h2 id="watchad-heading" className={styles.heading}>
          Watch Ads. <span className={styles.headingAccent}>Earn VEs.</span>
        </h2>

        <p className={styles.description}>
          Watch eligible advertisements and earn VEs for completing available ad activities.
        </p>

        <div className={styles.chipRow}>
          <FeatureChip icon={<Shield strokeWidth={2.2} />}>No Daily Cap</FeatureChip>
          <FeatureChip icon={<Zap strokeWidth={2.2} />}>Instant Credits</FeatureChip>
        </div>

        <CtaButton tone="blue" icon={<ArrowRight />} onClick={onWatchAndEarn}>
          Watch &amp; Earn
        </CtaButton>
      </div>

      {/* Right Column: Video/Wallet Visual Artwork & Floating VE Coin Badges */}
      <div className={styles.visualCol}>
        <img
          src={bannerImage}
          alt="Video player with a play button next to a digital wallet filling with VE coins"
          className={styles.bannerImage}
        />
        <div className={styles.coinLabels}>
          <span className={`${styles.coinLabel} ${styles.coin1}`}>VE</span>
          <span className={`${styles.coinLabel} ${styles.coin2}`}>VE</span>
          <span className={`${styles.coinLabel} ${styles.coin3}`}>VE</span>
          <span className={`${styles.coinLabel} ${styles.coin4}`}>VE</span>
          <span className={`${styles.coinLabel} ${styles.coin5}`}>VE</span>
          <span className={styles.walletLabel}>VE</span>
        </div>
      </div>
    </section>
  )
}
