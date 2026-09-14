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
 */
export default function App() {
  // Navigation / Action callback hooks — wire these to your routing system or API
  const handleViewLeaderboard = () => console.log('Navigate -> /leaderboard')
  const handleWatchAndEarn = () => console.log('Navigate -> /watch-and-earn')
  const handleContactSupport = () => console.log('Navigate -> /support')
  const handleHelpCenter = () => console.log('Navigate -> /support/help-center')
  const handleSubmitTicket = () => console.log('Navigate -> /support/ticket')
  const handleExploreChannels = () => console.log('Navigate -> /follow-and-earn')
  const handleClaimBonus = () => console.log('Navigate -> /daily-bonus')

  return (
    <main className="veloop-app" aria-label="VELOOP Rewards Banners">
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
    </main>
  )
}
