import { Link } from 'react-router-dom'
import Button from '../components/common/Button'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-lg">
        <h1 className="text-7xl font-bold text-primary-500 mb-4">404</h1>
        <h2 className="text-3xl font-bold text-secondary-800 mb-6">Page Not Found</h2>
        <p className="text-lg text-neutral-600 mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button variant="primary" to="/">Return Home</Button>
          <Button variant="secondary" to="/contact">Contact Us</Button>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage