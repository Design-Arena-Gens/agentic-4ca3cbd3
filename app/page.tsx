'use client'

import { useState, useEffect } from 'react'
import styles from './page.module.css'

export default function Home() {
  const [scrolled, setScrolled] = useState(false)
  const [activeCollection, setActiveCollection] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const collections = [
    {
      name: 'Eternal Brilliance',
      description: 'Timeless solitaire designs that capture pure elegance',
      items: '24 pieces'
    },
    {
      name: 'Royal Heritage',
      description: 'Intricate heirloom pieces inspired by royal elegance',
      items: '18 pieces'
    },
    {
      name: 'Modern Sophistication',
      description: 'Contemporary designs for the modern connoisseur',
      items: '32 pieces'
    }
  ]

  const features = [
    {
      title: 'Certified Excellence',
      desc: 'GIA certified diamonds with detailed certification'
    },
    {
      title: 'Bespoke Design',
      desc: 'Custom creations tailored to your vision'
    },
    {
      title: 'Lifetime Guarantee',
      desc: 'Comprehensive warranty on all pieces'
    },
    {
      title: 'Expert Craftsmen',
      desc: 'Master artisans with decades of experience'
    }
  ]

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ''}`}>
        <div className="container">
          <div className={styles.navContent}>
            <div className={styles.logo}>ZIA DIAMONDS</div>
            <div className={styles.navLinks}>
              <a href="#collections">Collections</a>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      <main className={styles.main}>
        <section className={styles.hero}>
          <div className={styles.heroOverlay}></div>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <h1 className={styles.heroTitle}>
                Brilliance<br />
                Beyond<br />
                Measure
              </h1>
              <p className={styles.heroSubtitle}>
                Where exceptional craftsmanship meets timeless elegance
              </p>
              <button className={styles.ctaButton}>
                Explore Collection
              </button>
            </div>
          </div>
          <div className={styles.heroGradient}></div>
        </section>

        <section className={styles.statement}>
          <div className="container">
            <p className={styles.statementText}>
              "Each diamond tells a story of millions of years of natural perfection,
              waiting to become part of your legacy."
            </p>
          </div>
        </section>

        <section id="collections" className={styles.collections}>
          <div className="container">
            <h2 className={styles.sectionTitle}>Signature Collections</h2>
            <div className={styles.collectionsGrid}>
              {collections.map((collection, index) => (
                <div
                  key={index}
                  className={styles.collectionCard}
                  onMouseEnter={() => setActiveCollection(index)}
                >
                  <div className={styles.collectionImage}>
                    <div className={styles.collectionImageInner}></div>
                  </div>
                  <div className={styles.collectionInfo}>
                    <h3>{collection.name}</h3>
                    <p>{collection.description}</p>
                    <span className={styles.collectionItems}>{collection.items}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.featured}>
          <div className={styles.featuredContent}>
            <div className={styles.featuredImage}>
              <div className={styles.featuredImageInner}></div>
            </div>
            <div className={styles.featuredText}>
              <span className={styles.featuredLabel}>Featured</span>
              <h2>The Aurora Collection</h2>
              <p>
                A masterpiece of design featuring a 3.5 carat flawless diamond
                set in platinum, surrounded by a halo of perfectly matched stones.
                This piece represents the pinnacle of our craft.
              </p>
              <div className={styles.featuredSpecs}>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Carat</span>
                  <span className={styles.specValue}>3.5</span>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Color</span>
                  <span className={styles.specValue}>D</span>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Clarity</span>
                  <span className={styles.specValue}>IF</span>
                </div>
                <div className={styles.spec}>
                  <span className={styles.specLabel}>Cut</span>
                  <span className={styles.specValue}>Excellent</span>
                </div>
              </div>
              <button className={styles.ctaButtonSecondary}>
                View Details
              </button>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <div className="container">
            <div className={styles.featuresGrid}>
              {features.map((feature, index) => (
                <div key={index} className={styles.featureCard}>
                  <div className={styles.featureIcon}></div>
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className={styles.about}>
          <div className="container">
            <div className={styles.aboutContent}>
              <div className={styles.aboutText}>
                <h2>A Legacy of Excellence</h2>
                <p>
                  For over three decades, Zia Diamonds has been synonymous with
                  unparalleled quality and exquisite craftsmanship. Each piece in
                  our collection is a testament to our commitment to perfection,
                  created by master artisans who understand that true luxury lies
                  in the details.
                </p>
                <p>
                  Our diamonds are ethically sourced and meticulously selected,
                  ensuring that every stone meets our rigorous standards for
                  brilliance, fire, and scintillation.
                </p>
              </div>
              <div className={styles.aboutStats}>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>30+</span>
                  <span className={styles.statLabel}>Years of Excellence</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>10K+</span>
                  <span className={styles.statLabel}>Satisfied Clients</span>
                </div>
                <div className={styles.stat}>
                  <span className={styles.statNumber}>100%</span>
                  <span className={styles.statLabel}>Certified Diamonds</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          <div className="container">
            <div className={styles.contactContent}>
              <div className={styles.contactInfo}>
                <h2>Visit Our Atelier</h2>
                <p>
                  Experience our collection in person at our exclusive showroom.
                  Schedule a private consultation with our diamond specialists.
                </p>
                <div className={styles.contactDetails}>
                  <div className={styles.contactItem}>
                    <strong>Address</strong>
                    <span>123 Luxury Avenue, Diamond District<br/>New York, NY 10017</span>
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Phone</strong>
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Email</strong>
                    <span>info@ziadiamonds.com</span>
                  </div>
                  <div className={styles.contactItem}>
                    <strong>Hours</strong>
                    <span>Monday - Saturday: 10AM - 6PM<br/>Sunday: By Appointment</span>
                  </div>
                </div>
              </div>
              <div className={styles.contactForm}>
                <h3>Book a Consultation</h3>
                <form>
                  <input type="text" placeholder="Your Name" required />
                  <input type="email" placeholder="Email Address" required />
                  <input type="tel" placeholder="Phone Number" />
                  <textarea placeholder="Tell us about your vision" rows={4}></textarea>
                  <button type="submit" className={styles.submitButton}>
                    Request Appointment
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <footer className={styles.footer}>
          <div className="container">
            <div className={styles.footerContent}>
              <div className={styles.footerLogo}>ZIA DIAMONDS</div>
              <div className={styles.footerLinks}>
                <a href="#collections">Collections</a>
                <a href="#about">About</a>
                <a href="#contact">Contact</a>
                <a href="#privacy">Privacy</a>
              </div>
              <p className={styles.footerCopyright}>
                © 2024 Zia Diamonds. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </>
  )
}
