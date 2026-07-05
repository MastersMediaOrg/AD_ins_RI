# ADInstruments Research Intelligence Platform  
## High-Fidelity UI/UX Mockups (Screens 1–6)

---

## Screen 1 — Dashboard (Home)

### Purpose
Provide a high-level overview of product impact, research activity, and trends.

### Design Intent
- Clinical, clean ADInstruments aesthetic.
- Immediate visibility of product performance and research activity.
- Clear entry points into deeper modules (Explorer, Knowledge Graph, Impact, Reports).

### Layout (Visual Blueprint)

**Header (fixed)**  
`ADInstruments Logo | Dashboard | Research Explorer | Knowledge Graph | Product Impact | Reports | Discussions | Settings`  
Right: `User Avatar | Storage Indicator | [New Report]`

**Page Title**  
`Dashboard — Research Intelligence for ADInstruments Products`

**Product Selector (full-width bar)**  
`[ PowerLab 35 Series ▼ ]` (blue accent, subtle shadow)

**Hero Summary Panel (full-width card)**  
- Product image (e.g., PowerLab device).
- Metrics:
  - `124 Papers Ingested`
  - `18 Active Discussions`
  - `7 Clinical Deployments`
- CTAs (right-aligned):
  - `[ Explore Papers ]`
  - `[ View Knowledge Graph ]`
  - `[ Generate Report ]`

**Three-Section Grid (cards)**  
- **Recent Papers**
  - List of 3–5 latest papers.
  - `[ View All Papers ]`
- **Trending Topics**
  - List or mini chart of key topics.
  - `[ Explore in Knowledge Graph ]`
- **Impact Snapshot**
  - Mini line chart of outcome improvement over time.
  - `[ Open Impact Dashboard ]`

**Right Sidebar — Agent Insight Panel**  
- Title: `AI Insights`
- Content:
  - “Your product is most frequently associated with improved physiological measurement accuracy in recent studies.”
  - “Three new trends detected this week:
    - Enhanced signal stability
    - Increased adoption in EU physiology labs
    - Growth in teaching-focused studies”
- Button: `[ Generate Summary Report ]`

**Footer**  
`© ADInstruments — Research Intelligence Platform Powered by Velan Engine`

---

## Screen 2 — Research Explorer

### Purpose
Enable users to search, filter, and explore all papers and discussions related to a product or topic.

### Design Intent
- Scientific search cockpit.
- Semantic search with structured filters.
- Evidence cards with clear traceability.
- Agent insights guiding exploration.

### Layout (Visual Blueprint)

**Header (fixed)**  
Same as Screen 1.

**Page Title**  
`Research Explorer — Papers, Discussions, and Evidence`

**Search Bar (full-width)**  
`[ 🔍  Search papers, outcomes, discussions… ]`  
Dynamic filter chips appear below:
- `[ PowerLab ] [ 2021–2024 ] [ Outcome: Accuracy ] [ Region: EU ]`

**Left Sidebar Filters**  
Title: `Filters`  
Sections:
- **Product**
  - PowerLab 35/26 Series, PowerLab Sensors, LabChart 8, Lt, Lt LabStation
- **Study Type**
  - Clinical, Preclinical, Educational, Field Study
- **Outcome Category**
  - Measurement Accuracy, Signal Stability, Teaching Outcomes, Clinical Deployment
- **Evidence Quality**
  - High (Peer-reviewed, Replication), Medium (Published, Limited sample), Low (Preliminary)
- **Institution Type**
  - University, Hospital/Clinical, Government Lab, Industry
- **Date Range**
  - Last 3 months, 6 months, 1 year, Custom
- **Region**
  - North America, Europe, Asia-Pacific, Other

**Main Content Area**  
Results displayed as **Evidence Cards** (sortable by relevance, date, citations):

Each card contains:
- **Title** (linked to full paper view)
- **Authors** + Institution
- **Publication Date** + Source
- **Quick Tags** (Study type, Outcome, Confidence badge)
- **Abstract Preview** (first 2 lines)
- **Related Metrics**:
  - 📊 Sample size / Participants
  - ⭐ Citation count
  - 🔬 Confidence score
- **Action Buttons**:
  - `[ Add to Report ]` (saves to Report Studio)
  - `[ View Full Paper ]`
  - `[ Link Discussion ]`
  - `[ Generate Summary ]` (AI-powered 30-second summary)

**Agent-Powered Features**:
- **Semantic Search** across papers, discussions, outcomes
- **Auto-suggest** related papers as user types
- **Cluster Analysis** showing which papers cite each other
- **Sentiment Analysis** on discussions linked to papers

---

## Screen 3 — Knowledge Graph (Interactive Visualization)

### Purpose
Visualize relationships between products, outcomes, institutions, trends, and research themes using an interactive knowledge graph.

### Design Intent
- Multi-level graph exploration (zoom, pan, filter).
- Color-coded nodes for different entity types.
- Edge thickness indicates relationship strength.
- Agent-driven insights on graph clusters.
- Drag-and-drop snapshot export to Report Studio.

### Layout (Visual Blueprint)

**Header (fixed)**  
Same as Screen 1–2.

**Page Title**  
`Knowledge Graph — Explore Product Impact, Trends, and Research Networks`

**Top Toolbar**  
- **View Mode Toggle**: `[ Spatial View ] [ Timeline View ] [ Trend Analysis ]`
- **Filter by Entity**: `[ Products ▼ ] [ Outcomes ▼ ] [ Institutions ▼ ] [ Trends ▼ ]`
- **Node Size**: `[ By Influence ] [ By Recency ] [ By Growth ]`
- **Color Scheme**: `[ Default ] [ Impact-focused ] [ Region-based ]`
- **Export**: `[ Snapshot to Report ] [ Download JSON ] [ Share Link ]`

**Left Sidebar — Graph Legend & Controls**  
- **Node Types**:
  - 🟦 **Product** (PowerLab, LabChart, etc.) — Blue
  - 🟩 **Outcome** (Accuracy, Stability, Teaching) — Green
  - 🟨 **Institution** (Universities, Hospitals) — Yellow
  - 🟪 **Trend** (Emerging topics, regions) — Purple
  - 🟥 **Paper** (Individual research) — Red (small nodes)
- **Edge Types**:
  - ━━ **Strong correlation** (thick, solid)
  - ─ ─ **Weak correlation** (thin, dashed)
- **Clustering Buttons**:
  - `[ Auto-detect Clusters ]`
  - `[ Show Growth Clusters ]` (trending)
  - `[ Show Geographic Clusters ]`

**Center Panel — Interactive Graph Visualization**  
Using Sigma.js / Cytoscape.js:
- Nodes are draggable.
- Click node → **Node Detail Panel** (right sidebar).
- Hover edge → tooltip showing relationship strength + papers linking them.
- Double-click node → **Zoom into cluster**.
- Right-click node → Context menu (`Add to Report`, `Filter by this`, `Similar nodes`).

**Right Sidebar — Node & Cluster Details**  
When a node is selected:

- **Node Name** + Icon
- **Metrics**:
  - Papers linked: `24 papers`
  - Trend direction: `↑ +12% this month`
  - Regional focus: `EU (60%), NA (30%), APAC (10%)`
- **Connected Entities** (thumbnails + counts):
  - Related Products
  - Associated Outcomes
  - Key Institutions
  - Trending Together
- **Agent Insight**: 
  - *"Measurement accuracy is the strongest outcome linked to PowerLab Sensors in EU education studies. 3 papers published in the last month."*
