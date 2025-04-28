import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { FaMedal, FaFlag, FaHandshake, FaUsers } from 'react-icons/fa'

const achievementsData = [
  {
    icon: <FaMedal className="text-gold-500 text-3xl" />,
    title: "Bravery Awards",
    count: 21,
    description: "Param Vir Chakra awardees who showed exceptional valor"
  },
  {
    icon: <FaFlag className="text-gold-500 text-3xl" />,
    title: "UN Peacekeeping",
    count: 43,
    description: "UN peacekeeping missions with Indian Army participation"
  },
  {
    icon: <FaHandshake className="text-gold-500 text-3xl" />,
    title: "Joint Exercises",
    count: 37,
    description: "International joint military exercises conducted annually"
  },
  {
    icon: <FaUsers className="text-gold-500 text-3xl" />,
    title: "Humanitarian Ops",
    count: 175,
    description: "Major humanitarian and disaster relief operations"
  }
]

const Achievements = () => {
  const countersRef = useRef([])
  
  useEffect(() => {
    // Animate achievement cards
    gsap.fromTo(
      '.achievement-card',
      { y: 40, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.achievements-section',
          start: 'top 80%',
        }
      }
    )
    
    // Animate counters
    achievementsData.forEach((achievement, index) => {
      let obj = { count: 0 }
      gsap.to(obj, {
        count: achievement.count,
        duration: 2,
        scrollTrigger: {
          trigger: '.achievements-section',
          start: 'top 80%',
        },
        onUpdate: () => {
          if (countersRef.current[index]) {
            countersRef.current[index].textContent = Math.floor(obj.count)
          }
        }
      })
    })
  }, [])

  return (
    <div className="achievements-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {achievementsData.map((item, index) => (
        <div key={index} className="achievement-card bg-white p-6 border border-neutral-200 rounded-lg text-center">
          <div className="flex justify-center mb-4">{item.icon}</div>
          <h3 className="text-lg font-semibold mb-2 text-secondary-800">{item.title}</h3>
          <div className="flex justify-center items-baseline mb-2">
            <span 
              ref={el => countersRef.current[index] = el}
              className="text-4xl font-bold text-primary-600"
            >
              0
            </span>
            <span className="text-2xl font-semibold text-primary-600">+</span>
          </div>
          <p className="text-neutral-600 text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Achievements