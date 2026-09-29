import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useHealth } from '../context/HealthContext';
import { Footprints, Flame, Droplets, Moon, Calendar, ArrowLeft, Check, AlertCircle } from 'lucide-react';

export const AddEntryPage = () => {
  const navigate = useNavigate();
  const { addEntry } = useHealth();

  const todayStr = new Date().toISOString().split('T')[0];

  const [formData, setFormData] = useState({
    date: todayStr,
    steps: '',
    calories: '',
    water: '',
    sleep: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (error) setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.date) {
      setError('Please select a valid date.');
      return;
    }

    if (
      formData.steps === '' &&
      formData.calories === '' &&
      formData.water === '' &&
      formData.sleep === ''
    ) {
      setError('Please provide at least one metric value.');
      return;
    }

    addEntry({
      date: formData.date,
      steps: formData.steps || 0,
      calories: formData.calories || 0,
      water: formData.water || 0,
      sleep: formData.sleep || 0,
    });

    // Navigate back to dashboard with updated stats as requested
    navigate('/dashboard');
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <button
        onClick={() => navigate('/dashboard')}
        className="inline-flex items-center space-x-2 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors mb-6"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>Back to Dashboard</span>
      </button>

      <div className="bg-white rounded-3xl border border-slate-200/90 shadow-sm p-6 sm:p-10">
        <div className="border-b border-slate-100 pb-6 mb-8">
          <span className="text-xs uppercase tracking-wider font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">
            Daily Record
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
            Add Health Entry
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Log your daily metrics. Submitting updates your dashboard stats and history immediately.
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 rounded-xl bg-red-50 border border-red-200 flex items-center space-x-3 text-red-700 text-sm">
            <AlertCircle className="w-5 h-5 shrink-0" />
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Picker */}
          <div>
            <label htmlFor="date" className="block text-sm font-semibold text-slate-700 mb-2">
              Entry Date
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Calendar className="w-5 h-5" />
              </div>
              <input
                type="date"
                id="date"
                name="date"
                required
                value={formData.date}
                onChange={handleChange}
                className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Steps Field */}
            <div>
              <label htmlFor="steps" className="block text-sm font-semibold text-slate-700 mb-2">
                Steps Taken
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-emerald-600">
                  <Footprints className="w-5 h-5" />
                </div>
                <input
                  type="number"
                  id="steps"
                  name="steps"
                  min="0"
                  max="100000"
                  step="1"
                  placeholder="e.g. 10450"
                  value={formData.steps}
                  onChange={handleChange}
                  className="w-full pl-11 pr-14 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:bg-white transition-all text-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-xs font-semibold text-slate-400">
                  steps
                </div>
              </div>
            </div>

            {/* Calories Field */}
            <div>
              <label htmlFor="calories" className="block text-sm font-semibold text-slate-700 mb-2">
                Calories Burned
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-orange-500">
                  <Flame className="w-5 h-5" />
                </div>
                <input
                  type="number"
                  id="calories"
                  name="calories"
                  min="0"
                  max="10000"
                  step="1"
                  placeholder="e.g. 2350"
                  value={formData.calories}
                  onChange={handleChange}
                  className="w-full pl-11 pr-14 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-orange-500 focus:bg-white transition-all text-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-xs font-semibold text-slate-400">
                  kcal
                </div>
              </div>
            </div>

            {/* Water Field */}
            <div>
              <label htmlFor="water" className="block text-sm font-semibold text-slate-700 mb-2">
                Water Intake
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-blue-500">
                  <Droplets className="w-5 h-5" />
                </div>
                <input
                  type="number"
                  id="water"
                  name="water"
                  min="0"
                  max="20"
                  step="0.1"
                  placeholder="e.g. 3.0"
                  value={formData.water}
                  onChange={handleChange}
                  className="w-full pl-11 pr-12 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all text-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-xs font-semibold text-slate-400">
                  Liters
                </div>
              </div>
            </div>

            {/* Sleep Field */}
            <div>
              <label htmlFor="sleep" className="block text-sm font-semibold text-slate-700 mb-2">
                Sleep Duration
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-indigo-500">
                  <Moon className="w-5 h-5" />
                </div>
                <input
                  type="number"
                  id="sleep"
                  name="sleep"
                  min="0"
                  max="24"
                  step="0.1"
                  placeholder="e.g. 7.5"
                  value={formData.sleep}
                  onChange={handleChange}
                  className="w-full pl-11 pr-14 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:bg-white transition-all text-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3.5 flex items-center pointer-events-none text-xs font-semibold text-slate-400">
                  hours
                </div>
              </div>
            </div>
          </div>

          {/* Form Actions */}
          <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-end gap-3">
            <button
              type="button"
              onClick={() => navigate('/dashboard')}
              className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all"
            >
              <Check className="w-4 h-4" />
              <span>Save & View Dashboard</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
