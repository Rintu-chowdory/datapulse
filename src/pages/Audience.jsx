import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts'

const ageData = [
  { name: '18-24', value: 2400 },
  { name: '25-34', value: 3600 },
  { name: '35-44', value: 2800 },
  { name: '45-54', value: 1900 },
  { name: '55+', value: 1300 },
]

const genderData = [
  { name: 'Male', value: 6200 },
  { name: 'Female', value: 5800 },
]

const deviceData = [
  { name: 'Desktop', users: 5600, sessions: 8900 },
  { name: 'Mobile', users: 4200, sessions: 6700 },
  { name: 'Tablet', users: 1200, sessions: 2100 },
]

const COLORS = ['#8b5cf6', '#ec4899', '#06b6d4', '#f59e0b', '#10b981']

export default function Audience() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-white mb-6">Audience Demographics</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="chart-container">
          <h3 className="text-lg font-semibold text-white mb-4">Age Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={ageData}
                cx="50%"
                cy="50%"
                labelLine={true}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8b5cf6"
                dataKey="value"
              >
                {ageData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-container">
          <h3 className="text-lg font-semibold text-white mb-4">Gender Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={genderData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8b5cf6"
                dataKey="value"
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              >
                <Cell fill="#8b5cf6" />
                <Cell fill="#ec4899" />
              </Pie>
              <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="chart-container">
        <h3 className="text-lg font-semibold text-white mb-4">Device Type</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={deviceData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#2a2a2a" />
            <XAxis dataKey="name" stroke="#6b7280" />
            <YAxis stroke="#6b7280" />
            <Tooltip contentStyle={{ backgroundColor: '#1a1a1a', border: '1px solid #2a2a2a' }} />
            <Legend />
            <Bar dataKey="users" fill="#8b5cf6" />
            <Bar dataKey="sessions" fill="#06b6d4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}
