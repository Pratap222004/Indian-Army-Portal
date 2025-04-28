import { Link } from 'react-router-dom'
import Logo from './Logo'
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="bg-secondary-800 text-white pt-12 pb-6">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and About */}
          <div>
            <div className="flex items-center mb-4">
              <Logo />
              <span className="ml-2 text-xl font-bold">INDIAN ARMY</span>
            </div>
            <p className="text-neutral-300 mb-4">
              Serving the nation with pride and honor. The official portal of the Indian Army.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-neutral-300 hover:text-gold-400 transition-colors" aria-label="Facebook">
                <FaFacebook size={20} />
              </a>
              <a href="https://twitter.com" className="text-neutral-300 hover:text-gold-400 transition-colors" aria-label="Twitter">
                <FaTwitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-neutral-300 hover:text-gold-400 transition-colors" aria-label="Instagram">
                <FaInstagram size={20} />
              </a>
              <a href="https://youtube.com" className="text-neutral-300 hover:text-gold-400 transition-colors" aria-label="YouTube">
                <FaYoutube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/news" className="text-neutral-300 hover:text-white transition-colors">Latest News</Link>
              </li>
              <li>
                <Link to="/careers" className="text-neutral-300 hover:text-white transition-colors">Join the Army</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-neutral-300 hover:text-white transition-colors">Media Gallery</Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-300 hover:text-white transition-colors">Our History</Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-300 hover:text-white transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Important Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Important Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Ministry of Defence</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Indian Air Force</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Indian Navy</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">Public Grievances</a>
              </li>
              <li>
                <a href="#" className="text-neutral-300 hover:text-white transition-colors">RTI Portal</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4 text-gold-400">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <FaPhone className="text-accent-500 mt-1 mr-2" />
                <span className="text-neutral-300">+91 1100-2233-44</span>
              </li>
              <li className="flex items-start">
                <FaEnvelope className="text-accent-500 mt-1 mr-2" />
                <span className="text-neutral-300">contact@indianarmy.gov.in</span>
              </li>
              <li>
                <address className="text-neutral-300 not-italic">
                  Integrated HQ of MoD (Army)<br />
                  South Block, New Delhi<br />
                  India - 110011
                </address>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-neutral-600 my-6" />

        <div className="text-center text-neutral-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Indian Army. All Rights Reserved.</p>
          <p className="mt-2">
            <Link to="/terms" className="hover:text-white mx-2">Terms of Use</Link> |
            <Link to="/privacy" className="hover:text-white mx-2">Privacy Policy</Link> |
            <Link to="/disclaimer" className="hover:text-white mx-2">Disclaimer</Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer