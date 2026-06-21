import React from 'react'
import { Lock, FileText } from 'lucide-react'

export default function Datenschutz() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-4xl font-bold text-white mb-2">Datenschutzerklärung</h1>
        <div className="flex items-center gap-2 text-gray-400">
          <Lock className="w-5 h-5" />
          <span>Gemäß DSGVO</span>
        </div>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 space-y-4">
        <h2 className="text-xl font-bold text-white">1. Verantwortlicher</h2>
        <p className="text-gray-300">
          Verantwortlicher im Sinne der Datenschutzgesetze ist DataPulse Analytics, Berlin, Germany.
          Kontakt: <a href="mailto:info@datapulse.io" className="text-blue-400 hover:text-blue-300">info@datapulse.io</a>
        </p>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 space-y-4">
        <h2 className="text-xl font-bold text-white">2. Erhebung und Verarbeitung personenbezogener Daten</h2>
        <p className="text-gray-300">
          Wir erheben und verarbeiten personenbezogene Daten nur, soweit dies zur Bereitstellung unserer Dienste
          erforderlich ist oder Sie ausdrücklich eingewilligt haben.
        </p>
      </div>

      <div className="bg-gray-900 rounded-lg p-6 border border-gray-800 space-y-4">
        <h2 className="text-xl font-bold text-white">3. Ihre Rechte</h2>
        <p className="text-gray-300">
          Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung
          Ihrer personenbezogenen Daten. Kontaktieren Sie uns unter:
          <a href="mailto:info@datapulse.io" className="text-blue-400 hover:text-blue-300 ml-1">info@datapulse.io</a>
        </p>
      </div>

      <div className="text-gray-400 text-sm border-t border-gray-800 pt-6">
        <p>Zuletzt aktualisiert: {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}
