import { Trophy, ArrowRight } from 'lucide-react'
import { useCountUp } from '../../hooks/useCountUp.js'
import { SectionTag, EyebrowPill, CtaButton } from '../common/BannerUI.jsx'
import bannerImage from '../../assets/B1_Leaderboard_Banner  .png'
import mobileBannerImage from '../../assets/B1_Leaderboard_Banner-Mobile.png'
import styles from './LeaderboardBanner.module.css'

/**
 * Top 3 user podium ranking demo data
 */
const RANKERS = [
  { place: '02', name: 'User B', points: '11,820 VEs', tone: 'blue' },
  { place: '01', name: 'User A', points: '12,450 VEs', tone: 'gold' },
  { place: '03', name: 'User C', points: '10,970 VEs', tone: 'orange' }
]

/**
 * LeaderboardBanner Component (Banner 01)
 *
 * Showcases the active competition stage, current prize pool,
 * and floating podium overlay cards displaying top rankers.
 *
 * @param {Function} onViewLeaderboard - Callback invoked when "Check Rankings" CTA is clicked
 */
export default function LeaderboardBanner({ onViewLeaderboard }) {
  const { ref: poolAmountRef, value: prizePool } = useCountUp(50000)

  return (
    <section className={styles.banner} aria-labelledby="leaderboard-heading">
      {/* Left Column: Eyebrow, Heading, Description, Prize Pool, & CTA */}
      <div className={styles.textCol}>
        <div className={styles.eyebrowRow}>
          <SectionTag tone="gold">01</SectionTag>
          <EyebrowPill tone="gold" icon={<Trophy strokeWidth={2.2} />}>
            COMPETITION STAGE ACTIVE
          </EyebrowPill>
        </div>

        <h2 id="leaderboard-heading" className={styles.heading}>
          Rank Higher.
          <br />
          <span className={styles.headingAccent}>Earn More.</span>
        </h2>

        <p className={styles.description}>
          Complete activities, earn rewards, gain XP, and compete with other users to climb the
          leaderboard.
        </p>

        <div className={styles.poolPill}>
          <Trophy size={16} strokeWidth={2.2} />
          <span>
            Current pool:{' '}
            <strong ref={poolAmountRef} className={styles.poolAmount}>
              {prizePool.toLocaleString()} VEs
            </strong>{' '}
            in prizes
          </span>
        </div>

        <CtaButton tone="gold" icon={<ArrowRight />} onClick={onViewLeaderboard}>
          Check Rankings
        </CtaButton>
      </div>

      {/* Right Column: Trophy Visual Artwork & Floating Podium Badges */}
      <div className={styles.visualCol}>
        {/* imageWrap clips the image to the column without clipping the floating rank cards */}
        <div className={styles.imageWrap}>
          <picture>
            <source
              media="(max-width: 1024px), (hover: none) and (pointer: coarse)"
              srcSet={mobileBannerImage}
            />
            <img
              src={bannerImage}
              alt="Gold trophy on a podium with three ranked user positions and a rising performance chart"
              className={styles.bannerImage}
            />
          </picture>
        </div>

        <div className={styles.podiumOverlay}>
          {RANKERS.map((user) => (
            <div key={user.place} className={`${styles.rankCard} ${styles[`rank-${user.tone}`]}`}>
              <span className={styles.rankBadge}>{user.place}</span>
              <span className={styles.rankName}>{user.name}</span>
              <span className={styles.rankPoints}>{user.points}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
