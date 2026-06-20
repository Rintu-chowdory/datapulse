import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts'
import { Eye, Clock, MousePointer } from 'lucide-react'

const pageData = [
  { page: '/home', views: 12500, avgTime: 3.2, bounceRate: 32 },
  { page: '/products', views: 8900, avgTime: 4.5, bounceRate: 28 },
  { page: '/pricing', views: 6700, avgTime: 2.8, bounceRate: 45 },
  { page: '/blog', views: 5600, avgTime: 5.1, bounceRate: 22 },
  { page: '/contact', views: 3200, avgTime: 2.1, bounceRate: 58 },
]

const timeData = [
  { page: '/home', time: 3.2 },
  { page: '/products', time: 4.5 },
  { page: '/pricing', time: 2.8 },
  { page: '/blog', time: 5.1 },
  { page: '/contact', time: 2.1 },
  { page: '/about', time: 3.8 },
  { page: '/docs', time: 4.2 },
]

export default function Behavior() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">User Behavior</h1>

      <div className="space-y-4 mb-8">
        {pageData.map((page, idx) => (
          <div key={idx} className="bg-gray-900 border border-gray-800 rounded-lg p-4 hover:border-purple-600 transition-all">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <h4 className="font-semibold text-white mb-2">{page.page}</h4>
                <div className="flex gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <Eye className="w-4 h-4 text-blue-400" />
                    <span className="text-gray-400">{page.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-green-400" />
                    <span className="text-gray-400">{page.avgTime}m avg</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MousePointer className="w-4 h-4 text-orange-400" />
                    <span className="text-gray-400">{page.bounceRate}% bounce</span>
                  </div>
                </div>
              </div>
              <div className="w-24 h-8 bg-gradient-to-r from-purple-600 to-purple-400 rounded" style={{ opacity: page.views / 12500 }}></div>
            </div>
          </div>
        ))}
      </div>

      <div className="chart-container">
        <h3 className="text-lg font-semibold text-white mb-4">Average Time on Page</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={timeData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis dataKey="page" stroke="#6b7280" angle={-45} textAnchor="end" height={100} />
            <YAxis stroke="#6b7280" label={{ value: 'Minutes', angle: -90, position: 'insideLeft' }} />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            <Bar dataKey="time" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
