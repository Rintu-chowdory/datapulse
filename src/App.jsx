import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Overview from './pages/Overview'
import Audience from './pages/Audience'
import Acquisition from './pages/Acquisition'
import Behavior from './pages/Behavior'
import Conversions from './pages/Conversions'
import Reports from './pages/Reports'
import AIInsights from './pages/AIInsights'
import Settings from './pages/Settings'
import Datenschutz from './pages/Datenschutz'
import Header from './components/Header'

export default function App() {
  const [activePage, setActivePage] = useState('overview')
  const [dateRange, setDateRange] = useState({ start: '2024-01-01', end: '2024-12-31' })

  const renderPage = () => {
    switch (activePage) {
      case 'overview':
        return <Overview dateRange={dateRange} />
      case 'audience':
        return <Audience dateRange={dateRange} />
      case 'acquisition':
        return <Acquisition dateRange={dateRange} />
      case 'behavior':
        return <Behavior dateRange={dateRange} />
      case 'conversions':
        return <Conversions dateRange={dateRange} />
      case 'reports':
        return <Reports dateRange={dateRange} />
      case 'ai-insights':
        return <AIInsights />
      case 'settings':
        return <Settings />
      case 'datenschutz':
        return <Datenschutz />
      default:
        return <Overview dateRange={dateRange} />
    }
  }

  return (
    <div className="flex h-screen bg-black">
      <Sidebar activePage={activePage} setActivePage={setActivePage} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header dateRange={dateRange} setDateRange={setDateRange} />
        <main className="flex-1 overflow-auto">
          <div className="p-6">
            {renderPage()}
          </div>
        </main>
      </div>
    </div>
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
(#t

