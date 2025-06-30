import React,{ useEffect } from 'react'
import { Link } from 'react-router-dom'
import { gsap } from 'gsap'
import { FaCalendarAlt, FaChevronRight } from 'react-icons/fa'

// Mock data - in a real app, this would come from an API
const newsData = [
  {
    id: 1,
    title: "Indian Army Conducts Joint Military Exercise with US Forces",
    summary: "The Indian Army and US Forces successfully conducted a joint military exercise aimed at enhancing interoperability and sharing best practices.",
    date: "2025-01-15",
    category: "Operations",
    image: "https://www.ssbcrack.com/wp-content/uploads/2025/04/Indian-Army-and-Air-Force-Conduct-Joint-Heliborne-Exercise.jpg"
  },
  {
    id: 2,
    title: "New Recruitment Drive Announced for Technical Positions",
    summary: "Indian Army announces a nationwide recruitment drive for technical positions including engineering, medical, and IT specialists.",
    date: "2025-01-12",
    category: "Recruitment",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRn7I8oG0euknlabNPXa18fj4UC5ICEY2Grag&s"
  },
  {
    id: 3,
    title: "Army's Humanitarian Response to Recent Floods",
    summary: "Indian Army's swift response to recent floods has helped evacuate over 5,000 citizens and deliver essential supplies to affected areas.",
    date: "2025-01-08",
    category: "Humanitarian",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTzR20BelYaBX5cUeMyAzC54da6IKfCS6FEw&s"
  },
  {
    id: 4,
    title: "Army Chief Reviews Border Security Measures",
    summary: "The Chief of Army Staff conducted a comprehensive review of security measures along the northern borders during his recent visit.",
    date: "2025-01-04",
    category: "Security",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbealo0A7UqKXlbFEvW10sNValV4OKJh1lxQ&s"
  }
]

const LatestNews = () => {
  useEffect(() => {
    gsap.fromTo(
      '.news-card',
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.news-section',
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])

  return (
    <div className="news-section grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {newsData.map(item => (
        <div key={item.id} className="news-card group">
          <div className="h-48 overflow-hidden rounded-t-lg">
            <img 
              src={item.image} 
              alt={item.title} 
              className="w-full h-full object-cover image-hover-zoom"
            />
          </div>
          <div className="p-4">
            <div className="flex items-center mb-2">
              <span className="text-sm px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                {item.category}
              </span>
              <span className="ml-2 text-sm text-neutral-500 flex items-center">
                <FaCalendarAlt className="mr-1" /> {new Date(item.date).toLocaleDateString()}
              </span>
            </div>
            <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
            <p className="text-neutral-600 text-sm mb-4">{item.summary}</p>
            <Link 
              to={`/news/${item.id}`} 
              className="flex items-center text-accent-500 font-medium text-sm group-hover:text-accent-600 transition-colors"
            >
              Read More <FaChevronRight className="ml-1 group-hover:ml-2 transition-all" />
            </Link>
          </div>
        </div>
      ))}
    </div>
  )
}

export default LatestNews