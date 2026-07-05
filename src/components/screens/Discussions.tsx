'use client'

import { MessageCircle, ThumbsUp, Eye, CheckCircle, AlertCircle } from "lucide-react"
import { mockDiscussions } from "@/lib/mockData"
import { useState } from "react"

export default function Discussions() {
  const [selectedTab, setSelectedTab] = useState("all")

  const filteredDiscussions = mockDiscussions.filter((d) => {
    if (selectedTab === "all") return true
    if (selectedTab === "solved") return d.solved
    if (selectedTab === "unanswered") return !d.solved
    return true
  })

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="page-title">Research Community & Discussions</h1>
        <p className="subtitle">Share questions, best practices, and troubleshooting with peers</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 border-b border-gray-200">
        {[
          { id: "all", label: "All Discussions" },
          { id: "unanswered", label: "Unanswered" },
          { id: "solved", label: "Solved" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`px-4 py-2 font-medium border-b-2 transition-colors ${
              selectedTab === tab.id
                ? "border-adi-blue text-adi-blue"
                : "border-transparent text-adi-gray-text hover:text-adi-blue"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Search & Filter */}
      <div className="card-adi flex gap-3 flex-wrap">
        <input
          type="text"
          placeholder="Search discussions..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adi-blue"
        />
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
          <option>All Products</option>
          <option>PowerLab 35</option>
          <option>PowerLab Sensors</option>
          <option>LabChart 8</option>
          <option>Lt</option>
        </select>
        <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
          <option>Any time</option>
          <option>Last 24h</option>
          <option>This week</option>
          <option>This month</option>
        </select>
        <button className="btn-adi-primary">Sort by</button>
      </div>

      {/* Thread List */}
      <div className="space-y-4">
        {filteredDiscussions.map((discussion) => (
          <div key={discussion.id} className="card-adi hover:shadow-adi-lg transition-shadow cursor-pointer">
            <div className="flex justify-between items-start mb-3">
              <div className="flex-1">
                <div className="flex gap-2 items-start">
                  <h3 className="font-semibold text-adi-blue hover:underline">{discussion.title}</h3>
                  {discussion.solved && (
                    <CheckCircle size={18} className="text-adi-green flex-shrink-0 mt-0.5" />
                  )}
                  {!discussion.solved && (
                    <AlertCircle size={18} className="text-yellow-500 flex-shrink-0 mt-0.5" />
                  )}
                </div>
                <p className="text-xs text-adi-gray-caption mt-1">
                  Posted by {discussion.author} • {discussion.timestamp}
                </p>
              </div>
              <span className="bg-adi-blue text-white px-2 py-1 rounded text-xs flex-shrink-0">{discussion.product}</span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {discussion.tags.map((tag, idx) => (
                <span key={idx} className="bg-adi-gray-light text-adi-blue px-2 py-1 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>

            {/* Metrics */}
            <div className="flex gap-6 text-sm text-adi-gray-caption">
              <span className="flex gap-1 items-center">
                <MessageCircle size={16} />
                {discussion.replies} replies
              </span>
              <span className="flex gap-1 items-center">
                <Eye size={16} />
                {discussion.views} views
              </span>
              <span className="flex gap-1 items-center">
                <ThumbsUp size={16} />
                {discussion.upvotes} upvotes
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2">
        <button className="px-3 py-2 border border-gray-300 rounded text-sm">Previous</button>
        <button className="px-3 py-2 bg-adi-blue text-white rounded text-sm">1</button>
        <button className="px-3 py-2 border border-gray-300 rounded text-sm">2</button>
        <button className="px-3 py-2 border border-gray-300 rounded text-sm">3</button>
        <button className="px-3 py-2 border border-gray-300 rounded text-sm">Next</button>
      </div>
    </div>
  )
}
