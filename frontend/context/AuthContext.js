'use client';

import React, { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import api from '@/lib/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const checkLoginStatus = async () => {
            try {
                // This request will succeed if the cookie is valid, fail otherwise
                const response = await api.get('/auth/status');
                setUser(response.data.user);
            } catch (error) {
                setUser(null);
            } finally {
                setLoading(false);
            }
        };
        checkLoginStatus();
    }, []);

    const login = async (username, password) => {
        try {
            await api.post('/auth/login', { username, password });
            // After successful login, check status again to get user data
            const response = await api.get('/auth/status');
            setUser(response.data.user);
            router.push('/admin/dashboard');
        } catch (error) {
            console.error("Login failed:", error);
            throw error;
        }
    };

    const logout = async () => {
        try {
            await api.post('/auth/logout');
            setUser(null);
            router.push('/login');
        } catch (error) {
            console.error("Logout failed:", error);
            setUser(null);
            router.push('/login');
        }
    };

    const authValue = { user, isAuthenticated: !!user, loading, login, logout };

    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};