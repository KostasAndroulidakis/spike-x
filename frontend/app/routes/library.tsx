import React, { useState } from "react";
import LibraryLayout from "../components/library/LibraryLayout";
import LibraryColumn from "../components/library/LibraryColumn";
import { useLibraryData } from "../components/library/hooks/useLibraryData";
import { useLibrarySearch } from "../components/library/hooks/useLibrarySearch";
import type { Model } from "../components/library/hooks/useLibraryData";

export default function Library() {
  const { loading, theme, sections } = useLibraryData();
  const { handleSearch, filteredItems } = useLibrarySearch();
  const [currentSection, setCurrentSection] = useState(0);

  const navigateSection = (direction: 'prev' | 'next') => {
    setCurrentSection(prev => {
      if (direction === 'prev') {
        return prev > 0 ? prev - 1 : sections.length - 1;
      } else {
        return prev < sections.length - 1 ? prev + 1 : 0;
      }
    });
  };

  const handleItemClick = (item: Model) => {
    console.log('Item clicked:', item);
    // Add your item click handling logic here
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