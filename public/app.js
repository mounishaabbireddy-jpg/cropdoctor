// Crop Doctor - Interactive Agricultural Intelligence Engine

// 1. Disease Database
const CROP_DATABASE = {
  tomato_blight: {
    id: "tomato_blight",
    cropName: "Tomato (Solanum lycopersicum)",
    diseaseName: "Late Blight",
    scientificName: "Phytophthora infestans",
    confidence: "98.4%",
    severity: "Critical",
    severityColor: "red",
    statusBadge: "Active Pathogen Infection",
    image: "https://images.unsplash.com/photo-1592417817098-8f3d6ef23e80?auto=format&fit=crop&w=800&q=80",
    summary: "Late Blight is an aggressive, fast-spreading water mold that can wipe out entire tomato fields within 7–10 days under humid conditions.",
    symptoms: [
      "Irregular dark brown to olive-green water-soaked lesions on leaflets",
      "White fuzzy sporulation on leaf undersides during moist mornings",
      "Brownish-black necrotic lesions spreading rapidly down petioles and stems",
      "Firm, rough dark lesions on fruit that lead to secondary bacterial rot"
    ],
    organicTreatment: [
      "Immediately prune and safely bag/destroy severely affected foliage (do not compost).",
      "Apply Liquid Copper Octanoate (Copper soap) or Bordeaux mixture at 15-20ml per 4.5L water.",
      "Spray bio-fungicide containing Bacillus subtilis strain QST 713 weekly.",
      "Apply foliar compost tea rich in beneficial Trichoderma to outcompete sporulation."
    ],
    chemicalTreatment: [
      "Apply Mancozeb 75% WP (2.5 g/L) or Chlorothalonil 720 SC (2.0 ml/L) as a protective barrier.",
      "For active infection, rotate with translaminar systemic fungicides: Dimethomorph or Cymoxanil.",
      "Respect Pre-Harvest Interval (PHI) of minimum 5-7 days before picking fruit.",
      "Calibrate boom sprayer for full canopy coverage under leaf surfaces."
    ],
    prevention: [
      "Prune lower foliage up to 30 cm from the ground to prevent soil splash.",
      "Switch from overhead sprinklers to targeted drip irrigation.",
      "Maintain minimum 60cm row spacing to maximize sunlight and air circulation.",
      "Plant certified blight-tolerant varieties such as 'Mountain Magic' or 'Defiant PhR'."
    ],
    riskFactors: {
      humidity: "86% (High Risk)",
      tempIdeal: "15°C – 22°C (Optimal for Spore Germination)",
      soilDrainage: "Waterlogged"
    }
  },
  rice_blast: {
    id: "rice_blast",
    cropName: "Paddy Rice (Oryza sativa)",
    diseaseName: "Leaf Blast & Brown Spot",
    scientificName: "Magnaporthe oryzae / Bipolaris oryzae",
    confidence: "96.7%",
    severity: "High",
    severityColor: "amber",
    statusBadge: "Fungal Spore Proliferation",
    image: "https://images.unsplash.com/photo-1530507629858-e4977d30e9e0?auto=format&fit=crop&w=800&q=80",
    summary: "Rice blast affects leaf blades and panicles, causing significant yield losses if left untreated before the heading stage.",
    symptoms: [
      "Spindle-shaped or diamond-like lesions with whitish-grey centers",
      "Dark brown to reddish borders around necrotic patches",
      "Blotches coalescing into widespread leaf desiccations",
      "Neck rot causing unfilled or brittle grain panicles"
    ],
    organicTreatment: [
      "Spray foliar bio-agent Pseudomonas fluorescens (10 g/L) at 15-day intervals.",
      "Apply 5% cold-pressed Neem Seed Kernel Extract (NSKE) during evening hours.",
      "Incorporate silicate slag or potassium silicate into soil to harden leaf cuticle.",
      "Manage water levels: Maintain shallow standing water (3-5 cm) to reduce drought stress."
    ],
    chemicalTreatment: [
      "Spray Tricyclazole 75% WP @ 0.6 g/L or Isoprothiolane 40% EC @ 1.5 ml/L at first symptom.",
      "Alternate with Azoxystrobin 23% SC (1 ml/L) to prevent chemical resistance.",
      "Apply during early morning before dew dries to improve adherence."
    ],
    prevention: [
      "Avoid excessive split applications of Nitrogen fertilizer (limit excess urea).",
      "Treat seeds with Trichoderma harzianum (4g/kg seed) prior to sowing.",
      "Rotate with green manure crops such as Sesbania to replenish soil biology."
    ],
    riskFactors: {
      humidity: "90% (Very High)",
      tempIdeal: "24°C – 28°C",
      soilDrainage: "Stagnant Water"
    }
  },
  corn_blight: {
    id: "corn_blight",
    cropName: "Maize / Corn (Zea mays)",
    diseaseName: "Northern Corn Leaf Blight (NCLB)",
    scientificName: "Exserohilum turcicum",
    confidence: "97.2%",
    severity: "Moderate",
    severityColor: "orange",
    statusBadge: "Early Stage Lesions",
    image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
    summary: "A foliar fungal disease characterized by elongated elliptical lesions that reduce photosynthetically active leaf area during grain filling.",
    symptoms: [
      "Long, elliptical, cigar-shaped grayish-green or tan lesions (2.5 to 15 cm)",
      "Dark olive fungal sporulation within lesions during damp mornings",
      "Lesions initially starting on lower leaves and progressing upward",
      "Premature stalk death and reduced ear size"
    ],
    organicTreatment: [
      "Apply Trichoderma viride bio-fungicide @ 5g/L as foliar spray.",
      "Foliar spray of dilute kelp meal and micronutrients (Zinc & Boron) to enhance immune vigor.",
      "Deeply till crop residue into soil immediately post-harvest to speed decomposition."
    ],
    chemicalTreatment: [
      "Apply Pyraclostrobin + Fluxapyroxad or Propiconazole @ recommended agronomic label rates.",
      "Spray application is most economical if lesions appear on the ear leaf before tassel emergence.",
      "Observe 14-day pre-grazing or silage harvest restrictions."
    ],
    prevention: [
      "Plant hybrid corn with genetic resistance genes (Ht1, Ht2, HtN).",
      "Practice 2-year crop rotation with non-host legumes (soybeans or chickpeas).",
      "Maintain balanced potash (Potassium) levels to fortify stalk and leaf tensile strength."
    ],
    riskFactors: {
      humidity: "78% (Moderate)",
      tempIdeal: "18°C – 27°C",
      soilDrainage: "Normal"
    }
  },
  apple_rust: {
    id: "apple_rust",
    cropName: "Apple / Orchard (Malus domestica)",
    diseaseName: "Cedar Apple Rust",
    scientificName: "Gymnosporangium juniperi-virginianae",
    confidence: "99.1%",
    severity: "Moderate",
    severityColor: "amber",
    statusBadge: "Gymnosporangium Detected",
    image: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?auto=format&fit=crop&w=800&q=80",
    summary: "A rust pathogen that alternates hosts between eastern red cedar and apple trees, causing bright yellow foliar spots and fruit blemishes.",
    symptoms: [
      "Bright yellow-orange circular spots on upper leaf surfaces in late spring",
      "Spots enlarge with tiny black pustules (pycnia) developing in the center",
      "Raised cylindrical fungal tubes (aecia) on the underside of leaves",
      "Premature defoliation in severe untreated orchard blocks"
    ],
    organicTreatment: [
      "Spray wettable sulfur or lime sulfur from pink bud stage through petal fall.",
      "Spray Serenade Garden bio-fungicide (Bacillus subtilis) at 7-day intervals.",
      "Hand-pick affected leaves in small orchards before spore release."
    ],
    chemicalTreatment: [
      "Apply Myclobutanil 20 EW or Captan 80 WDG at pink bud and petal fall stages.",
      "Alternate with Mancozeb to maintain multi-site protection against resistance."
    ],
    prevention: [
      "Remove eastern red cedar trees or galls within 1 to 2 miles of the orchard if possible.",
      "Choose rust-resistant apple cultivars such as 'Liberty', 'Freedom', or 'Enterprise'."
    ],
    riskFactors: {
      humidity: "75%",
      tempIdeal: "12°C – 24°C",
      soilDrainage: "Well-drained"
    }
  },
  healthy_leaf: {
    id: "healthy_leaf",
    cropName: "Sweet Pepper / Potato (Capsicum annuum)",
    diseaseName: "Healthy Foliage — No Pathogen Detected",
    scientificName: "Optimal Plant Health",
    confidence: "99.8%",
    severity: "Healthy",
    severityColor: "green",
    statusBadge: "100% Pathogen Free",
    image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80",
    summary: "The scanned crop leaf exhibits excellent cellular integrity, uniform chlorophyll pigmentation, strong vein structure, and no visible fungal or bacterial necrosis.",
    symptoms: [
      "Consistent vibrant green pigmentation with optimal chloroplast density",
      "Turgid leaf margins with zero necrosis or water-soaking",
      "Absence of chlorotic haloes, rust pustules, or viral mosaic patterns",
      "Healthy stomatal surface without fungal hyphae or spore deposits"
    ],
    organicTreatment: [
      "Continue preventive spraying of cold-pressed seaweed extract (2ml/L) as bio-stimulant.",
      "Apply beneficial mycorrhizal fungi to root rhizosphere for maximum nutrient uptake.",
      "Maintain a 5cm organic straw mulch layer to conserve soil moisture and suppress weeds."
    ],
    chemicalTreatment: [
      "No chemical fungicides or bactericides required.",
      "Maintain scheduled N-P-K fertigation based on your standard soil test recommendations."
    ],
    prevention: [
      "Perform weekly scouting to catch any initial aphid or spore vectors early.",
      "Maintain steady soil moisture to avoid calcium deficiency (blossom end rot).",
      "Log this healthy scan in your field journal to monitor seasonal vigor trends."
    ],
    riskFactors: {
      humidity: "58% (Safe Range)",
      tempIdeal: "22°C – 26°C",
      soilDrainage: "Optimal"
    }
  }
};

