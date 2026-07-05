'use client'

import { Download, Share2, BarChart3, TrendingUp } from "lucide-react"
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from "recharts"
import { mockTimelineData, mockOutcomeDistribution } from "@/lib/mockData"

export default function ProductImpactDashboard() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="page-title">PowerLab 35 Series — Impact Dashboard</h1>
        <p className="subtitle">124 papers | 7 active clinical sites | 18 discussions | Created Aug 2021</p>
      </div>

      {/* Top Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="card-adi">
          <p className="text-adi-gray-caption text-xs">Total Papers</p>
          <p className="text-3xl font-bold text-adi-blue mt-2">124</p>
          <p className="text-xs text-adi-green mt-1">Trend: ↑ +12% YoY</p>
        </div>
        <div className="card-adi">
          <p className="text-adi-gray-caption text-xs">Average Citation Count</p>
          <p className="text-3xl font-bold text-adi-blue mt-2">8.3</p>
          <p className="text-xs text-adi-green mt-1">Signal: Growing adoption</p>
        </div>
        <div className="card-adi">
          <p className="text-adi-gray-caption text-xs">Active Deployments</p>
          <p className="text-3xl font-bold text-adi-blue mt-2">7</p>
          <p className="text-xs text-adi-gray-caption mt-1">EU (4), NA (2), APAC (1)</p>
        </div>
        <div className="card-adi">
          <p className="text-adi-gray-caption text-xs">Discussion Activity</p>
          <p className="text-3xl font-bold text-adi-blue mt-2">18</p>
          <p className="text-xs text-adi-gray-caption mt-1">Last activity: 2 days ago</p>
        </div>
      </div>

      {/* Charts Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Outcome Distribution */}
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

        {/* Publication Timeline */}
        <div className="card-adi">
          <h3 className="section-title">Publication Timeline</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={mockTimelineData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="year" stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: "#f5f5f5" }} />
                <Line type="monotone" dataKey="papers" stroke="#003DA5" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Geographic Heatmap Placeholder */}
        <div className="card-adi">
          <h3 className="section-title">Geographic Distribution</h3>
          <div className="h-64 bg-gradient-to-br from-adi-gray-light to-gray-100 rounded flex items-center justify-center">
            <div className="text-center">
              <div className="text-4xl mb-2">🌍</div>
              <p className="text-adi-gray-text">World Map Visualization</p>
              <p className="text-adi-gray-caption text-sm mt-2">Mapbox interactive heatmap would render here</p>
            </div>
          </div>
        </div>

        {/* Evidence Quality Funnel */}
        <div className="card-adi">
          <h3 className="section-title">Evidence Quality Funnel</h3>
          <div className="space-y-3 mt-6">
            <div className="flex items-center gap-3">
              <div className="w-full h-8 bg-adi-blue rounded text-white flex items-center px-3 text-sm font-medium">
                All Papers: 124 (100%)
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-5/6 h-8 bg-adi-green rounded text-white flex items-center px-3 text-sm font-medium">
                Peer-reviewed: 98 (79%)
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-4/6 h-8 bg-yellow-500 rounded text-white flex items-center px-3 text-sm font-medium">
                High-citation: 67 (54%)
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-2/6 h-8 bg-adi-orange rounded text-white flex items-center px-3 text-sm font-medium">
                Recently replicated: 34 (27%)
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Insights */}
      <div className="grid md:grid-cols-3 gap-6">
        {/* Top Outcomes */}
        <div className="card-adi">
          <h3 className="section-title">Top Outcomes</h3>
          <div className="space-y-3">
            {mockOutcomeDistribution.slice(0, 5).map((outcome, idx) => (
              <div key={idx} className="flex justify-between items-center pb-2 border-b border-gray-200 last:border-b-0">
                <p className="text-sm text-adi-gray-dark">{outcome.name}</p>
                <div className="text-right">
                  <p className="font-semibold text-sm text-adi-blue">{outcome.value}</p>
                  <p className="text-xs text-adi-green">+12% growth</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Institutions */}
        <div className="card-adi">
          <h3 className="section-title">Key Institutions</h3>
          <div className="space-y-3">
            {["Johns Hopkins University (156)", "Stanford University (134)", "MIT (128)", "Harvard Medical School (112)", "UC San Diego (98)"].map((inst, idx) => (
              <div key={idx} className="flex items-center justify-between pb-2 border-b border-gray-200 last:border-b-0">
                <p className="text-sm text-adi-gray-text">{inst}</p>
                <div className="w-16 h-2 bg-adi-gray-light rounded-full overflow-hidden">
                  <div className="h-full bg-adi-blue" style={{ width: `${100 - idx * 15}%` }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Discussions */}
        <div className="card-adi">
          <h3 className="section-title">Trending Discussions</h3>
          <div className="space-y-3">
            {[
              "Calibration drift in long-term studies (3 replies)",
              "Remote monitoring integration progress (8 replies)",
              "Best practices for signal noise reduction (12 replies)",
            ].map((discussion, idx) => (
              <div key={idx} className="pb-3 border-b border-gray-200 last:border-b-0">
                <p className="text-sm text-adi-blue hover:underline cursor-pointer">{discussion}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* AI Analysis Panel */}
      <div className="card-adi border-l-4 border-adi-orange">
        <h3 className="font-semibold text-adi-orange mb-4">AI Analysis</h3>
        <p className="text-sm text-adi-gray-text mb-4">
          PowerLab 35 shows strongest impact in EU clinical settings. Signal stability is the primary advantage, cited in 34 papers. Teaching adoption is emerging with 45% YoY growth.
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-adi-gray-light p-3 rounded">
            <p className="text-xs text-adi-gray-caption">Actionable Insight</p>
            <p className="text-sm text-adi-gray-dark mt-1">3 papers on remote monitoring emerging use case</p>
          </div>
          <div className="bg-adi-gray-light p-3 rounded">
            <p className="text-xs text-adi-gray-caption">Unresolved Discussion</p>
            <p className="text-sm text-adi-gray-dark mt-1">Calibration drift in long-term studies needs resolution</p>
          </div>
          <div className="flex gap-2">
            <button className="btn-adi-primary flex-1 text-sm">Executive Summary</button>
            <button className="btn-adi-secondary flex-1 text-sm">Competitive Analysis</button>
          </div>
        </div>
      </div>
    </div>
  )
}
