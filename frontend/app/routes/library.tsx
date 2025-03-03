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
          icon: <FaBrain className="text-4xl text-[var(--icon-blue)]" />,
          title: "Neurons",
          items: [],
          endpoint: "/api/models/neurons"
        },
        {
          icon: <FaProjectDiagram className="text-4xl text-[var(--icon-green)]" />,
          title: "Synapses",
          items: [],
          endpoint: "/api/models/synapses"
        },
        {
          icon: <FaStream className="text-4xl text-[var(--icon-purple)]" />,
          title: "Axons",
          items: [],
          endpoint: "/api/models/axons"
        },
        {
          icon: <FaShareAlt className="text-4xl text-[var(--icon-red)]" />,
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
        
        // Fetch data for each column from our API server
        for (let i = 0; i < sections[0].columns.length; i++) {
          try {
            // Connect to API server on port 3030 instead of 5173
            const response = await fetch(`http://localhost:3030${sections[0].columns[i].endpoint}`);
            if (!response.ok) {
              throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            updatedSections[0].columns[i].items = data.models || [];
          } catch (columnError) {
            console.error(`Error fetching ${sections[0].columns[i].title}:`, columnError);
            // Add mock data if API fails
            updatedSections[0].columns[i].items = mockModelsForType(sections[0].columns[i].title.toLowerCase());
          }
        }
        
        setSections(updatedSections);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        // Fallback to mock data if the API server is not running
        const updatedSections = [...sections];
        sections[0].columns.forEach((column, index) => {
          updatedSections[0].columns[index].items = mockModelsForType(column.title.toLowerCase());
        });
        setSections(updatedSections);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  // Helper function to provide mock data if API fails
  const mockModelsForType = (type: string): Model[] => {
    switch (type) {
      case 'neurons':
        return [
          { id: 'lif', name: 'Leaky Integrate-and-Fire (LIF)' },
          { id: 'izhikevich', name: 'Izhikevich' },
          { id: 'hodgkin_huxley', name: 'Hodgkin-Huxley' }
        ];
      case 'synapses':
        return [
          { id: 'static', name: 'Static Synapse' },
          { id: 'stdp', name: 'Spike-Timing-Dependent Plasticity' }
        ];
      case 'axons':
        return [
          { id: 'simple', name: 'Simple Axon' },
          { id: 'delay', name: 'Delay Axon' }
        ];
      case 'dendrites':
        return [
          { id: 'passive', name: 'Passive Dendrite' },
          { id: 'active', name: 'Active Dendrite' }
        ];
      default:
        return [];
    }
  };

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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 h-[calc(100vh-110px)]">
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