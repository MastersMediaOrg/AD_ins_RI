'use client'

import { Search, Filter, Plus } from "lucide-react"
import { mockPapers } from "@/lib/mockData"
import { useState } from "react"

export default function ResearchExplorer() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedFilters, setSelectedFilters] = useState<string[]>([])

  const filteredPapers = mockPapers.filter((paper) =>
    paper.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    paper.abstract.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="page-title">Research Explorer</h1>
        <p className="subtitle">Papers, Discussions, and Evidence</p>
      </div>

      {/* Search Bar */}
      <div className="bg-white rounded-lg shadow-adi p-4">
        <div className="flex gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 text-adi-gray-caption" size={20} />
            <input
              type="text"
              placeholder="Search papers, outcomes, discussions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adi-blue"
            />
          </div>
          <button className="btn-adi-primary flex gap-2">
            <Filter size={18} />
            Filters
          </button>
        </div>

        {/* Filter Chips */}
        <div className="flex flex-wrap gap-2 mt-4">
          {["PowerLab", "2021–2024", "Outcome: Accuracy", "Region: EU"].map((filter, idx) => (
            <span key={idx} className="bg-adi-blue text-white px-3 py-1 rounded-full text-sm flex gap-2 items-center">
              {filter}
              <button className="hover:opacity-70">✕</button>
            </span>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {/* Left Sidebar Filters */}
        <div className="card-adi md:col-span-1 h-fit">
          <h3 className="font-semibold text-adi-blue mb-4">Filters</h3>

          {/* Product */}
          <div className="mb-6">
            <h4 className="font-medium text-sm text-adi-gray-dark mb-2">Product</h4>
            <div className="space-y-2">
              {["PowerLab 35", "PowerLab Sensors", "LabChart 8", "Lt"].map((product) => (
                <label key={product} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-adi-gray-text">{product}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Study Type */}
          <div className="mb-6">
            <h4 className="font-medium text-sm text-adi-gray-dark mb-2">Study Type</h4>
            <div className="space-y-2">
              {["Clinical", "Preclinical", "Educational"].map((type) => (
                <label key={type} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-adi-gray-text">{type}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Outcome Category */}
          <div className="mb-6">
            <h4 className="font-medium text-sm text-adi-gray-dark mb-2">Outcome Category</h4>
            <div className="space-y-2">
              {["Accuracy", "Signal Stability", "Teaching Outcomes"].map((outcome) => (
                <label key={outcome} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-adi-gray-text">{outcome}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Evidence Quality */}
          <div className="mb-6">
            <h4 className="font-medium text-sm text-adi-gray-dark mb-2">Evidence Quality</h4>
            <div className="space-y-2">
              {["High", "Medium", "Low"].map((quality) => (
                <label key={quality} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="rounded" />
                  <span className="text-sm text-adi-gray-text">{quality}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Main Content - Evidence Cards */}
        <div className="md:col-span-3 space-y-4">
          {filteredPapers.map((paper) => (
            <div key={paper.id} className="card-adi hover:shadow-adi-lg transition-shadow">
              <div className="flex justify-between items-start mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-adi-blue hover:underline cursor-pointer">{paper.title}</h3>
                  <p className="text-xs text-adi-gray-caption mt-1">
                    {paper.authors} • {paper.year}
                  </p>
                </div>
                <div className="flex gap-2 ml-4">
                  <span className="bg-adi-blue text-white px-2 py-1 rounded text-xs">{paper.product}</span>
                  <span className={`px-2 py-1 rounded text-xs ${paper.quality === "High" ? "bg-adi-green text-white" : "bg-yellow-100 text-yellow-800"}`}>
                    {paper.quality}
                  </span>
                </div>
              </div>

              <p className="text-sm text-adi-gray-text mb-3 line-clamp-2">{paper.abstract}</p>

              <div className="flex flex-wrap gap-4 text-xs text-adi-gray-caption mb-3">
                <span>📊 {Math.floor(Math.random() * 100 + 20)} participants</span>
                <span>⭐ {paper.citations} citations</span>
                <span className="text-adi-green">✓ High confidence</span>
              </div>

              <div className="flex gap-2 flex-wrap">
                <button className="btn-adi-primary text-sm">Add to Report</button>
                <button className="btn-adi-secondary text-sm">View Full Paper</button>
                <button className="btn-adi-secondary text-sm">Generate Summary</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
