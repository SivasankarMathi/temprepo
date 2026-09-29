import React, { createContext, useContext, useState, useEffect } from 'react';
import { initialEntries, DAILY_GOALS } from '../data/mockData';

const HealthContext = createContext();

const STORAGE_KEY = 'health_tracker_entries_v1';

export const HealthProvider = ({ children }) => {
  const [entries, setEntries] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved);
      }
    } catch (e) {
      console.warn('Failed to load entries from localStorage', e);
    }
    return initialEntries;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    } catch (e) {
      console.warn('Failed to save entries to localStorage', e);
    }
  }, [entries]);

  const addEntry = (newEntryData) => {
    const entryDate = new Date(newEntryData.date + 'T00:00:00');
    const dayName = entryDate.toLocaleDateString('en-US', { weekday: 'short' });

    const newEntry = {
      id: Date.now().toString(),
      date: newEntryData.date,
      dayName,
      steps: Number(newEntryData.steps) || 0,
      calories: Number(newEntryData.calories) || 0,
      water: Number(newEntryData.water) || 0,
      sleep: Number(newEntryData.sleep) || 0,
    };

    setEntries((prev) => {
      // Check if entry for this date already exists; if so, update or replace
      const existingIdx = prev.findIndex((e) => e.date === newEntry.date);
      if (existingIdx !== -1) {
        const updated = [...prev];
        updated[existingIdx] = newEntry;
        return updated.sort((a, b) => new Date(a.date) - new Date(b.date));
      }
      return [...prev, newEntry].sort((a, b) => new Date(a.date) - new Date(b.date));
    });
  };

  // The latest entry is considered "Today's stats" (or default to fallback)
  const todayEntry = entries.length > 0 
    ? entries[entries.length - 1] 
    : {
        date: new Date().toISOString().split('T')[0],
        dayName: 'Today',
        steps: 0,
        calories: 0,
        water: 0,
        sleep: 0,
      };

  // Last 7 days for the weekly progress chart
  const weeklyEntries = entries.slice(-7);

  const resetToSample = () => {
    setEntries(initialEntries);
  };

  return (
    <HealthContext.Provider
      value={{
        entries,
        todayEntry,
        weeklyEntries,
        addEntry,
        resetToSample,
        dailyGoals: DAILY_GOALS,
      }}
    >
      {children}
    </HealthContext.Provider>
  );
};

export const useHealth = () => {
  const context = useContext(HealthContext);
  if (!context) {
    throw new Error('useHealth must be used within a HealthProvider');
  }
  return context;
};
