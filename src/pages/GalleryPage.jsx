import { useEffect, useState, useRef } from 'react'
import { gsap } from 'gsap'
import SectionTitle from '../components/common/SectionTitle'
import { FaImage, FaVideo, FaSearch, FaTimes } from 'react-icons/fa'

// Mock data
const categories = ["All", "Operations", "Training", "Ceremonies", "Equipment", "Historical"]

const galleryItems = [
  {
    id: 1,
    type: "image",
    title: "Republic Day Parade",
    category: "Ceremonies",
    description: "Indian Army contingent marching during the Republic Day parade in New Delhi.",
    date: "2025-01-26",
    url: "https://bsmedia.business-standard.com/_media/bs/img/article/2023-06/27/full/1687844973-2256.jpg"
  },
  {
    id: 2,
    type: "image",
    title: "Mountain Warfare Training",
    category: "Training",
    description: "Soldiers undergoing rigorous training in high-altitude mountain warfare techniques.",
    date: "2024-12-15",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8qjkH-lwcvtQ9iv5HPW7fEuQeKJrZZOaVJw&s"
  },
  {
    id: 3,
    type: "image",
    title: "Tank Exercises",
    category: "Equipment",
    description: "Army tanks participating in a military exercise in desert terrain.",
    date: "2024-11-20",
    url: "https://vid.alarabiya.net/images/2021/05/28/baa4cc45-4d18-4a61-9912-7d290ad77c1b/baa4cc45-4d18-4a61-9912-7d290ad77c1b_16x9_1200x676.jpg?width=555&format=jpg"
  },
  {
    id: 4,
    type: "image",
    title: "Passing Out Parade",
    category: "Ceremonies",
    description: "Cadets during the passing out parade at the Indian Military Academy.",
    date: "2024-12-10",
    url: "https://i.ytimg.com/vi/vL4DKOk_enA/maxresdefault.jpg"
  },
  {
    id: 5,
    type: "image",
    title: "Counter-Terrorism Operation",
    category: "Operations",
    description: "Soldiers conducting a counter-terrorism operation in an urban setting.",
    date: "2024-10-05",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCf7mxCuLGJQETelP9pjEaeZ_LXoD9b-oFeA&s"
  },
  {
    id: 6,
    type: "image",
    title: "Artillery Demonstration",
    category: "Equipment",
    description: "Artillery units demonstrating firepower during an Army exhibition.",
    date: "2024-09-18",
    url: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/ANA_Artillery_Demonstration_%285050655391%29.jpg/1200px-ANA_Artillery_Demonstration_%285050655391%29.jpg"
  },
  {
    id: 7,
    type: "image",
    title: "Parachute Regiment Training",
    category: "Training",
    description: "Paratroopers during a training jump exercise.",
    date: "2024-11-05",
    url: "https://ssbcrackexams.com/wp-content/uploads/2020/08/Parachute-Regiment-Soldiers-Training.jpg"
  },
  {
    id: 8,
    type: "image",
    title: "Vintage Military Equipment",
    category: "Historical",
    description: "Display of vintage military equipment at the Army Museum.",
    date: "2024-08-15",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8GSiFTOjf5PWdQ3hqYQpdXm2skfrIh5_h0A&s"
  },
  {
    id: 9,
    type: "image",
    title: "Humanitarian Aid Mission",
    category: "Operations",
    description: "Army personnel providing humanitarian aid during a natural disaster.",
    date: "2024-07-22",
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuKCR0zp8Q_bjAt1azhN3yjRJFnBtzmFIyfg&s"
  },
  {
    id: 10,
    type: "image",
    title: "Army Day Celebration",
    category: "Ceremonies",
    description: "Soldiers participating in the Army Day celebration.",
    date: "2025-01-15",
    url: "https://img.jagranjosh.com/images/2023/January/1512023/indian-army-day-history.webp"
  },
  {
    id: 11,
    type: "image",
    title: "Combat Training",
    category: "Training",
    description: "Soldiers engaging in combat training exercises.",
    date: "2024-10-12",
    url: "https://imrmedia.in/wp-content/uploads/2020/08/25-Indian-Army-recruits-undergoing-obstacle-course-training.jpg"
  },
  {
    id: 12,
    type: "image",
    title: "Indo-China War Memorial",
    category: "Historical",
    description: "Memorial dedicated to the soldiers who fought in the Indo-China War.",
    date: "2024-10-20",
    url: "https://media-cdn.tripadvisor.com/media/photo-s/07/c4/13/62/tawang-war-memorial.jpg"
  }
]

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredItems, setFilteredItems] = useState(galleryItems)
  const [selectedItem, setSelectedItem] = useState(null)
  
  const lightboxRef = useRef(null)
  
  useEffect(() => {
    // Filter gallery items based on category and search term
    let filtered = galleryItems
    
    if (activeCategory !== "All") {
      filtered = filtered.filter(item => item.category === activeCategory)
    }
    
    if (searchTerm) {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        item => 
          item.title.toLowerCase().includes(term) || 
          item.description.toLowerCase().includes(term) ||
          item.category.toLowerCase().includes(term)
      )
    }
    
    setFilteredItems(filtered)
    
    // Animate gallery items
    gsap.fromTo(
      '.gallery-item',
      { scale: 0.9, opacity: 0 },
      { 
        scale: 1, 
        opacity: 1, 
        stagger: 0.05,
        duration: 0.4,
        ease: "power1.out",
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
  }, [])
  
  useEffect(() => {
    // Lightbox animation
    if (selectedItem) {
      document.body.style.overflow = 'hidden'
      gsap.fromTo(
        lightboxRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3 }
      )
    } else {
      document.body.style.overflow = ''
    }
    
    return () => {
      document.body.style.overflow = ''
    }
  }, [selectedItem])
  
  const openLightbox = (item) => {
    setSelectedItem(item)
  }
  
  const closeLightbox = () => {
    gsap.to(
      lightboxRef.current,
      { 
        opacity: 0, 
        duration: 0.3,
        onComplete: () => setSelectedItem(null)
      }
    )
  }

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div 
        className="bg-secondary-800 text-white py-16 mb-12 relative overflow-hidden"
        style={{
          backgroundImage: 'url(https://images.pexels.com/photos/264146/pexels-photo-264146.jpeg?cs=srgb&dl=pexels-pixabay-264146.jpg&fm=jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundBlendMode: 'overlay',
          backgroundColor: 'rgba(10, 17, 40, 0.7)'
        }}
      >
        <div className="container page-header relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-neutral-200 mb-6">
              Explore the visual journey of the Indian Army through our collection of 
              images and videos showcasing operations, training, ceremonies, and more.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container">
        {/* Search and Filter */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
            <div className="w-full md:w-1/3">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search gallery..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 pr-10 border border-neutral-300 rounded-lg focus:outline-none focus:border-primary-500"
                />
                <FaSearch className="absolute right-3 top-3 text-neutral-400" />
              </div>
            </div>
            
            <div className="filter-pills flex flex-wrap gap-2">
              {categories.map(category => (
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
          </div>
        </div>
        
        {/* Gallery Grid */}
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {filteredItems.map(item => (
              <div 
                key={item.id}
                className="gallery-item overflow-hidden rounded-lg shadow-card cursor-pointer relative group"
                onClick={() => openLightbox(item)}
              >
                <img 
                  src={item.url} 
                  alt={item.title}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                  <div className="text-white">
                    <div className="flex items-center mb-2">
                      {item.type === "image" ? (
                        <FaImage className="mr-2" />
                      ) : (
                        <FaVideo className="mr-2" />
                      )}
                      <span className="text-sm">{item.category}</span>
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-10 bg-neutral-50 rounded-lg">
            <h3 className="text-xl font-semibold mb-2">No items found</h3>
            <p className="text-neutral-600">
              Try changing your search term or filter criteria.
            </p>
          </div>
        )}
      </div>
      
      {/* Lightbox */}
      {selectedItem && (
        <div 
          ref={lightboxRef}
          className="fixed inset-0 bg-secondary-900/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="max-w-5xl w-full bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative">
              <img 
                src={selectedItem.url}
                alt={selectedItem.title}
                className="w-full"
              />
              <button 
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-secondary-800 rounded-full p-2 transition-colors"
                onClick={closeLightbox}
                aria-label="Close"
              >
                <FaTimes size={20} />
              </button>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-semibold text-secondary-800">{selectedItem.title}</h3>
                <span className="text-sm px-2 py-1 bg-primary-100 text-primary-700 rounded-full">
                  {selectedItem.category}
                </span>
              </div>
              <p className="text-neutral-600 mb-2">{selectedItem.description}</p>
              <p className="text-sm text-neutral-500">{new Date(selectedItem.date).toLocaleDateString()}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default GalleryPage