import { ArrowRight, Gift } from 'lucide-react'
import { useCountUp } from '../../hooks/useCountUp.js'
import { SectionTag, CtaButton } from '../common/BannerUI.jsx'
import bannerImage from '../../../Images/Desktop/Follow s Earn Banner Desktop.png'
import tabletBannerImage from '../../../Images/Tablet/Follow s Earn Banner Tablet.png'
import mobileBannerImage from '../../../Images/Mobile/Follow s Earn Banner Mobile.png'
import styles from './FollowEarnBanner.module.css'

/**
 * FollowEarnBanner Component (Banner 04)
 *
 * Promotes following official VELOOP Rewards social channels and
 * participating in social engagement reward campaigns.
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

      {/* Middle Column: Smartphone Mockup with Social Profile & Floating Icons */}
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
            alt="Smartphone showing VELOOP Rewards social profile surrounded by floating engagement icons"
            className={styles.bannerImage}
          />
        </picture>

        {/* Dynamic overlay inside the smartphone screen */}
        <div className={styles.phoneOverlay}>
          <div className={styles.phoneHeader}>
            <span className={styles.phoneAvatar}>V</span>
            <div className={styles.phoneMeta}>
              <span className={styles.phoneBrand}>VELOP Rewards</span>
              <span className={styles.phoneHandle}>@velooprewards</span>
            </div>
            <span className={styles.followingPill}>Following</span>
          </div>

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

      {/* Right Column: Social Campaign Reward Card */}
      <div className={styles.panelCol}>
        <div className={styles.panel}>
          <div className={styles.campaignHeader}>
            <div className={styles.giftIconWrap}>
              <Gift size={22} strokeWidth={2.2} />
            </div>
            <p className={styles.campaignText}>
              Participate in eligible social campaigns and unlock rewards.
            </p>
          </div>

          <div className={styles.rewardSection}>
            <span className={styles.rewardAmount}>+500 SVEs</span>
            <span className={styles.rewardSub}>Demo Campaign</span>
          </div>
        </div>
      </div>
    </section>
  )
}
