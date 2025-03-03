import React, { useState, useEffect } from "react";
import { FaBrain, FaProjectDiagram, FaStream, FaShareAlt } from "react-icons/fa";
import LibraryLayout from "../components/library/LibraryLayout";
import LibraryColumn from "../components/library/LibraryColumn";
import { useTheme } from "../components/theme/ThemeProvider";

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
  const { theme } = useTheme();
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

  // Theme is now managed by ThemeProvider

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

  const handleItemClick = (item: Model) => {
    console.log('Item clicked:', item);
    // Add your item click handling logic here
  };

  return (
    <LibraryLayout
      currentSection={currentSection}
      totalSections={sections.length}
      onNavigateSection={navigateSection}
      onSectionSelect={setCurrentSection}
      loading={loading}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
        {sections[currentSection].columns.map((column, idx) => (
          <LibraryColumn
            key={idx}
            icon={column.icon}
            title={column.title}
            items={column.items}
            onSearch={(term) => handleSearch(idx, term)}
            filteredItems={filteredItems(column.items, idx)}
            onItemClick={handleItemClick}
          />
        ))}
      </div>
    </LibraryLayout>
  );
}