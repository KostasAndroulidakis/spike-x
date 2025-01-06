import { useState } from 'react';
import type { Model } from './useLibraryData';

export interface UseLibrarySearchReturn {
  searchTerms: { [key: string]: string };
  handleSearch: (columnIndex: number, term: string) => void;
  filteredItems: (items: Model[], columnIndex: number) => Model[];
}

export const useLibrarySearch = (): UseLibrarySearchReturn => {
  const [searchTerms, setSearchTerms] = useState<{ [key: string]: string }>({});

  const handleSearch = (columnIndex: number, term: string) => {
    setSearchTerms(prev => ({ ...prev, [columnIndex]: term }));
  };

  const filteredItems = (items: Model[], columnIndex: number) => {
    const searchTerm = searchTerms[columnIndex]?.toLowerCase() || '';
    return items.filter(item => item.name.toLowerCase().includes(searchTerm));
  };

  return {
    searchTerms,
    handleSearch,
    filteredItems
  };
};