// 2. Active State
let currentDiagnosis = CROP_DATABASE.tomato_blight;
let healthChartInstance = null;
let currentPlot = 'tomato';

// 3. Document Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initLucide();
  initDragAndDrop();
  initSampleSelectors();
  initDashboardChart();
  initFieldSwitcher();
  initWeatherSimulation();
  initAgriChat();
  initModals();
  initMobileMenu();
  loadDiagnosis(CROP_DATABASE.tomato_blight, false);
});

// Reinitialize Lucide icons
function initLucide() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// 4. Sample Selectors in Hero
function initSampleSelectors() {
  const sampleButtons = document.querySelectorAll('.sample-leaf-btn');
  sampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const sampleKey = btn.getAttribute('data-sample');
      if (CROP_DATABASE[sampleKey]) {
        // Highlight active sample button
        sampleButtons.forEach(b => b.classList.remove('ring-2', 'ring-emerald-500', 'bg-emerald-50'));
        btn.classList.add('ring-2', 'ring-emerald-500', 'bg-emerald-50');

        simulateLeafScan(CROP_DATABASE[sampleKey]);
      }
    });
  });
}

// 5. Drag & Drop Leaf Upload
function initDragAndDrop() {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('leafFileInput');
  const browseBtn = document.getElementById('browseLeafBtn');

  if (!dropzone || !fileInput) return;

  browseBtn?.addEventListener('click', () => fileInput.click());

  fileInput.addEventListener('change', (e) => {
    if (e.target.files && e.target.files[0]) {
      handleUploadedFile(e.target.files[0]);
    }
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.add('border-emerald-600', 'bg-emerald-50/60');
    });
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropzone.addEventListener(eventName, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.classList.remove('border-emerald-600', 'bg-emerald-50/60');
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const dt = e.dataTransfer;
    const files = dt.files;
    if (files && files.length > 0) {
      handleUploadedFile(files[0]);
    }
  });
}