- **Quick Actions**:
  - `[ View All Papers ]`
  - `[ Export Cluster ]`
  - `[ Add to Report ]`

**Bottom Panel — Agent Consensus on Cluster**  
- **Cluster Summary**: "PowerLab → Accuracy Improvement → EU Universities"
- **Key Evidence**: `4 high-confidence papers, 12 discussions`
- **Growth Signal**: `+18% mentions last 3 months`
- **Related Trends**: Teaching outcomes, signal stability, remote monitoring

---

## Screen 4 — Product Impact Dashboard

### Purpose
Deep-dive analytics on a single product's real-world impact through research and deployment metrics.

### Design Intent
- Dashboard-style layout with interactive charts.
- Geospatial visualization (world map).
- Outcome distribution and temporal trends.
- Paper quality and deployment indicators.
- Drag cards to Report Studio.

### Layout (Visual Blueprint)

**Header (fixed)**  
Same as Screen 1–2 + Product selector now displays selected product prominently.

**Page Title + Product Image**  
`PowerLab 35 Series — Impact Dashboard`  
Subtitle: `124 papers | 7 active clinical sites | 18 discussions | Created Aug 2021`

**Top Summary Metrics (4-column grid)**  
- **Total Papers**: 124 | Trend: ↑ +12% YoY
- **Average Citation Count**: 8.3 | Signal: Growing adoption
- **Active Deployments**: 7 | Regions: EU (4), NA (2), APAC (1)
- **Discussion Activity**: 18 threads | Last activity: 2 days ago

**Primary Charts (2x2 Grid, each draggable to Report)**  

1. **Outcome Distribution (Stacked Bar/Pie)**
   - X-axis: Outcome categories (Accuracy, Stability, Teaching, Clinical adoption)
   - Y-axis: Paper count or percentage
   - Color-coded by outcome type
   - Hover → paper count breakdown
   - Action: `[ Drill into Papers ]`

2. **Publication Timeline (Line Chart)**
   - X-axis: Year (2018–2024)
   - Y-axis: Number of papers published
   - Trend line showing growth trajectory
   - Hover → publications list for that year
   - Toggle: `[ by Study Type ] [ by Region ] [ by Outcome ]`

3. **Geographic Heatmap (World Map)**
   - Regions colored by paper density
   - Size of bubble = number of active deployments
   - Click region → detailed breakdown
   - Show institutional affiliations as markers

4. **Evidence Quality Funnel (Sankey or Waterfall)**
   - Stage: "All papers" → "Peer-reviewed" → "High-citation" → "Recently replicated"
   - Shows loss/retention at each gate
   - Click stage → filter Research Explorer to that cohort

**Secondary Insights (3-column grid)**  

- **Top Outcomes**: List of 5 most-linked outcomes with paper counts and growth %
- **Key Institutions**: Top 5 universities/hospitals publishing with this product
- **Trending Discussions**: 3 most-active discussion threads with unresolved questions

**Right Sidebar — Agent Analysis Panel**  
- **AI Summary**:
  - *"PowerLab 35 shows strongest impact in EU clinical settings. Signal stability is the primary advantage, cited in 34 papers. Teaching adoption is emerging (+45% YoY)."*
- **Actionable Insights**:
  - "3 papers on remote monitoring — emerging use case"
  - "Unresolved discussion: calibration drift in long-term studies"
- **Generate**:
  - `[ Executive Summary ]`
  - `[ Competitive Analysis ]`
  - `[ Impact Report ]`

**Action Bar (bottom-right)**  
- `[ Add This Dashboard to Report ]` (all charts included)
- `[ Export Data (CSV) ]`
- `[ Share Dashboard ]`

---

## Screen 5 — Report Studio (Drag-and-Drop Editor)

### Purpose
Empower users to compose publication-ready reports combining charts, papers, insights, and AI-generated text.

### Design Intent
- Familiar document editor interface (like Canva, but for science reports).
- Drag-and-drop components (charts, paper cards, text blocks, images).
- AI-powered text generation (Abstract, Methods, Discussion, Conclusion).
- Multiple export formats (PDF, DOCX, PPTX, HTML).
- Template system (IMRAD, Brief, Case Study, Teaching Material).

### Layout (Visual Blueprint)

**Header (fixed)**  
Same as Screen 1–2.

**Report Meta Panel (collapsible left sidebar)**  
- **Report Title**: `[ Enter title... ]`
- **Template**: `[ IMRAD Paper ] ▼` (other: Brief, Case Study, Whitepaper, Teaching Slide Deck)
- **Product**: PowerLab 35 Series
- **Author**: [Logged-in user]
- **Collaborators**: `[ + Add ]`
- **Status**: Draft | In Review | Published
- **Export Settings**: 
  - Citation style: `[ APA ] [ IEEE ] [ Harvard ]`
  - Include metadata: `[ Yes ]`
  - Include logo: `[ Yes ]`
  - Page layout: `[ Single-column ] [ Two-column ]`

**Canvas (center panel)**  
- WYSIWYG document editor
- Placeholder sections based on template:
  - **Title** (editable text)
  - **Abstract** section
  - **Introduction** section
  - **Methods** section (with chart/data placeholders)
  - **Results** section (with charts, graphs)
  - **Discussion** section
  - **Conclusion** section
  - **References** section (auto-populated)

**Right Sidebar — Component Library (Tabs)**  

1. **Charts Tab**
   - Draggable cards from Impact Dashboard
   - Draggable research summaries
   - Custom chart builder (if time permits)

2. **Papers Tab**
   - Recently added papers (from Explorer)
   - Search to add more
   - Drag paper card → auto-formats as citation + mini summary

3. **Images & Media Tab**
   - Product images (from ADInstruments library)
   - Custom images uploaded by user
   - Drag to canvas

4. **Text Blocks Tab**
   - Editable text templates for each section
   - Agent-generated text suggestions (click to insert):
     - `[ Generate Abstract ]`
     - `[ Generate Methods Summary ]`
     - `[ Generate Discussion ]`
     - `[ Generate Conclusion ]`
   - Tone selector: `[ Academic ] [ Executive ] [ Teaching-friendly ]`

5. **Tables Tab**
   - Pre-built tables from data
   - Outcome comparison table
   - Study characteristics table

**Bottom Toolbar**  
- `[ Undo ] [ Redo ]`
- `[ Preview ]` (full-page preview)
- `[ Save Draft ]`
- `[ Export ]` dropdown:
  - `[ Export as PDF ]`
  - `[ Export as DOCX ]`
  - `[ Export as PPTX ]` (multi-slide deck)
  - `[ Export as HTML ]`
  - `[ Generate & Download Metadata (JSON) ]`
- `[ Share Report Link ]`
- `[ Publish to Research Hub ]` (if org feature enabled)

**Inline Agent Assist**  
- Hover over any section → `[ AI assist ]` button
- Click → agent suggests improvements, adds citations, expands analysis
- User can accept/reject each suggestion

---

## Screen 6 — Discussions & Community Forum

### Purpose
Enable researchers and educators to share questions, best practices, and troubleshooting related to products and research outcomes.

### Design Intent
- Familiar forum UI (like Stack Overflow for research).
- Filter by product, topic, status.
- Upvoting, tagging, expert flagging.
- AI-powered consensus summarization on long threads.
- Linkage to supporting papers.

### Layout (Visual Blueprint)

**Header (fixed)**  
Same as Screen 1–2.

