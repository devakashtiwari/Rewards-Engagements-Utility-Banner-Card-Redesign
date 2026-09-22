import { Gift, Check } from 'lucide-react'
import { CtaButton, SectionTag } from '../common/BannerUI.jsx'
import bannerImage from '../../assets/B5_Daily_Bonus_Banner.png'
import mobileBannerImage from '../../assets/B5_Daily_Bonus_Banner-Mobiile Screen .png'
import styles from './DailyBonusBanner.module.css'

/** 7-day streak calendar progression */
const STREAK_DAYS = [1, 2, 3, 4, 5, 6, 7]
/** Current completed streak days counter */
const DAYS_COMPLETED = 6

/**
 * DailyBonusBanner Component (Banner 05)
 *
 * Highlights the daily reward check-in system, showing today's gem bonus
 * and a 7-day streak visual progress indicator.
 *
 * @param {Function} onClaimBonus - Callback invoked when "Claim Bonus" CTA is clicked
 */
export default function DailyBonusBanner({ onClaimBonus }) {
  return (
    <section className={styles.banner} aria-labelledby="dailybonus-heading">
      {/* Left Column: Eyebrow, Heading, Description, & CTA */}
      <div className={styles.textCol}>
        <div className={styles.eyebrowRow}>
          <SectionTag tone="bronze">5</SectionTag>
          <span className={styles.eyebrowLabel}>DAILY BONUS</span>
        </div>

        <h2 id="dailybonus-heading" className={styles.heading}>
          Your Daily Bonus
          <br />
          Is Waiting
        </h2>

        <p className={styles.description}>
          Check in regularly and claim your available daily bonus
          <span className={styles.hiddenPhrase}> before the opportunity resets</span>.
        </p>

        <CtaButton
          tone="bronze"
          className={styles.claimButton}
          icon={<Gift size={18} />}
          onClick={onClaimBonus}
        >
          Claim Bonus
        </CtaButton>
      </div>

      {/* Middle Column: Overflowing Gold Coin Gift Box Artwork */}
      <div className={styles.visualCol}>
        <picture>
          <source
            media="(max-width: 1024px), (hover: none) and (pointer: coarse)"
            srcSet={mobileBannerImage}
          />
          <img
            src={bannerImage}
            alt="Open gift box overflowing with gold VE coins"
            className={styles.bannerImage}
          />
        </picture>
      </div>

      {/* Right Column: Today's Bonus Card & 7-Day Streak Tracker */}
      <div className={styles.panelCol}>
        <div className={styles.todayPanel}>
          <span className={styles.panelLabel}>Today&apos;s Bonus</span>
          <span className={styles.gemAmount}>+25 Gems</span>
          <span className={styles.availableNow}>
            <span className={styles.dot} />
            Available Now
          </span>
        </div>

        <div className={styles.streakPanel}>
          <span className={styles.panelLabel}>7-Day Streak</span>
          <div className={styles.streakRow}>
            {STREAK_DAYS.map((day) => {
              const done = day <= DAYS_COMPLETED
              return (
                <span
                  key={day}
                  className={`${styles.streakDay} ${done ? styles.streakDone : styles.streakPending}`}
                >
                  {done ? <Check size={12} strokeWidth={3} /> : day}
                </span>
              )
            })}
          </div>
          <span className={styles.streakStatus}>{DAYS_COMPLETED} Days Completed</span>
          <span className={styles.streakHint}>Come back tomorrow!</span>
        </div>
      </div>
    </section>
  )
}
