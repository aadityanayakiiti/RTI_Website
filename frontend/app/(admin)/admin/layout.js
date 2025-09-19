'use client';

import { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { LogOut } from 'lucide-react';

export default function ProtectedLayout({ children }) {
    const { isAuthenticated, loading, logout } = useAuth();
    const router = useRouter();

    useEffect(() => {
        // If loading is finished and user is not authenticated, redirect
        if (!loading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, loading, router]);

    // Show a loading screen while checking auth status
    if (loading) {
        return <div className="flex items-center justify-center h-screen bg-iit-gray-light"><div>Loading Admin Panel...</div></div>;
    }

    // If authenticated, render the admin dashboard layout
    if (isAuthenticated) {
        return (
            <div className="flex h-screen bg-iit-gray-light">
                <AdminSidebar />
                <div className="flex-1 flex flex-col overflow-hidden">
                    <header className="flex justify-end items-center p-4 bg-white shadow-md z-10">
                         <button 
                            onClick={logout}
                            className="flex items-center text-iit-gray-dark font-medium hover:text-iit-maroon transition-colors"
                        >
                            <LogOut size={18} className="mr-2" />
                            Logout
                        </button>
                    </header>
                    <main className="flex-1 overflow-x-hidden overflow-y-auto p-8">
                        {children}
                    </main>
                </div>
            </div>
        );
    }

    // Return null or a fallback while redirecting
    return null;
}