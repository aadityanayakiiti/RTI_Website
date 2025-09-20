'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileArchive, X } from 'lucide-react';

const navLinks = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/files', label: 'File Manager', icon: FileArchive },
];

export default function AdminSidebar({ isOpen, onClose }) {
    const pathname = usePathname();

    return (
        <>
            {/* Mobile Overlay - dims the background when sidebar is open */}
            <div 
                className={`fixed inset-0 bg-black/50 z-20 md:hidden ${isOpen ? 'block' : 'hidden'}`}
                onClick={onClose}
            ></div>

            {/* The Sidebar */}
            <aside 
                className={`fixed inset-y-0 left-0 w-64 bg-iit-maroon text-white flex-col z-30
                           transform transition-transform duration-300 ease-in-out
                           ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
                           md:relative md:translate-x-0 md:flex md:flex-shrink-0`}
            >
                <div className="flex items-center justify-between p-6 text-2xl font-bold border-b border-white/20">
                    <span>Admin Panel</span>
                    {/* Close button for mobile */}
                    <button onClick={onClose} className="md:hidden p-1 text-white">
                        <X size={24} />
                    </button>
                </div>
                <nav className="flex-1 p-4 space-y-2">
                    {navLinks.map((link) => {
                        const isActive = pathname.startsWith(link.href);
                        const Icon = link.icon;
                        return (
                            <Link 
                                key={link.href} 
                                href={link.href}
                                onClick={onClose} // Close sidebar on link click in mobile
                                className={`flex items-center px-4 py-3 rounded-md transition-colors ${
                                    isActive ? 'bg-white/20' : 'hover:bg-white/10'
                                }`}
                            >
                                <Icon size={20} className="mr-3" />
                                {link.label}
                            </Link>
                        );
                    })}
                </nav>
            </aside>
        </>
    );
}