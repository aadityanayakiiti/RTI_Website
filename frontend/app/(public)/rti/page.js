'use client';

import { useState, useEffect, useRef } from 'react';
import { Menu, X } from 'lucide-react';
import Sidebar from '@/components/rti/Sidebar';
import RtiTable from '@/components/rti/RtiTable';
import api from '@/lib/api'; // <-- Import our central API service

export default function RtiPage() {
  const [rtiData, setRtiData] = useState(null);
  const [error, setError] = useState(null); // <-- Add state for handling errors
  const [activeSection, setActiveSection] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const sectionRefs = useRef({});
  
  // --- UPDATED useEffect to fetch from the API ---
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get('/rti'); // Fetch data from the backend
        setRtiData(response.data);
        if (response.data && response.data.sections.length > 0) {
          setActiveSection(response.data.sections[0].id);
        }
      } catch (err) {
        console.error("Failed to fetch RTI data:", err);
        setError("Could not load RTI data. Please try again later.");
      }
    };

    fetchData();
  }, []);

  // The rest of the component remains the same...

  useEffect(() => {
    if (!rtiData) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -75% 0px' }
    );
    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });
    return () => observer.disconnect();
  }, [rtiData]);

  const handleLinkClick = (id) => {
      const element = document.getElementById(id);
      if (element) {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
      }
      setIsMobileMenuOpen(false);
  };
  
  // --- ADDED LOADING AND ERROR STATES FOR BETTER UX ---
  if (error) {
    return <div className="text-center p-10 text-red-500 font-semibold">{error}</div>;
  }
  
  if (!rtiData) {
    return <div className="text-center p-10">Loading RTI Information...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* ... the rest of the JSX is unchanged ... */}
      <header className="mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-iit-gray-dark border-b-2 border-gray-200 pb-4 text-center md:text-left">
            {rtiData.title}
        </h1>
      </header>

      <div className="lg:hidden mb-4">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex items-center px-4 py-2 border rounded-md text-iit-gray-dark bg-white shadow-sm hover:bg-iit-gray-light w-full justify-center"
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          <span className="ml-2 font-medium">Sections</span>
        </button>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-8">
        <aside className={`w-full lg:w-1/4 lg:sticky top-24 self-start transition-all duration-300 ${isMobileMenuOpen ? 'block' : 'hidden'} lg:block`}>
          <Sidebar sections={rtiData.sections} activeSection={activeSection} onLinkClick={handleLinkClick} />
        </aside>

        <main className="w-full lg:w-3/4 space-y-12 mt-8 lg:mt-0">
          {rtiData.sections.map(section => (
            <section
              key={section.id}
              id={section.id}
              ref={el => (sectionRefs.current[section.id] = el)}
              className="scroll-mt-24"
            >
              <div className="space-y-6">
                {section.content.map((subSection) => (
                   <RtiTable key={subSection.serialNumber} subSection={subSection} />
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}