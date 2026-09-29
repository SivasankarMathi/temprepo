# PulseTrack — Health & Wellness Tracker

PulseTrack is a modern health tracker web application built with React, Tailwind CSS, Lucide icons, and React Router.

## Features

- **Home Page**: Hero section highlighting key daily wellness metrics with a prominent "Start Tracking" button leading directly to the dashboard.
- **Dashboard**: Real-time stats cards for Today's progress (Steps, Calories, Water, Sleep) with goal comparison bars, interactive weekly progress bar chart supporting metric toggle (Steps, Calories, Water, Sleep), and quick-action "Add Entry" shortcuts.
- **Add Entry Page**: Clean form to log date, steps, calories burned, water intake (Liters), and sleep duration (Hours). On submission, stores entry in state and navigates back to the dashboard with updated statistics.
- **History Page**: Tabular log of past entries with columns for Date, Steps, Calories, Water, and Sleep, plus date sorting options.
- **State Persistence**: Uses React Context with `localStorage` fallback so added entries persist across sessions.
