import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Flame, Droplets, Moon, Footprints, ShieldCheck, Zap, Award } from 'lucide-react';

export const HomePage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-tr from-emerald-200/40 via-teal-100/30 to-blue-200/40 blur-3xl -z-10 rounded-full" />

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 lg:pt-28 lg:pb-24 text-center">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-8">
          <Zap className="w-3.5 h-3.5" />
          <span>Intelligent Daily Health Monitoring</span>
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
          Take charge of your health,{' '}
          <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
            one day at a time.
          </span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-slate-600 leading-relaxed">
          Log your steps, monitor calories burned, track daily hydration, and master your sleep cycles with our clean, intuitive dashboard.
        </p>

        {/* Start Tracking Button */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/dashboard"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2.5 px-8 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-lg shadow-emerald-600/30 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <span>Start Tracking</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
          <Link
            to="/history"
            className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-base border border-slate-200 shadow-sm transition-all"
          >
            <span>View Past Records</span>
          </Link>
        </div>

        {/* Metric Badges */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
              <Footprints className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-slate-400 uppercase">Steps</p>
              <p className="text-sm font-bold text-slate-800">10,000 / day</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
              <Flame className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-slate-400 uppercase">Calories</p>
              <p className="text-sm font-bold text-slate-800">2,300 kcal</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
              <Droplets className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-slate-400 uppercase">Hydration</p>
              <p className="text-sm font-bold text-slate-800">3.0 Liters</p>
            </div>
          </div>

          <div className="bg-white/90 backdrop-blur p-5 rounded-2xl border border-slate-200/80 shadow-sm flex items-center space-x-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center shrink-0">
              <Moon className="w-5 h-5" />
            </div>
            <div className="text-left">
              <p className="text-xs font-semibold text-slate-400 uppercase">Rest</p>
              <p className="text-sm font-bold text-slate-800">8.0 Hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="bg-white py-16 border-t border-slate-200/70">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">Why Track With PulseTrack?</h2>
            <p className="mt-3 text-slate-500">Everything you need to stay accountable and reach your personal best.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                <Activity className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Live Daily Stats</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear summary cards showing your current progress against daily wellness benchmarks.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 text-teal-600 flex items-center justify-center mb-4">
                <Award className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Weekly Trends</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Interactive bar visualization comparing steps, calories, hydration, and sleep over the past week.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-600 flex items-center justify-center mb-4">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Log History</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Complete historical record of all your daily activities with instant data entry capabilities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
