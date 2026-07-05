'use client'

import Link from "next/link"
import { TrendingUp, Users, Zap } from "lucide-react"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { mockImpactMetrics, mockPapers, mockTrendingTopics, mockTimelineData, mockOutcomeDistribution } from "@/lib/mockData"

export default function Dashboard() {
  return (
    <div className="space-y-8">
      {/* Page Header */}
      <div className="space-y-2">
        <h1 className="page-title">Dashboard — Research Intelligence</h1>
        <p className="subtitle">Overview of product impact, research activity, and emerging trends</p>
      </div>

      {/* Product Selector */}
      <div className="bg-white rounded-lg shadow-adi p-4 border-l-4 border-adi-blue">
        <label className="block text-sm font-medium text-adi-gray-text mb-2">Select Product</label>
        <select className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-adi-blue">
          <option>PowerLab 35 Series</option>
          <option>PowerLab Sensors</option>
          <option>LabChart 8</option>
          <option>Lt</option>
          <option>Lt LabStation</option>
        </select>
      </div>

      {/* Hero Summary Panel */}
      <div className="bg-gradient-to-r from-adi-blue to-blue-600 rounded-lg shadow-adi-lg p-8 text-white">
        <div className="flex justify-between items-start">
          <div>
            <h2 className="text-3xl font-bold mb-6">PowerLab 35 Series</h2>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-4xl font-bold mb-2">124</p>
                <p className="text-blue-100">Papers Ingested</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">18</p>
                <p className="text-blue-100">Active Discussions</p>
              </div>
              <div>
                <p className="text-4xl font-bold mb-2">7</p>
                <p className="text-blue-100">Clinical Deployments</p>
              </div>
            </div>
          </div>
          <div className="flex gap-3">
            <Link href="/explorer" className="btn-adi-primary bg-white text-adi-blue">
              Explore Papers
            </Link>
            <Link href="/knowledge-graph" className="btn-adi-primary border border-white bg-transparent">
              View Knowledge Graph
            </Link>
            <Link href="/reports" className="btn-adi-primary border border-white bg-transparent">
              Generate Report
            </Link>
          </div>
        </div>
      </div>

      {/* Three-Section Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Recent Papers */}
        <div className="card-adi">
          <h3 className="section-title">Recent Papers</h3>
          <div className="space-y-3">
            {mockPapers.slice(0, 3).map((paper) => (
              <div key={paper.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                <p className="font-medium text-sm text-adi-blue line-clamp-2 hover:underline cursor-pointer">
                  {paper.title}
                </p>
                <p className="text-xs text-adi-gray-caption mt-1">{paper.year}</p>
              </div>
            ))}
          </div>
          <Link href="/explorer" className="btn-adi-secondary w-full mt-4">
            View All Papers
          </Link>
        </div>

        {/* Trending Topics */}
        <div className="card-adi">
          <h3 className="section-title">Trending Topics</h3>
          <div className="space-y-3">
            {mockTrendingTopics.map((topic, idx) => (
              <div key={idx} className="flex justify-between items-start">
                <div>
                  <p className="font-medium text-sm text-adi-gray-dark">{topic.topic}</p>
                  <p className="text-xs text-adi-gray-caption">{topic.papers} papers</p>
                </div>
                <span className="text-xs bg-adi-green text-white px-2 py-1 rounded">{topic.trend}</span>
              </div>
            ))}
          </div>
          <Link href="/knowledge-graph" className="btn-adi-secondary w-full mt-4">
            Explore in Knowledge Graph
          </Link>
        </div>

        {/* Impact Snapshot */}
        <div className="card-adi">
          <h3 className="section-title">Impact Snapshot</h3>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockTimelineData.slice(-6)}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: "#f5f5f5" }} />
                <Line type="monotone" dataKey="papers" stroke="#003DA5" dot={{ fill: "#003DA5" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <Link href="/product-impact" className="btn-adi-secondary w-full mt-4">
            Open Impact Dashboard
          </Link>
        </div>
      </div>

      {/* AI Insights Panel & Outcome Distribution */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* AI Insights */}
        <div className="md:col-span-2 card-adi border-l-4 border-adi-orange">
          <div className="flex items-start gap-4">
            <Zap className="text-adi-orange flex-shrink-0 mt-1" size={24} />
            <div className="flex-1">
              <h3 className="font-semibold text-adi-orange mb-3">AI Insights</h3>
              <p className="text-sm text-adi-gray-text mb-4">
                Your PowerLab 35 product is most frequently associated with improved physiological measurement accuracy in recent studies.
              </p>
              <p className="text-sm text-adi-gray-text mb-4">
                <strong>Three new trends detected this week:</strong>
              </p>
              <ul className="text-sm space-y-2 text-adi-gray-text">
                <li className="flex gap-2">
                  <TrendingUp size={16} className="text-adi-green flex-shrink-0 mt-0.5" />
                  <span>Enhanced signal stability in EU physiology labs</span>
                </li>
                <li className="flex gap-2">
                  <TrendingUp size={16} className="text-adi-green flex-shrink-0 mt-0.5" />
                  <span>Increased adoption in teaching-focused studies</span>
                </li>
                <li className="flex gap-2">
                  <TrendingUp size={16} className="text-adi-green flex-shrink-0 mt-0.5" />
                  <span>New wearable integration emerging in 5 research groups</span>
                </li>
              </ul>
              <button className="btn-adi-primary mt-4 w-full">Generate Summary Report</button>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="space-y-3">
          {mockImpactMetrics.map((metric, idx) => (
            <div key={idx} className="card-adi">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-xs text-adi-gray-caption">{metric.label}</p>
                  <p className="text-2xl font-bold text-adi-blue mt-2">{metric.value}</p>
                </div>
                <span className="text-xs bg-adi-green text-white px-2 py-1 rounded">{metric.change}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Outcome Distribution Chart */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-adi">
          <h3 className="section-title">Outcome Distribution</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockOutcomeDistribution}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: "#f5f5f5" }} />
                <Bar dataKey="value" fill="#003DA5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-adi">
          <h3 className="section-title">Outcome Breakdown</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockOutcomeDistribution}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${name} (${percentage}%)`}
                  outerRadius={80}
                  fill="#003DA5"
                  dataKey="value"
                >
                  {mockOutcomeDistribution.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={["#003DA5", "#00A86B", "#FF6B35", "#FFB800", "#FF9800", "#E53935"][index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  )
}
