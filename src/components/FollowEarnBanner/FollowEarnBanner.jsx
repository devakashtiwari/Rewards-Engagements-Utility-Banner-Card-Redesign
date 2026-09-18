import { ArrowRight, Gift, Sparkles } from 'lucide-react'
import { useCountUp } from '../../hooks/useCountUp.js'
import { SectionTag, CtaButton } from '../common/BannerUI.jsx'
import bannerImage from '../../assets/B4_Follow_s_Earn_Banner.png'
import mobileBannerImage from '../../assets/B4_Follow_s_Earn_Banner-mobile.png'
import styles from './FollowEarnBanner.module.css'

/**
 * FollowEarnBanner Component (Banner 04)
 *
 * Promotes following official VELOOP social channels and participating in social campaigns.
 * Features a phone mockup with interactive-styled channel statistics and a reward unlock card.
 *
 * @param {Function} onExploreChannels - Callback invoked when "Explore Our Channels" CTA is clicked
 */
export default function FollowEarnBanner({ onExploreChannels }) {
  const { ref: followerCountRef, value: followerCount } = useCountUp(24500)

  return (
    <section className={styles.banner} aria-labelledby="follow-heading">
      {/* Left Column: Eyebrow, Heading, Description, & CTA */}
      <div className={styles.textCol}>
        <div className={styles.eyebrowRow}>
          <SectionTag tone="purple">4</SectionTag>
          <span className={styles.eyebrowLabel}>FOLLOW &amp; EARN</span>
        </div>

        <h2 id="follow-heading" className={styles.heading}>
          Follow &amp; Earn
        </h2>

        <p className={styles.description}>
          Follow VELOOP Rewards on our official channels and participate in eligible social
          campaigns to unlock rewards.
        </p>

        <CtaButton tone="purple" icon={<ArrowRight />} onClick={onExploreChannels}>
          Explore Our Channels
        </CtaButton>
      </div>

      {/* Middle Column: Social Phone Mockup Visual & Live Profile Overlay */}
      <div className={styles.visualCol}>
        <picture>
          <source
            media="(max-width: 1024px), (hover: none) and (pointer: coarse)"
            srcSet={mobileBannerImage}
          />
          <img
            src={bannerImage}
            alt="Phone showing the VELOOP Rewards social profile surrounded by community, star, and megaphone icons"
            className={styles.bannerImage}
          />
        </picture>
        <div className={styles.phoneOverlay}>
          <span className={styles.phoneBrand}>VELOOP Rewards</span>
          <span className={styles.phoneHandle}>@veloopreward</span>
          <span className={styles.followingPill}>Following</span>
          <div className={styles.statsRow}>
            <span>
              <strong>128</strong> Posts
            </span>
            <span>
              <strong ref={followerCountRef}>
                {(followerCount / 1000).toFixed(1)}K
              </strong>{' '}
              Followers
            </span>
            <span>
              <strong>8</strong> Following
            </span>
          </div>
        </div>
      </div>

      {/* Right Column: Campaign Reward Preview Panel */}
      <div className={styles.panelCol}>
        <div className={styles.panel}>
          <span className={styles.giftIcon}>
            <Sparkles size={13} className={styles.sparkle} />
            <Gift strokeWidth={2} size={22} />
          </span>
          <p className={styles.panelCopy}>
            Participate in eligible social campaigns and unlock rewards.
          </p>
          <span className={styles.panelReward}>+500 SVEs</span>
          <span className={styles.panelCaption}>Demo Campaign</span>
        </div>
      </div>
    </section>
  )
}
