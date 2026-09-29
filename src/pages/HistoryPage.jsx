import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHealth } from '../context/HealthContext';
import { History as HistoryIcon, PlusCircle, Calendar, Footprints, Flame, Droplets, Moon, ArrowUpDown } from 'lucide-react';

export const HistoryPage = () => {
  const { entries } = useHealth();
  const [sortOrder, setSortOrder] = useState('desc'); // 'desc' = newest first

  const sortedEntries = [...entries].sort((a, b) => {
    const dateA = new Date(a.date).getTime();
    const dateB = new Date(b.date).getTime();
    return sortOrder === 'desc' ? dateB - dateA : dateA - dateB;
  });

  const toggleSort = () => {
    setSortOrder((prev) => (prev === 'desc' ? 'asc' : 'desc'));
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium">
            <HistoryIcon className="w-4 h-4 text-emerald-600" />
            <span>Activity Logs</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Tracking History
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Review past health records, steps walked, and calories burned.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={toggleSort}
            className="inline-flex items-center space-x-2 px-4 py-2.5 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm shadow-sm transition-colors"
          >
            <ArrowUpDown className="w-4 h-4 text-slate-400" />
            <span>Sort: {sortOrder === 'desc' ? 'Newest First' : 'Oldest First'}</span>
          </button>

          <Link
            to="/add-entry"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Entry</span>
          </Link>
        </div>
      </div>

      {/* Table Card */}
      <div className="bg-white rounded-2xl border border-slate-200/90 shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/80 border-b border-slate-200 text-xs font-bold uppercase tracking-wider text-slate-500">
                <th scope="col" className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-4 h-4 text-slate-400" />
                    <span>Date</span>
                  </div>
                </th>
                <th scope="col" className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <Footprints className="w-4 h-4 text-emerald-600" />
                    <span>Steps</span>
                  </div>
                </th>
                <th scope="col" className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <Flame className="w-4 h-4 text-orange-500" />
                    <span>Calories</span>
                  </div>
                </th>
                <th scope="col" className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <Droplets className="w-4 h-4 text-blue-500" />
                    <span>Water</span>
                  </div>
                </th>
                <th scope="col" className="py-4 px-6">
                  <div className="flex items-center space-x-2">
                    <Moon className="w-4 h-4 text-indigo-500" />
                    <span>Sleep</span>
                  </div>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 text-sm">
              {sortedEntries.length === 0 ? (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-slate-400">
                    No entries recorded yet. Click "Add Entry" to create your first log!
                  </td>
                </tr>
              ) : (
                sortedEntries.map((entry) => {
                  const dateObj = new Date(entry.date + 'T00:00:00');
                  const formattedDate = dateObj.toLocaleDateString('en-US', {
                    weekday: 'short',
                    month: 'short',
                    day: 'numeric',
                    year: 'numeric',
                  });

                  return (
                    <tr key={entry.id || entry.date} className="hover:bg-slate-50/70 transition-colors">
                      {/* Date Column */}
                      <td className="py-4 px-6 font-semibold text-slate-800 whitespace-nowrap">
                        <div className="flex items-center space-x-2.5">
                          <span className="w-2 h-2 rounded-full bg-emerald-500" />
                          <span>{formattedDate}</span>
                        </div>
                      </td>

                      {/* Steps Column */}
                      <td className="py-4 px-6 font-medium text-slate-700 whitespace-nowrap">
                        <span className="text-emerald-700 font-bold">
                          {entry.steps.toLocaleString()}
                        </span>{' '}
                        <span className="text-xs text-slate-400">steps</span>
                      </td>

                      {/* Calories Column */}
                      <td className="py-4 px-6 font-medium text-slate-700 whitespace-nowrap">
                        <span className="text-orange-600 font-bold">
                          {entry.calories.toLocaleString()}
                        </span>{' '}
                        <span className="text-xs text-slate-400">kcal</span>
                      </td>

                      {/* Water Column */}
                      <td className="py-4 px-6 font-medium text-slate-600 whitespace-nowrap">
                        <span className="text-blue-600 font-semibold">{entry.water}</span>{' '}
                        <span className="text-xs text-slate-400">L</span>
                      </td>

                      {/* Sleep Column */}
                      <td className="py-4 px-6 font-medium text-slate-600 whitespace-nowrap">
                        <span className="text-indigo-600 font-semibold">{entry.sleep}</span>{' '}
                        <span className="text-xs text-slate-400">hrs</span>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        {/* Footer info */}
        <div className="px-6 py-4 bg-slate-50/50 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
          <span>Showing {sortedEntries.length} total entries</span>
          <span>Data synced locally</span>
        </div>
      </div>
    </div>
  );
};
