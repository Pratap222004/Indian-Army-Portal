import axios from 'axios';

// const API = axios.create({ baseURL: 'http://localhost:5001/api' });
// const API = axios.create({ baseURL: 'https://indian-army-portal-4.onrender.com/api' });
// In your frontend's index.js
const API = axios.create({ 
  baseURL: process.env.NODE_ENV === 'production' 
    ? 'https://indian-army-portal-4.onrender.com/api' 
    : 'http://localhost:5001/api'
});

// Add token to headers if it exists
API.interceptors.request.use((req) => {
  const token = localStorage.getItem('token');
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

// News API
export const fetchNews = () => API.get('/news');
export const fetchNewsById = (id) => API.get(`/news/${id}`);
export const createNews = (newNews) => API.post('/news', newNews);
export const updateNews = (id, updatedNews) => API.patch(`/news/${id}`, updatedNews);
export const deleteNews = (id) => API.delete(`/news/${id}`);

// Careers API
export const fetchCareers = () => API.get('/careers');
export const fetchCareerById = (id) => API.get(`/careers/${id}`);
export const createCareer = (newCareer) => API.post('/careers', newCareer);
export const updateCareer = (id, updatedCareer) => API.patch(`/careers/${id}`, updatedCareer);
export const deleteCareer = (id) => API.delete(`/careers/${id}`);

// Auth API
export const signIn = (formData) => API.post('/auth/login', formData);
export const signUp = (formData) => API.post('/auth/register', formData);