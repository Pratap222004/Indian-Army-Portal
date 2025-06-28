import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import Button from '../components/common/Button'
import SectionTitle from '../components/common/SectionTitle'
import { FaArrowRight, FaCalendarAlt, FaFileAlt, FaMedal } from 'react-icons/fa'
import LatestNews from '../components/home/LatestNews'
import QuickLinks from '../components/home/QuickLinks'
import Achievements from '../components/home/Achievements'
import RecruitmentSection from '../components/home/RecruitmentSection'

const HomePage = () => {
  const heroRef = useRef(null)
  
  useEffect(() => {
    const heroElement = heroRef.current
    
    // Hero animations
    gsap.fromTo(
      '.hero-title',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.2 }
    )
    
    gsap.fromTo(
      '.hero-subtitle',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.4 }
    )
    
    gsap.fromTo(
      '.hero-buttons',
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.6 }
    )
    
    // Parallax effect
    gsap.to('.hero-content', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: heroElement,
        start: 'top top',
        end: 'bottom top',
        scrub: true
      }
    })
  }, [])
  
  return (
    <div>
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: 'url(https://maritimeindia.org/wp-content/uploads/2016/08/home_banner_.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-secondary-900/60"></div>
        <div className="hero-content container relative z-10 text-white text-center max-w-4xl">
          <h1 className="hero-title text-4xl md:text-6xl font-bold mb-4 text-shadow">
            Service Before Self <span className="text-gold-400">•</span> Honor <span className="text-gold-400">•</span> Country
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl mb-8 text-shadow">
            Join the proud tradition of protecting our nation with courage, commitment, and sacrifice
          </p>
          <div className="hero-buttons flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="accent" to="/careers">Join the Army</Button>
            <Button variant="gold" to="/about">Learn More</Button>
          </div>
        </div>
      </section>

      {/* Latest News Section */}
      <section className="py-16 bg-neutral-100">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <SectionTitle title="Latest News & Updates" />
            <Link to="/news" className="flex items-center text-accent-500 font-medium hover:text-accent-600 transition-colors">
              View All News <FaArrowRight className="ml-2" />
            </Link>
          </div>
          <LatestNews />
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle title="Quick Access" align="center" className="mb-12" />
          <QuickLinks />
        </div>
      </section>

    {/* Recruitment Section */}
<section className="py-8 bg-secondary-800 text-white">
  <div className="container mx-auto px-4">
    <h1 className="text-2xl md:text-3xl font-bold text-center text-gold-400">
      Join the Indian Army
    </h1>
    <div className="mt-4">
      <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
        Career Opportunities
      </h2>
      <RecruitmentSection />
    </div>
  </div>
</section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="container">
          <SectionTitle title="Pride and Honor" align="center" className="mb-12" />
          <Achievements />
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-primary-500 text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage: 'url(https://images.news18.com/webstories/uploads/2025/01/2-2025-01-31127e94ee644052a00e95045ecc4765.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div className="container relative z-10 text-center max-w-3xl animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Serve the Nation?</h2>
          <p className="text-lg mb-8">
            The Indian Army offers exciting career opportunities for youth looking to serve the country with pride and honor.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="gold" to="/careers">View Opportunities</Button>
            <Button variant="secondary" to="/contact">Contact Us</Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage