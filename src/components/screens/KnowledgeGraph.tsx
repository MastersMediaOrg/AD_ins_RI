'use client'

import { Download, Share2, Search } from "lucide-react"

export default function KnowledgeGraph() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="page-title">Knowledge Graph</h1>
        <p className="subtitle">Explore Product Impact, Trends, and Research Networks</p>
      </div>

      {/* Toolbar */}
      <div className="bg-white rounded-lg shadow-adi p-4 space-y-4">
        <div className="flex flex-wrap gap-3">
          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option>Spatial View</option>
            <option>Timeline View</option>
            <option>Trend Analysis</option>
          </select>

          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option>Filter by Entity</option>
            <option>Products</option>
            <option>Outcomes</option>
            <option>Institutions</option>
          </select>

          <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
            <option>Node Size: By Influence</option>
            <option>By Recency</option>
            <option>By Growth</option>
          </select>

          <button className="btn-adi-primary flex gap-2">
            <Share2 size={16} />
            Share
          </button>
          <button className="btn-adi-secondary flex gap-2">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Legend */}
        <div className="card-adi h-fit">
          <h3 className="font-semibold text-adi-blue mb-4">Graph Legend</h3>

          <div className="space-y-3 text-sm">
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-adi-blue flex-shrink-0 mt-0.5"></div>
              <div>Product</div>
            </div>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-adi-green flex-shrink-0 mt-0.5"></div>
              <div>Outcome</div>
            </div>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-yellow-400 flex-shrink-0 mt-0.5"></div>
              <div>Institution</div>
            </div>
            <div className="flex gap-2">
              <div className="w-4 h-4 rounded-full bg-purple-500 flex-shrink-0 mt-0.5"></div>
              <div>Trend</div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 space-y-2">
            <button className="btn-adi-secondary w-full text-sm">Auto-detect Clusters</button>
            <button className="btn-adi-secondary w-full text-sm">Show Growth Clusters</button>
          </div>
        </div>

        {/* Visualization Area */}
        <div className="md:col-span-3 card-adi">
          <div className="w-full h-96 bg-gradient-to-br from-adi-gray-light to-gray-100 rounded flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-4">📊</div>
              <p className="text-adi-gray-text font-medium">Knowledge Graph Visualization</p>
              <p className="text-adi-gray-caption text-sm mt-2">Interactive graph would render here using Sigma.js</p>
              <p className="text-adi-gray-caption text-sm">• 9 nodes (products, outcomes, institutions, trends)</p>
              <p className="text-adi-gray-caption text-sm">• 8 weighted edges (relationships)</p>
              <p className="text-adi-gray-caption text-sm">• Draggable & clickable nodes with details panel</p>
            </div>
          </div>

          {/* Node Details Sidebar (placeholder) */}
          <div className="mt-4 p-4 bg-adi-gray-light rounded">
            <h4 className="font-semibold text-adi-blue mb-2">Selected Node: PowerLab 35 Series</h4>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-adi-gray-caption">Papers Linked</p>
                <p className="font-semibold text-adi-blue">124 papers</p>
              </div>
              <div>
                <p className="text-adi-gray-caption">Trend Direction</p>
                <p className="font-semibold text-adi-green">↑ +12% this month</p>
              </div>
              <div className="col-span-2">
                <p className="text-adi-gray-caption">Agent Insight</p>
                <p className="text-sm mt-1">Measurement accuracy is the strongest outcome linked to PowerLab 35 in recent studies.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
