🗺️ RoadSense — Municipal Dashboard (Frontend)

WitchHunt 2026 · Team LogicWeave
A React + Vite web dashboard that gives municipal officers real-time city-wide road health visibility, priority repair lists, and live pothole heatmaps.

Show Image Show Image Show Image Show Image

📁 Location: App.js inside roadsense_backend


📌 What is this dashboard?
This is the decision-support interface for municipal road maintenance officers. It consumes data from the RoadSense FastAPI backend and visualises city-wide road health in real time — showing which roads need urgent repair, where potholes are concentrated, and how road health is distributed across zones.
No manual data entry. No complaint forms. Just live intelligence from passive sensor data.

🏗️ Architecture — Where This Fits
roadsense_backend  (FastAPI)
        │
        │  GET /top-10-roads  →  priority segments + health scores
        │  POST /record-bump  →  live pothole classifications
        │
        ▼
   App.js  (React + Vite)
        │
        ├── Leaflet.js       →  OpenStreetMap heatmap overlay
        ├── Recharts         →  road health distribution charts
        └── Dynamic scoring  →  health score 0–100 per road segment

📁 File Location
roadsense_backend/
└── App.js          ← entire React frontend lives here
The frontend is co-located in the backend repo for POC simplicity. In Phase 2 it will be extracted into its own repo with a full Vite project structure.

✨ Features
FeatureLibraryDescriptionRoad heatmapLeaflet.js + OpenStreetMapLive colour-coded overlay of road health across the cityHealth distribution chartRechartsBar/pie chart showing breakdown of Good / Warning / Critical roadsTop-10 priority listGET /top-10-roadsRanked list of road segments needing immediate repairLive bump feedPOST /record-bumpReal-time stream of pothole detections as vehicles report inHealth score badgeDynamicEach segment displays a 0–100 score — lower = worse conditionResponsive layoutReact + CSSWorks on desktop and tablet screens for officer field use

⚙️ Quick Start
bash# Frontend is inside the backend repo
git clone https://github.com/ShwetaRawat09/roadsense_backend.git
cd roadsense_backend

# Install frontend dependencies
npm install

# Start the Vite dev server
npm run dev
Make sure the FastAPI backend is also running:
bash# In the same directory, in a separate terminal
uvicorn main:app --reload
# Backend → http://localhost:8000
# Frontend → http://localhost:5173

🔌 API Connections
The dashboard talks to two backend endpoints:
Road health map data
GET http://localhost:8000/top-10-roads

Response:
{
  "priority_segments": [
    { "segment_id": "ST-101", "health_score": 45 },
    { "segment_id": "ST-202", "health_score": 88 }
  ]
}
Health score colour mapping
ScoreStatusMap colour0 – 40🔴 CriticalRed41 – 70🟡 WarningAmber71 – 100🟢 GoodGreen

🖥️ Dashboard Panels
1. Heatmap (Leaflet.js + OpenStreetMap)
Interactive city map with colour-coded road segments. Officers can pan, zoom, and click any segment to view its health score and last reported bump events.
2. Health Distribution (Recharts)
Real-time chart showing the percentage of roads in Critical / Warning / Good condition across all monitored segments.
3. Top-10 Priority Repair List
Sorted table of the 10 road segments with the lowest health scores. Each row shows segment ID, location, health score, and last reported event.
4. Live Event Feed
Rolling ticker of incoming /record-bump events showing classification (Pothole / Speed Breaker / Normal) and severity in real time.

🗺️ Roadmap
PhaseStatusDashboard additionsPhase 1 — POC✅ CompleteLeaflet heatmap · Recharts distribution · top-10 listPhase 2 — Beta🔄 PlannedTailwind CSS redesign · zone-level filtering · repair status tracking · officer loginPhase 3 — Scale📋 Future90-day deterioration forecast view · budget optimisation tools · equity mapping layer · multi-city selector

🔗 Related Repositories
RepoDescriptionroadsense_backendFastAPI AI backend — also contains this frontendRoadSenseMobileExpo React Native mobile sensor app