function handleUploadedFile(file) {
  if (!file.type.startsWith('image/')) {
    showToast('Please upload an image file (JPEG, PNG, WEBP)', 'error');
    return;
  }

  showToast(`Uploading ${file.name}...`, 'info');

  const reader = new FileReader();
  reader.onload = (e) => {
    const customSample = {
      ...CROP_DATABASE.tomato_blight,
      image: e.target.result,
      cropName: `Uploaded Leaf (${file.name.slice(0, 15)})`,
      confidence: "97.6%"
    };
    simulateLeafScan(customSample);
  };
  reader.readAsDataURL(file);
}

// 6. Realistic AI Scan Simulation
function simulateLeafScan(diseaseData) {
  const scannerContainer = document.getElementById('scannerContainer');
  const scanOverlay = document.getElementById('scanOverlay');
  const scanStatusText = document.getElementById('scanStatusText');
  const scanProgressBar = document.getElementById('scanProgressBar');
  const previewImage = document.getElementById('previewLeafImage');
  const resultsCard = document.getElementById('diagnosticResults');

  // Update Preview image
  if (previewImage) {
    previewImage.src = diseaseData.image;
  }

  // Scroll smoothly to scanner section
  document.getElementById('scanner').scrollIntoView({ behavior: 'smooth', block: 'start' });

  // Show Scanning state
  scanOverlay.classList.remove('hidden');
  resultsCard.classList.add('opacity-40', 'pointer-events-none');

  const steps = [
    { progress: 20, text: "Calibrating leaf angle & chlorophyll contrast..." },
    { progress: 45, text: "Extracting lesion patterns with Vision Transformer..." },
    { progress: 75, text: `Cross-referencing 120+ plant pathogen databases...` },
    { progress: 95, text: "Synthesizing bio-treatment & dosage prescription..." },
    { progress: 100, text: "Analysis Complete!" }
  ];

  let currentStep = 0;
  const interval = setInterval(() => {
    if (currentStep < steps.length) {
      scanProgressBar.style.width = `${steps[currentStep].progress}%`;
      scanStatusText.innerText = steps[currentStep].text;
      currentStep++;
    } else {
      clearInterval(interval);
      setTimeout(() => {
        scanOverlay.classList.add('hidden');
        resultsCard.classList.remove('opacity-40', 'pointer-events-none');
        loadDiagnosis(diseaseData, true);
        showToast(`AI Diagnosis: ${diseaseData.diseaseName} detected (${diseaseData.confidence})`, 'success');
      }, 400);
    }
  }, 480);
}

