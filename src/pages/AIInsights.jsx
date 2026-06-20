import React, { useState } from 'react'
import { Sparkles, Send, AlertCircle } from 'lucide-react'

export default function AIInsights() {
  const [messages, setMessages] = useState([])
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)

  const analyticsSnapshot = `Current analytics snapshot:
- Total visitors: 124,532 (+12.5% vs last month)
- Bounce rate: 42.3% (-3.2% vs last month)
- Avg session duration: 3m 42s (+0:18 vs last month)
- Top traffic source: Organic Search (43%)
- Top page: /pricing (8,234 views)
- Conversion rate: 3.8% (+0.4% vs last month)`

  const apiKey = localStorage.getItem('datapulse_groq_key')

  const quickQuestions = [
    'Why is bounce rate dropping?',
    "What's my best traffic source?",
    'How can I improve conversions?'
  ]

  const handleSendMessage = async (question) => {
    if (!question.trim() || !apiKey) return

    const userMessage = { role: 'user', content: question }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setLoading(true)

    try {
      const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          model: 'llama-3.3-70b-versatile',
          messages: [
            {
              role: 'system',
              content: `You are a data analytics expert. The user is asking about their website analytics. Be concise and actionable. Here is their current data:\n\n${analyticsSnapshot}`
            },
            ...messages,
            userMessage
          ],
          max_tokens: 500,
          temperature: 0.7
        })
      })

      const data = await response.json()
      if (data.choices?.[0]?.message?.content) {
        setMessages(prev => [...prev, { role: 'assistant', content: data.choices[0].message.content }])
      } else {
        console.error('API error:', data)
      }
    } catch (error) {
      console.error('Failed to get AI response:', error)
      setMessages(prev => [...prev, { role: 'assistant', content: 'Error connecting to AI service. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="h-full flex flex-col bg-black">
      {/* Header */}
      <div className="border-b border-gray-800 bg-black/50 backdrop-blur p-6">
        <div className="flex items-center gap-3 mb-2">
          <Sparkles className="w-8 h-8 text-purple-600" />
          <h2 className="text-2xl font-bold text-white">AI Insights</h2>
        </div>
        <p className="text-gray-400">Ask questions about your analytics data</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto space-y-4 p-6">
          {!apiKey && (
            <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-yellow-100 font-medium">Groq API key not configured</p>
                <p className="text-yellow-200/80 text-sm mt-1">
                  Go to <button onClick={() => setActivePage?.('settings')} className="underline hover:text-yellow-100">Settings</button> to add your Groq API key.
                </p>
              </div>
            </div>
          )}

          {messages.length === 0 && apiKey && (
            <div className="text-center py-12">
              <p className="text-gray-400">No messages yet. Ask a question to get started!</p>
            </div>
          )}

          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div
                className={`max-w-xs px-4 py-3 rounded-lg ${
                  msg.role === 'user'
                    ? 'bg-purple-600 text-white rounded-br-none'
                    : 'bg-gray-800 text-gray-100 rounded-bl-none'
                }`}
              >
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-gray-800 text-gray-100 px-4 py-3 rounded-lg rounded-bl-none">
                <div className="flex gap-2">
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-100"></div>
                  <div className="w-2 h-2 bg-gray-500 rounded-full animate-bounce delay-200"></div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Quick Questions */}
        {apiKey && messages.length === 0 && (
          <div className="px-6 pb-4">
            <p className="text-gray-400 text-sm mb-3">Try asking:</p>
            <div className="space-y-2">
              {quickQuestions.map((q, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(q)}
                  disabled={loading}
                  className="w-full text-left px-4 py-2 rounded-lg bg-gray-900/50 hover:bg-gray-900 text-gray-200 transition text-sm disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        {apiKey && (
          <div className="border-t border-gray-800 p-6 bg-black">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && !loading && handleSendMessage(input)}
                placeholder="Ask about your analytics..."
                disabled={loading}
                className="flex-1 px-4 py-2 rounded-lg bg-gray-900 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-600 disabled:opacity-50"
              />
              <button
                onClick={() => handleSendMessage(input)}
                disabled={!input.trim() || loading}
                className="px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-700 text-white transition disabled:opacity-50 flex items-center gap-2"
              >
                <Send className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
