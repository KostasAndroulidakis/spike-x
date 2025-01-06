import { useState, useEffect } from 'react';
import { FaBrain, FaProjectDiagram, FaStream, FaShareAlt } from "react-icons/fa";

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

interface LibraryData {
  loading: boolean;
  theme: 'light' | 'dark';
  sections: Section[];
}

const initialSections: Section[] = [
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
];

export const useLibraryData = () => {
  const [loading, setLoading] = useState(true);
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');
  const [sections, setSections] = useState<Section[]>(initialSections);

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

  // Fetch data for all sections
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

  return {
    loading,
    theme,
    sections,
    setSections
  };
};

export type { Model, Column, Section, LibraryData };