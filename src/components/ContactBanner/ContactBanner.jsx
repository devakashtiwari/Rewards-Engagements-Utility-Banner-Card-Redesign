import { useState } from 'react'
import { MessageCircle, User, Mail, Copy, Check, BookOpen, ChevronRight, MailPlus } from 'lucide-react'
import { SectionTag, CtaButton, InfoRow } from '../common/BannerUI.jsx'
import bannerImage from '../../../Images/Desktop/Contact Us Banner Desktop.png'
import tabletBannerImage from '../../../Images/Tablet/Contact Us Banner Tablet.png'
import mobileBannerImage from '../../../Images/Mobile/3.Contact Us Banner Mobile.png'
import styles from './ContactBanner.module.css'

/** Official support contact email address */
const SUPPORT_EMAIL = 'velooprewardsofficial@gmail.com'

/**
 * ContactBanner Component (Banner 03)
 *
 * Provides customer support access points including one-click email copying,
 * a direct Support CTA button, Help Center navigation, and Ticket submission.
 *
 * @param {Function} onContactSupport - Callback invoked when "Contact Support" CTA is clicked
 * @param {Function} onHelpCenter - Callback invoked when "Help Center" row is clicked
 * @param {Function} onSubmitTicket - Callback invoked when "Submit a Ticket" row is clicked
 */
export default function ContactBanner({ onContactSupport, onHelpCenter, onSubmitTicket }) {
  const [copied, setCopied] = useState(false)

  /**
   * Copies the support email to user's clipboard and displays a temporary "Copied!" feedback state.
   */
  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(SUPPORT_EMAIL)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 2000)
    } catch {
      setCopied(false)
    }
  }

  return (
    <section className={styles.banner} aria-labelledby="contact-heading">
      {/* Left Column: Eyebrow, Heading, Description, & Direct CTA */}
      <div className={styles.textCol}>
        <div className={styles.eyebrowRow}>
          <SectionTag tone="navy">3</SectionTag>
          <span className={styles.eyebrowLabel}>CONTACT US</span>
        </div>

        <h2 id="contact-heading" className={styles.heading}>
          Need Help? <span className={styles.headingAccent}>We&apos;re Here.</span>
        </h2>

        <p className={styles.description}>
          <span className={styles.hiddenPhrase}>Have a question, concern, or need assistance? </span>Get in touch with the VELOOP Rewards
          team.
        </p>

        <CtaButton
          tone="navy"
          className={styles.contactButton}
          icon={<MessageCircle size={18} />}
          onClick={onContactSupport}
        >
          Contact Support
        </CtaButton>
      </div>

      {/* Middle Column: Support Representative Visual Artwork */}
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
            alt="Friendly VELOOP support agent wearing a headset at a laptop"
            className={styles.bannerImage}
          />
        </picture>
      </div>

      {/* Right Column: Support Action Panel & Direct Links */}
      <div className={styles.panelCol}>
        <div className={styles.panel}>
          <InfoRow icon={<User strokeWidth={2.2} />} title="We're here to help" />
          <InfoRow
            icon={<Mail strokeWidth={2.2} />}
            title="Email Us"
            subtitle={SUPPORT_EMAIL}
            className={styles.emailRow}
          />
          <button
            type="button"
            className={styles.copyButton}
            onClick={handleCopyEmail}
            aria-label="Copy support email address to clipboard"
          >
            <span>{copied ? 'Copied!' : 'Copy Email'}</span>
            {copied ? <Check size={16} /> : <Copy size={16} />}
          </button>
          <InfoRow
            icon={<BookOpen strokeWidth={2.2} />}
            title="Help Center"
            action={<ChevronRight />}
            interactive
            onClick={onHelpCenter}
          />
          <InfoRow
            icon={<MailPlus strokeWidth={2.2} />}
            title="Submit a Ticket"
            action={<ChevronRight />}
            interactive
            onClick={onSubmitTicket}
          />
        </div>
      </div>
    </section>
  )
}
