'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileArchive } from 'lucide-react';

const navLinks = [
    { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/files', label: 'File Manager', icon: FileArchive },
];

export default function AdminSidebar() {
    const pathname = usePathname();

    return (
        <aside className="w-64 bg-iit-maroon text-white flex-shrink-0 flex flex-col">
            <div className="p-6 text-2xl font-bold border-b border-white/20 text-center">
                Admin Panel
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href || (link.href !== '/admin/dashboard' && pathname.startsWith(link.href));
                    const Icon = link.icon;
                    return (
                        <Link key={link.href} href={link.href}
                            className={`flex items-center px-4 py-3 rounded-md transition-colors text-base font-medium ${
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
    );
}