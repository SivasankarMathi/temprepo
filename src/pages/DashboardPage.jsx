import React from 'react';
import { Link } from 'react-router-dom';
import { useHealth } from '../context/HealthContext';
import { StatCard } from '../components/StatCard';
import { WeeklyChart } from '../components/WeeklyChart';
import { Footprints, Flame, Droplets, Moon, PlusCircle, Calendar, Sparkles } from 'lucide-react';

export const DashboardPage = () => {
  const { todayEntry, weeklyEntries, dailyGoals } = useHealth();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      {/* Top Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="flex items-center space-x-2 text-sm text-slate-500 font-medium">
            <Calendar className="w-4 h-4 text-emerald-600" />
            <span>Today's Log: {todayEntry.date || 'Recent Entry'} ({todayEntry.dayName})</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            Health Dashboard
          </h1>
          <p className="text-sm text-slate-500 mt-1">
            Keep track of your vital daily stats and weekly targets.
          </p>
        </div>

        <div className="flex items-center space-x-3">
          <Link
            to="/add-entry"
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 hover:shadow-emerald-600/30 transition-all duration-200"
          >
            <PlusCircle className="w-4 h-4" />
            <span>Add Entry</span>
          </Link>
        </div>
      </div>

      {/* Today's Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <StatCard
          title="Steps"
          value={todayEntry.steps}
          unit="steps"
          goal={dailyGoals.steps}
          icon={Footprints}
          color="text-emerald-600"
          progressColor="bg-emerald-500"
          bgLight="bg-emerald-50"
        />

        <StatCard
          title="Calories"
          value={todayEntry.calories}
          unit="kcal"
          goal={dailyGoals.calories}
          icon={Flame}
          color="text-orange-600"
          progressColor="bg-orange-500"
          bgLight="bg-orange-50"
        />

        <StatCard
          title="Water"
          value={todayEntry.water}
          unit="L"
          goal={dailyGoals.water}
          icon={Droplets}
          color="text-blue-600"
          progressColor="bg-blue-500"
          bgLight="bg-blue-50"
        />

        <StatCard
          title="Sleep"
          value={todayEntry.sleep}
          unit="hrs"
          goal={dailyGoals.sleep}
          icon={Moon}
          color="text-indigo-600"
          progressColor="bg-indigo-500"
          bgLight="bg-indigo-50"
        />
      </div>

      {/* Weekly Progress Bar Chart */}
      <WeeklyChart entries={weeklyEntries} />

      {/* Quick Action Banner */}
      <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
            <Sparkles className="w-6 h-6 text-emerald-200" />
          </div>
          <div>
            <h3 className="text-lg font-bold">Have new metrics to record?</h3>
            <p className="text-emerald-100 text-sm mt-0.5">
              Log today's workout, meals, or sleep to update your charts in real time.
            </p>
          </div>
        </div>
        <Link
          to="/add-entry"
          className="shrink-0 inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-white text-emerald-800 font-bold text-sm shadow hover:bg-emerald-50 transition-colors"
        >
          <PlusCircle className="w-4 h-4" />
          <span>Add New Entry</span>
        </Link>
      </div>
    </div>
  );
};
