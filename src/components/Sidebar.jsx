import React from 'react'
import { BarChart3, Users, TrendingUp, FileText, Zap, PieChart, Sparkles, Settings, Lock } from 'lucide-react'

export default function Sidebar({ activePage, setActivePage }) {
  const menuItems = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'audience', label: 'Audience', icon: Users },
    { id: 'acquisition', label: 'Acquisition', icon: TrendingUp },
    { id: 'behavior', label: 'Behavior', icon: FileText },
    { id: 'conversions', label: 'Conversions', icon: Zap },
    { id: 'reports', label: 'Reports', icon: PieChart },
    { id: 'ai-insights', label: 'AI Insights', icon: Sparkles },
  ]

  const bottomItems = [
    { id: 'settings', label: 'Settings', icon: Settings },
    { id: 'datenschutz', label: 'Datenschutz', icon: Lock },
  ]

  return (
    <div className="v-64 bg-black border-r border-gray-800 p-6 flex flex-col">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-white flex items-center gap-2">
          <BarChart3 className="w-8 h-8 text-purple-600" />
          <span>DataPulse</span>
        </h1>
      </div>

      <nav className="flex-1 space-y-2">
        {menuItems.map((item) => {
          const IconComponent = item.icon
          const isActive = activePage === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              <IconComponent className="w-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
      </nav>

      <div className="pt-6 border-t border-gray-800 space-y-2">
        {bottomItems.map((item) => {
          const IconComponent = item.icon
          const isActive = activePage === item.id
          return (
            <button
              key={item.id}
              onClick={() => setActivePage(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? 'bg-purple-600 text-white'
                  : 'text-gray-400 hover:text-white hover:bg-gray-900'
              }`}
            >
              <IconComponent className="v-5 h-5" />
              <span className="font-medium">{item.label}</span>
            </button>
          )
        })}
        <p className="text-xs text-gray-500 pt-4">© 2024 DataPulse Analytics</p>
      </div>
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
(#t

