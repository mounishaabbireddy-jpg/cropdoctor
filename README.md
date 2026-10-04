# 🌱 Crop Doctor — AI-Powered Crop Disease Assistant

> **“Healthy crops. Better harvests.”**  
> An AI-powered agricultural health assistant that helps farmers identify crop diseases from leaf photos, receive personalized treatment guidance (both organic and conventional), and monitor micro-climate pathogen risk.

---

## 🌾 Overview & Design Aesthetic

**Crop Doctor** is crafted with a warm, trustworthy agricultural design philosophy:
- **Color Palette:**
  - **Forest & Botanical Greens:** `#166534`, `#15803d`, `#22c55e` (growth, leaf vigor, health)
  - **Earth-Browns & Terracotta:** `#533418`, `#8c5a2b`, `#c29b70` (rich fertile soil, stability, organic warmth)
  - **Linen & Cream:** `#faf7f2`, `#f4ede4`, `#ffffff` (approachable, high-contrast readability, clean presentation)
- **Typography:**
  - Headings: *Fraunces* (Editorial warmth, organic serif feel)
  - Body & Telemetry: *Plus Jakarta Sans* (Clear legibility in outdoor bright daylight)

---

## 🚀 Key Features

1. **AI Disease Detection:**
   - Real-time computer vision analysis on over 120 crop diseases (Late Blight, Rice Leaf Blast, Northern Corn Leaf Blight, Cedar Apple Rust, etc.).
   - Interactive leaf scanner preview with laser scanline, lesion bounding boxes, and pathogen probability scores.

2. **Dual-Path Treatment Plans:**
   - **Certified Bio-Organic:** Neem extracts, *Bacillus subtilis*, *Trichoderma*, and compost teas.
   - **Targeted Chemical & Conventional:** Strict active ingredient recommendations, tank mixing ratios for standard 16L knapsack sprayers, and safety Pre-Harvest Intervals (PHI).

3. **Weather Alerts & Micro-Climate Telemetry:**
   - Predictive 7-day disease risk index mapped directly to atmospheric humidity forecasts and rainfall warnings.
   - Interactive **"Simulate Weather Spike"** button to demonstrate live risk index recalculation in real-time.

4. **Multi-Plot Crop Health Dashboard:**
   - Switch seamlessly between Plot A (Greenhouse Tomatoes), Plot B (Paddy Rice), and Plot C (Cornfield).
   - Real-time Chart.js interactive visualization tracking disease vulnerability vs humidity.

5. **24/7 Agri-Doctor AI Chat Assistant:**
   - Ask agronomy questions about spray mixing, organic pest repellents, fertilizer adjustments, and harvesting rules.
   - Includes quick-prompt chips for instant queries.

6. **Farmer Voice & Proven Impact:**
   - Field testimonials from smallholders and cooperatives worldwide.
   - Over 12.4M leaves analyzed and \$18.2M in prevented crop losses.

7. **Downloadable Clinical Prescription (Rx):**
   - Click "Prescription Rx" to view and print an official pathology prescription with certified treatment protocols and agronomist signature.

---

## 🛠️ How to Run Locally

You can open the website directly in any web browser without needing any build tools!

### Option 1: Direct File Open
Double click or open `index.html` in your favorite web browser (Chrome, Edge, Firefox, Safari):
```
file:///C:/Users/Dell/.gemini/antigravity/scratch/crop-doctor/index.html
```

### Option 2: Local Python Server (Recommended for Mobile Testing)
Run the built-in Python server in the project directory:
```bash
cd C:\Users\Dell\.gemini\antigravity\scratch\crop-doctor
python -m http.server 8000
```
Then visit:
```
http://localhost:8000
```

---

## 📱 Accessibility & Mobile Responsiveness
- Accessible semantic HTML5 landmarks (`header`, `main`, `section`, `aside`, `footer`).
- Responsive layouts for phone, tablet, and widescreen displays.
- High color contrast compliant with WCAG AA outdoor visibility guidelines.
- Mobile touch-friendly buttons and camera upload triggers.