// 7. Load Diagnosis Data into UI
function loadDiagnosis(data, animate = true) {
  currentDiagnosis = data;

  // Header badges & titles
  document.getElementById('diagCropName').innerText = data.cropName;
  document.getElementById('diagDiseaseName').innerText = data.diseaseName;
  document.getElementById('diagScientificName').innerText = data.scientificName;
  document.getElementById('diagConfidence').innerText = data.confidence;
  document.getElementById('diagSummary').innerText = data.summary;

  // Severity styling
  const severityEl = document.getElementById('diagSeverity');
  severityEl.innerText = data.severity;
  severityEl.className = 'px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wider ';
  if (data.severity === 'Critical') {
    severityEl.className += 'bg-red-100 text-red-700 border border-red-300';
  } else if (data.severity === 'High') {
    severityEl.className += 'bg-amber-100 text-amber-700 border border-amber-300';
  } else if (data.severity === 'Moderate') {
    severityEl.className += 'bg-orange-100 text-orange-700 border border-orange-300';
  } else {
    severityEl.className += 'bg-emerald-100 text-emerald-700 border border-emerald-300';
  }

  // Symptoms list
  const symptomsList = document.getElementById('diagSymptomsList');
  symptomsList.innerHTML = data.symptoms.map(s => `
    <li class="flex items-start space-x-2 text-stone-700 text-sm">
      <span class="text-amber-600 mt-0.5">●</span>
      <span>${s}</span>
    </li>
  `).join('');

  // Organic treatment list
  const organicList = document.getElementById('diagOrganicList');
  organicList.innerHTML = data.organicTreatment.map(t => `
    <li class="flex items-start space-x-2 text-stone-700 text-sm">
      <span class="text-emerald-600 mt-0.5 font-bold">✓</span>
      <span>${t}</span>
    </li>
  `).join('');

  // Chemical treatment list
  const chemicalList = document.getElementById('diagChemicalList');
  chemicalList.innerHTML = data.chemicalTreatment.map(c => `
    <li class="flex items-start space-x-2 text-stone-700 text-sm">
      <span class="text-blue-600 mt-0.5 font-bold">⚡</span>
      <span>${c}</span>
    </li>
  `).join('');

  // Prevention list
  const prevList = document.getElementById('diagPreventionList');
  prevList.innerHTML = data.prevention.map(p => `
    <li class="flex items-start space-x-2 text-stone-700 text-sm">
      <span class="text-stone-600 mt-0.5 font-bold">🛡️</span>
      <span>${p}</span>
    </li>
  `).join('');

  // Environmental Risk Factors
  document.getElementById('riskHumidity').innerText = data.riskFactors.humidity;
  document.getElementById('riskTemp').innerText = data.riskFactors.tempIdeal;
  document.getElementById('riskSoil').innerText = data.riskFactors.soilDrainage;

  // Toggle bounding lesions
  const lesionContainer = document.getElementById('lesionOverlay');
  if (data.id === 'healthy_leaf') {
    lesionContainer.classList.add('hidden');
  } else {
    lesionContainer.classList.remove('hidden');
  }

  initLucide();
}

