import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-iit-blue text-white">
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-lg font-bold mb-4 border-b-2 border-white/30 pb-2">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:underline opacity-80 hover:opacity-100">IIT Indore Website</Link></li>
                            <li><Link href="/rti" className="hover:underline opacity-80 hover:opacity-100">RTI Disclosures</Link></li>
                            <li><Link href="#" className="hover:underline opacity-80 hover:opacity-100">Contact Us</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t border-white/30 text-center text-sm opacity-70">
                    <p>&copy; {currentYear} Indian Institute of Technology Indore. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}