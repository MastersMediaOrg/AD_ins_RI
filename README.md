# ADInstruments Research Intelligence Platform

A professional, full-featured Next.js frontend for the ADInstruments Research Intelligence platform—featuring semantic research exploration, knowledge graph visualization, product impact analytics, AI-powered report generation, community discussions, and global impact analysis.

## 🚀 Features Implemented

### 7 Core Screens
1. **Dashboard** — Overview of product impact, research activity, and trending insights
2. **Research Explorer** — Semantic search with filters and evidence cards
3. **Knowledge Graph** — Interactive visualization of relationships (products, outcomes, institutions, trends)
4. **Product Impact Dashboard** — Deep-dive analytics with charts and geospatial visualizations
5. **Report Studio** — Drag-and-drop editor with AI text generation and multi-format export
6. **Discussions & Community Forum** — Thread-based discussions with consensus summarization
7. **World Impact Analysis** — Executive-level dashboard showing global research influence

### Design System
- **Color Palette**: ADInstruments blue (#003DA5), green (#00A86B), orange (#FF6B35)
- **Components**: ShadCN/UI-inspired buttons, cards, modals
- **Visualizations**: Recharts (charts), D3.js-ready (knowledge graph), Mapbox-ready (geospatial)
- **Responsive**: Mobile-first, tablet/desktop optimized
- **Accessibility**: WCAG 2.1 AA compliant

### Tech Stack
- **Framework**: Next.js 14 (React 18)
- **Styling**: Tailwind CSS
- **Charts**: Recharts, D3.js
- **Icons**: Lucide React
- **State**: Zustand (ready for integration)
- **API**: Mock data (ready for Rust backend connection)

## 📋 Setup & Installation

### Prerequisites
- Node.js 18+ and npm/yarn

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd adinstruments-research-intelligence

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout with header/footer
│   ├── page.tsx                # Dashboard (home)
│   ├── globals.css             # Global styles
│   ├── explorer/page.tsx       # Research Explorer
│   ├── knowledge-graph/page.tsx
│   ├── product-impact/page.tsx
│   ├── reports/page.tsx        # Report Studio
│   ├── discussions/page.tsx
│   └── world-impact/page.tsx
├── components/
│   ├── layout/
│   │   └── MainLayout.tsx      # Header with navigation
│   └── screens/
│       ├── Dashboard.tsx
│       ├── ResearchExplorer.tsx
│       ├── KnowledgeGraph.tsx
│       ├── ProductImpact.tsx
│       ├── ReportStudio.tsx
│       ├── Discussions.tsx
│       └── WorldImpact.tsx
└── lib/
    └── mockData.ts             # Mock data (ready for API integration)
```

## 🔌 API Integration (Future)

All mock data can be easily replaced with real API calls. The structure is ready for:

```typescript
// Example: Replace mockPapers with API call
const response = await fetch('/api/papers/search', {
  method: 'POST',
  body: JSON.stringify({ query: searchQuery })
})
const papers = await response.json()
```

### Backend Endpoints (Rust microservices)

```
POST   /api/papers/ingest              — Upload & index new papers
GET    /api/papers/search              — Semantic search across papers
GET    /api/papers/{id}                — Fetch full paper + metadata
GET    /api/products/{id}/impact       — Product impact metrics
GET    /api/knowledge-graph            — Full graph JSON (nodes + edges)
GET    /api/knowledge-graph/clusters   — Detected clusters
POST   /api/reports/create             — Create new report
PUT    /api/reports/{id}               — Update report content
POST   /api/reports/{id}/export        — Export (PDF/DOCX/PPTX)
GET    /api/discussions                — List threads + consensus
POST   /api/discussions/create         — New thread
POST   /api/discussions/{id}/reply     — Add reply
GET    /api/agents/summarize           — AI-powered summary
GET    /api/agents/generate-text       — AI-generated section text
GET    /api/trends                     — Trending topics + signals
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts`:
```typescript
colors: {
  'adi-blue': '#003DA5',
  'adi-green': '#00A86B',
  'adi-orange': '#FF6B35',
}
```

### Add New Pages
1. Create `src/app/<feature>/page.tsx`
2. Create screen component in `src/components/screens/<Feature>.tsx`
3. Add navigation entry in `src/components/layout/MainLayout.tsx`

## 📊 Visualization Libraries

Already configured & ready:
- **Recharts**: Line, bar, pie, area charts ✅
- **D3.js**: Knowledge graph (Sigma.js integration ready)
- **Mapbox GL**: Geospatial heatmaps (ready for integration)

## 🧪 Testing

```bash
# Type checking
npm run type-check

# Linting
npm run lint
```

## 📦 Build for Production

```bash
npm run build
npm start
```

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci && npm run build
CMD ["npm", "start"]
```

## 📝 Mock Data

All mock data is centralized in `src/lib/mockData.ts`:
- Products (PowerLab 35, Lt, etc.)
- Papers (124 ingested)
- Discussions (18 threads)
- Regional data (4 regions)
- Product metrics (5 products)
- Breakthrough case studies
- Research domains

**To connect real data**: Replace mock data imports with API calls.

## 🔐 Authentication (Future)

Ready for integration with:
- Clerk
- Auth0
- Supabase Auth

Add to `MainLayout.tsx`:
```typescript
import { useUser } from '@clerk/nextjs'

const { user } = useUser()
```

## 🤝 Contributing

1. Create feature branch: `git checkout -b feature/amazing-feature`
2. Commit changes: `git commit -m 'Add amazing feature'`
3. Push to branch: `git push origin feature/amazing-feature`
4. Open Pull Request

## 📄 License

Proprietary - ADInstruments

## 📞 Support

For questions or issues:
- 📧 Email: support@adinstruments.com
- 💬 Discord: [ADInstruments Community]
- 📖 Docs: [Full Documentation]

---

**Version**: 0.1.0  
**Last Updated**: 2026-07-06  
**Status**: MVP Ready for Backend Integration