// 8. Crop Health Dashboard & Chart.js
const PLOT_DATA = {
  tomato: {
    name: "Plot A: Greenhouse Tomatoes",
    crop: "Solanum lycopersicum",
    riskLevel: "HIGH (78%)",
    riskColor: "text-red-600",
    riskBadge: "Fungal Spore Alert",
    soilMoisture: "44% (Adequate)",
    temp: "23.5°C",
    humidity: "84%",
    action: "Apply bio-fungicide spray before Friday rainstorm; purge lower foliage.",
    chartLabels: ["Mon", "Tue", "Wed", "Thu", "Fri (Rain)", "Sat", "Sun"],
    riskScores: [35, 42, 60, 78, 88, 65, 45],
    humidityForecast: [60, 68, 75, 84, 94, 80, 62]
  },
  rice: {
    name: "Plot B: North Terrace Paddy",
    crop: "Oryza sativa (Jasmine)",
    riskLevel: "MODERATE (52%)",
    riskColor: "text-amber-600",
    riskBadge: "Leaf Blast Monitoring",
    soilMoisture: "Submerged (Normal)",
    temp: "27.8°C",
    humidity: "76%",
    action: "Regulate water depth to 4cm; avoid top-dressing excess urea nitrogen.",
    chartLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    riskScores: [25, 30, 40, 52, 55, 48, 38],
    humidityForecast: [65, 70, 72, 76, 78, 74, 68]
  },
  corn: {
    name: "Plot C: Golden Cornfield",
    crop: "Zea mays (Yellow Sweet)",
    riskLevel: "LOW (18%)",
    riskColor: "text-emerald-600",
    riskBadge: "Optimal Growth Conditions",
    soilMoisture: "32% (Dry - Drip Active)",
    temp: "25.0°C",
    humidity: "55%",
    action: "Continue routine drip irrigation; schedule scout check in 4 days.",
    chartLabels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    riskScores: [12, 14, 15, 18, 22, 19, 15],
    humidityForecast: [50, 52, 54, 55, 62, 58, 52]
  }
};

function initDashboardChart() {
  const ctx = document.getElementById('cropRiskChart');
  if (!ctx) return;

  const initialPlot = PLOT_DATA.tomato;

  healthChartInstance = new Chart(ctx, {
    type: 'line',
    data: {
      labels: initialPlot.chartLabels,
      datasets: [
        {
          label: 'Disease Risk Index (%)',
          data: initialPlot.riskScores,
          borderColor: '#dc2626',
          backgroundColor: 'rgba(220, 38, 38, 0.12)',
          tension: 0.35,
          fill: true,
          pointBackgroundColor: '#dc2626',
          pointRadius: 4,
          yAxisID: 'y'
        },
        {
          label: 'Atmospheric Humidity (%)',
          data: initialPlot.humidityForecast,
          borderColor: '#0284c7',
          backgroundColor: 'rgba(2, 132, 199, 0.08)',
          borderDash: [5, 5],
          tension: 0.35,
          fill: false,
          pointBackgroundColor: '#0284c7',
          pointRadius: 3,
          yAxisID: 'y'
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      interaction: {
        mode: 'index',
        intersect: false,
      },
      plugins: {
        legend: {
          position: 'top',
          labels: {
            boxWidth: 12,
            font: { family: "'Plus Jakarta Sans', sans-serif", weight: '600' }
          }
        },
        tooltip: {
          backgroundColor: '#1c1917',
          titleFont: { family: "'Plus Jakarta Sans', sans-serif" },
          bodyFont: { family: "'Plus Jakarta Sans', sans-serif" }
        }
      },
      scales: {
        y: {
          min: 0,
          max: 100,
          ticks: {
            callback: value => `${value}%`
          },
          grid: {
            color: '#f3ece3'
          }
        },
        x: {
          grid: {
            display: false
          }
        }
      }
    }
  });
}

function initFieldSwitcher() {
  const tabs = document.querySelectorAll('.field-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const fieldKey = tab.getAttribute('data-field');
      if (PLOT_DATA[fieldKey]) {
        currentPlot = fieldKey;
        tabs.forEach(t => t.classList.remove('active', 'bg-emerald-800', 'text-white'));
        tabs.forEach(t => t.classList.add('bg-stone-100', 'text-stone-700'));

        tab.classList.remove('bg-stone-100', 'text-stone-700');
        tab.classList.add('active', 'bg-emerald-800', 'text-white');

        updateDashboardUI(PLOT_DATA[fieldKey]);
      }
    });
  });
}

function updateDashboardUI(plot) {
  document.getElementById('dashPlotName').innerText = plot.name;
  document.getElementById('dashCropType').innerText = plot.crop;
  
  const riskBadge = document.getElementById('dashRiskBadge');
  riskBadge.innerText = plot.riskLevel;
  riskBadge.className = `text-2xl font-black ${plot.riskColor}`;
  
  document.getElementById('dashRiskSubtitle').innerText = plot.riskBadge;
  document.getElementById('dashSoilMoisture').innerText = plot.soilMoisture;
  document.getElementById('dashTemp').innerText = plot.temp;
  document.getElementById('dashHumidity').innerText = plot.humidity;
  document.getElementById('dashActionText').innerText = plot.action;

  if (healthChartInstance) {
    healthChartInstance.data.labels = plot.chartLabels;
    healthChartInstance.data.datasets[0].data = plot.riskScores;
    healthChartInstance.data.datasets[1].data = plot.humidityForecast;
    
    // Adjust risk line color based on severity
    if (plot.riskLevel.includes('HIGH')) {
      healthChartInstance.data.datasets[0].borderColor = '#dc2626';
      healthChartInstance.data.datasets[0].backgroundColor = 'rgba(220, 38, 38, 0.12)';
      healthChartInstance.data.datasets[0].pointBackgroundColor = '#dc2626';
    } else if (plot.riskLevel.includes('MODERATE')) {
      healthChartInstance.data.datasets[0].borderColor = '#d97706';
      healthChartInstance.data.datasets[0].backgroundColor = 'rgba(217, 119, 6, 0.12)';
      healthChartInstance.data.datasets[0].pointBackgroundColor = '#d97706';
    } else {
      healthChartInstance.data.datasets[0].borderColor = '#16a34a';
      healthChartInstance.data.datasets[0].backgroundColor = 'rgba(22, 163, 74, 0.12)';
      healthChartInstance.data.datasets[0].pointBackgroundColor = '#16a34a';
    }
    healthChartInstance.update();
  }
}

