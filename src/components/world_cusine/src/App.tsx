import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import WorldMap from './components/WorldMap';
import CountryDetail from './components/CountryDetail';
import CountryGrid from './components/CountryGrid';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('All');
  const [viewMode, setViewMode] = useState<'map' | 'grid'>('map');

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Routes>
          <Route path="/" element={
            <>
              <Header
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
                selectedRegion={selectedRegion}
                onRegionChange={setSelectedRegion}
              />
              <div className="container mx-auto px-4 py-8">
                <div className="flex justify-end mb-6">
                  <div className="inline-flex rounded-lg overflow-hidden">
                    <button
                      onClick={() => setViewMode('map')}
                      className={`px-4 py-2 ${viewMode === 'map' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-700 text-gray-300'}`}
                    >
                      Map View
                    </button>
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`px-4 py-2 ${viewMode === 'grid' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-gray-700 text-gray-300'}`}
                    >
                      Grid View
                    </button>
                  </div>
                </div>
                {viewMode === 'map' ? (
                  <WorldMap
                    searchQuery={searchQuery}
                    selectedRegion={selectedRegion}
                  />
                ) : (
                  <CountryGrid
                    searchQuery={searchQuery}
                    selectedRegion={selectedRegion}
                  />
                )}
              </div>
            </>
          } />
          <Route path="/country/:code" element={<CountryDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;