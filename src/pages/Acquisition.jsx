import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { TrendingUp } from 'lucide-react'

const trafficData = [
  { source: 'Organic', visitors: 4200, bounce: 32 },
  { source: 'Direct', visitors: 3800, bounce: 45 },
  { source: 'Social', visitors: 2900, bounce: 38 },
  { source: 'Referral', visitors: 2100, bounce: 28 },
  { source: 'Paid', visitors: 1800, bounce: 52 },
]

const trendData = [
  { name: 'Week 1', organic: 2100, direct: 1900, social: 1450, referral: 1050, paid: 900 },
  { name: 'Week 2', organic: 2300, direct: 2100, social: 1600, referral: 1200, paid: 1000 },
  { name: 'Week 3', organic: 2800, direct: 2200, social: 1800, referral: 1100, paid: 1100 },
  { name: 'Week 4', organic: 4200, direct: 3800, social: 2900, referral: 2100, paid: 1800 },
]

export default function Acquisition() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Acquisition Channels</h1>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
        {trafficData.map((item, idx) => (
          <div key={idx} className="metric-card">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-gray-400 text-sm mb-2">{item.source}</p>
                <p className="text-2xl font-bold text-white">{item.visitors.toLocaleString()}</p>
                <p className="text-xs text-red-400 mt-2">Bounce: {item.bounce}%</p>
              </div>
              <TrendingUp className="w-6 h-6 text-green-400" />
            </div>
          </div>
        ))}
      </div>

      <div className="chart-container">
        <h3 className="text-lg font-semibold text-white mb-4">Traffic Sources</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={trafficData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis dataKey="source" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            <Legend />
            <Bar dataKey="visitors" fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h3 className="text-lg font-semibold text-white mb-4">Acquisition Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={trendData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            <Legend />
            <Line type="monotone" dataKey="organic" stroke="#8b5cf6" strokeWidth={2} />
            <Line type="monotone" dataKey="direct" stroke="#ec4899" strokeWidth={2} />
            <Line type="monotone" dataKey="social" stroke="#06b6d4" strokeWidth={2} />
            <Line type="monotone" dataKey="referral" stroke="#f59e0b" strokeWidth={2} />
            <Line type="monotone" dataKey="paid" stroke="#10b981" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
