// Futuristic HUD Toggle Bar & Holographic Telemetry Controller
// High-tech sci-fi glassmorphism UI for Cosmic Zoom Engine

class ObservatoryUI {
  constructor(engine) {
    this.engine = engine;

    // Connect Engine 3D Click Callback
    this.engine.onTargetSelected = (event) => this.handleTargetSelected(event);

    this.initElements();
    this.bindEvents();
    this.updateActiveToggle("stars");
  }

  initElements() {
    // 1. Futuristic HUD Mode Toggles: [ STARS ] | [ GALAXIES ] | [ PLANETS ]
    this.toggleStars = document.getElementById("toggle-stars");
    this.toggleGalaxies = document.getElementById("toggle-galaxies");
    this.togglePlanets = document.getElementById("toggle-planets");

    // 2. HUD Ambient Soundscape Toggle & Roam
    this.btnSoundscape = document.getElementById("btn-soundscape");
    this.soundscapeVal = document.getElementById("soundscape-val");
    this.btnRoamFree = document.getElementById("btn-roam-free");
    this.hudTargetName = document.getElementById("hud-target-name");

    // 3. Side Holographic Telemetry Panel Elements
    this.telemetryPanel = document.getElementById("telemetry-panel");
    this.panelCloseBtn = document.getElementById("panel-close-btn");
    this.panelBadge = document.getElementById("panel-badge");
    this.panelTargetName = document.getElementById("panel-target-name");
    this.panelMetaLine = document.getElementById("panel-meta-line");

    // Dynamic Visual Gauge
    this.gaugeTitle = document.getElementById("gauge-title");
    this.gaugeVal = document.getElementById("gauge-val");
    this.gaugeFill = document.getElementById("gauge-fill");
    this.gaugePin = document.getElementById("gauge-pin");

    // 4-Tile Comparative Metric Grid
    this.labelM1 = document.getElementById("label-m1");
    this.valM1 = document.getElementById("val-m1");
    this.labelM2 = document.getElementById("label-m2");
    this.valM2 = document.getElementById("val-m2");
    this.labelM3 = document.getElementById("label-m3");
    this.valM3 = document.getElementById("val-m3");
    this.labelM4 = document.getElementById("label-m4");
    this.valM4 = document.getElementById("val-m4");

    // Lore & Narrative
    this.panelDesc = document.getElementById("panel-desc");

    // Actions & Free-Roam Navigation
    this.panelActionBtn = document.getElementById("panel-action-btn");
    this.panelActionLabel = document.getElementById("panel-action-label");
    this.panelPrevBtn = document.getElementById("panel-prev-btn");
    this.panelNextBtn = document.getElementById("panel-next-btn");
    this.panelRoamBtn = document.getElementById("panel-roam-btn");
  }

