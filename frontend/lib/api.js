import axios from 'axios';

// The NEXT_PUBLIC_ prefix is necessary for browser-side environment variables
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true, // This is crucial for sending/receiving HttpOnly cookies
});

export default api;