// 9. Weather Simulation Interactive Button
function initWeatherSimulation() {
  const simBtn = document.getElementById('simulateWeatherBtn');
  if (!simBtn) return;

  let isSpike = false;
  simBtn.addEventListener('click', () => {
    isSpike = !isSpike;
    if (isSpike) {
      simBtn.innerText = "⛈️ Revert Weather Simulation";
      simBtn.classList.replace('bg-stone-800', 'bg-blue-800');
      
      showToast("Weather Alert: Torrential rain & 95% humidity simulated! Recalculating spore index...", "warning");
      
      const spikPlot = {
        ...PLOT_DATA[currentPlot],
        riskLevel: "CRITICAL (94%)",
        riskColor: "text-red-700",
        riskBadge: "Extreme Fungal Infection Danger",
        humidity: "95% (Spore Saturation)",
        action: "EMERGENCY: Halt overhead irrigation immediately. Spray protective contact barrier fungicide within 6 hours before rainstorm.",
        chartLabels: ["Now", "+2 hrs", "+4 hrs", "+6 hrs (Rain)", "+12 hrs", "+24 hrs", "+48 hrs"],
        riskScores: [50, 72, 88, 94, 91, 80, 65],
        humidityForecast: [78, 86, 92, 98, 95, 88, 74]
      };
      updateDashboardUI(spikPlot);
    } else {
      simBtn.innerText = "⚡ Simulate Weather Spike";
      simBtn.classList.replace('bg-blue-800', 'bg-stone-800');
      showToast("Weather restored to standard micro-climate telemetry.", "info");
      updateDashboardUI(PLOT_DATA[currentPlot]);
    }
  });
}

// 10. AI Agronomist Interactive Chat
const AI_RESPONSES = {
  copper: "Copper-based bactericides/fungicides (such as Copper Octanoate or Bordeaux mixture) work by preventing fungal spores from germinating on leaf surfaces. Recommended dosage: 15–20ml per 4.5L water. Ensure you spray in the early morning or evening to prevent phototoxic leaf scorch, and do not spray when temperatures exceed 30°C.",
  blight: "Tomato and potato Late Blight is caused by Phytophthora infestans. Key steps: 1) Immediately prune off affected foliage and burn or bury it 50cm deep. 2) Switch off overhead watering. 3) Apply a preventive bio-agent like Bacillus subtilis or a contact fungicide like Mancozeb.",
  dosage: "For smallholder knapsack sprayers (16 Liter capacity): typically use 30g to 40g of wettable powder (WP) or 32ml of liquid emulsifiable concentrate (EC). Always use clean pH-neutral water and wear protective face and hand gear.",
  organic: "Top certified organic preventative treatments include: 1) Cold-pressed Neem Seed Kernel Extract (5%), 2) Bacillus subtilis foliar bio-fungicide, 3) Trichoderma viride root treatment, and 4) Potassium bicarbonate spray for powdery mildew (5g/L water).",
  harvest: "Pre-Harvest Interval (PHI) specifies the minimum days between chemical application and harvest. For bio-fungicides like Bacillus subtilis, PHI is typically 0 days. For Copper Octanoate, it is 1 day. For synthetic systemic fungicides like Mancozeb, PHI is strictly 7–14 days. Wash all produce thoroughly prior to market."
};

