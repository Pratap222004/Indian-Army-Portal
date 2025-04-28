import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
// In src/pages/SuccessPage.jsx
import Button from '../components/common/Button'  // Verify this path is correct

const SuccessPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { message } = location.state || {};

  useEffect(() => {
    if (!message) {
      navigate('/');
    }
  }, [message, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
        <div className="text-green-500 text-5xl mb-4">✓</div>
        <h1 className="text-2xl font-bold mb-4">Success!</h1>
        <p className="mb-6">{message}</p>
        <Button 
          variant="primary" 
          onClick={() => navigate('/')}
          className="w-full"
        >
          Go to Home
        </Button>
      </div>
    </div>
  );
};

export default SuccessPage;