import { useState } from 'react'
import { Gift, Check, Lock, Star, Gem } from 'lucide-react'
import { CtaButton, EyebrowPill } from '../common/BannerUI.jsx'
import bannerImage from '../../../Images/Desktop/Daily Bonus Banner Desktop.png'
import tabletBannerImage from '../../../Images/Tablet/Daily Bonus Banner Tablet.png'
import mobileBannerImage from '../../../Images/Mobile/Daily Bonus Banner Mobile.png'
import styles from './DailyBonusBanner.module.css'

const STREAK_DAYS = [1, 2, 3, 4, 5, 6, 7]
const DAYS_COMPLETED = 6

/**
 * DailyBonusBanner Component (Banner 05)
 *
 * Promotes daily streak check-in, showcasing today's gem bonus and a
 * 7-day streak progress tracker matching Page 25.
 *
 * @param {Function} onClaimBonus - Optional callback when claim button is clicked
 */
export default function DailyBonusBanner({ onClaimBonus }) {
  const [claimed, setClaimed] = useState(false)

  const handleClaim = () => {
    setClaimed(true)
    if (onClaimBonus) {
      onClaimBonus()
    }
  }

  return (
    <section className={styles.banner} aria-labelledby="dailybonus-heading">
      {/* Left Column: Eyebrow, Heading, Description, & CTA */}
      <div className={styles.textCol}>
        <div className={styles.eyebrowRow}>
          <EyebrowPill tone="bronze" icon={<Star size={12} fill="currentColor" />}>
            DAILY BONUS
          </EyebrowPill>
        </div>

        <h2 id="dailybonus-heading" className={styles.heading}>
          Your Daily Bonus
          <br />
          <span className={styles.headingAccent}>Is Waiting</span>
        </h2>

        <p className={styles.description}>
          Claim your daily bonus and keep your rewards streak alive.
        </p>

        <CtaButton
          tone="bronze"
          className={styles.claimButton}
          icon={<Gift size={18} />}
          onClick={handleClaim}
          disabled={claimed}
        >
          {claimed ? 'Claimed (+25 Gems)' : 'Claim Bonus'}
        </CtaButton>
      </div>

      {/* Center Visual: Open Gift Box with Gold VE Coins */}
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
            alt="3D open gift box overflowing with sparkling golden VE coins"
            className={styles.bannerImage}
          />
        </picture>
      </div>

      {/* Right Column: Today's Bonus Card & 7-Day Streak Card */}
      <div className={styles.panelCol}>
        {/* Today's Bonus Card */}
        <div className={styles.todayPanel}>
          <span className={styles.gemAmount}>
            <Gem size={17} className={styles.gemIcon} aria-hidden="true" />
            +25 GEMS
          </span>
          <span className={styles.availableNow}>
            {claimed ? 'Claimed Today' : 'Available Now'}
            <span className={claimed ? styles.claimedDot : styles.availableDot} />
          </span>
        </div>

        {/* 7-Day Streak Card */}
        <div className={styles.streakPanel}>
          <div className={styles.streakHeader}>
            <span className={styles.panelLabel}>7-DAY STREAK</span>
          </div>

          <div className={styles.streakRow}>
            {STREAK_DAYS.map((day) => {
              const done = day <= DAYS_COMPLETED
              const isLocked = day === 7
              return (
                <div key={day} className={styles.streakItem}>
                  <span
                    className={`${styles.streakDayCircle} ${
                      done ? styles.streakDone : styles.streakPending
                    }`}
                  >
                    {done ? (
                      <Check size={11} strokeWidth={3} />
                    ) : isLocked ? (
                      <Lock size={10} strokeWidth={2.5} />
                    ) : (
                      day
                    )}
                  </span>
                  <span className={styles.dayNumber}>{day}</span>
                </div>
              )
            })}
          </div>

          <div className={styles.streakFooter}>
            <span className={styles.streakCompletedText}>6 Days Completed</span>
            <span className={styles.streakSubText}>Come back tomorrow!</span>
          </div>
        </div>
      </div>
    </section>
  )
}
