import React from 'react';
import { Footprints, Flame, Droplets, Moon, TrendingUp, CheckCircle } from 'lucide-react';

export const StatCard = ({ title, value, unit, goal, icon: Icon, color, progressColor, bgLight }) => {
  const percentage = Math.min(Math.round((value / goal) * 100), 100);
  const isGoalReached = value >= goal;

  return (
    <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm hover:shadow-md transition-all duration-200">
      <div className="flex items-start justify-between mb-4">
        <div>
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <div className="flex items-baseline space-x-1.5 mt-1">
            <span className="text-3xl font-extrabold text-slate-900 tracking-tight">
              {typeof value === 'number' ? value.toLocaleString() : value}
            </span>
            <span className="text-sm font-semibold text-slate-500">{unit}</span>
          </div>
        </div>
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${bgLight} ${color}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>

      <div className="space-y-2">
        <div className="flex justify-between text-xs text-slate-500 font-medium">
          <span>Goal: {goal.toLocaleString()} {unit}</span>
          <span className={isGoalReached ? 'text-emerald-600 font-semibold flex items-center gap-1' : ''}>
            {isGoalReached && <CheckCircle className="w-3.5 h-3.5 inline" />}
            {percentage}%
          </span>
        </div>
        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
          <div
            className={`h-full rounded-full transition-all duration-500 ${progressColor}`}
            style={{ width: `${percentage}%` }}
          />
        </div>
      </div>
    </div>
  );
};
