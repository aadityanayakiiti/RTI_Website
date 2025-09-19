'use client';
import { List } from 'lucide-react'; // Import an icon for the header

const Sidebar = ({ sections, activeSection, onLinkClick }) => (
    // Increased shadow and padding for a more premium feel
    <nav className="bg-white p-6 rounded-lg shadow-lg border border-gray-200/80">

      <ul className="space-y-2">
        {sections.map(section => {
          const isActive = activeSection === section.id;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(e) => { e.preventDefault(); onLinkClick(section.id); }}
                // Added a left border for a more subtle active state indicator
                className={`relative flex items-center w-full text-left px-4 py-3 rounded-md text-base font-medium transition-all duration-300 border-l-4 ${
                  isActive 
                    ? 'bg-iit-blue/10 text-iit-blue border-iit-blue' // Light blue background with a strong blue left border
                    : 'text-iit-gray-dark border-transparent hover:bg-sky-50 hover:text-iit-blue'
                }`}
              >
                {section.title}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
);

export default Sidebar;