  bindEvents() {
    // 1. Futuristic HUD Mode Switching: [ STARS ] | [ GALAXIES ] | [ PLANETS ]
    const switchMode = (mode) => {
      if (window.soundEngine) window.soundEngine.playSelect();
      this.engine.setTier(mode);
      this.updateActiveToggle(mode);

      if (mode === "stars") {
        if (this.hudTargetName) this.hudTargetName.textContent = "CELESTIAL STELLAR SPHERE";
        const c = this.engine.selectedConstellation || (window.MAJOR_CONSTELLATIONS && window.MAJOR_CONSTELLATIONS[0]);
        if (c) {
          const stars = c.stars || [];
          this.handleTargetSelected({ type: "constellation", constellation: c, star: stars[0] });
        }
      } else if (mode === "galaxies") {
        if (this.hudTargetName) this.hudTargetName.textContent = "MILKY WAY SYSTEM";
        const g = this.engine.selectedGalaxy || (window.ALL_GALAXIES && window.ALL_GALAXIES[0]);
        if (g) this.handleTargetSelected({ type: "galaxy", galaxy: g });
      } else if (mode === "planets") {
        if (this.hudTargetName) this.hudTargetName.textContent = "EXOPLANETARY CORRIDOR";
        const p = this.engine.selectedPlanet || (window.ALL_EXOPLANETS && window.ALL_EXOPLANETS[0]);
        if (p) this.handleTargetSelected({ type: "planet", planet: p });
      }
    };

    if (this.toggleStars) {
      this.toggleStars.addEventListener("click", () => switchMode("stars"));
    }
    if (this.toggleGalaxies) {
      this.toggleGalaxies.addEventListener("click", () => switchMode("galaxies"));
    }
    if (this.togglePlanets) {
      this.togglePlanets.addEventListener("click", () => switchMode("planets"));
    }

    // Hover feedback sounds
    [
      this.toggleStars, this.toggleGalaxies, this.togglePlanets,
      this.btnSoundscape, this.btnRoamFree, this.panelActionBtn,
      this.panelPrevBtn, this.panelNextBtn, this.panelRoamBtn, this.panelCloseBtn
    ].forEach(btn => {
      if (btn) {
        btn.addEventListener("pointerenter", () => {
          if (window.soundEngine) window.soundEngine.playHover();
        });
      }
    });

    // 2. Ambient Soundscape Cycling Button
    if (this.btnSoundscape) {
      this.btnSoundscape.addEventListener("click", () => {
        if (window.soundEngine) {
          const info = window.soundEngine.cycleSoundscape();
          if (this.soundscapeVal) {
            this.soundscapeVal.textContent = info.mode;
          }
        }
      });
    }

    // 3. Free-Roam Navigation Buttons
    if (this.btnRoamFree) {
      this.btnRoamFree.addEventListener("click", () => {
        this.engine.resetRoamView();
      });
    }
    if (this.panelRoamBtn) {
      this.panelRoamBtn.addEventListener("click", () => {
        this.engine.resetRoamView();
      });
    }

    // 4. Target Cycling (Prev / Next)
    if (this.panelPrevBtn) {
      this.panelPrevBtn.addEventListener("click", () => {
        this.engine.prevTarget();
      });
    }
    if (this.panelNextBtn) {
      this.panelNextBtn.addEventListener("click", () => {
        this.engine.nextTarget();
      });
    }

    // 5. Dismiss Telemetry Panel
    if (this.panelCloseBtn) {
      this.panelCloseBtn.addEventListener("click", () => {
        if (window.soundEngine) window.soundEngine.playHover();
        this.hideTelemetryPanel();
      });
    }

    // 6. Context Action Button
    if (this.panelActionBtn) {
      this.panelActionBtn.addEventListener("click", () => {
        if (this.engine.currentTier === "planets") {
          const isExposed = this.engine.toggleCoreExposure();
          this.updateCoreActionState(isExposed);
        } else if (this.engine.currentTier === "stars") {
          const c = this.engine.selectedConstellation || (window.MAJOR_CONSTELLATIONS && window.MAJOR_CONSTELLATIONS[0]);
          if (c) {
            this.engine.formConstellation(c, 0);
          }
        } else if (this.engine.currentTier === "galaxies") {
          const g = this.engine.selectedGalaxy || (window.ALL_GALAXIES && window.ALL_GALAXIES[0]);
          if (g) {
            this.engine.morphToGalaxy(g);
            this.engine.triggerGalacticBurst();
            if (window.soundEngine) window.soundEngine.playGalaxyBurst();
          }
        }
      });
    }

    // 7. Keyboard Shortcuts for Pro Astronomy Control
    window.addEventListener("keydown", (e) => {
      if (e.key === "1") switchMode("stars");
      else if (e.key === "2") switchMode("galaxies");
      else if (e.key === "3") switchMode("planets");
      else if (e.key.toLowerCase() === "s") {
        if (this.btnSoundscape) this.btnSoundscape.click();
      } else if (e.key.toLowerCase() === "r") {
        this.engine.resetRoamView();
      } else if (e.key === "ArrowLeft") {
        this.engine.prevTarget();
      } else if (e.key === "ArrowRight") {
        this.engine.nextTarget();
      } else if (e.key.toLowerCase() === "c" || e.key.toLowerCase() === "e" || e.key === " ") {
        if (this.panelActionBtn) this.panelActionBtn.click();
      } else if (e.key === "Escape") {
        this.hideTelemetryPanel();
      }
    });
  }

