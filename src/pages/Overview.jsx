import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { TrendingUp, Users, ShoppingCart, Eye } from 'lucide-react'

const data = [
  { name: 'Jan', visitors: 4000, pageviews: 2400, conversions: 240, revenue: 2400 },
  { name: 'Feb', visitors: 3000, pageviews: 1398, conversions: 221, revenue: 2210 },
  { name: 'Mar', visitors: 2000, pageviews: 9800, conversions: 229, revenue: 2290 },
  { name: 'Apr', visitors: 2780, pageviews: 3908, conversions: 200, revenue: 2000 },
  { name: 'May', visitors: 1890, pageviews: 4800, conversions: 221, revenue: 2100 },
  { name: 'Jun', visitors: 2390, pageviews: 3800, conversions: 250, revenue: 2500 },
  { name: 'Jul', visitors: 3490, pageviews: 4300, conversions: 210, revenue: 2100 },
]

export default function Overview() {
  const metrics = [
    { label: 'Total Visitors', value: '24,890', change: '+12.5%', icon: Users, color: 'text-blue-400' },
    { label: 'Page Views', value: '156,290', change: '+8.2%', icon: Eye, color: 'text-green-400' },
    { label: 'Conversions', value: '1,632', change: '+23.1%', icon: ShoppingCart, color: 'text-purple-400' },
    { label: 'Avg Revenue', value: '$2,245', change: '+5.4%', icon: TrendingUp, color: 'text-orange-400' },
  ]

  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon
          return (
            <div key={idx} className="metric-card">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-gray-400 text-sm mb-2">{metric.label}</p>
                  <p className="text-2xl font-bold text-white">{metric.value}</p>
                  <p className="text-sm text-green-400 mt-2">{metric.change}</p>
                </div>
                <Icon className={`w-8 h-8 ${metric.color}`} />
              </div>
            </div>
          )
        })}
      </div>

      <div className="chart-container">
        <h3 className="text-lg font-semibold text-white mb-4">Visitors & Conversions Trend</h3>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip
              contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }}
              labelStyle={{ color: '#fff' }}
            />
            <Legend />
            <Line type="monotone" dataKey="visitors" stroke="#8b5cf6" strokeWidth={2} dot={{ fill: '#8b5cf6' }} />
            <Line type="monotone" dataKey="conversions" stroke="#10b981" strokeWidth={2} dot={{ fill: '#10b981' }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
