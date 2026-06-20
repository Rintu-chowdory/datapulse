import React from 'react'
import { Calendar } from 'lucide-react'

export default function Header({ dateRange, setDateRange }) {
  const handleStartDateChange = (e) => {
    setDateRange({ ...dateRange, start: e.target.value })
  }

  const handleEndDateChange = (e) => {
    setDateRange({ ...dateRange, end: e.target.value })
  }

  return (
    <div className="bg-gray-950 border-b border-gray-800 px-6 py-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-white">Analytics Dashboard</h2>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 bg-gray-900 rounded-lg px-4 py-2 border border-gray-800">
            <Calendar className="w-4 h-4 text-purple-600" />
            <input
              type="date"
              value={dateRange.start}
              onChange={handleStartDateChange}
              className="bg-transparent text-sm text-white outline-none"
            />
          </div>
          <span className="text-gray-500">to</span>
          <div className="flex items-center gap-2 bg-gray-900 rounded-lg px-4 py-2 border border-gray-800">
            <input
              type="date"
              value={dateRange.end}
              onChange={handleEndDateChange}
              className="bg-transparent text-sm text-white outline-none"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
