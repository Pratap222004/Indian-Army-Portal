import { useEffect } from 'react'
import { gsap } from 'gsap'
import { Link } from 'react-router-dom'
import { 
  FaUser, 
  FaNewspaper, 
  FaFileAlt, 
  FaPhone, 
  FaBriefcase, 
  FaCertificate
} from 'react-icons/fa'

const quickLinksData = [
  {
    title: "Careers",
    description: "Recruitment opportunities and application process",
    icon: <FaBriefcase className="text-accent-500 text-3xl" />,
    link: "/careers"
  },
  {
    title: "Latest News",
    description: "Stay updated with recent developments and announcements",
    icon: <FaNewspaper className="text-accent-500 text-3xl" />,
    link: "/news"
  },
  {
    title: "Welfare Schemes",
    description: "Information about welfare programs for soldiers and families",
    icon: <FaUser className="text-accent-500 text-3xl" />,
    link: "/welfare"
  },
  {
    title: "Publications",
    description: "Access official publications, journals and documents",
    icon: <FaFileAlt className="text-accent-500 text-3xl" />,
    link: "/publications"
  },
  {
    title: "Awards & Honours",
    description: "Learn about bravery awards and recognition",
    icon: <FaCertificate className="text-accent-500 text-3xl" />,
    link: "/awards"
  },
  {
    title: "Contact Us",
    description: "Get in touch with the Indian Army",
    icon: <FaPhone className="text-accent-500 text-3xl" />,
    link: "/contact"
  }
]

const QuickLinks = () => {
  useEffect(() => {
    gsap.fromTo(
      '.quick-link-card',
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.quick-links-grid',
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <div className="quick-links-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {quickLinksData.map((link, index) => (
        <Link 
          to={link.link}
          key={index}
          className="quick-link-card bg-neutral-100 hover:bg-primary-50 p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md flex items-start"
        >
          <div className="mr-4">{link.icon}</div>
          <div>
            <h3 className="text-lg font-semibold mb-1 text-secondary-800">{link.title}</h3>
            <p className="text-neutral-600 text-sm">{link.description}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default QuickLinks