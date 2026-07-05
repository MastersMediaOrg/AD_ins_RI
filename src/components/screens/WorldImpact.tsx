'use client'

import { Globe, TrendingUp, Download, Share2, BarChart3 } from "lucide-react"
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts"
import { mockRegionalData, mockProductMetrics, mockResearchDomains } from "@/lib/mockData"

export default function WorldImpactAnalysis() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="space-y-2">
        <h1 className="page-title">ADInstruments Research Impact — Global Influence</h1>
        <p className="subtitle">50,000+ citations | 100+ top universities | 10,000+ organizations | 40 years of innovation</p>
      </div>

      {/* Top Summary Cards */}
      <div className="grid md:grid-cols-5 gap-4">
        <div className="card-adi text-center">
          <p className="text-3xl font-bold text-adi-blue">18,547</p>
          <p className="text-sm text-adi-gray-caption mt-2">Global Papers Indexed</p>
          <p className="text-xs text-adi-green mt-1">↑ +23% YoY</p>
        </div>
        <div className="card-adi text-center">
          <p className="text-3xl font-bold text-adi-blue">50,347</p>
          <p className="text-sm text-adi-gray-caption mt-2">Research Citations</p>
          <p className="text-xs text-adi-green mt-1">↑ +18% YoY</p>
        </div>
        <div className="card-adi text-center">
          <p className="text-3xl font-bold text-adi-blue">3,284</p>
          <p className="text-sm text-adi-gray-caption mt-2">Active Institutions</p>
          <p className="text-xs text-adi-green mt-1">↑ +12% YoY</p>
        </div>
        <div className="card-adi text-center">
          <p className="text-3xl font-bold text-adi-blue">427</p>
          <p className="text-sm text-adi-gray-caption mt-2">Clinical Deployments</p>
          <p className="text-xs text-adi-green mt-1">↑ +28% YoY</p>
        </div>
        <div className="card-adi text-center">
          <p className="text-3xl font-bold text-adi-blue">892</p>
          <p className="text-sm text-adi-gray-caption mt-2">Educational Programs</p>
          <p className="text-xs text-adi-green mt-1">↑ +34% YoY</p>
        </div>
      </div>

      {/* Global Map Section */}
      <div className="card-adi">
        <h2 className="section-title flex gap-2">
          <Globe size={24} />
          Global Geographic Impact
        </h2>
        <div className="h-64 bg-gradient-to-br from-adi-gray-light to-gray-100 rounded flex items-center justify-center mb-6">
          <div className="text-center">
            <div className="text-5xl mb-3">🌍</div>
            <p className="text-adi-gray-text font-medium">Interactive World Map</p>
            <p className="text-adi-gray-caption text-sm mt-2">Mapbox visualization with paper density heatmap</p>
          </div>
        </div>

        {/* Regional Cards */}
        <div className="grid md:grid-cols-4 gap-4">
          {mockRegionalData.map((region) => (
            <div key={region.region} className="p-4 rounded-lg border-l-4" style={{ borderColor: region.color }}>
              <h4 className="font-semibold text-adi-blue mb-3">{region.region}</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <p className="text-adi-gray-caption">Papers</p>
                  <p className="font-bold text-adi-blue">{region.papers.toLocaleString()} ({region.percentage}%)</p>
                </div>
                <div>
                  <p className="text-adi-gray-caption">Citations</p>
                  <p className="font-bold text-adi-blue">{region.citations.toLocaleString()}</p>
                </div>
                <div>
                  <p className="text-adi-gray-caption">Top Institution</p>
                  <p className="text-adi-blue">{region.topInstitution}</p>
                </div>
                <div>
                  <p className="text-adi-gray-caption">Growth</p>
                  <p className="font-semibold text-adi-green">{region.trend}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Research Domain Analysis */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-adi">
          <h2 className="section-title">Research Domain Influence</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={mockResearchDomains}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                <XAxis dataKey="domain" angle={-45} textAnchor="end" height={80} stroke="#999" />
                <YAxis stroke="#999" />
                <Tooltip contentStyle={{ backgroundColor: "#f5f5f5" }} />
                <Bar dataKey="citations" fill="#003DA5" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="card-adi">
          <h2 className="section-title">Citation Percentage by Domain</h2>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={mockResearchDomains}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ domain, percentage }) => `${domain}: ${percentage}%`}
                  outerRadius={80}
                  fill="#003DA5"
                  dataKey="citations"
                >
                  {mockResearchDomains.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={["#003DA5", "#00A86B", "#FF6B35", "#FFB800"][index]}
                    />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Product Performance Matrix */}
      <div className="card-adi">
        <h2 className="section-title">Product Performance Ecosystem</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-adi-blue text-white">
                <th className="p-3 text-left">Product</th>
                <th className="p-3 text-right">Papers</th>
                <th className="p-3 text-right">Avg Citations</th>
                <th className="p-3 text-right">Research Sites</th>
                <th className="p-3 text-right">Teaching</th>
                <th className="p-3 text-right">Clinical</th>
                <th className="p-3 text-right">Growth</th>
                <th className="p-3 text-center">Status</th>
              </tr>
            </thead>
            <tbody>
              {mockProductMetrics.map((product, idx) => (
                <tr key={idx} className={idx % 2 === 0 ? "bg-white" : "bg-adi-gray-light"}>
                  <td className="p-3 font-medium text-adi-blue">{product.product}</td>
                  <td className="p-3 text-right">{product.papers.toLocaleString()}</td>
                  <td className="p-3 text-right">{(product.citations / product.papers).toFixed(1)}</td>
                  <td className="p-3 text-right">{product.sites.toLocaleString()}</td>
                  <td className="p-3 text-right">{product.teaching.toLocaleString()}</td>
                  <td className="p-3 text-right">{product.clinical.toLocaleString()}</td>
                  <td className="p-3 text-right text-adi-green font-semibold">{product.growth}</td>
                  <td className="p-3 text-center">
                    <span className={`px-2 py-1 rounded text-xs font-medium ${
                      product.status === "Growth" || product.status === "Explosive" 
                        ? "bg-adi-green text-white" 
                        : product.status === "Stable" 
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-blue-100 text-blue-800"
                    }`}>
                      {product.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Breakthrough Discoveries */}
      <div className="card-adi bg-gradient-to-r from-blue-50 to-blue-100">
        <h2 className="section-title">Breakthrough Discoveries & Case Studies</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Cardiology Research Revolution",
              impact: "34 papers",
              outcome: "FDA approval of 2 new diagnostic devices",
              quote: "PowerLab's real-time signal processing was critical to our breakthrough.",
            },
            {
              title: "Global Teaching Transformation",
              impact: "89 papers",
              outcome: "500K+ students reached in 92 countries",
              quote: "Online learning was impossible before Lt. Now students worldwide have access.",
            },
            {
              title: "Remote Patient Monitoring Pioneer",
              impact: "156 papers",
              outcome: "12 hospitals running remote cardiac monitoring",
              quote: "We reduced hospital readmissions by 34% using remote monitoring.",
            },
          ].map((case_study, idx) => (
            <div key={idx} className="bg-white p-4 rounded-lg">
              <h4 className="font-semibold text-adi-blue mb-2">{case_study.title}</h4>
              <p className="text-xs text-adi-gray-caption mb-2">{case_study.impact}</p>
              <p className="text-sm text-adi-gray-dark mb-3">{case_study.outcome}</p>
              <p className="text-sm italic text-adi-gray-text">"{case_study.quote}"</p>
            </div>
          ))}
        </div>
      </div>

      {/* Strategic KPIs */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="card-adi bg-gradient-to-br from-adi-blue to-blue-600 text-white">
          <h3 className="font-semibold text-lg mb-4">Research Leadership</h3>
          <p className="text-4xl font-bold mb-2">23%</p>
          <p className="text-blue-100 mb-4">of global physiology research cites ADI products</p>
          <p className="text-sm text-blue-100">Trend: ↑ +18%/yr | Target 2026: 28%</p>
        </div>
        <div className="card-adi bg-gradient-to-br from-adi-green to-green-600 text-white">
          <h3 className="font-semibold text-lg mb-4">Market Penetration</h3>
          <p className="text-4xl font-bold mb-2">42%</p>
          <p className="text-green-100 mb-4">of top 100 universities using ADI products</p>
          <p className="text-sm text-green-100">Trend: ↑ +12%/yr | Target 2026: 52%</p>
        </div>
      </div>

      {/* Export & Collaboration */}
      <div className="card-adi flex gap-4 flex-wrap">
        <button className="btn-adi-primary flex gap-2">
          <Download size={18} />
          Export Strategic Brief (PPTX)
        </button>
        <button className="btn-adi-primary flex gap-2">
          <Download size={18} />
          Export Data Report (XLSX)
        </button>
        <button className="btn-adi-secondary flex gap-2 ml-auto">
          <Share2 size={18} />
          Share Dashboard
        </button>
      </div>
    </div>
  )
}
