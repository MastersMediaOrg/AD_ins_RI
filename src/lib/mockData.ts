// Mock data for the entire application

export const mockProducts = [
  { id: 1, name: "PowerLab 35 Series", icon: "🔬" },
  { id: 2, name: "PowerLab Sensors", icon: "📱" },
  { id: 3, name: "LabChart 8", icon: "📊" },
  { id: 4, name: "Lt", icon: "💻" },
  { id: 5, name: "Lt LabStation", icon: "🏢" },
]

export const mockPapers = [
  {
    id: 1,
    title: "Real-time multimodal recording in conscious primates using PowerLab 35",
    authors: "Smith, J., Johnson, M., Brown, A.",
    year: 2024,
    citations: 847,
    outcome: "Measurement Accuracy",
    quality: "High",
    product: "PowerLab 35 Series",
    abstract: "Advanced techniques for simultaneous recording of neural and physiological signals...",
  },
  {
    id: 2,
    title: "PowerLab Sensors integration in wearable cardiac monitoring systems",
    authors: "Chen, S., Patel, R., Kumar, V.",
    year: 2024,
    citations: 562,
    outcome: "Clinical Deployment",
    quality: "High",
    product: "PowerLab Sensors",
    abstract: "Novel approach to remote patient monitoring using wireless sensor networks...",
  },
  {
    id: 3,
    title: "Lt platform: transforming online physiology education globally",
    authors: "Williams, K., Martinez, L., Singh, A.",
    year: 2024,
    citations: 234,
    outcome: "Teaching Outcomes",
    quality: "Medium",
    product: "Lt",
    abstract: "Analysis of student learning outcomes in cloud-based physiology labs...",
  },
  {
    id: 4,
    title: "Signal stability improvements in PowerLab 35 clinical deployments",
    authors: "Anderson, P., O'Brien, T., Zhang, W.",
    year: 2023,
    citations: 421,
    outcome: "Signal Stability",
    quality: "High",
    product: "PowerLab 35 Series",
    abstract: "Long-term evaluation of signal noise reduction in hospital environments...",
  },
  {
    id: 5,
    title: "LabChart 8 machine learning integration for automated analysis",
    authors: "Thompson, R., Garcia, M., Lee, J.",
    year: 2023,
    citations: 189,
    outcome: "Measurement Accuracy",
    quality: "Medium",
    product: "LabChart 8",
    abstract: "AI-assisted signal processing for improved measurement accuracy...",
  },
]

export const mockTrendingTopics = [
  { topic: "Remote Patient Monitoring", papers: 156, trend: "+89% YoY" },
  { topic: "Signal Processing AI", papers: 89, trend: "+156% YoY" },
  { topic: "Wearable Integration", papers: 124, trend: "+67% YoY" },
  { topic: "Online Medical Education", papers: 234, trend: "+45% YoY" },
]

export const mockImpactMetrics = [
  { label: "Papers Ingested", value: 124, change: "+12%" },
  { label: "Active Discussions", value: 18, change: "+5%" },
  { label: "Clinical Deployments", value: 7, change: "+2" },
  { label: "Institution Partners", value: 47, change: "+8" },
]

export const mockDiscussions = [
  {
    id: 1,
    title: "Calibration drift in long-term PowerLab 35 studies",
    author: "Dr. Sarah Chen",
    replies: 3,
    views: 24,
    upvotes: 5,
    product: "PowerLab 35 Series",
    tags: ["Calibration", "Troubleshooting"],
    solved: false,
    timestamp: "2 days ago",
  },
  {
    id: 2,
    title: "Best practices for remote monitoring setup with PowerLab Sensors",
    author: "Prof. James Wilson",
    replies: 8,
    views: 156,
    upvotes: 23,
    product: "PowerLab Sensors",
    tags: ["Remote Monitoring", "Setup"],
    solved: true,
    timestamp: "5 days ago",
  },
  {
    id: 3,
    title: "Lt platform accessibility features for students with disabilities",
    author: "Dr. Emma Rodriguez",
    replies: 12,
    views: 89,
    upvotes: 34,
    product: "Lt",
    tags: ["Accessibility", "Teaching"],
    solved: true,
    timestamp: "1 week ago",
  },
]

export const mockWorldImpactMetrics = {
  globalPapers: 18547,
  citations: 50347,
  institutions: 3284,
  clinicalSites: 427,
  educationalPrograms: 892,
}

export const mockRegionalData = [
  {
    region: "North America",
    papers: 5284,
    percentage: 28,
    citations: 14821,
    topInstitution: "Johns Hopkins University",
    institutions: 156,
    trend: "+12% YoY",
    color: "#003DA5",
  },
  {
    region: "Europe",
    papers: 6128,
    percentage: 33,
    citations: 17294,
    topInstitution: "University of Cambridge",
    institutions: 189,
    trend: "+18% YoY",
    color: "#00A86B",
  },
  {
    region: "Asia-Pacific",
    papers: 4627,
    percentage: 25,
    citations: 12408,
    topInstitution: "University of Tokyo",
    institutions: 143,
    trend: "+25% YoY",
    color: "#FF6B35",
  },
  {
    region: "Rest of World",
    papers: 2508,
    percentage: 14,
    citations: 6824,
    topInstitution: "University of São Paulo",
    institutions: 98,
    trend: "+8% YoY",
    color: "#FFB800",
  },
]

