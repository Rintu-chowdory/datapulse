import React, { useState, useEffect } from 'react'
import { Eye, EyeOff, Save, Trash2, ExternalLink } from 'lucide-react'

export default function Settings() {
  const [groqKey, setGroqKey] = useState('')
  const [showKey, setShowKey] = useState(false)
  const [saved, setSaved] = useState(false)

  useEffect(() => {
    const stored = localStorage.getItem('datapulse_groq_key')
    if (stored) setGroqKey(stored)
  }, [])

  const handleSave = () => {
    if (groqKey.trim()) {
      localStorage.setItem('datapulse_groq_key', groqKey)
      setSaved(true)
      setTimeout(() => setSaved(false), 2000)
    }
  }

  const handleRemove = () => {
    setGroqKey('')
    localStorage.removeItem('datapulse_groq_key')
    setSaved(true)
    setTimeout(() => setSaved(false), 2000)
  }

  return (
    <div className="h-full flex flex-col bg-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/50 backdrop-blur p-6">
        <h2 className="text-2xl font-bold text-white">Settings</h2>
        <p className="text-gray-400 mt-2">Configure your DataPulse integrations</p>
      </div>

      {/* Settings */}
      <div className="flex-1 overflow-y-auto p-6">
        {saved && (
          <div className="mb-6 p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-green-100 text-sm">
            ✓ Settings saved
          </div>
        )}

        {/* Groq API Key Section */}
        <div className="bg-gray-900 border border-gray-800 rounded-lg p-6 max-w-md">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-xl font-semibold text-white">Groq API Key</h3>
              <p className="text-gray-400 text-sm mt-1">Used for AI Insights analytics queries</p>
            </div>
            <a
              href="https://console.groq.com/keys"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white transition text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              Get Key
            </a>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <input
                type={showKey ? 'text' : 'password'}
                value={groqKey}
                onChange={(e) => setGroqKey(e.target.value)}
                placeholder="gsk_..."
                className="w-full px-4 py-2 pr-10 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-600"
              />
              <button
                onClick={() => setShowKey(!showKey)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition"
              >
                {showKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              </button>
            </div>

            <div className="flex gap-2">
              <button
                onClick={handleSave}
                disabled={!groqKey.trim()}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Save className="w-4 h-4" />
                Save Key
              </button>
              {groqKey && (
                <button
                  onClick={handleRemove}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-600/20 hover:bg-red-600/30 text-red-400 hover:text-red-300 transition"
                >
                  <Trash2 className="w-4 h-4" />
                  Remove
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