**Page Title**  
`Research Community & Discussions`

**Top Navigation Tabs**  
`[ All Discussions ] [ My Threads ] [ Following ] [ Unanswered ] [ Expert Answers ]`

**Search + Quick Filters (full-width)**  
- Search box: `[ 🔍  Search discussions... ]`
- Quick filters:
  - `[ PowerLab ]` `[ LabChart ]` `[ Lt ]` `[ All Products ▼ ]`
  - `[ Last 24h ] [ This week ] [ This month ] [ Anytime ]`
  - `[ Unanswered ] [ Answered ] [ Expert flagged ]`

**Left Sidebar — Advanced Filters**  
- **Topic Tags** (searchable, multi-select):
  - Calibration, Signal Noise, Teaching, Data Export, Hardware Integration, etc.
- **Solved Status**:
  - ✓ Solved, ✗ Unsolved, ⚠ Partially Solved
- **Expert Involvement**:
  - Has expert answer, No expert yet
- **Your Role**:
  - Creator, Responder, Follower

**Main Feed (center)**  
Thread listing with:
- **Thread Title** (linked to thread view)
- **Posted by**: User avatar + name
- **Timestamp**: "2 days ago"
- **Product** tag(s): `[ PowerLab 35 ]`
- **Topic** tags: `[ Calibration ]` `[ Signal Noise ]`
- **Quick Metrics**:
  - 📝 3 replies
  - 👁 24 views
  - 👍 5 upvotes
- **Preview** of question (first 100 chars)
- **Status indicator**: ✓ Solved, ⭐ Expert answer, 🔥 Trending (high views)
- **Quick Action**: `[ View Thread ]`

**Sorting Options**:
- Most recent, Most viewed, Most upvoted, Trending (activity + views), Unanswered

---

## Screen 6b — Thread Detail View

### Purpose
Expand a specific discussion thread with full conversation, linked papers, and AI consensus.

### Layout (Visual Blueprint)

**Thread Header**  
- **Title**: Bold, large font
- **Posted by**: Avatar + name + "Community Member" or "Verified Expert"
- **Posted**: Date + time
- **Product**: `[ PowerLab 35 ]` tag
- **Topic**: `[ Calibration ]` `[ Signal Noise ]` tags
- **Follow Thread**: `[ Follow ]` button (turns to "Following" when clicked)
- **Report**: `[ ... ]` menu

**Original Question**  
- Full text of question
- Any attached images/data
- Status badge: "Solved" or "Unanswered"

**Agent Consensus Panel (collapsible, below question)**  
- **AI Summary of Discussion**:
  - *"3 responses addressing calibration drift in long-term PowerLab 35 use. Consensus: firmware v2.1+ includes automatic recalibration. Unresolved: impact on archived data."*
- **Related Papers**: `3 papers on calibration` (linked from research explorer)
- **Suggested Answer**: If no expert answered yet, agent presents synthesized answer from papers + forum history

**Responses Section**  
Each response contains:
- **User info**: Avatar + name + badge (Expert, Community Contributor, etc.)
- **Timestamp**: "1 day ago"
- **Response text**: Full message
- **Embedded code/data**: If applicable
- **Reaction buttons**: 👍 (count), 💬 (reply), 🔖 (bookmark)
- **Mark as accepted answer**: If user is thread creator

**Related Research Papers**  
- Smart linking: AI auto-detects related papers from Research Explorer
- Users can manually link papers
- Section shows: Paper title, authors, link to full paper, relevance badge

**Bottom Action Bar**  
- `[ Add Reply ]` (expands to text editor)
- `[ Add Evidence (Paper) ]`
- `[ Generate Discussion Summary Report ]`

---

## Screen 7 — World Impact Analysis (Strategic Dashboard)

### Purpose
Executive-level analytics showing ADInstruments' global research impact, influence, and strategic positioning across industries, geographies, and scientific domains.

### Design Intent
- C-suite ready (investors, executives, board members).
- Demonstrates ROI of Research Intelligence platform.
- Global reach visualization with regional deep-dives.
- Citation influence & thought leadership metrics.
- Competitive positioning & market penetration.
- Breakthrough discoveries powered by ADInstruments.

### Layout (Visual Blueprint)

**Header (fixed)**  
`ADInstruments Logo | Dashboard | Research Explorer | Knowledge Graph | Product Impact | Reports | Discussions | World Impact | Settings`  
Right: `User Avatar | Storage Indicator | [ Export Strategic Brief ]`

**Page Title + Tagline**  
`ADInstruments Research Impact — Global Influence Across Life Sciences`  
Subtitle: `50,000+ citations | 100+ top universities | 10,000+ organizations | 40 years of innovation`

**Top Summary Cards (5-column grid, animated counters)**  
Each card shows metric + trend indicator:

- **Global Papers Indexed**
  - `18,547` papers
  - Trend: ↑ +23% YoY
  - Icon: 📄

- **Research Citations**
  - `50,347` peer-reviewed citations
  - Trend: ↑ +18% YoY
  - Icon: 📚

- **Active Institutions**
  - `3,284` universities & research centers
  - Trend: ↑ +12% YoY
  - Icon: 🏛️

- **Clinical Deployments**
  - `427` active clinical sites
  - Trend: ↑ +28% YoY
  - Icon: 🏥

- **Educational Programs**
  - `892` universities using Lt/LabChart
  - Trend: ↑ +34% YoY
  - Icon: 📊

**Section 1: Global Geographic Impact**  

