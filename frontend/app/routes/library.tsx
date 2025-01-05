import React, { useState, useEffect } from "react";
import { FaBrain, FaProjectDiagram, FaStream, FaShareAlt, FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

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

    // Set initial theme
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

  if (loading) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
        <div className={`text-xl ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
          Loading models...
        </div>
      </div>
    );
  }

  return (
    <div className={`relative min-h-screen p-4 ${theme === 'dark' ? 'bg-black' : 'bg-white'}`}>
      <div className="max-w-screen-2xl mx-auto h-[80vh] relative">
        <button 
          onClick={() => navigateSection('prev')}
          className={`absolute left-0 top-1/2 -translate-y-1/2 -ml-12 p-4 ${
            theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <FaChevronLeft className="text-3xl" />
        </button>

        <button 
          onClick={() => navigateSection('next')}
          className={`absolute right-0 top-1/2 -translate-y-1/2 -mr-12 p-4 ${
            theme === 'dark' ? 'text-gray-400 hover:text-gray-200' : 'text-gray-600 hover:text-gray-800'
          }`}
        >
          <FaChevronRight className="text-3xl" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
          {sections[currentSection].columns.map((column, idx) => (
            <div 
              key={idx}
              className={`flex flex-col p-6 border rounded shadow hover:shadow-lg transition-shadow duration-300 ${
                theme === 'dark' 
                  ? 'bg-gray-900 border-gray-700' 
                  : 'bg-gray-50 border-gray-200'
              }`}
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">{column.icon}</div>
                <h2 className={`text-2xl font-semibold ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-800'
                }`}>{column.title}</h2>
              </div>

              <div className="relative mb-4">
                <input
                  type="search"
                  placeholder="Search..."
                  className={`w-full px-4 py-2 pr-10 rounded border focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-gray-200'
                      : 'bg-white border-gray-300 text-gray-800'
                  } placeholder-gray-500`}
                  onChange={(e) => handleSearch(idx, e.target.value)}
                />
                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500" />
              </div>

              <div className="flex-grow overflow-y-auto">
                <ul className="space-y-2">
                  {filteredItems(column.items, idx).map((item, itemIdx) => (
                    <li 
                      key={itemIdx}
                      className={`p-2 rounded cursor-pointer transition-colors duration-200 ${
                        theme === 'dark'
                          ? 'text-gray-300 hover:bg-gray-800'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2">
        {sections.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentSection(idx)}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              currentSection === idx 
                ? 'bg-blue-500' 
                : theme === 'dark' ? 'bg-gray-700' : 'bg-gray-300'
            }`}
          />
        ))}
      </div>
    </div>
  );
}