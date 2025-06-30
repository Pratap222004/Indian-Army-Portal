import React,{ useEffect, useState } from 'react'
import { gsap } from 'gsap'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import { FaSearch, FaUser, FaGraduationCap, FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa'

// Mock data
const careerCategories = [
  "All", "Officer Entry", "Soldier Entry", "Technical Entry", "Women Entry", "Short Service", "Territorial Army"
]

const careerOpportunities = [
  {
    id: 1,
    title: "National Defence Academy",
    category: "Officer Entry",
    eligibility: "12th pass (PCM), Age: 16.5-19.5 years",
    applyBy: "2025-03-15",
    location: "Pan India",
    description: "Join the prestigious NDA for a career as an officer in the Indian Army. The training includes a rigorous program at NDA followed by IMA.",
    image: "https://www.coloneldefenceacademy.in/wp-content/uploads/2015/12/best-nda-coaching-kuchaman-city.jpg"
  },
  {
    id: 2,
    title: "Technical Graduate Course",
    category: "Technical Entry",
    eligibility: "Engineering graduates, Age: Below 27 years",
    applyBy: "2025-02-28",
    location: "Pan India",
    description: "Engineering graduates can join the Indian Army as officers through the Technical Graduate Course, serving in various technical arms and services.",
    image: "https://www.defenceguru.co.in/DF/Admin/pages/PDD/tgc-entry-benfits.jpg"
  },
  {
    id: 3,
    title: "Women Military Police",
    category: "Women Entry",
    eligibility: "10th pass, Age: 17.5-21 years",
    applyBy: "2025-04-10",
    location: "Selected Regions",
    description: "Opportunity for women to join the Corps of Military Police. Responsibilities include policing duties, investigation of offenses, and maintaining discipline.",
    image: "https://archive.siasat.com/wp-content/uploads/2019/03/women-in-indian-army-MAIN.jpg"
  },
  {
    id: 4,
    title: "Short Service Commission",
    category: "Short Service",
    eligibility: "Graduates, Age: 19-25 years",
    applyBy: "2025-03-30",
    location: "Pan India",
    description: "Short Service Commission offers opportunities for graduates to serve as officers for a period of 10 years, extendable to 14 years.",
    image: "https://cdn.prod.website-files.com/5eb2c3584e1741ad905322a5/668a817988c167cbff05b4fa_Screenshot%202024-07-07%20at%205.22.15%E2%80%AFPM.png"
  },
  {
    id: 5,
    title: "Technical Entry Scheme",
    category: "Soldier Entry",
    eligibility: "12th pass (PCM), Age: 16.5-19.5 years",
    applyBy: "2025-05-20",
    location: "Pan India",
    description: "Join the technical branches of the Indian Army through the Technical Entry Scheme. Training includes a technical degree program.",
    image: "https://dehradundefenceacademy.com/wp-content/uploads/2024/12/TES-Entry-Technical-Entry-Scheme-Eligibility-Selection-Process-and-SSB--1024x536.webp"
  },
  {
    id: 6,
    title: "Territorial Army Officer",
    category: "Territorial Army",
    eligibility: "Graduate, Age: 18-42 years",
    applyBy: "2025-06-15",
    location: "Selected Cities",
    description: "Join the Territorial Army as a part-time officer while pursuing your civilian career. Serve the nation during emergencies and natural disasters.",
    image: "https://territorialarmy.in/uploads/slider/downloads_1580745720.jpg"
  }
]

const steps = [
  {
    number: "01",
    title: "Check Eligibility",
    description: "Review the eligibility criteria for your chosen entry scheme including age, education, and physical standards."
  },
  {
    number: "02",
    title: "Apply Online",
    description: "Submit your application through the official Indian Army recruitment portal within the specified timeline."
  },
  {
    number: "03",
    title: "Entrance Exam",
    description: "Appear for the written examination as per your chosen entry scheme (e.g., NDA, CDS, TGC)."
  },
  {
    number: "04",
    title: "SSB Interview",
    description: "Qualify for and attend the five-day Services Selection Board interview process."
  },
  {
    number: "05",
    title: "Medical Examination",
    description: "Undergo a comprehensive medical examination to ensure you meet the health standards."
  },
  {
    number: "06",
    title: "Final Selection",
    description: "Based on your performance in all stages, receive your final selection and joining instructions."
  }
]

const CareersPage = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCareers, setFilteredCareers] = useState(careerOpportunities)
  
  useEffect(() => {
    // Filter careers based on category and search term
    let filtered = careerOpportunities
    
    if (activeCategory !== "All") {
      filtered = filtered.filter(item => item.category === activeCategory)
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        item => 
          item.title.toLowerCase().includes(term) || 
          item.description.toLowerCase().includes(term) ||
          item.eligibility.toLowerCase().includes(term)
      )
    }
    
    setFilteredCareers(filtered)
    
    // Animate career items
    gsap.fromTo(
      '.career-card',
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.1,
        duration: 0.5,
        clearProps: 'all'
      }
    )
  }, [activeCategory, searchTerm])
  
  useEffect(() => {
    // Page animation
    gsap.fromTo(
      '.page-header',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    
    gsap.fromTo(
      '.process-step',
      { x: -30, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        stagger: 0.2,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.recruitment-process',
          start: 'top 80%',
        }
      }
    )
    
    gsap.fromTo(
      '.benefit-card',
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.benefits-section',
          start: 'top 80%',
        }
      }
    )
  }, [])

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div 
        className="bg-secondary-800 text-white py-16 mb-12 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://etimg.etb2bimg.com/photo/110412410.cms)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(10, 17, 40, 0.7)'
        }}
      >
        <div className="container page-header relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Join the Indian Army</h1>
            <p className="text-xl text-neutral-200 mb-6">
              Discover a rewarding career in the Indian Army. Serve the nation with pride, 
              courage, and honor while gaining valuable skills and experiences.
            </p>
            <Button variant="accent" to="#opportunities">View Opportunities</Button>
          </div>
        </div>
      </div>
      
      <div className="container">
  

        
        {/* Current Opportunities */}
        <div id="opportunities" className="mb-16">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <SectionTitle title="Current Opportunities" />
            
            <div className="w-full md:w-1/3 mt-4 md:mt-0">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search opportunities..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                />
                <FaSearch className="absolute right-3 top-3 text-neutral-400" />
              </div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-8">
            {careerCategories.map(category => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-1 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? 'bg-primary-500 text-white'
                    : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          {filteredCareers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCareers.map(item => (
                <div key={item.id} className="career-card card group">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover image-hover-zoom"
                    />
                  </div>
                  <div className="p-5">
                    <div className="mb-3">
                      <span className="text-sm px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                        {item.category}
                      </span>
                    </div>
                    <h3 className="font-semibold text-lg mb-3 text-secondary-800">{item.title}</h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-neutral-600">
                        <FaUser className="mr-2 text-primary-500" />
                        <span>{item.eligibility}</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-600">
                        <FaCalendarAlt className="mr-2 text-primary-500" />
                        <span>Apply by: {new Date(item.applyBy).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center text-sm text-neutral-600">
                        <FaMapMarkerAlt className="mr-2 text-primary-500" />
                        <span>{item.location}</span>
                      </div>
                    </div>
                    
                    <p className="text-neutral-600 text-sm mb-4">{item.description}</p>
                    <Button variant="secondary" to={`/careers/${item.id}`} className="w-full">View Details</Button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 bg-neutral-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">No opportunities found</h3>
              <p className="text-neutral-600">
                Try changing your search term or filter criteria.
              </p>
            </div>
          )}
        </div>
        
        {/* Recruitment Process */}
        <div className="mb-16 recruitment-process">
          <SectionTitle title="Recruitment Process" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {steps.map((step) => (
              <div key={step.number} className="process-step bg-white p-6 rounded-lg shadow-card">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary-500 text-white flex items-center justify-center text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold ml-4 text-secondary-800">{step.title}</h3>
                </div>
                <p className="text-neutral-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="mb-16 benefits-section">
          <SectionTitle title="Benefits & Allowances" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="benefit-card bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-secondary-800">Competitive Salary</h3>
              <p className="text-neutral-600 text-sm">
                Attractive pay scales with regular increments and promotions based on performance and length of service.
              </p>
            </div>
            
            <div className="benefit-card bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-secondary-800">Accommodation</h3>
              <p className="text-neutral-600 text-sm">
                Free furnished accommodation in cantonment areas or housing allowance for private accommodation.
              </p>
            </div>
            
            <div className="benefit-card bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-secondary-800">Medical Benefits</h3>
              <p className="text-neutral-600 text-sm">
                Comprehensive healthcare for self and dependents through Army medical facilities.
              </p>
            </div>
            
            <div className="benefit-card bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 rounded-full bg-primary-100 mx-auto mb-4 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-secondary-800">Education</h3>
              <p className="text-neutral-600 text-sm">
                Opportunities for higher education, specialized training, and study leave during service.
              </p>
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="bg-neutral-50 rounded-lg p-8">
          <SectionTitle title="Frequently Asked Questions" align="center" className="mb-8" />
          
          <div className="max-w-3xl mx-auto">
            <details className="mb-4 bg-white p-4 rounded-lg shadow-sm">
              <summary className="text-lg font-semibold cursor-pointer text-secondary-800">
                What are the different ways to join the Indian Army?
              </summary>
              <p className="mt-4 text-neutral-700">
                The Indian Army offers multiple entry schemes including National Defence Academy (NDA), 
                Indian Military Academy (IMA), Officers Training Academy (OTA), Technical Graduate 
                Course (TGC), Short Service Commission (SSC), and various entry schemes for soldiers.
              </p>
            </details>
            
            <details className="mb-4 bg-white p-4 rounded-lg shadow-sm">
              <summary className="text-lg font-semibold cursor-pointer text-secondary-800">
                What are the physical fitness standards required?
              </summary>
              <p className="mt-4 text-neutral-700">
                Physical fitness standards vary by entry scheme and gender. Generally, candidates need to 
                complete running, push-ups, sit-ups, and chin-ups. Specific standards are provided in 
                the recruitment notifications.
              </p>
            </details>
            
            <details className="mb-4 bg-white p-4 rounded-lg shadow-sm">
              <summary className="text-lg font-semibold cursor-pointer text-secondary-800">
                Can women join the Indian Army?
              </summary>
              <p className="mt-4 text-neutral-700">
                Yes, women can join the Indian Army through various entry schemes including Short Service 
                Commission, Women Military Police, and specialized roles in the Army Medical Corps, Army 
                Dental Corps, and other services.
              </p>
            </details>
            
            <details className="mb-4 bg-white p-4 rounded-lg shadow-sm">
              <summary className="text-lg font-semibold cursor-pointer text-secondary-800">
                What is the selection process like?
              </summary>
              <p className="mt-4 text-neutral-700">
                The selection process typically includes a written examination, Services Selection Board 
                (SSB) interview (consisting of psychological tests, group tasks, and personal interviews), 
                medical examination, and final merit list preparation.
              </p>
            </details>
            
            <details className="mb-4 bg-white p-4 rounded-lg shadow-sm">
              <summary className="text-lg font-semibold cursor-pointer text-secondary-800">
                Is there an age limit for joining the Indian Army?
              </summary>
              <p className="mt-4 text-neutral-700">
                Yes, age limits vary by entry scheme. For NDA, candidates must be 16.5-19.5 years old. 
                For IMA, OTA, and other graduate-level entries, the age limit ranges from 19-27 years 
                depending on the specific entry scheme.
              </p>
            </details>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CareersPage


/*
<div className="container">
        {/* Why Join Section }
        <div className="mb-16 animate-fade-in">
          <SectionTitle title="Why Join the Indian Army?" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div>
              <img 
                src="https://images.pexels.com/photos/5546822/pexels-photo-5546822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Indian Army Soldiers" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-800">A Career Like No Other</h3>
              <p className="text-neutral-700 mb-4">
                The Indian Army offers a unique career that combines service to the nation, 
                personal growth, and professional development. It's more than just a job; 
                it's a way of life that instills discipline, courage, and leadership.
              </p>
              
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">✓</span>
                  <span>Pride and honor of serving the nation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">✓</span>
                  <span>Excellent career growth opportunities</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">✓</span>
                  <span>Comprehensive benefits package including healthcare and housing</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">✓</span>
                  <span>World-class training and skill development</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">✓</span>
                  <span>Opportunities for higher education and specialization</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">✓</span>
                  <span>Adventure and travel opportunities</span>
                </li>
              </ul>
              
              <Button variant="primary" to="/about">Learn More About Army Life</Button>
            </div>
          </div>
        </div>*/