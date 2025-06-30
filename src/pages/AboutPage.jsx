import React,{ useEffect } from 'react'
import { gsap } from 'gsap'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import { FaMedal, FaHistory, FaUsers, FaGlobe } from 'react-icons/fa'

const AboutPage = () => {
  useEffect(() => {
    // Page animation
    gsap.fromTo(
      '.page-header',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    
    gsap.utils.toArray('.animate-section').forEach((section, i) => {
      gsap.fromTo(
        section,
        { y: 50, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 1,
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
          }
        }
      )
    })
  }, [])

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div 
        className="bg-secondary-800 text-white py-16 mb-12 relative overflow-hidden"
        style={{
          backgroundImage: 'url(data:image/png;base64,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)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(10, 17, 40, 0.8)'
        }}
      >
        <div className="container page-header relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About the Indian Army</h1>
            <p className="text-xl text-neutral-200 mb-6">
              The Indian Army is the land-based branch of the Indian Armed Forces. 
              It is the world's second-largest standing army and has been serving 
              the nation with unwavering dedication and valor.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="accent" to="#history">Our History</Button>
              <Button variant="gold" to="#command">Command Structure</Button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="container">
        {/* Mission & Vision */}
        <div className="animate-section mb-16">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionTitle title="Mission & Vision" align="center" />
            <p className="text-lg text-neutral-700 mt-6">
              The Indian Army's mission is to protect the nation's sovereignty and territorial 
              integrity against external aggression and internal threats, while also providing 
              aid to civil authorities during disasters and emergencies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-primary-50 p-8 rounded-lg border-l-4 border-primary-500">
              <h3 className="text-2xl font-semibold mb-4 text-primary-700">Our Mission</h3>
              <p className="text-neutral-700">
                To defend the territorial integrity of the nation from external aggression and internal threats. To assist the Government of India in achieving its national security and defense objectives. To assist civil authorities during natural calamities and other emergencies.
              </p>
            </div>
            
            <div className="bg-secondary-50 p-8 rounded-lg border-l-4 border-secondary-500">
              <h3 className="text-2xl font-semibold mb-4 text-secondary-700">Our Vision</h3>
              <p className="text-neutral-700">
                To be a modern, professional, and motivated force capable of meeting complex security challenges of the 21st century. To enhance operational capabilities through modernization, training, and integration of cutting-edge technologies. To maintain the highest standards of professionalism, integrity, and dedication.
              </p>
            </div>
          </div>
        </div>
        
        {/* History Timeline */}
<div id="history" className="animate-section mb-16">
  <SectionTitle title="Our Legacy" />
  
  <div className="relative py-8">
    {/* Timeline line */}
    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-1 bg-primary-200 transform md:translate-x-[-50%]"></div>
    
    {/* Timeline items */}
    <div className="timeline-items space-y-16">
      {/* Colonial Era */}
      <div className="relative flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-12">
          <img 
            src="https://www.worldhistory.org/uploads/images/16546.png" 
            alt="Colonial Era Placeholder"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white transform md:translate-x-[-50%] mt-2 md:mt-0"></div>
        <div className="md:w-1/2 md:pl-12 md:text-right">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary-600">1857-1947</span>
            <h3 className="text-xl font-semibold mb-2">Colonial Era</h3>
            <p className="text-neutral-600">
              The modern Indian Army has its origins in the military forces established by the East India Company. After the Indian Rebellion of 1857, the control of the British Indian Army came under the British Crown.
            </p>
          </div>
        </div>
      </div>
      
      {/* Independence and Partition */}
      <div className="relative flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-12 md:text-right">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary-600">1947</span>
            <h3 className="text-xl font-semibold mb-2">Independence and Partition</h3>
            <p className="text-neutral-600">
              Upon India's independence, the British Indian Army was divided between India and Pakistan. The Indian Army was officially established on August 15, 1947.
            </p>
          </div>
        </div>
        <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white transform md:translate-x-[-50%] mt-2 md:mt-0"></div>
        <div className="md:w-1/2 md:pl-12">
          <img 
            src="https://www.nam.ac.uk/sites/default/files/styles/slice_lg/public/2017-06/194278_slice.jpg.webp?itok=ez1wE8ni" 
            alt="Independence Placeholder"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      
      {/* Major Conflicts */}
      <div className="relative flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-12">
          <img 
            src="https://honourpoint.in/wp-content/uploads/indo-pak-1971-1.jpg" 
            alt="Major Conflicts Placeholder"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white transform md:translate-x-[-50%] mt-2 md:mt-0"></div>
        <div className="md:w-1/2 md:pl-12 md:text-right">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary-600">1962-1971</span>
            <h3 className="text-xl font-semibold mb-2">Major Conflicts</h3>
            <p className="text-neutral-600">
              The Indian Army engaged in several major conflicts including the Indo-China War (1962), the Indo-Pakistan Wars (1965 and 1971), which led to the creation of Bangladesh.
            </p>
          </div>
        </div>
      </div>
      
      {/* Kargil War */}
      <div className="relative flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-12 md:text-right">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary-600">1999</span>
            <h3 className="text-xl font-semibold mb-2">Kargil War</h3>
            <p className="text-neutral-600">
              The Indian Army successfully repelled Pakistani infiltrators in the high-altitude battlefield of Kargil, demonstrating exceptional courage and determination.
            </p>
          </div>
        </div>
        <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white transform md:translate-x-[-50%] mt-2 md:mt-0"></div>
        <div className="md:w-1/2 md:pl-12">
          <img 
            src="https://images.deccanchronicle.com/dc-Cover-as852rcuc84ounqfjnkbgasr64-20190707203728.Medi.jpeg" 
            alt="Kargil War Placeholder"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
      </div>
      
      {/* Present Day */}
      <div className="relative flex flex-col md:flex-row">
        <div className="md:w-1/2 md:pr-12">
          <img 
            src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/army_2_1200x768.jpeg?size=690:388" 
            alt="Present Day Placeholder"
            className="w-full h-48 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="absolute left-0 md:left-1/2 w-8 h-8 bg-primary-500 rounded-full border-4 border-white transform md:translate-x-[-50%] mt-2 md:mt-0"></div>
        <div className="md:w-1/2 md:pl-12 md:text-right">
          <div className="mb-4 md:mb-0">
            <span className="text-2xl font-bold text-primary-600">Present Day</span>
            <h3 className="text-xl font-semibold mb-2">Modern Military Force</h3>
            <p className="text-neutral-600">
              Today, the Indian Army is a well-equipped, professional military force focused on modernization, technology integration, and addressing diverse security challenges.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
        {/* Command Structure */}
        <div id="command" className="animate-section mb-16">
          <SectionTitle title="Command Structure" />
          
          <div className="bg-white p-8 rounded-lg shadow-card mb-8">
            <p className="text-lg text-neutral-700 mb-6">
              The Indian Army operates under a well-defined command structure that ensures efficient 
              operational capabilities and administrative functioning. The President of India serves 
              as the Supreme Commander of the Armed Forces, with the Chief of Army Staff (COAS) 
              providing leadership to the Army.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-semibold mb-3 text-secondary-700">Army Headquarters</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>Chief of Army Staff (COAS)</li>
                  <li>Vice Chief of Army Staff (VCOAS)</li>
                  <li>Deputy Chiefs of Army Staff</li>
                  <li>Principal Staff Officers</li>
                </ul>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-semibold mb-3 text-secondary-700">Command Structure</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>6 Operational Commands</li>
                  <li>1 Training Command</li>
                  <li>Corps (Each led by Lt. General)</li>
                  <li>Divisions (Each led by Major General)</li>
                </ul>
              </div>
              
              <div className="bg-neutral-50 p-6 rounded-lg border border-neutral-200">
                <h4 className="text-lg font-semibold mb-3 text-secondary-700">Functional Commands</h4>
                <ul className="space-y-2 text-neutral-700">
                  <li>Army Training Command (ARTRAC)</li>
                  <li>Army Aviation Corps</li>
                  <li>Army Air Defence</li>
                  <li>Corps of Engineers</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <img 
                src="https://ssbcrackexams.com/wp-content/uploads/2019/12/indian-army-commands-1024x576.jpg" 
                alt="Indian Army Command" 
                className="w-full h-85 object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4 text-secondary-800">Operational Commands</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Northern Command:</span>
                    <span className="text-neutral-600"> Headquartered at Udhampur, responsible for Kashmir and Ladakh</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Eastern Command:</span>
                    <span className="text-neutral-600"> Headquartered at Kolkata, responsible for North-East India</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Western Command:</span>
                    <span className="text-neutral-600"> Headquartered at Chandimandir, responsible for Punjab and parts of Rajasthan</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Central Command:</span>
                    <span className="text-neutral-600"> Headquartered at Lucknow, responsible for central India</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">Southern Command:</span>
                    <span className="text-neutral-600"> Headquartered at Pune, responsible for southern and parts of western India</span>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-accent-500 font-bold mr-2">•</span>
                  <div>
                    <span className="font-semibold">South Western Command:</span>
                    <span className="text-neutral-600"> Headquartered at Jaipur, responsible for parts of Rajasthan and Gujarat</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Core Values */}
        <div className="animate-section">
          <SectionTitle title="Core Values" align="center" />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaUsers className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Duty</h3>
              <p className="text-neutral-600">
                Commitment to fulfill all responsibilities with dedication, even in the face of adversity.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaMedal className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Honor</h3>
              <p className="text-neutral-600">
                Upholding the highest standards of moral and ethical conduct in all actions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaHistory className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Tradition</h3>
              <p className="text-neutral-600">
                Preserving the rich heritage and traditions that define the identity of the Indian Army.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-card text-center">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FaGlobe className="text-primary-600 text-2xl" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-secondary-800">Service</h3>
              <p className="text-neutral-600">
                Selfless dedication to the protection and welfare of the nation and its citizens.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <h3 className="text-2xl font-bold mb-4 text-secondary-800">The Indian Army's Motto</h3>
            <p className="text-xl font-semibold text-primary-600 italic">"Service Before Self"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage