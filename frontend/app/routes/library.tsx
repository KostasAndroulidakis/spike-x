import React, { useState, useEffect } from "react";
import { FaBrain, FaProjectDiagram, FaStream, FaShareAlt, FaSearch } from "react-icons/fa";
import LibraryLayout from "../components/library/LibraryLayout";

interface Model {
  id: string;
  name: string;
}

interface Column {
  icon: React.ReactNode;
  title: string;
  items: Model[];
  endpoint: string;
}

interface Section {
  title: string;
  columns: Column[];
}

export default function Library() {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [sections, setSections] = useState<Section[]>([
    {
      title: "Neural Components",
      columns: [
        {
          icon: <FaBrain className="text-4xl text-blue-500" />,
          title: "Neurons",
          items: [],
          endpoint: "/api/models/neurons"
        },
        {
          icon: <FaProjectDiagram className="text-4xl text-green-500" />,
          title: "Synapses",
          items: [],
          endpoint: "/api/models/synapses"
        },
        {
          icon: <FaStream className="text-4xl text-purple-500" />,
          title: "Axons",
          items: [],
          endpoint: "/api/models/axons"
        },
        {
          icon: <FaShareAlt className="text-4xl text-red-500" />,
          title: "Dendrites",
          items: [],
          endpoint: "/api/models/dendrites"
        }
      ]
    }
  ]);

  const [currentSection, setCurrentSection] = useState(0);
  const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({});

  // Watch for theme changes
  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === 'data-theme') {
          const newTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark';
          setTheme(newTheme || 'dark');
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    setTheme(document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'dark');

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const updatedSections = [...sections];
        
        for (let i = 0; i < sections[0].columns.length; i++) {
          const response = await fetch(`http://127.0.0.1:5173${sections[0].columns[i].endpoint}`);
          const data = await response.json();
          updatedSections[0].columns[i].items = data.models;
        }
        
        setSections(updatedSections);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (columnIndex: number, term: string) => {
    setSearchTerms(prev => ({ ...prev, [columnIndex]: term }));
  };

  const navigateSection = (direction: 'prev' | 'next') => {
    setCurrentSection(prev => {
      if (direction === 'prev') {
        return prev > 0 ? prev - 1 : sections.length - 1;
      } else {
        return prev < sections.length - 1 ? prev + 1 : 0;
      }
    });
  };

  const filteredItems = (items: Model[], columnIndex: number) => {
    const searchTerm = searchTerms[columnIndex]?.toLowerCase() || '';
    return items.filter(item => item.name.toLowerCase().includes(searchTerm));
  };

  return (
    <LibraryLayout
      theme={theme}
      currentSection={currentSection}
      totalSections={sections.length}
      onNavigateSection={navigateSection}
      onSectionSelect={setCurrentSection}
      loading={loading}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
        {sections[currentSection].columns.map((column, idx) => (
          <div 
            key={idx}
            className={`flex flex-col p-6 border rounded shadow hover:shadow-lg transition-shadow duration-300 
              bg-[var(--menu-bg)] border-[var(--nav-hover)]`}
          >
            <div className="flex items-center mb-4">
              <div className="mr-4">{column.icon}</div>
              <h2 className="text-2xl font-semibold text-[var(--text)]">{column.title}</h2>
            </div>

            <div className="relative mb-4">
              <input
                type="search"
                placeholder="Search..."
                className="w-full px-4 py-2 pr-10 rounded border focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent"
                onChange={(e) => handleSearch(idx, e.target.value)}
              />
              <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-[var(--secondary)]" />
            </div>

            <div className="flex-grow overflow-y-auto">
              <ul className="space-y-2">
                {filteredItems(column.items, idx).map((item, itemIdx) => (
                  <li 
                    key={itemIdx}
                    className="p-2 rounded cursor-pointer transition-colors duration-200 text-[var(--text)] hover:bg-[var(--menu-hover)]"
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </LibraryLayout>
  );
}