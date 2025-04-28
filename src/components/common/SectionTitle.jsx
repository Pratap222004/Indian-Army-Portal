import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const SectionTitle = ({ title, align = 'left', className = '' }) => {
  const titleRef = useRef(null)
  
  useEffect(() => {
    const element = titleRef.current
    
    gsap.fromTo(
      element,
      { 
        y: 20, 
        opacity: 0 
      },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    )
    
    // Line animation
    gsap.fromTo(
      '.title-line',
      { 
        width: 0,
      },
      { 
        width: '5rem',
        duration: 1,
        scrollTrigger: {
          trigger: element,
          start: 'top 90%',
          toggleActions: 'play none none none'
        }
      }
    )
  }, [])
  
  return (
    <div 
      ref={titleRef} 
      className={`section-title-container ${align === 'center' ? 'text-center' : ''} ${className}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-2 text-secondary-800">{title}</h2>
      <div 
        className={`title-line h-1 bg-accent-500 ${align === 'center' ? 'mx-auto' : ''}`}
      ></div>
    </div>
  )
}

export default SectionTitle