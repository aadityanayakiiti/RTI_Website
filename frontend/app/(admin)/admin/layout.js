'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import AdminSidebar from '@/components/admin/AdminSidebar';
import { LogOut, Menu } from 'lucide-react';

export default function ProtectedLayout({ children }) {
    const { isAuthenticated, loading, logout } = useAuth();
    const router = useRouter();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for mobile sidebar

    useEffect(() => {
        if (!loading && !isAuthenticated) {
            router.push('/login');
        }
    }, [isAuthenticated, loading, router]);

    if (loading || !isAuthenticated) {
        return <div className="flex items-center justify-center h-screen"><div>Loading...</div></div>;
    }

    return (
        <div className="flex h-screen bg-iit-gray-light">
            {/* Pass state to the sidebar for mobile view */}
            <AdminSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

            <div className="flex-1 flex flex-col overflow-hidden">
                <header className="flex justify-between items-center p-4 bg-white shadow-md">
                    {/* Hamburger Menu Button - visible only on mobile */}
                    <button 
                        onClick={() => setIsSidebarOpen(true)}
                        className="md:hidden p-2 text-iit-gray-dark"
                    >
                        <Menu size={24} />
                    </button>
                    
                    {/* The logout button now has a div to help with positioning */}
                    <div className="flex-1 flex justify-end">
                        <button 
                            onClick={logout}
                            className="flex items-center text-iit-gray-dark hover:text-iit-maroon transition-colors"
                        >
                            <LogOut size={18} className="mr-2" />
                            Logout
                        </button>
                    </div>
                </header>
                <main className="flex-1 overflow-x-hidden overflow-y-auto p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}