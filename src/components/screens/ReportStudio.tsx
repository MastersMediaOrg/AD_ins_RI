'use client'

import { Save, Download, Share2, Plus, Sparkles } from "lucide-react"
import { useState } from "react"

export default function ReportStudio() {
  const [reportTitle, setReportTitle] = useState("Untitled Report")
  const [template, setTemplate] = useState("imrad")

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="page-title">Report Studio</h1>
        <p className="subtitle">Create publication-ready reports with AI assistance</p>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Left Panel - Meta */}
        <div className="card-adi h-fit">
          <h3 className="font-semibold text-adi-blue mb-4">Report Settings</h3>

          <div className="space-y-4">
            <div>
              <label className="block text-xs text-adi-gray-caption mb-2">Report Title</label>
              <input
                type="text"
                value={reportTitle}
                onChange={(e) => setReportTitle(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-adi-blue"
              />
            </div>

            <div>
              <label className="block text-xs text-adi-gray-caption mb-2">Template</label>
              <select
                value={template}
                onChange={(e) => setTemplate(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-adi-blue"
              >
                <option value="imrad">IMRAD Paper</option>
                <option value="brief">Brief Summary</option>
                <option value="case">Case Study</option>
                <option value="whitepaper">Whitepaper</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-adi-gray-caption mb-2">Citation Style</label>
              <select className="w-full px-3 py-2 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-adi-blue">
                <option>APA</option>
                <option>IEEE</option>
                <option>Harvard</option>
              </select>
            </div>

            <div>
              <label className="block text-xs text-adi-gray-caption mb-2">Status</label>
              <span className="text-sm font-medium text-yellow-600">Draft</span>
            </div>

            <div className="pt-4 border-t border-gray-200 space-y-2">
              <button className="btn-adi-primary w-full flex gap-2 justify-center text-sm">
                <Save size={16} />
                Save Draft
              </button>
              <button className="btn-adi-secondary w-full flex gap-2 justify-center text-sm">
                <Download size={16} />
                Export
              </button>
            </div>
          </div>
        </div>

        {/* Main Canvas */}
        <div className="md:col-span-2 card-adi">
          <div className="space-y-6 max-h-96 overflow-y-auto">
            {/* Title */}
            <div>
              <input
                type="text"
                defaultValue={reportTitle}
                className="w-full text-2xl font-bold text-adi-blue focus:outline-none focus:bg-adi-gray-light p-2"
              />
            </div>

            {/* Abstract */}
            <div>
              <h4 className="font-semibold text-adi-blue mb-2">Abstract</h4>
              <textarea
                placeholder="Enter abstract here or use AI to generate..."
                className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-adi-blue"
                rows={3}
              />
              <button className="btn-adi-secondary text-sm mt-2 flex gap-1">
                <Sparkles size={14} />
                Generate with AI
              </button>
            </div>

            {/* Introduction */}
            <div>
              <h4 className="font-semibold text-adi-blue mb-2">Introduction</h4>
              <textarea
                placeholder="Drag in papers or write your introduction..."
                className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-adi-blue"
                rows={3}
              />
            </div>

            {/* Methods */}
            <div>
              <h4 className="font-semibold text-adi-blue mb-2">Methods</h4>
              <textarea
                placeholder="Describe methodology..."
                className="w-full p-3 border border-gray-300 rounded text-sm focus:outline-none focus:ring-2 focus:ring-adi-blue"
                rows={3}
              />
            </div>

            {/* Results */}
            <div>
              <h4 className="font-semibold text-adi-blue mb-2">Results</h4>
              <div className="p-4 border-2 border-dashed border-adi-blue rounded bg-blue-50 text-center">
                <p className="text-sm text-adi-gray-text">Drag charts here from Impact Dashboard</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Panel - Component Library */}
        <div className="space-y-4">
          {/* Charts Tab */}
          <div className="card-adi">
            <h4 className="font-semibold text-adi-blue mb-3">Charts</h4>
            <div className="space-y-2">
              {["Outcome Distribution", "Publication Timeline", "Impact Metrics", "Geographic Heatmap"].map((chart, idx) => (
                <div
                  key={idx}
                  draggable
                  className="p-2 bg-adi-gray-light rounded cursor-move hover:bg-gray-300 text-sm text-adi-gray-dark"
                >
                  📊 {chart}
                </div>
              ))}
            </div>
          </div>

          {/* Papers Tab */}
          <div className="card-adi">
            <h4 className="font-semibold text-adi-blue mb-3">Papers</h4>
            <div className="space-y-2 max-h-48 overflow-y-auto">
              {["PowerLab 35 clinical trials", "Signal accuracy study", "Remote monitoring advances"].map((paper, idx) => (
                <div key={idx} draggable className="p-2 bg-adi-gray-light rounded cursor-move hover:bg-gray-300 text-xs text-adi-gray-dark line-clamp-2">
                  📄 {paper}
                </div>
              ))}
            </div>
          </div>

          {/* Text Suggestions */}
          <div className="card-adi">
            <h4 className="font-semibold text-adi-blue mb-3 flex gap-2">
              <Sparkles size={16} />
              AI Suggestions
            </h4>
            <div className="space-y-2">
              <button className="btn-adi-secondary w-full text-xs">Generate Abstract</button>
              <button className="btn-adi-secondary w-full text-xs">Generate Discussion</button>
              <button className="btn-adi-secondary w-full text-xs">Generate Conclusion</button>
            </div>
          </div>
        </div>
      </div>

      {/* Export Options */}
      <div className="card-adi flex gap-4">
        <button className="btn-adi-primary flex gap-2">
          <Download size={18} />
          Export as PDF
        </button>
        <button className="btn-adi-primary flex gap-2">
          <Download size={18} />
          Export as DOCX
        </button>
        <button className="btn-adi-primary flex gap-2">
          <Download size={18} />
          Export as PPTX
        </button>
        <button className="btn-adi-secondary flex gap-2 ml-auto">
          <Share2 size={18} />
          Share Report Link
        </button>
      </div>
    </div>
  )
}
