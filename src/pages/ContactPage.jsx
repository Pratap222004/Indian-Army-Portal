import { useEffect, useState } from 'react'
import { gsap } from 'gsap'
import SectionTitle from '../components/common/SectionTitle'
import Button from '../components/common/Button'
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaExclamationCircle, FaCheckCircle } from 'react-icons/fa'

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    category: 'general'
  })
  
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  
  useEffect(() => {
    // Page animation
    gsap.fromTo(
      '.page-header',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 }
    )
    
    gsap.fromTo(
      '.contact-info',
      { x: -30, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.2
      }
    )
    
    gsap.fromTo(
      '.contact-form',
      { x: 30, opacity: 0 },
      { 
        x: 0, 
        opacity: 1, 
        duration: 0.8,
        delay: 0.4
      }
    )
    
    gsap.fromTo(
      '.faq-item',
      { y: 20, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        stagger: 0.15,
        duration: 0.6,
        scrollTrigger: {
          trigger: '.faq-section',
          start: 'top 80%',
        }
      }
    )
  }, [])
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Clear error when field is updated
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null
      })
    }
  }
  
  const validate = () => {
    const newErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email format'
    }
    
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/[^0-9]/g, ''))) {
      newErrors.phone = 'Phone number should be 10 digits'
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message should be at least 10 characters'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validate()) {
      // Simulate form submission
      setTimeout(() => {
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          category: 'general'
        })
        
        // Animate success message
        gsap.fromTo(
          '.success-message',
          { y: -20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.5 }
        )
      }, 1000)
    }
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div 
        className="bg-secondary-800 text-white py-16 mb-12 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://ranger.org/wp-content/uploads/2021/01/headerimagev2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(10, 17, 40, 0.7)'
        }}
      >
        <div className="container page-header relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-neutral-200 mb-6">
              We're here to assist you. Reach out to us with your queries, 
              feedback, or concerns.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Contact Information */}
          <div className="lg:col-span-1 contact-info">
            <div className="bg-white rounded-lg shadow-card p-6 sticky top-24">
              <h2 className="text-2xl font-bold mb-6 text-secondary-800">Get in Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <FaPhone className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-secondary-800">Phone</h3>
                    <p className="text-neutral-600">+91 1100-2233-44</p>
                    <p className="text-neutral-600">+91 1100-5566-77 (Toll Free)</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <FaEnvelope className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-secondary-800">Email</h3>
                    <p className="text-neutral-600">contact@indianarmy.gov.in</p>
                    <p className="text-neutral-600">feedback@indianarmy.gov.in</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
                    <FaMapMarkerAlt className="text-primary-600 text-xl" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1 text-secondary-800">Address</h3>
                    <address className="text-neutral-600 not-italic">
                      Integrated HQ of MoD (Army)<br />
                      South Block, New Delhi<br />
                      India - 110011
                    </address>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-6 border-t border-neutral-200">
                <h3 className="text-lg font-semibold mb-4 text-secondary-800">Office Hours</h3>
                <ul className="space-y-2 text-neutral-600">
                  <li className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 5:30 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 contact-form">
            <div className="bg-white rounded-lg shadow-card p-6">
              {submitted ? (
                <div className="success-message bg-green-50 text-green-800 p-6 rounded-lg border border-green-200 text-center">
                  <FaCheckCircle className="text-green-600 text-4xl mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="mb-4">Thank you for reaching out to us. We have received your message and will respond to you shortly.</p>
                  <Button 
                    variant="primary" 
                    onClick={() => setSubmitted(false)}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-bold mb-6 text-secondary-800">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="name" className="block text-neutral-700 font-medium mb-1">Name *</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.name ? 'border-red-500 focus:ring-red-200' : 'border-neutral-300 focus:ring-primary-200'
                          }`}
                          placeholder="Your name"
                        />
                        {errors.name && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <FaExclamationCircle className="mr-1" /> {errors.name}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-neutral-700 font-medium mb-1">Email *</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.email ? 'border-red-500 focus:ring-red-200' : 'border-neutral-300 focus:ring-primary-200'
                          }`}
                          placeholder="Your email"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <FaExclamationCircle className="mr-1" /> {errors.email}
                          </p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label htmlFor="phone" className="block text-neutral-700 font-medium mb-1">Phone (Optional)</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                            errors.phone ? 'border-red-500 focus:ring-red-200' : 'border-neutral-300 focus:ring-primary-200'
                          }`}
                          placeholder="Your phone number"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1 flex items-center">
                            <FaExclamationCircle className="mr-1" /> {errors.phone}
                          </p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="category" className="block text-neutral-700 font-medium mb-1">Category</label>
                        <select
                          id="category"
                          name="category"
                          value={formData.category}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-200"
                        >
                          <option value="general">General Inquiry</option>
                          <option value="recruitment">Recruitment</option>
                          <option value="feedback">Feedback</option>
                          <option value="media">Media Inquiry</option>
                          <option value="technical">Technical Support</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="subject" className="block text-neutral-700 font-medium mb-1">Subject *</label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                          errors.subject ? 'border-red-500 focus:ring-red-200' : 'border-neutral-300 focus:ring-primary-200'
                        }`}
                        placeholder="Subject of your message"
                      />
                      {errors.subject && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <FaExclamationCircle className="mr-1" /> {errors.subject}
                        </p>
                      )}
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-neutral-700 font-medium mb-1">Message *</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${
                          errors.message ? 'border-red-500 focus:ring-red-200' : 'border-neutral-300 focus:ring-primary-200'
                        }`}
                        placeholder="Your message"
                      ></textarea>
                      {errors.message && (
                        <p className="text-red-500 text-sm mt-1 flex items-center">
                          <FaExclamationCircle className="mr-1" /> {errors.message}
                        </p>
                      )}
                    </div>
                    
                    <div className="flex justify-end">
                      <Button type="submit" variant="primary">Send Message</Button>
                    </div>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
        
        {/* FAQ Section */}
        <div className="faq-section mb-16">
          <SectionTitle title="Frequently Asked Questions" align="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="faq-item bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-secondary-800">How can I apply for a career in the Indian Army?</h3>
              <p className="text-neutral-600">
                You can apply through the official Indian Army recruitment website. Different entry 
                schemes have different application processes. Visit our Careers page for detailed information.
              </p>
            </div>
            
            <div className="faq-item bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-secondary-800">How can I check the status of my application?</h3>
              <p className="text-neutral-600">
                You can check your application status by logging into your account on the 
                recruitment portal using your registration ID and password.
              </p>
            </div>
            
            <div className="faq-item bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-secondary-800">How can I obtain various certificates from the Army?</h3>
              <p className="text-neutral-600">
                For obtaining certificates like service certificates, pension documents, etc., 
                you should contact the respective Record Office or visit the nearest Army Welfare Office.
              </p>
            </div>
            
            <div className="faq-item bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-secondary-800">How can I get information about welfare schemes?</h3>
              <p className="text-neutral-600">
                Information about welfare schemes for serving and retired personnel and their 
                families is available on our website under the Welfare section or by contacting 
                the Army Welfare Department.
              </p>
            </div>
            
            <div className="faq-item bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-secondary-800">How can I report a technical issue on the website?</h3>
              <p className="text-neutral-600">
                For technical issues related to the website, please use the Contact Form and 
                select "Technical Support" from the category dropdown menu.
              </p>
            </div>
            
            <div className="faq-item bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-secondary-800">How can media personnel get in touch for coverage?</h3>
              <p className="text-neutral-600">
                Media personnel should contact the Public Information Bureau or use the Contact Form 
                with "Media Inquiry" selected in the category dropdown.
              </p>
            </div>
          </div>
        </div>
        
        {/* Map Section */}
        <div className="bg-white rounded-lg shadow-card overflow-hidden mb-12">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-secondary-800">Visit Us</h2>
            <p className="text-neutral-600 mb-4">
              The Integrated HQ of MoD (Army) is located in South Block, New Delhi. 
              You can find us at the address provided below.
            </p>
          </div>
          <div className="h-96 w-full">
  <iframe
    title="Integrated HQ of MoD (Army) Location"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.2096339035!2d77.06889949999999!3d28.5272803!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce2f7a6d88c8d%3A0x1f3559e72823bb12!2sIntegrated%20HQ%20of%20MoD%20(Army)%2C%20South%20Block%2C%20New%20Delhi%2C%20Delhi%20110011!5e0!3m2!1sen!2sin!4v1688819439431!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
        </div>
      </div>
    </div>
  )
}

export default ContactPage