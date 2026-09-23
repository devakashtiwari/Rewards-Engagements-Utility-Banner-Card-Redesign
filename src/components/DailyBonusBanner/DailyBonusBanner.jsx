import { Gift, Check, Sparkles } from 'lucide-react'
import { CtaButton, SectionTag } from '../common/BannerUI.jsx'
import bannerImage from '../../assets/B5_Daily_Bonus_Banner.png'
import mobileBannerImage from '../../assets/B5_Daily_Bonus_Banner mini.png'
import styles from './DailyBonusBanner.module.css'

const STREAK_DAYS = [1, 2, 3, 4, 5, 6, 7]
const DAYS_COMPLETED = 6

export default function DailyBonusBanner({ onClaimBonus }) {
  return (
    <section className={styles.banner} aria-labelledby="dailybonus-heading">
      <div className={styles.textCol}>
        <div className={styles.eyebrowRow}>
          <SectionTag tone="bronze">5</SectionTag>
          <span className={styles.eyebrowLabel}>DAILY BONUS</span>
        </div>

        <h2 id="dailybonus-heading" className={styles.heading}>
          Your daily reward
          <span>is ready to claim.</span>
        </h2>

        <p className={styles.description}>
          Check in regularly and claim your available daily bonus
          <span className={styles.hiddenPhrase}> before the opportunity resets</span>.
        </p>

        <span className={styles.mobileReward}>Today: +25 Gems</span>

        <span className={styles.streakChip}>
          <Sparkles size={14} /> 6-day streak in progress
        </span>

        <CtaButton
          tone="bronze"
          className={styles.claimButton}
          icon={<Gift size={18} />}
          onClick={onClaimBonus}
        >
          Claim Bonus
        </CtaButton>
      </div>

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
        <span className={styles.visualCaption}>Daily rewards</span>
      </div>

      <div className={styles.panelCol}>
        <div className={styles.todayPanel}>
          <span className={styles.panelLabel}>Today&apos;s bonus</span>
          <span className={styles.gemAmount}>
            +25 <small>Gems</small>
          </span>
          <span className={styles.availableNow}>
            <span className={styles.dot} />
            Available now
          </span>
          <span className={styles.nextReward}>Tomorrow: +40 Gems</span>
        </div>

        <div className={styles.streakPanel}>
          <div className={styles.streakHeader}>
            <span className={styles.panelLabel}>7-day streak</span>
            <span className={styles.streakStatus}>{DAYS_COMPLETED}/7</span>
          </div>
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
          <span className={styles.streakHint}>One more day unlocks your weekly boost.</span>
        </div>
      </div>
    </section>
  )
}
