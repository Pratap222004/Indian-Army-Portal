import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import Button from '../common/Button'
import { FaUserPlus, FaGraduationCap, FaUniversity, FaBriefcase } from 'react-icons/fa'

const recruitmentData = [
  {
    icon: <FaGraduationCap className="text-gold-500 text-3xl" />,
    title: "Officers Entry",
    description: "Join the Indian Army as an officer through multiple entry schemes including NDA, IMA, OTA, and TGC.",
    link: "/careers/officers"
  },
  {
    icon: <FaUserPlus className="text-gold-500 text-3xl" />,
    title: "Soldier Entry",
    description: "Recruitment for soldiers in various trades including technical, non-technical, and specialized roles.",
    link: "/careers/soldiers"
  },
  {
    icon: <FaUniversity className="text-gold-500 text-3xl" />,
    title: "Educational Courses",
    description: "Opportunities for continuing education and specialized training while serving in the Army.",
    link: "/careers/education"
  },
  {
    icon: <FaBriefcase className="text-gold-500 text-3xl" />,
    title: "Civilian Posts",
    description: "Civilian positions in various departments and establishments of the Indian Army.",
    link: "/careers/civilian"
  }
]

const RecruitmentSection = () => {
  useEffect(() => {
    gsap.fromTo(
      '.recruitment-card',
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.recruitment-section',
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 recruitment-section">
        <div className="animate-fade-in">
          <p className="text-lg text-neutral-300 mb-6">
            The Indian Army offers diverse career opportunities for youth seeking to serve the nation with pride, discipline, and honor. Join us to be part of a prestigious institution that shapes the future of our country.
          </p>
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2 text-gold-400">Why Join the Indian Army?</h3>
            <ul className="space-y-2 text-neutral-300">
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">✓</span>
                Prestigious and respected career
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">✓</span>
                Excellent training and professional development
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">✓</span>
                Competitive pay and benefits
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">✓</span>
                Opportunities for continuing education
              </li>
              <li className="flex items-start">
                <span className="text-accent-500 mr-2">✓</span>
                Adventure and challenging experiences
              </li>
            </ul>
          </div>
          <Button variant="accent" to="/careers">View All Opportunities</Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {recruitmentData.map((item, index) => (
            <Link 
              to={item.link} 
              key={index} 
              className="recruitment-card bg-secondary-700 hover:bg-secondary-600 p-4 rounded-lg transition-all duration-300"
            >
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
              <p className="text-neutral-300 text-sm">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default RecruitmentSection