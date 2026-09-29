import React, { useState } from 'react';
import { Footprints, Flame, Droplets, Moon } from 'lucide-react';

export const WeeklyChart = ({ entries }) => {
  const [metric, setMetric] = useState('steps');

  const metricsConfig = {
    steps: {
      label: 'Steps',
      unit: 'steps',
      color: 'bg-emerald-500',
      hoverColor: 'hover:bg-emerald-600',
      goal: 10000,
      icon: Footprints,
      format: (val) => val.toLocaleString(),
    },
    calories: {
      label: 'Calories',
      unit: 'kcal',
      color: 'bg-orange-500',
      hoverColor: 'hover:bg-orange-600',
      goal: 2300,
      icon: Flame,
      format: (val) => `${val.toLocaleString()} kcal`,
    },
    water: {
      label: 'Water',
      unit: 'L',
      color: 'bg-blue-500',
      hoverColor: 'hover:bg-blue-600',
      goal: 3.0,
      icon: Droplets,
      format: (val) => `${val} L`,
    },
    sleep: {
      label: 'Sleep',
      unit: 'hrs',
      color: 'bg-indigo-500',
      hoverColor: 'hover:bg-indigo-600',
      goal: 8.0,
      icon: Moon,
      format: (val) => `${val} hrs`,
    },
  };

  const currentConfig = metricsConfig[metric];

  // Calculate maximum value to scale bar heights relative to max or goal
  const values = entries.map((e) => e[metric] || 0);
  const maxValue = Math.max(...values, currentConfig.goal, 1);

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
        <div>
          <h2 className="text-lg font-bold text-slate-900">Weekly Progress</h2>
          <p className="text-sm text-slate-500">Compare your daily performance over the past 7 days</p>
        </div>

        {/* Metric Selector Tabs */}
        <div className="inline-flex p-1 bg-slate-100 rounded-xl">
          {Object.entries(metricsConfig).map(([key, cfg]) => {
            const Icon = cfg.icon;
            const isSelected = metric === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setMetric(key)}
                className={`flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                  isSelected
                    ? 'bg-white text-slate-900 shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{cfg.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Chart Bars */}
      <div className="mt-8">
        <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 pt-8 pb-2">
          {entries.map((entry) => {
            const val = entry[metric] || 0;
            const heightPercent = Math.min(Math.round((val / maxValue) * 100), 100);
            const isGoalMet = val >= currentConfig.goal;

            return (
              <div key={entry.id || entry.date} className="flex-1 flex flex-col items-center h-full justify-end group">
                {/* Tooltip on hover */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 mb-2 pointer-events-none text-center">
                  <span className="text-[11px] font-bold bg-slate-900 text-white px-2 py-1 rounded shadow-md whitespace-nowrap">
                    {currentConfig.format(val)}
                  </span>
                </div>

                {/* Bar */}
                <div className="w-full max-w-[48px] bg-slate-100 rounded-t-xl overflow-hidden flex flex-col justify-end h-full">
                  <div
                    className={`w-full rounded-t-xl transition-all duration-500 ${currentConfig.color} ${currentConfig.hoverColor} ${
                      isGoalMet ? 'opacity-100' : 'opacity-80'
                    }`}
                    style={{ height: `${Math.max(heightPercent, 4)}%` }}
                  />
                </div>

                {/* Day label */}
                <div className="mt-3 text-center">
                  <p className="text-xs font-semibold text-slate-700">{entry.dayName || 'Day'}</p>
                  <p className="text-[10px] text-slate-400">
                    {entry.date ? entry.date.slice(5) : ''}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Chart Legend / Target indicator */}
        <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between text-xs text-slate-500 gap-2">
          <div className="flex items-center space-x-2">
            <span className={`w-3 h-3 rounded-full ${currentConfig.color}`} />
            <span>Daily Actuals</span>
          </div>
          <div>
            <span>Daily Target: </span>
            <span className="font-semibold text-slate-800">
              {currentConfig.format(currentConfig.goal)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