**Primary Visualization: Interactive World Map (full-width, interactive)**
- **Map layers**:
  - Paper density by region (color intensity: #003DA5 shades)
  - Deployment markers (🏥 clinical, 🏛️ academic, 📚 educational)
  - Research institution clusters
  - Citation influence hotspots
- **Size of bubbles** = Research volume
- **Color saturation** = Citation impact
- **Click region** → reveals:
  - Region-specific metrics
  - Top 5 institutions
  - Emerging trends
  - Key papers + breakthroughs
  - Regional research focus areas

**Regional Cards (4-column grid below map)**  
Each region card displays:

- **North America** 🇺🇸🇨🇦
  - Papers: 5,284 (28% global)
  - Citations: 14,821 (29% global)
  - Top institution: Johns Hopkins University (156 papers)
  - Trend: Cardiology research surge (+45% YoY)
  - Key breakthrough: Remote patient monitoring using PowerLab Sensors
  - `[ View Details ]`

- **Europe** 🇪🇺
  - Papers: 6,128 (33% global)
  - Citations: 17,294 (34% global)
  - Top institution: University of Cambridge (189 papers)
  - Trend: EU regulatory compliance research (+52% YoY)
  - Key breakthrough: Multi-site clinical trials with synchronized LabChart
  - `[ View Details ]`

- **Asia-Pacific** 🌏
  - Papers: 4,627 (25% global)
  - Citations: 12,408 (25% global)
  - Top institution: University of Tokyo (143 papers)
  - Trend: Teaching & online learning adoption (+67% YoY)
  - Key breakthrough: Lt platform reaches 500K+ students in 2024
  - `[ View Details ]`

- **Rest of World** 🌍
  - Papers: 2,508 (14% global)
  - Citations: 6,824 (12% global)
  - Emerging leaders: University of São Paulo, University of Cape Town
  - Trend: Growing adoption in emerging markets (+38% YoY)
  - Key breakthrough: First Lt deployment in sub-Saharan Africa
  - `[ View Details ]`

---

**Section 2: Research Domain Influence**

**Treemap Visualization (proportional to citation impact)**  
Hierarchical breakdown of research domains:

```
[LIFE SCIENCES RESEARCH IMPACT]
┌─────────────────────────────────────────────────────────────────┐
│  PHYSIOLOGY (18,294 citations, 34%)                              │
│  ┌──────────────┐ ┌──────────────┐ ┌─────────────────────────┐  │
│  │Cardiovascular│ │Respiratory   │ │Neuroscience             │  │
│  │ 8,147 cites  │ │ 5,621 cites  │ │ 4,526 cites             │  │
│  └──────────────┘ └──────────────┘ └─────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│  PHARMACOLOGY (12,847 citations, 25%)                            │
│  ┌──────────────┐ ┌──────────────┐ ┌─────────────────────────┐  │
│  │Drug Testing  │ │Toxicology    │ │Efficacy Studies         │  │
│  │ 6,284 cites  │ │ 4,123 cites  │ │ 2,440 cites             │  │
│  └──────────────┘ └──────────────┘ └─────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│  EDUCATION & TEACHING (11,563 citations, 23%)                   │
│  ┌──────────────┐ ┌──────────────┐ ┌─────────────────────────┐  │
│  │STEM Training │ │Hands-on Lab  │ │Online Learning          │  │
│  │ 5,821 cites  │ │ 3,642 cites  │ │ 2,100 cites             │  │
│  └──────────────┘ └──────────────┘ └─────────────────────────┘  │
├─────────────────────────────────────────────────────────────────┤
│  VETERINARY & ANIMAL RESEARCH (7,043 citations, 14%)             │
│  ┌──────────────┐ ┌──────────────┐                               │
│  │Animal Models │ │Wildlife Study│                               │
│  │ 3,821 cites  │ │ 3,222 cites  │                               │
│  └──────────────┘ └──────────────┘                               │
└─────────────────────────────────────────────────────────────────┘
```

**Domain Insights Panel (right sidebar)**  
- **Fastest growing domain**: Teaching & Online Learning (+67% YoY)
- **Highest citation domain**: Physiology (34% of all citations)
- **Emerging research area**: Remote patient monitoring (5% of recent papers)
- **AI integration opportunity**: Detected in 12% of recent papers combining ADI hardware + machine learning

---

**Section 3: Product Performance Ecosystem**

**Product Comparison Matrix (Interactive heatmap)**

|  | **PowerLab 35** | **PowerLab Sensors** | **LabChart 8** | **Lt** | **Lt LabStation** |
|---|---|---|---|---|---|
| **Papers Published** | 8,247 | 3,621 | 6,894 | 5,142 | 2,108 |
| **Avg Citations/Paper** | 4.2 | 3.8 | 3.9 | 2.1 | 2.3 |
| **Active Research Sites** | 1,284 | 621 | 1,847 | 2,156 | 412 |
| **Teaching Deployments** | 234 | 1,823 | 892 | 4,284 | 1,156 |
| **Clinical Sites** | 156 | 87 | 89 | 12 | 4 |
| **YoY Growth** | +12% | +34% | +8% | +45% | +28% |
| **Emerging Use Cases** | Remote monitoring | Wearable integration | ML pipelines | Online learning | Offline labs |
| **Strategic Priority** | 🔴 Mature | 🟢 Growth | 🟡 Stable | 🟢 Explosive | 🟡 Emerging |

**Hover on cell** → shows breakdown:
- Top papers for that product in that category
- Key institutions using the combination
- Citation impact trend (3-year history)

---

**Section 4: Breakthrough Discoveries & Case Studies**

**Spotlight Cards (3-column grid, curated success stories)**

1. **Cardiology Research Revolution** 🏥
   - **Impact**: 34 high-impact papers using PowerLab 35 in arrhythmia detection
   - **Citation reach**: 847 citations across 5 countries
   - **Real-world outcome**: FDA approval of 2 new diagnostic devices (2023–2024)
   - **Quote**: *"PowerLab's real-time signal processing was critical to our breakthrough in early arrhythmia detection." — Dr. Sarah Chen, Johns Hopkins*
   - **Products used**: PowerLab 35 Series + LabChart 8
   - `[ Read full case study ]` `[ View related papers ]`

2. **Global Teaching Transformation** 📚
   - **Impact**: Lt platform now reaches 500K+ students in 92 countries
   - **Citation reach**: 2,100 citations on educational effectiveness
   - **Real-world outcome**: 67% of top universities now use Lt for physiology courses
   - **Quote**: *"Online learning was impossible before Lt. Now our students in rural India have access to the same lab experience as Cambridge." — Prof. Rajesh Patel, IIT Delhi*
   - **Products used**: Lt + PowerLab Sensors
   - `[ Read full case study ]` `[ View adoption map ]`

3. **Remote Patient Monitoring Pioneer** 🏥📱
   - **Impact**: PowerLab Sensors + wearable integration enables continuous monitoring
   - **Citation reach**: 156 papers (emerging category, +89% YoY)
   - **Real-world outcome**: 12 hospitals now running remote cardiac monitoring (2024)
   - **Quote**: *"We reduced hospital readmissions by 34% using remote monitoring with PowerLab Sensors." — Dr. Thomas Mueller, Berlin Charité Hospital*
   - **Products used**: PowerLab Sensors + LabChart Wearables Module
   - `[ Read full case study ]` `[ View deployment map ]`

---

**Section 5: Citation Influence Network**

**Citation Network Graph (Sigma.js visualization)**  
Shows how ADInstruments-powered research cascades through scientific community:

- **Largest nodes** = Most-cited papers using ADI products
- **Node color** = Domain (blue=physiology, green=pharmacology, orange=education)
- **Edge thickness** = Citation relationship strength
- **Hover node** → shows:
  - Paper title + authors
  - Citation count
  - Domain + keywords
  - Related breakthrough insights

**Key Metrics displayed on graph**:
- **Highest impact paper**: "Real-time multimodal recording in conscious primates" (847 citations)
- **Citation reach**: 6 degrees of separation to 50,000+ researchers
- **Influence score**: ADI products now influence 23% of new physiology research

---

**Section 6: Emerging Trends & Strategic Foresight**

**Trend Radar (4-quadrant strategic matrix)**

```
                    HIGH IMPACT
                         ▲
                         │
        INNOVATE          │         LEVERAGE
      (Invest now)        │       (Accelerate)
                    ┌─────┼─────┐
                    │  AI  │ * MW│
                    │ ML * │   * │
                    │  *   │ WEAR│
     ────────────────────┼─────────────────► ADOPTION
                    │  *  │  * R│
                    │ BIO │ GENE│
                    │IMPLANT
                    └─────┼─────┘
      EXPLORE            │         MONITOR
    (Watch & learn)      │         (Low priority)
                         │
                         ▼
                     LOW IMPACT

LEGEND:
* AI/ML = AI-assisted signal analysis
* MW = Multi-wavelength optical sensing
* WEAR = Wearable + remote monitoring integration
* R = Regulatory compliance automation
* GENE = Gene expression real-time monitoring
* BIOIMPLANT = Implantable sensors
```

**Trend Cards (below quadrant)**

**🚀 LEVERAGE: Wearable & Remote Monitoring Integration**
- Adoption rate: 23% of new projects (up from 8% last year)
- Citation trend: ↑ +89% YoY
- Key players: 12 hospitals + 34 research groups
- ADI product relevance: **HIGH** (PowerLab Sensors + LabChart integration)
- Recommendation: Expand marketing + product roadmap focus
- Investment horizon: 6–18 months to market leadership

**🔬 INNOVATE: AI/ML-Powered Signal Analysis**
- Adoption rate: 5% of projects (emerging)
- Citation trend: ↑ +156% YoY (highest growth)
- Key players: 5 AI labs, starting collaborations
- ADI product relevance: **MEDIUM** (requires LabChart API enhancement)
- Recommendation: Partner with AI/ML leaders, build API framework
- Investment horizon: 12–24 months to differentiation

**📊 MONITOR: Gene Expression Real-Time Monitoring**
- Adoption rate: 1% (niche)
- Citation trend: ↑ +45% YoY
- Key players: 2 biotech firms, 3 universities
- ADI product relevance: **LOW** (requires new hardware)
- Recommendation: Track competitive moves, consider acquisition/partnership
- Investment horizon: 24+ months

---

**Section 7: Regional Deep-Dive Dashboard**

**Interactive Region Selector** (tabs: North America | Europe | Asia-Pacific | Emerging Markets)

**North America Deep-Dive** (example):

**Sub-section A: Institution Ranking**
1. Johns Hopkins University — 156 papers, 2,847 citations, Cardiology focus
2. Stanford University — 134 papers, 2,421 citations, Biomedical engineering
3. MIT — 128 papers, 2,156 citations, Signal processing + AI integration
4. Harvard Medical School — 112 papers, 1,987 citations, Pharmacology
5. UC San Diego — 98 papers, 1,634 citations, Neuroscience
`[ View all institutions ] [ Export ranking ]`

**Sub-section B: Research Focus Heatmap**
Visualization showing which research areas are strongest in North America:
- Cardiology: ████████████ (34% of NA papers)
- Pharmacology: ████████ (23%)
- Neuroscience: ██████ (18%)
- Education: ███ (15%)
- Veterinary: ██ (10%)

**Sub-section C: Competitive Landscape**
Compare ADInstruments market share vs. competitors in North America:
- ADInstruments: 42% of research institutions use our products
- Competitor A: 28%
- Competitor B: 18%
- Others: 12%
`[ Drill into competitive analysis ] [ Citation advantage breakdown ]`

**Sub-section D: Growth Opportunities**
- Fastest growing institutions (not yet using ADI): MIT, Caltech, Johns Hopkins AI Lab
- Emerging markets: Telemedicine research (+78% YoY), Rural healthcare (+45% YoY)
- Recommended partnership targets: 5 biotech firms, 3 healthcare networks
`[ View outreach strategy ]`

---

**Section 8: Strategic Metrics & KPIs**

**4-Metric Scorecard**:

```
┌────────────────────────┐  ┌────────────────────────┐
│ RESEARCH LEADERSHIP    │  │ MARKET PENETRATION     │
│ Citation Influence     │  │ Institution Adoption   │
│                        │  │                        │
│      23% of global     │  │    42% of top 100     │
│   physiology research  │  │   universities using   │
│  cites ADI products    │  │   ADI products         │
│                        │  │                        │
│    Trend: ↑ +18%/yr   │  │    Trend: ↑ +12%/yr   │
│  Target 2026: 28%     │  │  Target 2026: 52%     │
└────────────────────────┘  └────────────────────────┘

┌────────────────────────┐  ┌────────────────────────┐
│ INNOVATION VELOCITY    │  │ EMERGING OPPORTUNITY   │
│ New Use Cases Enabled  │  │ AI/ML Integration      │
│                        │  │                        │
│     12 breakthrough    │  │   156 new papers/yr   │
│   discoveries/yr using │  │  combining ADI +      │
│   ADI products alone   │  │  machine learning      │
│                        │  │                        │
│    Trend: ↑ +28%/yr   │  │    Trend: ↑ +156%/yr  │
│  Target 2026: 18      │  │  Target 2026: 400+    │
└────────────────────────┘  └────────────────────────┘
```

---

**Section 9: Export & Collaboration**

**Bottom Action Bar**:
- `[ Export Strategic Brief ]` (PPTX, 20-slide executive summary)
- `[ Export Data Report ]` (XLSX with all metrics, trends, institution data)
- `[ Share Dashboard ]` (link + password protected)
- `[ Schedule Board Presentation ]` (auto-generates talking points)
- `[ API: Embed in corporate website ]` (widget for investor relations)

---

**World Impact Analytics: Data Model**

**Real-time Data Sources**:
1. **Paper Index** (18,547 papers) — ingested from PubMed, arXiv, bioRxiv, institutional repositories
2. **Citation Graph** (50,347 citations) — parsed from CrossRef, Google Scholar APIs
3. **Institution Directory** (3,284 org records) — maintained with ROR (Research Organization Registry)
4. **Deployment Database** (427 clinical + 2,156 teaching sites) — sales + support team feedback
5. **Trend Signals** (web crawl + social signals) — emerging research keywords, conference presentations, social media

**Update Frequency**:
- Paper/citation data: Daily
- Institution metrics: Weekly
- Regional trends: Weekly
- Benchmark comparisons: Monthly
- Strategic forecasts: Quarterly

**Visualization Libraries**:
- World map: Mapbox GL / Leaflet with custom styling
- Treemaps: D3.js (sunburst or treemap layout)
- Citation network: Sigma.js
- Heatmaps: Apache ECharts
- Trend radar: Custom D3 quadrant chart
- Time series: Chart.js or Recharts

---

**Strategic Use Cases for World Impact Dashboard**

### Use Case 1: C-Suite Board Presentation
- Exec opens World Impact Dashboard
- Clicks `[ Schedule Board Presentation ]`
- System auto-generates PPTX:
  - Slide 1: Global research impact summary
  - Slide 2–3: Geographic breakdown + regional growth
  - Slide 4: Citation influence network
  - Slide 5: Domain-specific breakthroughs
  - Slide 6: Competitive positioning
  - Slide 7–8: Trend forecast + strategic opportunities
  - Slide 9: KPI dashboard + 2026 targets
- Exports + shares with board members

### Use Case 2: Marketing Campaign Planning
- Marketing manager opens Regional Deep-Dive (Europe)
- Identifies top 5 growing institutions not yet using ADI
- Clicks `[ View outreach strategy ]`
- System recommends:
  - Personalized case study (based on institution's research focus)
  - Relevant conference sponsorships (where their researchers present)
  - Key opinion leader partnerships (top 3 cited authors in their region)
- Creates targeted campaign with estimated ROI

### Use Case 3: Product Strategy & R&D Planning
- R&D director views Trend Radar
- Identifies "AI/ML-Powered Signal Analysis" in INNOVATE quadrant
- Clicks `[ Drill into trend ]`
- System shows:
  - 156 new papers combining ADI + ML (↑ +156% YoY)
  - Top 5 AI labs currently experimenting
  - Technical requirements for ADI products to participate
  - Competitive threats (other hardware with ML integration)
  - Recommended R&D roadmap + timeline (12–24 months)
- Exports as strategic white paper for exec alignment

### Use Case 4: Investor Relations & Fundraising
- CFO preparing for investor meeting
- Opens World Impact Dashboard, clicks `[ Export Strategic Brief ]`
- Sends PPTX to investors showing:
  - 40-year track record + 50K+ citations
  - 23% influence on global physiology research
  - 42% penetration in top 100 universities
  - $XXM TAM expansion in wearable + remote monitoring
  - Product roadmap aligned with emerging trends
- Investors impressed → increased valuation, funding round success

---

## Design System & Component Library

### Color Palette
- **Primary**: #003DA5 (ADInstruments blue)
- **Secondary**: #00A86B (Success/healthy signal green)
- **Accent**: #FF6B35 (Alert/highlight orange)
- **Neutral**: #F5F5F5 (Light gray background), #333333 (Dark text)
- **Status**:
  - ✓ Success: #00A86B
  - ⚠ Warning: #FF9800
  - ✗ Error: #E53935
  - ℹ Info: #2196F3

### Typography
- **Heading 1** (Page title): 32px, bold, #003DA5
- **Heading 2** (Section title): 24px, semibold, #003DA5
- **Heading 3** (Card title): 18px, semibold, #333333
- **Body text**: 14px, regular, #555555
- **Caption/metadata**: 12px, regular, #999999
- **Code/data**: Monospace, 12px, #333333

### Buttons & CTAs
- **Primary Button**: Blue (#003DA5), white text, 12px padding, rounded corners (4px)
- **Secondary Button**: Light gray (#F5F5F5) background, blue text, same padding
- **Tertiary Button**: No background, blue text, underline on hover
- **Icon Button**: Circle background on hover, 24x24px icons
- **Disabled**: 50% opacity, gray text

### Cards & Panels
- **Elevation**: Subtle shadow (0 2px 8px rgba(0,0,0,0.1))
- **Border radius**: 8px
- **Padding**: 16px (standard), 12px (compact)
- **Hover**: Subtle shadow increase, light background tint

### Charts & Visualizations
- **Line charts**: Blue line, light blue fill under curve
- **Bar charts**: Gradient from light to dark blue, grouped by outcome type
- **Pie/Donut**: Segmented by outcome, each segment labeled with count + percentage
- **Heatmaps**: Green (high) → Yellow (medium) → Red (low)
- **Knowledge graph nodes**: Sized by influence, colored by entity type

### Responsive Breakpoints
- **Desktop**: 1920px, 1440px, 1280px
- **Tablet**: 768px, 834px
- **Mobile**: 375px, 425px (future enhancement)

### Interactions
- **Hover states**: All clickable elements show cursor change + visual feedback
- **Loading states**: Skeleton screens for data-heavy components
- **Modals**: Semi-transparent overlay, centered 500px-wide forms
- **Tooltips**: 300ms delay, dark background with white text, arrow pointing to trigger
- **Drag-and-drop**: Visual feedback (ghost image, highlight drop zone)
- **Notifications**: Toast notifications (top-right, auto-dismiss after 5 seconds)

### Accessibility
- **WCAG 2.1 AA** compliance
- Sufficient color contrast (4.5:1 for text)
- Keyboard navigation support (Tab, Enter, Arrow keys)
- Screen reader labels on all interactive elements
- Focus indicators visible on all buttons
- Alt text for all images and charts
- Form fields with clear labels and error messages

---

## User Journey Flows (End-to-End)

### Journey A: Product Performance → Publication-Ready Report

**Flow Diagram**:
```
Dashboard (Product selected)
    ↓
Product Impact Dashboard (review metrics, charts)
    ↓
[ Explore Papers ] → Research Explorer (find supporting evidence)
    ↓
[ Add to Report ] (accumulate papers + charts)
    ↓
[ Open Report Studio ] (create structured report)
    ↓
Knowledge Graph (optional: visualize product ecosystem)
    ↓
[ Export Report ] (PDF/DOCX/PPTX)
    ↓
Share with team / Submit to publication
```

**Key Touchpoints**:
1. Dashboard summary → entry point
2. Impact Dashboard → validates product ROI
3. Research Explorer → builds evidence base
4. Report Studio → composes narrative
5. Export → distribution

**Agent Involvement**:
- Auto-suggest related papers
- Generate abstract, discussion, conclusion
- Flag conflicting evidence
- Recommend citations

---

### Journey B: Community Problem-Solving → Evidence Summary

**Flow Diagram**:
```
Discussions (find active thread on calibration)
    ↓
Thread Detail (read consensus, agent summary)
    ↓
[ Related Research ] (AI-linked papers)
    ↓
Research Explorer (deep-dive into papers)
    ↓
[ Add to Report ] (build evidence doc)
    ↓
Report Studio (create summary brief)
    ↓
Share with community / Product team
```

**Key Touchpoints**:
1. Discussion forum → problem discovery
2. Thread consensus → quick answer
3. Linked papers → validation
4. Report Studio → formalization

**Agent Involvement**:
- Synthesize thread consensus
- Link relevant papers automatically
- Generate summary report
- Flag for expert response if needed

---

### Journey C: Trend Analysis → Strategic Insight

**Flow Diagram**:
```
Dashboard (Trending Topics card)
    ↓
[ Explore in Knowledge Graph ]
    ↓
Knowledge Graph (focus on trend nodes)
    ↓
[ Filter by Region/Product ]
    ↓
Product Impact Dashboard (confirm trend relevance)
    ↓
[ Add Cluster Snapshot ] → Report Studio
    ↓
Generate Strategic Report (PPTX)
    ↓
Present to management
```

**Key Touchpoints**:
1. Dashboard trends → strategic entry
2. Knowledge Graph → trend visualization
3. Impact Dashboard → product alignment
4. Report Studio → presentation creation
5. Export → stakeholder communication

**Agent Involvement**:
- Detect emerging trends
- Rank cluster importance
- Generate executive summary
- Predict growth trajectory

---

## Data Model & Integration Points

### Key Entities
1. **Products** (PowerLab 35, LabChart, Lt, PowerLab Sensors)
2. **Papers** (title, authors, abstract, PDF, embeddings, citations)
3. **Outcomes** (Accuracy, Stability, Teaching, Clinical adoption, etc.)
4. **Institutions** (universities, hospitals, organizations)
5. **Discussions** (threads, posts, votes, resolutions)
6. **Knowledge Graph Nodes** (products, outcomes, institutions, trends)
7. **Reports** (user-created documents, metadata, export formats)
8. **Users** (researchers, educators, admins, roles)

### API Endpoints (Rust Microservices)
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

### Real-time Features (WebSockets / SSE)
- **Agent streaming**: Long-running agent tasks (summarization, report generation) stream to UI
- **Collaborative editing**: Multiple users editing same report in Report Studio
- **Live discussion updates**: New replies appear in real-time on thread view
- **Notification feed**: User alerts (new papers, replies, trend alerts)

---

## Mobile/Responsive Considerations

### Tablet (768px+)
- Left sidebar collapses to hamburger menu
- Charts stack vertically
- Full functionality maintained
- Touch-friendly button sizing (48px min)

### Mobile (375px+) — Future Phase
- Single-column layout
- Cards take full width
- Simplified chart views (mobile-optimized D3)
- Reduced filter options in sidebar (primary filters only)
- Bottom tab navigation (Dashboard, Explorer, Knowledge Graph, Reports, Discussions)
- Swipe gestures for navigation

---

## Implementation Roadmap

### Phase 1 (MVP — Weeks 1–4)
- Dashboard (basic)
- Research Explorer (search + filter)
- Paper ingestion workflow
- Basic Report Studio (text + paper cards)
- Discussions (read-only, no agent)

### Phase 2 (Weeks 5–8)
- Product Impact Dashboard
- Knowledge Graph visualization
- Agent-powered summarization
- Report export (PDF)
- Discussion threading + replies

### Phase 3 (Weeks 9–12)
- Advanced Report Studio (drag-drop charts, AI text generation)
- Export formats (DOCX, PPTX)
- Trend detection & alerts
- Expert flagging in discussions
- Real-time collaboration

### Phase 4 (Weeks 13+)
- Mobile-responsive design
- Advanced analytics dashboard
- Integrations (Zotero, Notion, etc.)
- Public report gallery
- API for third-party integrations

---

## Success Metrics

### User Engagement
- Daily Active Users (DAU) in Research Explorer
- Average session duration
- Report creation rate (reports/user/month)
- Knowledge Graph exploration depth (avg nodes visited)

### Content Metrics
- Papers ingested per week
- Discussion thread creation rate
- Average response time to unanswered questions
- Consensus resolution rate

### Report Quality
- Export count (PDF/DOCX/PPTX)
- Report completion rate (drafts → exported)
- Average report length + chart count
- User satisfaction (quick survey after export)

### Community Health
- Discussion upvote rate
- Expert participation % (replies from verified researchers)
- Duplicate question detection (agent preventing redundancy)
- Knowledge reuse (papers cited across reports)

---

## Future Enhancements

1. **Integration with External Resources**
   - DOI linking to PubMed, arXiv, Scopus
   - Cross-reference with other research tools (Zotero, Mendeley)

2. **Collaborative Features**
   - Multi-user report editing with change tracking
   - Team workspaces + shared libraries
   - Research group dashboards

3. **Advanced Analytics**
   - Predictive models (next breakthrough outcome)
   - Competitive product analysis
   - Market segment profiling (by region, institution type)

4. **Educational Features**
   - Template reports for teaching scenarios
   - Student submission + grading workflows
   - Peer review workflows in discussions

5. **API & Webhooks**
   - External app integrations
   - Custom report automation
   - Data export pipelines

---

## Notes for Development Team

1. **Paper Injection Pipeline**:
   - Accept PDF, TXT, DOC formats
   - Extract metadata (title, authors, abstract, DOI)
   - Generate embeddings for semantic search
   - Build HNSW index for fast retrieval

2. **Knowledge Graph Construction**:
   - Extract entities from papers (products, outcomes, institutions, authors)
   - Build relationships based on co-occurrence, citations, semantics
   - Use clustering algorithms (Louvain, K-means) to detect communities

3. **Agent Architecture**:
   - Multi-agent system (summary agent, insights agent, text-gen agent, trend agent)
   - Use LLM (GPT-4, Claude) with RAG (Retrieval-Augmented Generation) from papers
   - Stream responses to UI via SSE

4. **Local Storage**:
   - User-specified storage path for cached papers + indices
   - SQLite or DuckDB for local query execution
   - Sync with cloud backend periodically

5. **Real-time Sync**:
   - Conflict resolution for concurrent edits
   - Offline-first approach (local edits, sync on reconnect)

---

## Appendix: Sample Research Scenarios

### Scenario 1: Dr. Sarah (Cardiovascular Researcher)
**Goal**: Publish a paper on PowerLab's impact on blood pressure measurement accuracy.

1. Opens Dashboard, selects PowerLab 35 Series
2. Reviews Impact Dashboard → sees 34 papers on accuracy
3. Uses Research Explorer to filter for "Peer-reviewed + High-citation" accuracy papers
4. Adds 12 key papers to Report Studio
5. Selects IMRAD template
6. Drags charts from Impact Dashboard into Results section
7. Clicks "Generate Discussion" → agent suggests key talking points from similar papers
8. Exports as DOCX → shares with co-authors
9. Uses Discussions to resolve calibration question with community
10. Publishes report to Research Hub

### Scenario 2: Prof. James (Educator)
**Goal**: Create teaching material showing PowerLab's effectiveness in student learning.

1. Opens Discussions, filters by "Lt + Teaching Outcomes"
2. Finds 5 relevant threads with teaching best-practices
3. Each thread has AI consensus summary + linked papers
4. Adds papers + consensus snippets to Report Studio
5. Selects Teaching Material template
6. Drags in student outcome metrics from Impact Dashboard
7. Clicks "Generate Conclusion" → agent summarizes pedagogical impact
8. Exports as PPTX (6 slides) → ready for classroom
9. Shares with colleague network

### Scenario 3: Marketing Manager (ADInstruments)
**Goal**: Build executive summary showing market growth & clinical deployment trends.

1. Opens Knowledge Graph, enables "Trend Analysis" view
2. Identifies emerging clusters: EU teaching + remote monitoring
3. Applies Impact Dashboard filter for "PowerLab Sensors" → sees 45% YoY growth
4. Agent flags: "New use case emerging: wearable + remote monitoring"
5. Adds 3 growth charts + trend snapshot to Report Studio
6. Selects Product Impact Summary template
7. Clicks "Generate Executive Summary" → agent writes 2-page strategic overview
8. Exports as PPTX → presents to exec team
9. Links report in Discussions → "Market opportunity: remote monitoring"

---

**Document Version**: 1.0  
**Last Updated**: 2026-07-06  
**Design Lead**: Jess | AI Architecture: Multi-agent + Datalakehouse  
**Next Review**: Post-MVP (after Phase 1)
- **Region**

**Main Content Area**  

**Paper Card (repeated)**  
- Title: “Enhanced Physiological Measurement Accuracy Using…”
- Authors: `Smith et al. (2023)`
- Tags: `PowerLab • Clinical • High Quality`
- Outcome summary (agent-generated).
- Buttons:
  - `[ Add to Report ]`
  - `[ Open in Knowledge Graph ]`

**Discussion Card (repeated)**  
- Thread title: “Best practices for using PowerLab in physiology labs”
- Source: `ADI Forum • 42 replies • High engagement`
- Buttons:
  - `[ Open Thread ]`
  - `[ Add to Report ]`

**Right Sidebar — Agent Insight Panel**  
- Title: `AI Insights`
- Content:
  - “Across 124 papers, the most common outcome is improved measurement accuracy.”
  - “Evidence quality is highest in EU physiology labs.”
  - “Suggested reading order for maximum insight:
    1. Paper A (2023)
    2. Paper B (2022)
    3. Paper C (2021)”
- Button: `[ Generate Summary Report ]`

**Footer**  
Same as Screen 1.

---

## Screen 3 — Knowledge Graph (Interactive)

### Purpose
Visualize relationships between products, papers, outcomes, institutions, and trends.

### Design Intent
- Scientific, interactive graph.
- Clear nodes and edges.
- Node details and agent insights.
- Exportable snapshots for reports.

### Layout (Visual Blueprint)

**Header (fixed)**  
Same as Screen 1.

**Page Title**  
`Knowledge Graph — Interpret Research Relationships`

**Top Control Bar**  
- `[ Zoom In ] [ Zoom Out ] [ Reset View ]`
- Filters:
  - `[ Year ▼ ] [ Outcome ▼ ] [ Evidence Quality ▼ ]`
- Actions:
  - `[ Snapshot as Image ]`
  - `[ Send to Report Studio ]`

**Main Graph Canvas**  
- Central product node (e.g., PowerLab).
- Connected nodes:
  - Paper nodes (blue).
  - Outcome nodes (green).
  - Institution nodes (purple).
  - Trend nodes (orange).
- Interactions:
  - Hover: highlight node and edges.
  - Click: isolate cluster (dim unrelated nodes).
  - Drag: reposition nodes.

**Right Sidebar — Node Details**  
Title: `Node Details`  
- **Product Node:**
  - “PowerLab is referenced in 124 papers across 32 institutions.”
  - Key outcomes: Accuracy ↑, Stability ↑
  - `[ Add Summary to Report ]`
- **Paper Node:**
  - Title, authors, year.
  - Short abstract.
  - Outcomes reported.
  - Evidence quality.
  - `[ Add to Report ]`
  - `[ Open Full Paper View ]`
- **Outcome Node:**
  - “Measurement Accuracy”
  - Supported by X papers.
  - Trend: increasing.
  - `[ Add Outcome Summary to Report ]`
- **Institution Node:**
  - Name (e.g., University of Otago).
  - Number of papers using product.
  - `[ Add Institution Summary ]`

**Bottom Agent Insight Bar (optional)**  
Title: `AI Insight`  
Content:
- “The strongest evidence cluster links PowerLab → Accuracy → EU Physiology Labs. This cluster has grown 22% in the last 3 years.”
- Button: `[ Generate Insight Report ]`

**Footer**  
Same as Screen 1.

---

## Screen 4 — Product Impact Dashboard

### Purpose
Visualize how an ADInstruments product performs across studies and contexts.

### Design Intent
- Scientific performance cockpit.
- Clear charts and maps.
- Evidence quality and trends.
- Export-ready analytics.

### Layout (Visual Blueprint)

**Header (fixed)**  
Same as Screen 1.

**Page Title**  
`Product Impact Dashboard — Real‑World Evidence for ADInstruments Products`

**Product Selector (full-width bar)**  
`[ PowerLab 35 Series ▼ ]`

**Main Grid — Four Analytics Panels (2x2)**  

1. **Usage Over Time (Line Chart)**
   - Papers per year (e.g., 2015–2025).
   - Trend line (agent-derived).
   - Hover tooltips: “Source: Paper X”.
   - Buttons:
     - `[ Expand Chart ]`
     - `[ Add to Report ]`

2. **Outcome Distribution (Bar/Pie Chart)**
   - Categories:
     - Accuracy
     - Stability
     - Teaching Outcomes
   - Buttons:
     - `[ Expand Chart ]`
     - `[ Add to Report ]`

3. **Geographical Spread (World Map)**
   - Institutions using the product.
   - Hover: “University of Otago — 12 papers”.
   - Buttons:
     - `[ Expand Map ]`
     - `[ Add to Report ]`

4. **Evidence Quality (Stacked Bar Chart)**
   - High / Medium / Low quality.
   - Agent note: “Quality trending upward.”
   - Buttons:
     - `[ Expand Chart ]`
     - `[ Add to Report ]`

**Right Sidebar — Agent Insight Panel**  
Title: `AI Insights`  
Content:
- “PowerLab shows strongest performance in physiology labs across Europe, with a 22% increase in high‑quality studies.”
- “Outcome improvements are most pronounced in measurement accuracy and signal stability.”
- “Emerging trend: increased use in teaching environments.”
- Button: `[ Generate Impact Summary ]`

**Bottom Export Bar**  
- `[ Export Dashboard as PDF ]`
- `[ Add All Charts to Report Studio ]`

**Footer**  
Same as Screen 1.

---

## Screen 5 — Report Studio

### Purpose
Enable users to build print-ready reports, scientific papers, presentations, and summaries.

### Design Intent
- Scientific publishing workspace.
- Drag‑and‑drop components.
- Agent-assisted text generation.
- Multi-format export.

### Layout (Visual Blueprint)

**Header (fixed)**  
Same as Screen 1.

**Page Title**  
`Report Studio — Build Scientific Reports, Presentations, and Summaries`

**Layout Selector (full-width bar)**  
- `[ Presentation ]`
- `[ Scientific Paper (IMRAD) ]`
- `[ Summary Brief ]`  
Selected: `Scientific Paper (IMRAD)`

**Main Workspace (Drag‑and‑Drop Canvas)**  
Sections:

- **Title & Abstract**
  - Drop zone for product summary, abstract generator.

- **Introduction**
  - Drop zone for background, trend summary, key papers.

- **Methods**
  - Drop zone for paper ingestion summary, data sources.

- **Results**
  - Drop zone for charts, knowledge graph snapshots, outcome metrics.

- **Discussion**
  - Drop zone for agent interpretation, evidence quality analysis.

- **Conclusion**
  - Drop zone for product impact summary, future work.

**Left Sidebar — Component Library**  
Title: `Components`  
Items:
- Paper Cards
- Charts (Line, Bar, Pie, Map)
- Knowledge Graph Snapshots
- Discussion Highlights
- Agent Summaries
- Outcome Metrics
- Trend Analysis
- Product Summary
- Institution Summary
- Custom Text Block
- Image Block

**Right Sidebar — Agent Assist Panel**  
Title: `AI Assistance`  
Content:
- “I can auto‑generate the Abstract, Introduction, Discussion, and Conclusion based on the components you add.”
- Buttons:
  - `[ Generate Abstract ]`
  - `[ Generate Discussion ]`
  - `[ Generate Conclusion ]`
- Tip:
  - “Add at least one chart and one paper for stronger evidence support.”

**Bottom Export Bar**  
- `[ Export as PDF ]`
- `[ Export as DOCX ]`
- `[ Export as PNG ]`
- `[ Export as PPTX ]`

**Footer**  
Same as Screen 1.

---

## Screen 6 — Discussions (Quora‑Style Forum)

### Purpose
Provide a structured community space for product-related questions, experiences, and practical knowledge.

### Design Intent
- Scientific discussion forum.
- Evidence-linked threads.
- Agent consensus summaries.
- Integration with reports and research explorer.

### Layout (Visual Blueprint)

**Header (fixed)**  
Same as Screen 1.

**Page Title**  
`Discussions — Community Insights & Real‑World Usage`

**Filter Bar (full-width)**  
- Filters:
  - `[ Product ▼ ]`
  - `[ Topic ▼ ]`
  - `[ Institution ▼ ]`
  - `[ Popularity ▼ ]`
- Search:
  - `[ 🔍 Search discussions… ]`

**Thread List (left, scrollable)**  

**Thread Card (repeated)**  
- Title: “Best practices for using PowerLab in physiology labs”
- Tags: `PowerLab • Physiology • High Engagement`
- Summary: “Users discuss calibration, signal stability, and setup…”
- Engagement: `42 replies • 318 upvotes`
- Buttons:
  - `[ Open Thread ]`
  - `[ Add to Report ]`

Another example:
- Title: “Troubleshooting LabChart signal noise”
- Tags: `LabChart • Signal Stability`
- Summary: “Common causes include cable issues, grounding…”
- Engagement: `27 replies • 190 upvotes`
- Buttons:
  - `[ Open Thread ]`
  - `[ Add to Report ]`

**Thread View (right side or full page)**  
- Thread title.
- Original question.
- Top answers (bullet list).
- Engagement metrics.
- Button:
  - `[ Add Thread to Report ]`

**Right Sidebar — Agent Consensus Panel**  
Title: `AI Consensus Summary`  
Content:
- “Across 42 replies, the consensus is:
  - Calibration before each session is essential.
  - Grounding issues are the most common cause of noise.
  - Shielded cables significantly improve stability.”
- “Related Evidence:
  - 3 papers reporting improved stability with grounding.
  - 2 papers linking calibration to measurement accuracy.”
- Button:
  - `[ Add Consensus Summary to Report ]`

**Footer**  
Same as Screen 1.

---
