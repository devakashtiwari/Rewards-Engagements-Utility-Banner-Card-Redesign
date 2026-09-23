import { useState } from 'react'
import { Info, Sparkles, X } from 'lucide-react'
import LeaderboardBanner from './components/LeaderboardBanner/LeaderboardBanner.jsx'
import WatchAdBanner from './components/WatchAdBanner/WatchAdBanner.jsx'
import ContactBanner from './components/ContactBanner/ContactBanner.jsx'
import FollowEarnBanner from './components/FollowEarnBanner/FollowEarnBanner.jsx'
import DailyBonusBanner from './components/DailyBonusBanner/DailyBonusBanner.jsx'

/**
 * Root Application Component
 *
 * Renders the 5 core promotional and utility banners for the VELOOP Rewards platform:
 * 1. LeaderboardBanner - Competition rankings & prize pool
 * 2. WatchAdBanner - Ad engagement rewards
 * 3. ContactBanner - Support access & email contact
 * 4. FollowEarnBanner - Social channel campaigns & follower stats
 * 5. DailyBonusBanner - Daily streak check-in & gem claims
 * Plus the official Page 25 Demo/Placeholder Notice and VELOOP REWARDS footer.
 */
export default function App() {
  const [toastMessage, setToastMessage] = useState(null)

  const showToast = (title, message) => {
    setToastMessage({ title, message })
    window.setTimeout(() => {
      setToastMessage((prev) => (prev?.title === title ? null : prev))
    }, 3800)
  }

  // Interactive navigation / action handlers
  const handleViewLeaderboard = () => {
    showToast(
      'Leaderboard Rankings',
      'Displaying Stage 01 Top Rankers: User A (12,450 VEs), User B (11,820 VEs), User C (10,970 VEs).'
    )
  }

  const handleWatchAndEarn = () => {
    showToast(
      'Ad Stream Ready',
      'Initializing reward stream. Watching 1 short clip will credit +38 VEs directly to your wallet.'
    )
  }

  const handleContactSupport = () => {
    showToast(
      'Support Desk',
      'Opening VELOOP Priority Support Desk. Email: velooprewardsofficial@gmail.com.'
    )
  }

  const handleHelpCenter = () => {
    showToast('Knowledge Base', 'Navigating to VELOOP Rewards Help Center & FAQ Articles.')
  }

  const handleSubmitTicket = () => {
    showToast('Support Ticket', 'Ticket submission modal opened. Priority response within 2 hours.')
  }

  const handleExploreChannels = () => {
    showToast(
      'Social Campaign',
      'Connected to VELOOP official social channels. Follow to claim your +500 SVEs reward!'
    )
  }

  const handleClaimBonus = () => {
    showToast(
      'Daily Bonus Claimed!',
      'Congratulations! +25 Gems have been added to your balance. 6/7 day streak progress saved!'
    )
  }

  return (
    <main className="veloop-app" aria-label="VELOOP Rewards Banners">
      {/* Toast Notification for Interactive Demonstrations */}
      {toastMessage && (
        <div className="veloop-toast" role="status" aria-live="polite">
          <div className="toast-icon">
            <Sparkles size={18} />
          </div>
          <div className="toast-body">
            <strong>{toastMessage.title}</strong>
            <p>{toastMessage.message}</p>
          </div>
          <button
            type="button"
            className="toast-close"
            onClick={() => setToastMessage(null)}
            aria-label="Dismiss notification"
          >
            <X size={15} />
          </button>
        </div>
      )}

      {/* Banner 01: Leaderboard */}
      <LeaderboardBanner onViewLeaderboard={handleViewLeaderboard} />

      {/* Banner 02: Watch & Earn */}
      <WatchAdBanner onWatchAndEarn={handleWatchAndEarn} />

      {/* Banner 03: Contact Us */}
      <ContactBanner
        onContactSupport={handleContactSupport}
        onHelpCenter={handleHelpCenter}
        onSubmitTicket={handleSubmitTicket}
      />

      {/* Banner 04: Follow & Earn */}
      <FollowEarnBanner onExploreChannels={handleExploreChannels} />

      {/* Banner 05: Daily Bonus */}
      <DailyBonusBanner onClaimBonus={handleClaimBonus} />

      {/* Page 25 Bottom Disclaimer Bar & VELOOP REWARDS Brand Footer */}
      <footer className="veloop-footer" aria-label="VELOOP Rewards Notice and Branding">
        <div className="notice-box">
          <Info size={18} className="notice-icon" aria-hidden="true" />
          <p className="notice-text">
            <strong>Demo / Placeholder Notice:</strong> Ranking, reward, and streak values are
            development placeholders for presentation purposes only and may change in the final
            product.
          </p>
        </div>

        <div className="brand-logo" aria-label="VELOOP Rewards Logo">
          <div className="brand-title">
            <span className="brand-v">VEL</span>
            <span className="brand-o">O</span>
            <span className="brand-p">OP</span>
          </div>
          <span className="brand-subtitle">REWARDS</span>
        </div>
      </footer>
    </main>
  )
}