function initAgriChat() {
  const chatInput = document.getElementById('chatInput');
  const chatSendBtn = document.getElementById('chatSendBtn');
  const chatMessages = document.getElementById('chatMessages');
  const promptChips = document.querySelectorAll('.chat-chip');

  if (!chatInput || !chatSendBtn || !chatMessages) return;

  const appendMessage = (sender, text, isAi = false) => {
    const msgDiv = document.createElement('div');
    msgDiv.className = `flex ${isAi ? 'justify-start' : 'justify-end'} space-x-2`;
    msgDiv.innerHTML = `
      ${isAi ? '<div class="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">🌿</div>' : ''}
      <div class="max-w-[85%] rounded-2xl p-3 text-sm ${isAi ? 'bg-stone-100 text-stone-800 border border-stone-200' : 'bg-emerald-700 text-white'}">
        ${text}
      </div>
    `;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  };

  const processQuery = (query) => {
    if (!query.trim()) return;
    appendMessage("Farmer", query, false);
    chatInput.value = '';

    // Typing indicator
    const typingIndicator = document.createElement('div');
    typingIndicator.id = 'typingIndicator';
    typingIndicator.className = 'flex justify-start space-x-2';
    typingIndicator.innerHTML = `
      <div class="w-8 h-8 rounded-full bg-emerald-700 text-white flex items-center justify-center font-bold text-xs shrink-0">🌿</div>
      <div class="bg-stone-100 text-stone-500 rounded-2xl px-4 py-2 text-xs flex items-center space-x-1">
        <span>Agri-Doctor is consulting pathology database</span>
        <span class="animate-bounce">.</span><span class="animate-bounce delay-100">.</span><span class="animate-bounce delay-200">.</span>
      </div>
    `;
    chatMessages.appendChild(typingIndicator);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    setTimeout(() => {
      typingIndicator.remove();
      const lower = query.toLowerCase();
      let response = "Based on agronomic pathology guidelines, ensuring adequate air circulation, pruning diseased foliage immediately, and balancing soil potassium is essential. For exact product dosage or soil test analysis, feel free to ask about 'organic sprays', 'dosage calculation', or 'harvest intervals'.";

      if (lower.includes('copper') || lower.includes('bordeaux')) {
        response = AI_RESPONSES.copper;
      } else if (lower.includes('blight') || lower.includes('tomato') || lower.includes('potato')) {
        response = AI_RESPONSES.blight;
      } else if (lower.includes('dosage') || lower.includes('knapsack') || lower.includes('mix')) {
        response = AI_RESPONSES.dosage;
      } else if (lower.includes('organic') || lower.includes('natural') || lower.includes('neem')) {
        response = AI_RESPONSES.organic;
      } else if (lower.includes('harvest') || lower.includes('phi') || lower.includes('safe to eat')) {
        response = AI_RESPONSES.harvest;
      }

      appendMessage("Crop Doctor AI", response, true);
    }, 900);
  };

  chatSendBtn.addEventListener('click', () => processQuery(chatInput.value));
  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') processQuery(chatInput.value);
  });

  promptChips.forEach(chip => {
    chip.addEventListener('click', () => {
      const q = chip.getAttribute('data-prompt');
      processQuery(q);
    });
  });
}

// 11. Modals (Prescription, About, Privacy, Contact)
function initModals() {
  // Prescription Modal
  const prescBtn = document.getElementById('openPrescriptionBtn');
  const prescModal = document.getElementById('prescriptionModal');
  const closePrescBtn = document.getElementById('closePrescriptionBtn');
  const printPrescBtn = document.getElementById('printPrescriptionBtn');

  if (prescBtn && prescModal) {
    prescBtn.addEventListener('click', () => {
      populatePrescriptionModal(currentDiagnosis);
      prescModal.classList.remove('hidden');
    });
    closePrescBtn?.addEventListener('click', () => prescModal.classList.add('hidden'));
    printPrescBtn?.addEventListener('click', () => window.print());
  }

  // Generic modal triggers
  bindModal('aboutModalLink', 'aboutModal', 'closeAboutModal');
  bindModal('privacyModalLink', 'privacyModal', 'closePrivacyModal');
  bindModal('contactModalLink', 'contactModal', 'closeContactModal');
  bindModal('contactNavBtn', 'contactModal', 'closeContactModal2');
  bindModal('expertSupportBtn', 'contactModal', 'closeContactModal3');

  // Language selector
  const langSelect = document.getElementById('languageSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      const langNames = { en: "English", es: "Español", hi: "हिन्दी (Hindi)", sw: "Kiswahili" };
      showToast(`Language set to ${langNames[e.target.value] || e.target.value}. Multilingual Agro-AI mode active.`, 'info');
    });
  }
}

function bindModal(triggerId, modalId, closeBtnId) {
  const trigger = document.getElementById(triggerId);
  const modal = document.getElementById(modalId);
  const closeBtn = document.getElementById(closeBtnId);

  if (trigger && modal) {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.remove('hidden');
    });
  }

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }

  // Click outside to close
  modal?.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.add('hidden');
  });
}

