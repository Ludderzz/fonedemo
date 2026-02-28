import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { 
  Smartphone, Laptop, Unlock, Shield, CreditCard, 
  MapPin, Star, ChevronRight, Menu, X, Phone,
  Wrench, ArrowRight, Zap, Package, RotateCcw
} from 'lucide-react'

const LOGO = 'https://static.wixstatic.com/media/08d198_860cfb889ba04f8ea5a1dc4098918c7b~mv2.png/v1/fill/w_197,h_115,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fone%20revive.png'
const BANNER = 'https://static.wixstatic.com/media/08d198_787420ae701841e08d2764c2e103fd68~mv2.png/v1/crop/x_245,y_14,w_1373,h_179/fill/w_1349,h_172,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/feature%20wallpaper_PNG.png'

const fade = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }
})

const services = [
  { icon: Smartphone, label: 'Phone & Tablet Repairs', desc: 'Screen replacements, battery swaps, water damage & more — same-day service available.', color: '#E8481C' },
  { icon: Laptop, label: 'Laptop & PC Repairs', desc: 'Hardware faults, overheating, broken screens, and full diagnostics.', color: '#2B5CE6' },
  { icon: Unlock, label: 'Unlocking', desc: 'Unlock any device from any network, fast and guaranteed.', color: '#C9A84C' },
  { icon: Zap, label: 'Software Work', desc: 'OS reinstalls, virus removal, factory resets and data recovery.', color: '#1DB89A' },
  { icon: Shield, label: 'Insurance', desc: 'Protect your device with our tailored gadget insurance plans.', color: '#9B59B6' },
  { icon: CreditCard, label: 'Klarna Finance', desc: 'Spread the cost of repairs or purchases with 0% interest options.', color: '#FFB6C1' },
]

const stats = [
  { value: '50+', label: 'UK Stores' },
  { value: '200K+', label: 'Repairs Done' },
  { value: '4.8★', label: 'Average Rating' },
  { value: '15min', label: 'Avg Repair Time' },
]

const testimonials = [
  { name: 'Sarah M.', location: 'London', text: 'Got my screen replaced in 20 minutes. Incredible service and really fair pricing.', stars: 5 },
  { name: 'James T.', location: 'Manchester', text: 'They recovered all my photos from a water-damaged phone I thought was gone forever.', stars: 5 },
  { name: 'Priya K.', location: 'Birmingham', text: 'Best phone shop in town. Staff are knowledgeable and honest. Won\'t go anywhere else.', stars: 5 },
]

const regions = ['London & South East', 'North of England', 'Midlands', 'South West', 'Wales']

function Nav() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 80], ['rgba(250,250,247,0)', 'rgba(250,250,247,0.97)'])
  const shadow = useTransform(scrollY, [0, 80], ['0 0 0 0 rgba(0,0,0,0)', '0 2px 20px rgba(0,0,0,0.08)'])

  const navLinks = ['Shop', 'Repairs & Services', 'Store Locator', 'Business Solutions', 'About']

  return (
    <>
      <motion.nav style={{ background: bg, boxShadow: shadow }}
        className="nav-bar">
        <div className="nav-inner">
          <motion.img src={LOGO} alt="Fone Revive" className="nav-logo"
            initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} />
          <div className="nav-links-desktop">
            {navLinks.map(l => (
              <a key={l} href="#" className="nav-link">{l}</a>
            ))}
          </div>
          <div className="nav-actions">
            <a href="#" className="btn-nav-cta">Get a Quote</a>
            <button onClick={() => setOpen(true)} className="nav-burger">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {open && (
          <motion.div className="mobile-menu"
            initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 30, stiffness: 300 }}>
            <button onClick={() => setOpen(false)} className="mobile-close"><X size={24} /></button>
            <div className="mobile-links">
              {navLinks.map((l, i) => (
                <motion.a key={l} href="#" className="mobile-link"
                  initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 + 0.1 }}>
                  {l}
                </motion.a>
              ))}
            </div>
            <a href="#" className="btn-mobile-cta">Get a Quote <ArrowRight size={18} /></a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

