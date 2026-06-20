import React from 'react'
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Download, Calendar, Filter } from 'lucide-react'

const reportData = [
  { name: 'Report 1: Monthly Summary', date: '2024-06-01', metrics: 12, format: 'PDF' },
  { name: 'Report 2: Q2 Performance', date: '2024-05-15', metrics: 28, format: 'Excel' },
  { name: 'Report 3: Channel Analysis', date: '2024-04-20', metrics: 15, format: 'PDF' },
  { name: 'Report 4: User Insights', date: '2024-03-10', metrics: 18, format: 'Excel' },
]

const metricsCompare = [
  { metric: 'Visitors', current: 24890, previous: 22100, target: 28000 },
  { metric: 'Conversions', current: 3421, previous: 2980, target: 4000 },
  { metric: 'Revenue', current: 48000, previous: 42000, target: 55000 },
  { metric: 'Avg Order', current: 140, previous: 132, target: 160 },
]

const distributionData = [
  { name: 'Email', value: 35 },
  { name: 'Social', value: 25 },
  { name: 'Direct', value: 20 },
  { name: 'Referral', value: 15 },
  { name: 'Paid', value: 5 },
]

const COLORS = ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981']

export default function Reports() {
  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-3xl font-bold text-white">Reports & Exports</h1>
        <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-all">
          <Download className="w-4 h-4" />
          Export Report
        </button>
      </div>

      <div className="mb-8 flex gap-4">
        <div className="flex items-center gap-2 bg-gray-900 rounded-lg px-4 py-2 border border-gray-800">
          <Calendar className="w-4 h-4 text-purple-600" />
          <select className="bg-transparent text-white outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Custom Range</option>
          </select>
        </div>
        <div className="flex items-center gap-2 bg-gray-900 rounded-lg px-4 py-2 border border-gray-800">
          <Filter className="w-4 h-4 text-purple-600" />
          <select className="bg-transparent text-white outline-none">
            <option>All Channels</option>
            <option>Organic</option>
            <option>Direct</option>
            <option>Social</option>
            <option>Paid</option>
          </select>
        </div>
      </div>

      <div className="space-y-4 mb-8">
        {reportData.map((report, idx) => (
          <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-purple-600 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-2">{report.name}</h4>
                <div className="flex gap-4 text-sm text-gray-400">
                  <span>{report.date}</span>
                  <span>{report.metrics} metrics</span>
                  <span className="text-purple-400">{report.format}</span>
                </div>
              </div>
              <button className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded text-sm transition-all">
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-white mb-4">Channel Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={distributionData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8b5cf6"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                {distributionData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3 className="text-lg font-semibold text-white mb-4">Performance vs Target</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={metricsCompare}>
              <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
              <XAxis dataKey="metric" stroke="#6b7280" angle={-45} textAnchor="end" height={80} />
              <YAxis stroke="#6b7280" />
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
              <Legend />
              <Bar dataKey="current" fill="#8b5cf6" name="Current" />
              <Bar dataKey="target" fill="#10b981" name="Target" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-container">
        <h3 className="text-lg font-semibold text-white mb-4">Performance Comparison</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-gray-800">
                <th className="text-left py-3 px-4 font-semibold text-gray-300">Metric</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">Current</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">Previous</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">Change</th>
                <th className="text-right py-3 px-4 font-semibold text-gray-300">Target</th>
              </tr>
            </thead>
            <tbody>
              {metricsCompare.map((item, idx) => (
                <tr key={idx} className="border-b border-gray-800 hover:bg-gray-800 transition-all">
                  <td className="py-3 px-4 text-white">{item.metric}</td>
                  <td className="text-right py-3 px-4 text-white font-semibold">{item.current.toLocaleString()}</td>
                  <td className="text-right py-3 px-4 text-gray-400">{item.previous.toLocaleString()}</td>
                  <td className="text-right py-3 px-4 text-green-400">+{(((item.current - item.previous) / item.previous) * 100).toFixed(1)}%</td>
                  <td className="text-right py-3 px-4 text-gray-400">{item.target.toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
