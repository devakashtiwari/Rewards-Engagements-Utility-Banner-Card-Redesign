import { PlayCircle, ArrowRight, Shield, Zap } from 'lucide-react'
import { SectionTag, EyebrowPill, CtaButton, FeatureChip } from '../common/BannerUI.jsx'
import bannerImage from '../../../Images/Desktop/Watch Ad s Earn  Desktop.png'
import tabletBannerImage from '../../../Images/Tablet/Watch Ad s Earn Banner tablet.png'
import mobileBannerImage from '../../../Images/Mobile/Watch Ad s Earn Banner Mobile 310px.png'
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

      {/* Right Column: Video/Wallet Visual Artwork */}
      <div className={styles.visualCol}>
        <picture>
          <source
            media="(min-width: 768px) and (max-width: 1024px)"
            srcSet={tabletBannerImage}
          />
          <source
            media="(max-width: 767px)"
            srcSet={mobileBannerImage}
          />
          <img
            src={bannerImage}
            alt="Video player with a play button next to a digital wallet filling with VE coins"
            className={styles.bannerImage}
          />
        </picture>
      </div>
    </section>
  )
}
