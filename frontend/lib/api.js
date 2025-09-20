import axios from "axios";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

const api = axios.create({
  baseURL: API_URL,
  withCredentials: true,
});

// --- UPDATED: A smarter response interceptor ---
api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    // --- ADDED THIS CHECK ---
    // Get the original request configuration
    const originalRequest = error.config;

    // This is the crucial part: We check if the failed request was for the auth status endpoint.
    // The `_retry` flag is a common pattern to prevent retrying a request that has already failed.
    // We also check if the error is a 401/403.
    if (error.response?.status === 401 || error.response?.status === 403) {
      // If the failed request was NOT the status check, it means an active session has expired.
      // In this case, we should redirect to login.
      if (!originalRequest.url.endsWith("/auth/status")) {
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
    }
    // For all other errors, including the initial failed status check,
    // just pass the error along so the component's `catch` block can handle it.
    return Promise.reject(error);
  }
);

export default api;
