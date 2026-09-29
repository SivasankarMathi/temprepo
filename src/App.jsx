import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './pages/HomePage';
import { DashboardPage } from './pages/DashboardPage';
import { AddEntryPage } from './pages/AddEntryPage';
import { HistoryPage } from './pages/HistoryPage';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col selection:bg-emerald-500 selection:text-white">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/add-entry" element={<AddEntryPage />} />
          <Route path="/history" element={<HistoryPage />} />
        </Routes>
      </main>

      <footer className="border-t border-slate-200/80 bg-white py-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 text-center text-xs text-slate-400">
          PulseTrack Health & Wellness Tracker &bull; Built with React & Tailwind CSS
        </div>
      </footer>
    </div>
  );
}

export default App;