  updateActiveToggle(activeMode) {
    const items = [
      { el: this.toggleStars, mode: "stars" },
      { el: this.toggleGalaxies, mode: "galaxies" },
      { el: this.togglePlanets, mode: "planets" }
    ];

    items.forEach(({ el, mode }) => {
      if (!el) return;
      const isActive = mode === activeMode;
      el.classList.toggle("active", isActive);
      el.setAttribute("aria-selected", isActive ? "true" : "false");
    });
  }

  showTelemetryPanel() {
    if (this.telemetryPanel) {
      this.telemetryPanel.classList.add("visible");
    }
  }

  hideTelemetryPanel() {
    if (this.telemetryPanel) {
      this.telemetryPanel.classList.remove("visible");
    }
  }

  updateCoreActionState(isExposed) {
    if (!this.panelActionLabel) return;
    if (isExposed) {
      this.panelActionLabel.textContent = "RESTORE PLANETARY CRUST";
      if (this.valM4) this.valM4.textContent = "MAGMA EXPOSED";
    } else {
      this.panelActionLabel.textContent = "EXPOSE MAGMA CORE";
      if (this.valM4) this.valM4.textContent = "CRUST SEALED";
    }
  }

  // --- DYNAMIC TELEMETRY POPULATION UPON 3D INTERACTION ---
  handleTargetSelected(event) {
    this.showTelemetryPanel();

    if (event.type === "star") {
      const s = event.star || {};
      const c = event.constellation || {};

      if (this.hudTargetName) {
        this.hudTargetName.textContent = s.name ? `${s.name.toUpperCase()} [${c.abbr || "STAR"}]` : "STELLAR TARGET";
      }

      if (this.panelBadge) this.panelBadge.textContent = `STELLAR NODE • ${c.abbr || "IAU"}`;
      if (this.panelTargetName) this.panelTargetName.textContent = s.name || "Stellar Vertex";
      if (this.panelMetaLine) {
        this.panelMetaLine.textContent = `${c.name || "Constellation"} • Class ${s.spectral || "Class A"} • Mag ${s.mag !== undefined ? (s.mag > 0 ? "+" + s.mag : s.mag) : "+2.0"}`;
      }

      // Gauge: Spectral Temperature Classification
      if (this.gaugeTitle) this.gaugeTitle.textContent = "SPECTRAL TEMPERATURE CLASSIFICATION";
      if (this.gaugeVal) this.gaugeVal.textContent = s.spectral || "Class A0V";
      if (this.gaugeFill && this.gaugePin) {
        const tempPercent = s.spectral && s.spectral.includes("O") ? 95 :
                            s.spectral && s.spectral.includes("B") ? 80 :
                            s.spectral && s.spectral.includes("A") ? 65 :
                            s.spectral && s.spectral.includes("F") ? 50 :
                            s.spectral && s.spectral.includes("G") ? 35 :
                            s.spectral && s.spectral.includes("K") ? 22 : 12;
        this.gaugeFill.style.width = `${tempPercent}%`;
        this.gaugePin.style.left = `${tempPercent}%`;
      }

      // 4-Tile Metric Grid
      if (this.labelM1) this.labelM1.textContent = "SPECTRAL CLASS";
      if (this.valM1) this.valM1.textContent = s.spectral || "CLASS A";

      if (this.labelM2) this.labelM2.textContent = "APPARENT MAG";
      if (this.valM2) this.valM2.textContent = s.mag !== undefined ? (s.mag > 0 ? "+" + s.mag : s.mag) + " mag" : "+1.8 mag";

      if (this.labelM3) this.labelM3.textContent = "EST. DISTANCE";
      if (this.valM3) this.valM3.textContent = s.dist ? `${s.dist} ly` : "145 ly";

      if (this.labelM4) this.labelM4.textContent = "FORMATION STATUS";
      if (this.valM4) this.valM4.textContent = "VECTOR TRACED";

      if (this.panelDesc) {
        this.panelDesc.textContent = `High-luminosity stellar vertex of the ${c.name || "constellation"} asterism. When selected, laser tracer coordinates align across 3D spherical space with ascending harmonic audio chime resonance.`;
      }

      if (this.panelActionLabel) this.panelActionLabel.textContent = "RETRACE CONSTELLATION";

    } else if (event.type === "constellation") {
      const c = event.constellation || {};
      const s = event.star || (c.stars && c.stars[0]) || {};

      if (this.hudTargetName) {
        this.hudTargetName.textContent = `${c.name.toUpperCase()} (${c.abbr})`;
      }

      if (this.panelBadge) this.panelBadge.textContent = `${(c.hemisphere || "IAU").toUpperCase()} CONSTELLATION`;
      if (this.panelTargetName) this.panelTargetName.textContent = `${c.name} (${c.abbr})`;
      if (this.panelMetaLine) {
        const brightest = c.brightestStar ? c.brightestStar.split('(')[0].trim() : "Alpha Star";
        this.panelMetaLine.textContent = `Latin: ${c.latin || c.name} • Brightest: ${brightest} • RA: ${c.ra || "05h"}`;
      }

      // Gauge: Right Ascension position
      if (this.gaugeTitle) this.gaugeTitle.textContent = "CELESTIAL SPHERE RIGHT ASCENSION";
      if (this.gaugeVal) this.gaugeVal.textContent = c.ra || "05h 35m";
      if (this.gaugeFill && this.gaugePin) {
        const raPercent = Math.min(100, Math.max(5, ((c.raH || 6) / 24) * 100));
        this.gaugeFill.style.width = `${raPercent}%`;
        this.gaugePin.style.left = `${raPercent}%`;
      }

      // 4-Tile Metric Grid
      if (this.labelM1) this.labelM1.textContent = "TOTAL STARS";
      if (this.valM1) this.valM1.textContent = `${(c.stars && c.stars.length) || 8} NODES`;

      if (this.labelM2) this.labelM2.textContent = "BRIGHTEST STAR";
      if (this.valM2) this.valM2.textContent = (c.brightestStar || "Alpha").split('(')[0].trim();

      if (this.labelM3) this.labelM3.textContent = "HEMISPHERE";
      if (this.valM3) this.valM3.textContent = (c.hemisphere || "NORTHERN").toUpperCase();

      if (this.labelM4) this.labelM4.textContent = "VECTOR LINKS";
      if (this.valM4) this.valM4.textContent = `${(c.connections && c.connections.length) || 7} SEGMENTS`;

      if (this.panelDesc) {
        this.panelDesc.textContent = c.lore || `Historical asterism ${c.name} documented in the Ptolemaic and IAU 88 modern catalogs. Glowing 3D stellar nodes form dynamically in void space.`;
      }

      if (this.panelActionLabel) this.panelActionLabel.textContent = "RETRACE CONSTELLATION";

    } else if (event.type === "planet") {
      const p = event.planet || {};

      if (this.hudTargetName) {
        this.hudTargetName.textContent = p.name ? p.name.toUpperCase() : "EXOPLANET WORLD";
      }

      if (this.panelBadge) this.panelBadge.textContent = `${(p.category || "EXOPLANET").toUpperCase()} WORLD`;
      if (this.panelTargetName) this.panelTargetName.textContent = p.name || "Exoplanet";
      if (this.panelMetaLine) {
        const radius = p.radius ? p.radius.split('(')[0].trim() : "1.0 R⊕";
        this.panelMetaLine.textContent = `${p.designation || p.hostStar || "Solar"} System • ${radius} • ${p.equilibriumTemp || "288 K"}`;
      }

      // Gauge: Equilibrium Temperature
      if (this.gaugeTitle) this.gaugeTitle.textContent = "EQUILIBRIUM SURFACE TEMPERATURE";
      if (this.gaugeVal) this.gaugeVal.textContent = p.equilibriumTemp || "288 K";
      if (this.gaugeFill && this.gaugePin) {
        const rawTemp = parseInt(p.equilibriumTemp || "288", 10);
        const tempPercent = Math.min(100, Math.max(8, (rawTemp / 1800) * 100));
        this.gaugeFill.style.width = `${tempPercent}%`;
        this.gaugePin.style.left = `${tempPercent}%`;
      }

      // 4-Tile Metric Grid
      if (this.labelM1) this.labelM1.textContent = "PLANETARY MASS";
      if (this.valM1) this.valM1.textContent = p.mass || "1.00 M⊕";

      if (this.labelM2) this.labelM2.textContent = "PLANETARY RADIUS";
      if (this.valM2) this.valM2.textContent = (p.radius || "1.0 R⊕").split('(')[0].trim();

      if (this.labelM3) this.labelM3.textContent = "ORBITAL PERIOD";
      if (this.valM3) this.valM3.textContent = p.orbitalPeriod || "365.2 d";

      if (this.labelM4) this.labelM4.textContent = "CORE STATUS";
      if (this.valM4) this.valM4.textContent = event.isCoreExposed ? "MAGMA EXPOSED" : "CRUST SEALED";

      if (this.panelDesc) {
        if (p.coreLayers && p.coreLayers.length > 0) {
          this.panelDesc.textContent = `Internal stratification: ${p.coreLayers.map(l => l.name).join(' → ')}. Click 'Expose Magma Core' to mechanically separate hemispheres and inspect the convection mantle.`;
        } else {
          this.panelDesc.textContent = `${p.name} rendered with PBR specular reflectance, volumetric atmospheric Rayleigh scattering, and rotational dynamo physics.`;
        }
      }

      this.updateCoreActionState(event.isCoreExposed);

    } else if (event.type === "galaxy") {
      const g = event.galaxy || {};

      if (this.hudTargetName) {
        this.hudTargetName.textContent = g.name ? g.name.toUpperCase() : "GALAXY TARGET";
      }

      if (this.panelBadge) this.panelBadge.textContent = `${(g.category || "SPIRAL").toUpperCase()} GALAXY`;
      if (this.panelTargetName) this.panelTargetName.textContent = g.name || "Galaxy";
      if (this.panelMetaLine) {
        this.panelMetaLine.textContent = `${g.classification || "Morphology"} • Dist: ${g.distance || "2.5 Mly"} • Ø ${g.diameter || "100 kly"}`;
      }

      // Gauge: Morphological Extension / Diameter
      if (this.gaugeTitle) this.gaugeTitle.textContent = "MORPHOLOGICAL DIAMETER SCALE";
      if (this.gaugeVal) this.gaugeVal.textContent = `Ø ${g.diameter || "100 kly"}`;
      if (this.gaugeFill && this.gaugePin) {
        const rawDiam = parseInt(g.diameter || "100", 10);
        const diamPercent = Math.min(100, Math.max(15, (rawDiam / 220) * 100));
        this.gaugeFill.style.width = `${diamPercent}%`;
        this.gaugePin.style.left = `${diamPercent}%`;
      }

      // 4-Tile Metric Grid
      if (this.labelM1) this.labelM1.textContent = "DIAMETER";
      if (this.valM1) this.valM1.textContent = g.diameter || "100 kly";

      if (this.labelM2) this.labelM2.textContent = "DISTANCE";
      if (this.valM2) this.valM2.textContent = g.distance || "2.5 Mly";

      if (this.labelM3) this.labelM3.textContent = "REDSHIFT";
      if (this.valM3) this.valM3.textContent = g.redshift || "z = 0.001";

      if (this.labelM4) this.labelM4.textContent = "SINGULARITY";
      if (this.valM4) this.valM4.textContent = (g.centralBlackHole || "Active SMBH").split('(')[0].trim();

      if (this.panelDesc) {
        this.panelDesc.textContent = `Central Singularity: ${g.centralBlackHole || "Supermassive Black Hole"}. Dynamic 65,000 particle morphology with orbital drift, gravitational accretion disc, and relativistic Doppler beaming.`;
      }

      if (this.panelActionLabel) this.panelActionLabel.textContent = "MORPH PARTICLE STRUCTURE";
    }
  }
}

window.ObservatoryUI = ObservatoryUI;