function Hero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 120])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section ref={ref} className="hero">
      <motion.div className="hero-bg" style={{ y }}>
        <div className="hero-gradient" />
        <div className="hero-grid" />
      </motion.div>

      <motion.div className="hero-content" style={{ opacity }}>
        <motion.div className="hero-badge"
          initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}>
          <Zap size={14} /> UK's #1 Phone Repair Network
        </motion.div>

        <motion.h1 className="hero-title"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}>
          Buy.<br />Sell.<br /><span className="hero-accent">Revive.</span>
        </motion.h1>

        <motion.p className="hero-sub"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}>
          Same-day repairs across 50+ UK stores. Expert technicians. Fair prices. No nonsense.
        </motion.p>

        <motion.div className="hero-buttons"
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}>
          <a href="#" className="btn-primary">Book a Repair <ArrowRight size={18} /></a>
          <a href="#" className="btn-secondary">Find a Store <MapPin size={18} /></a>
        </motion.div>

        <motion.div className="hero-features"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.6 }}>
          {['Same-day Service', 'Price Match Guarantee', '90-day Warranty'].map(f => (
            <span key={f} className="hero-feature-tag">✓ {f}</span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div className="hero-phone-visual"
        initial={{ opacity: 0, x: 60, rotate: 8 }}
        animate={{ opacity: 1, x: 0, rotate: 2 }}
        transition={{ duration: 1.1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}>
        <div className="phone-mockup">
          <div className="phone-screen">
            <div className="phone-notch" />
            <div className="phone-status-bar">
              <span>9:41</span>
              <div className="phone-icons">
                <span>●●●</span>
              </div>
            </div>
            <div className="phone-app-grid">
              {['📱','🔧','⚡','🔓','🛡️','💳','📍','⭐'].map((e, i) => (
                <motion.div key={i} className="phone-app-icon"
                  initial={{ scale: 0 }} animate={{ scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.06 }}>
                  {e}
                </motion.div>
              ))}
            </div>
            <div className="phone-card">
              <Wrench size={16} />
              <div>
                <div className="phone-card-title">Screen Repair</div>
                <div className="phone-card-sub">Ready in 20 mins</div>
              </div>
            </div>
          </div>
        </div>
        <div className="phone-glow" />
      </motion.div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats-band">
      {stats.map((s, i) => (
        <motion.div key={s.label} className="stat-item" {...fade(i * 0.1)}>
          <div className="stat-value">{s.value}</div>
          <div className="stat-label">{s.label}</div>
        </motion.div>
      ))}
    </section>
  )
}

function Services() {
  return (
    <section className="services-section" id="services">
      <div className="section-inner">
        <motion.div className="section-header" {...fade()}>
          <span className="section-tag">What We Do</span>
          <h2 className="section-title">Every service your device needs</h2>
          <p className="section-sub">From cracked screens to complex software issues — our expert technicians handle it all.</p>
        </motion.div>

        <div className="services-grid">
          {services.map((s, i) => (
            <motion.div key={s.label} className="service-card" {...fade(i * 0.1)}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}>
              <div className="service-icon-wrap" style={{ '--color': s.color }}>
                <s.icon size={26} />
              </div>
              <h3 className="service-title">{s.label}</h3>
              <p className="service-desc">{s.desc}</p>
              <a href="#" className="service-link">Learn more <ChevronRight size={16} /></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BannerStrip() {
  return (
    <section className="banner-strip">
      <motion.div className="banner-inner" {...fade()}>
        <img src={BANNER} alt="Fone Revive Feature" className="banner-img" />
        <div className="banner-overlay">
          <div className="banner-text-block">
            <h3>Official UK Franchise Network</h3>
            <p>Join 50+ stores across England and Wales. Interested in a franchise?</p>
            <a href="#" className="btn-banner">Find Out More <ArrowRight size={16} /></a>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

function HowItWorks() {
  const steps = [
    { icon: MapPin, num: '01', title: 'Find Your Store', desc: 'Locate your nearest Fone Revive across 5 UK regions.' },
    { icon: Phone, num: '02', title: 'Drop Off Your Device', desc: 'Bring it in — no appointment needed. We\'ll assess it on the spot.' },
    { icon: Wrench, num: '03', title: 'Expert Repair', desc: 'Our certified technicians fix it fast using quality parts.' },
    { icon: RotateCcw, num: '04', title: 'Collect & Go', desc: 'Pick up your fully repaired device, backed by our 90-day warranty.' },
  ]

  return (
    <section className="how-section">
      <div className="section-inner">
        <motion.div className="section-header" {...fade()}>
          <span className="section-tag">Simple Process</span>
          <h2 className="section-title">Repairs made simple</h2>
        </motion.div>
        <div className="steps-row">
          {steps.map((s, i) => (
            <motion.div key={s.num} className="step-card" {...fade(i * 0.12)}>
              <div className="step-num">{s.num}</div>
              <div className="step-icon"><s.icon size={22} /></div>
              <h4 className="step-title">{s.title}</h4>
              <p className="step-desc">{s.desc}</p>
              {i < steps.length - 1 && <div className="step-arrow"><ArrowRight size={18} /></div>}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="section-inner">
        <motion.div className="section-header" {...fade()}>
          <span className="section-tag">Reviews</span>
          <h2 className="section-title">Customers love us</h2>
        </motion.div>
        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <motion.div key={t.name} className="testimonial-card" {...fade(i * 0.15)}>
              <div className="testimonial-stars">{'★'.repeat(t.stars)}</div>
              <p className="testimonial-text">"{t.text}"</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">{t.name[0]}</div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-location"><MapPin size={12} /> {t.location}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Locations() {
  return (
    <section className="locations-section">
      <div className="section-inner">
        <motion.div className="section-header" {...fade()}>
          <span className="section-tag">Our Network</span>
          <h2 className="section-title">Find us near you</h2>
          <p className="section-sub">50+ stores across the UK, with more opening every month.</p>
        </motion.div>
        <div className="regions-grid">
          {regions.map((r, i) => (
            <motion.a key={r} href="#" className="region-card" {...fade(i * 0.1)}
              whileHover={{ scale: 1.03, transition: { duration: 0.2 } }}>
              <MapPin size={20} />
              <span>{r}</span>
              <ChevronRight size={16} className="region-arrow" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cta-section">
      <motion.div className="cta-inner" {...fade()}>
        <div className="cta-glow" />
        <span className="section-tag" style={{ color: 'var(--accent-light)' }}>Ready?</span>
        <h2 className="cta-title">Your device deserves<br />a second life.</h2>
        <p className="cta-sub">Walk in or book online. Same-day service at 50+ locations across the UK.</p>
        <div className="cta-buttons">
          <a href="#" className="btn-cta-white">Book a Repair <ArrowRight size={18} /></a>
          <a href="#" className="btn-cta-outline">View All Services</a>
        </div>
      </motion.div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img src={LOGO} alt="Fone Revive" className="footer-logo" />
          <p>The UK's trusted phone repair, buy & sell network. 50+ stores and growing.</p>
          <div className="footer-social">
            <a href="https://www.facebook.com/fonereviveuk" target="_blank" className="social-btn">Facebook</a>
            <a href="https://twitter.com/FoneReviveUK" target="_blank" className="social-btn">Twitter</a>
          </div>
        </div>
        <div className="footer-links-group">
          <div className="footer-col">
            <h4>Services</h4>
            <a href="#">Phone Repairs</a>
            <a href="#">Laptop Repairs</a>
            <a href="#">Unlocking</a>
            <a href="#">Software Work</a>
            <a href="#">Insurance</a>
          </div>
          <div className="footer-col">
            <h4>Company</h4>
            <a href="#">About Us</a>
            <a href="#">Careers</a>
            <a href="#">Franchising</a>
            <a href="#">Business Solutions</a>
            <a href="#">Affiliates</a>
          </div>
          <div className="footer-col">
            <h4>Support</h4>
            <a href="#">FAQ's</a>
            <a href="#">Contact Us</a>
            <a href="#">Store Locator</a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>®©2024 Fonerevive Limited. All rights reserved.</span>
        <span>Built with ♥ in the UK</span>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Stats />
      <Services />
      <BannerStrip />
      <HowItWorks />
      <Testimonials />
      <Locations />
      <CTA />
      <Footer />
    </>
  )
}