function populatePrescriptionModal(data) {
  const content = document.getElementById('prescriptionContent');
  if (!content) return;

  const dateStr = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  const rxId = "AGRI-RX-" + Math.floor(100000 + Math.random() * 900000);

  content.innerHTML = `
    <div class="border-b-2 border-stone-800 pb-4 mb-4 flex justify-between items-start">
      <div>
        <div class="flex items-center space-x-2 text-emerald-800 font-extrabold text-xl">
          <span>🌿</span> <span>CROP DOCTOR CLINICAL PRESCRIPTION</span>
        </div>
        <p class="text-xs text-stone-500 mt-1">Autonomous Crop Diagnostic & Extension Advisory</p>
      </div>
      <div class="text-right text-xs text-stone-600">
        <p class="font-bold text-stone-800">Prescription #: ${rxId}</p>
        <p>Date: ${dateStr}</p>
        <p class="text-emerald-700 font-semibold">Status: Certified Pathology Report</p>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4 bg-stone-50 p-3 rounded-lg border border-stone-200 text-xs mb-4">
      <div>
        <p class="text-stone-500">Specimen Crop:</p>
        <p class="font-bold text-stone-800 text-sm">${data.cropName}</p>
      </div>
      <div>
        <p class="text-stone-500">Diagnosed Condition:</p>
        <p class="font-bold text-red-700 text-sm">${data.diseaseName} (${data.confidence})</p>
      </div>
      <div>
        <p class="text-stone-500">Causal Pathogen:</p>
        <p class="font-medium italic text-stone-700">${data.scientificName}</p>
      </div>
      <div>
        <p class="text-stone-500">Severity Classification:</p>
        <p class="font-bold text-stone-800">${data.severity}</p>
      </div>
    </div>

    <div class="space-y-4 text-xs">
      <div>
        <h4 class="font-bold text-stone-800 uppercase tracking-wider text-xs border-b border-stone-200 pb-1 mb-2">1. Immediate Bio-Organic Protocol</h4>
        <ul class="list-disc pl-5 space-y-1 text-stone-700">
          ${data.organicTreatment.map(t => `<li>${t}</li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-stone-800 uppercase tracking-wider text-xs border-b border-stone-200 pb-1 mb-2">2. Emergency Chemical Intervention (If Spread Exceeds 20%)</h4>
        <ul class="list-disc pl-5 space-y-1 text-stone-700">
          ${data.chemicalTreatment.map(c => `<li>${c}</li>`).join('')}
        </ul>
      </div>

      <div>
        <h4 class="font-bold text-stone-800 uppercase tracking-wider text-xs border-b border-stone-200 pb-1 mb-2">3. Cultural & Agronomic Field Prevention</h4>
        <ul class="list-disc pl-5 space-y-1 text-stone-700">
          ${data.prevention.map(p => `<li>${p}</li>`).join('')}
        </ul>
      </div>
    </div>

    <div class="mt-6 pt-4 border-t border-dashed border-stone-300 flex justify-between items-end text-xs text-stone-500">
      <div>
        <p>Verified by: Crop Doctor Deep Neural Diagnostic v4.2</p>
        <p>Agronomic Safety Disclaimer: Comply with local agricultural chemical regulations.</p>
      </div>
      <div class="text-right">
        <div class="inline-block border-b border-stone-700 pb-1 font-serif italic text-stone-800">Dr. A. Greenfield, Lead Agronomist</div>
        <p class="text-[10px] mt-0.5">Digital Cryptographic Signature</p>
      </div>
    </div>
  `;
}

// 12. Mobile Menu Navigation
function initMobileMenu() {
  const menuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });

    const links = mobileNav.querySelectorAll('a');
    links.forEach(l => l.addEventListener('click', () => mobileNav.classList.add('hidden')));
  }
}

// 13. Toast Notification Helper
function showToast(message, type = 'info') {
  const toastContainer = document.getElementById('toastContainer');
  if (!toastContainer) return;

  const toast = document.createElement('div');
  const bgColors = {
    info: 'bg-stone-900 text-white border-stone-700',
    success: 'bg-emerald-800 text-white border-emerald-600',
    warning: 'bg-amber-800 text-white border-amber-600',
    error: 'bg-red-800 text-white border-red-600'
  };

  toast.className = `flex items-center space-x-2 px-4 py-3 rounded-xl shadow-2xl border text-xs sm:text-sm font-medium transition-all duration-300 transform translate-y-4 opacity-0 ${bgColors[type] || bgColors.info}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '🌱' : type === 'warning' ? '⚠️' : type === 'error' ? '❌' : 'ℹ️'}</span>
    <span>${message}</span>
  `;

  toastContainer.appendChild(toast);

  // Trigger smooth enter
  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
  });

  // Auto remove after 3.8s
  setTimeout(() => {
    toast.classList.add('opacity-0', '-translate-y-2');
    setTimeout(() => toast.remove(), 300);
  }, 3800);
}
