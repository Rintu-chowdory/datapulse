import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts'
import { ShoppingCart, DollarSign, Users } from 'lucide-react'

const funnelData = [
  { stage: 'Visitors', count: 24890, conversion: '100%' },
  { stage: 'Product Page', count: 18234, conversion: '73.2%' },
  { stage: 'Add to Cart', count: 8945, conversion: '35.9%' },
  { stage: 'Checkout', count: 5632, conversion: '22.6%' },
  { stage: 'Payment', count: 4128, conversion: '16.6%' },
  { stage: 'Completed', count: 3421, conversion: '13.7%' },
]

const conversionTrend = [
  { month: 'Jan', revenue: 24000, transactions: 180, rate: 8.5 },
  { month: 'Feb', revenue: 28000, transactions: 210, rate: 9.2 },
  { month: 'Mar', revenue: 32000, transactions: 245, rate: 10.1 },
  { month: 'Apr', revenue: 38000, transactions: 290, rate: 11.3 },
  { month: 'May', revenue: 42000, transactions: 320, rate: 12.4 },
  { month: 'Jun', revenue: 48000, transactions: 365, rate: 13.7 },
]

export default function Conversions() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Conversions</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="metric-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-2">Total Revenue</p>
              <p className="text-2xl font-bold text-white">$48,000</p>
              <p className="text-sm text-green-400 mt-2">+15.2% vs last month</p>
            </div>
            <DollarSign className="w-8 h-8 text-green-400" />
          </div>
        </div>
        <div className="metric-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-2">Conversion Rate</p>
              <p className="text-2xl font-bold text-white">13.7%</p>
              <p className="text-sm text-green-400 mt-2">+2.1% vs last month</p>
            </div>
            <ShoppingCart className="w-8 h-8 text-blue-400" />
          </div>
        </div>
        <div className="metric-card">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-gray-400 text-sm mb-2">Avg Order Value</p>
              <p className="text-2xl font-bold text-white">$140.29</p>
              <p className="text-sm text-green-400 mt-2">+5.8% vs last month</p>
            </div>
            <Users className="w-8 h-8 text-purple-400" />
          </div>
        </div>
      </div>

      <div className="chart-container">
        <h3 className="text-lg font-semibold text-white mb-4">Conversion Funnel</h3>
        <div className="space-y-3">
          {funnelData.map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between text-sm mb-1">
                <span className="text-gray-300">{item.stage}</span>
                <span className="text-gray-400">{item.count.toLocaleString()} ({item.conversion})</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-8 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-purple-600 to-purple-400 h-8 rounded-full flex items-center justify-end pr-3 transition-all"
                  style={{ width: `${(item.count / funnelData[0].count) * 100}%` }}
                >
                  {(item.count / funnelData[0].count) * 100 > 15 && (
                    <span className="text-white text-xs font-semibold">{((item.count / funnelData[0].count) * 100).toFixed(0)}%</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="chart-container mt-8">
        <h3 className="text-lg font-semibold text-white mb-4">Revenue & Conversion Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={conversionTrend}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis dataKey="month" stroke="#6b7280" />
            <YAxis yAxisId="left" stroke="#6b7280" />
            <YAxis yAxisId="right" orientation="right" stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="revenue" stroke="#8b5cf6" strokeWidth={2} name="Revenue ($)" />
            <Line yAxisId="right" type="monotone" dataKey="rate" stroke="#10b981" strokeWidth={2} name="Conversion Rate (%)" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