export const mockProductMetrics = [
  {
    product: "PowerLab 35",
    papers: 8247,
    citations: 34631,
    sites: 1284,
    teaching: 234,
    clinical: 156,
    growth: "+12%",
    status: "Mature",
  },
  {
    product: "PowerLab Sensors",
    papers: 3621,
    citations: 13759,
    sites: 621,
    teaching: 1823,
    clinical: 87,
    growth: "+34%",
    status: "Growth",
  },
  {
    product: "LabChart 8",
    papers: 6894,
    citations: 26874,
    sites: 1847,
    teaching: 892,
    clinical: 89,
    growth: "+8%",
    status: "Stable",
  },
  {
    product: "Lt",
    papers: 5142,
    citations: 10799,
    sites: 2156,
    teaching: 4284,
    clinical: 12,
    growth: "+45%",
    status: "Explosive",
  },
  {
    product: "Lt LabStation",
    papers: 2108,
    citations: 4844,
    sites: 412,
    teaching: 1156,
    clinical: 4,
    growth: "+28%",
    status: "Emerging",
  },
]

export const mockTimelineData = [
  { year: 2018, papers: 456 },
  { year: 2019, papers: 623 },
  { year: 2020, papers: 1245 },
  { year: 2021, papers: 2156 },
  { year: 2022, papers: 3421 },
  { year: 2023, papers: 4829 },
  { year: 2024, papers: 5847 },
]

export const mockOutcomeDistribution = [
  { name: "Measurement Accuracy", value: 4284, percentage: 34 },
  { name: "Signal Stability", value: 2847, percentage: 23 },
  { name: "Teaching Outcomes", value: 2156, percentage: 17 },
  { name: "Clinical Deployment", value: 1623, percentage: 13 },
  { name: "Remote Monitoring", value: 890, percentage: 7 },
  { name: "Other", value: 521, percentage: 6 },
]

export const mockTopInstitutions = [
  { name: "Johns Hopkins University", papers: 156, country: "USA" },
  { name: "University of Cambridge", papers: 189, country: "UK" },
  { name: "Stanford University", papers: 134, country: "USA" },
  { name: "MIT", papers: 128, country: "USA" },
  { name: "Harvard Medical School", papers: 112, country: "USA" },
]

export const mockBreakthroughs = [
  {
    title: "Cardiology Research Revolution",
    papers: 34,
    citations: 847,
    outcome: "FDA approval of 2 new diagnostic devices",
    quote: "PowerLab's real-time signal processing was critical to our breakthrough.",
    author: "Dr. Sarah Chen, Johns Hopkins",
    products: ["PowerLab 35 Series", "LabChart 8"],
  },
  {
    title: "Global Teaching Transformation",
    papers: 89,
    citations: 2100,
    outcome: "500K+ students reached in 92 countries",
    quote: "Online learning was impossible before Lt. Now our students worldwide have access.",
    author: "Prof. Rajesh Patel, IIT Delhi",
    products: ["Lt", "PowerLab Sensors"],
  },
  {
    title: "Remote Patient Monitoring Pioneer",
    papers: 156,
    citations: 1240,
    outcome: "12 hospitals running remote cardiac monitoring",
    quote: "We reduced hospital readmissions by 34% using remote monitoring.",
    author: "Dr. Thomas Mueller, Berlin Charité Hospital",
    products: ["PowerLab Sensors", "LabChart"],
  },
]

export const mockResearchDomains = [
  {
    domain: "Physiology",
    citations: 18294,
    percentage: 34,
    subdomains: [
      { name: "Cardiovascular", cites: 8147 },
      { name: "Respiratory", cites: 5621 },
      { name: "Neuroscience", cites: 4526 },
    ],
  },
  {
    domain: "Pharmacology",
    citations: 12847,
    percentage: 25,
    subdomains: [
      { name: "Drug Testing", cites: 6284 },
      { name: "Toxicology", cites: 4123 },
      { name: "Efficacy Studies", cites: 2440 },
    ],
  },
  {
    domain: "Education & Teaching",
    citations: 11563,
    percentage: 23,
    subdomains: [
      { name: "STEM Training", cites: 5821 },
      { name: "Hands-on Lab", cites: 3642 },
      { name: "Online Learning", cites: 2100 },
    ],
  },
  {
    domain: "Veterinary & Animal",
    citations: 7043,
    percentage: 14,
    subdomains: [
      { name: "Animal Models", cites: 3821 },
      { name: "Wildlife Study", cites: 3222 },
    ],
  },
]

export const mockKnowledgeGraphNodes = [
  { id: "powerlab35", label: "PowerLab 35", type: "product", size: 40 },
  { id: "accuracy", label: "Measurement Accuracy", type: "outcome", size: 35 },
  { id: "stability", label: "Signal Stability", type: "outcome", size: 28 },
  { id: "jhu", label: "Johns Hopkins", type: "institution", size: 32 },
  { id: "cardiology", label: "Cardiology Research", type: "trend", size: 30 },
  { id: "remote", label: "Remote Monitoring", type: "trend", size: 25 },
  { id: "lt", label: "Lt Platform", type: "product", size: 35 },
  { id: "teaching", label: "Teaching Outcomes", type: "outcome", size: 28 },
  { id: "standford", label: "Stanford University", type: "institution", size: 30 },
]

export const mockKnowledgeGraphEdges = [
  { source: "powerlab35", target: "accuracy", weight: 0.9 },
  { source: "powerlab35", target: "stability", weight: 0.8 },
  { source: "powerlab35", target: "jhu", weight: 0.85 },
  { source: "accuracy", target: "cardiology", weight: 0.8 },
  { source: "powerlab35", target: "remote", weight: 0.7 },
  { source: "lt", target: "teaching", weight: 0.95 },
  { source: "lt", target: "standford", weight: 0.75 },
  { source: "stability", target: "remote", weight: 0.65 },
]
