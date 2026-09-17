// Solar System & NASA Exoplanet Archive Catalog
// Populated with complete planetary physics, geological core layers, and 3D ring configurations
// Includes: Mercury, Venus, Earth, Mars, Jupiter (with rings), Saturn (with 3D ring geometry), Uranus, Neptune, Kepler-186f, WASP-12b, TRAPPIST-1e

window.ALL_EXOPLANETS = [
  // --- 1. MERCURY ---
  {
    id: "mercury",
    name: "Mercury",
    designation: "Sol b • Innermost Terrestrial World",
    category: "Terrestrial",
    radius: "0.38 R⊕ (2,439 km)",
    mass: "0.055 M⊕ (3.30 × 10²³ kg)",
    semiMajorAxis: "0.387 AU (57.9M km)",
    orbitalPeriod: "87.97 Days (3:2 Spin-Orbit)",
    equilibriumTemp: "440 K (-173°C night / +427°C day)",
    discoveryYear: "Antiquity • Babylonian MUL.APIN",
    hostStar: "Sol (G2V Yellow Dwarf • 0.00 ly)",
    textureType: "mercury",
    surfaceColors: {
      base: "#3a3c40",
      crater: "#232528",
      highland: "#60646c",
      lowland: "#2f3135",
      rays: "#888c94"
    },
    atmosphereColor: "#4a525d",
    atmosphereDensity: 0.05,
    hasRings: false,
    axialTilt: 0.03,
    coreLayers: [
      {
        name: "Silicate Basalt Crust & Impact Regolith",
        depth: "0 – 35 km",
        temp: "100 K – 700 K",
        pressure: "0.01 – 0.6 GPa",
        composition: "Low-iron, high-magnesium basalt, anorthosite regolith, graphite veneers",
        color: "#5e636b"
      },
      {
        name: "Thin Solid Silicate Mantle",
        depth: "35 – 420 km",
        temp: "700 K – 1,700 K",
        pressure: "0.6 – 4.5 GPa",
        composition: "High-pressure olivine, pyroxene, and enstatite silicates",
        color: "#8a4f26"
      },
      {
        name: "Massive Molten Outer Iron-Sulfur Core",
        depth: "420 – 1,950 km",
        temp: "1,700 K – 2,400 K",
        pressure: "4.5 – 35 GPa",
        composition: "Liquid metallic iron-nickel alloy enriched with sulfur, driving active global magnetic field",
        color: "#e65100"
      },
      {
        name: "Dense Solid Inner Iron Core",
        depth: "1,950 – 2,439 km",
        temp: "2,400 K – 2,700 K",
        pressure: "35 – 40 GPa",
        composition: "Super-dense crystalline iron-nickel sphere spanning over 80% of planetary radius",
        color: "#ffca28"
      }
    ],
    lore: "The smallest planet in the solar system and closest to the Sun. Mercury boasts an oversized metallic core that comprises nearly 85% of its entire radius, causing global contraction wrinkles (lobate scarps) as the core cooled over billions of years."
  },

  // --- 2. VENUS ---
  {
    id: "venus",
    name: "Venus",
    designation: "Sol c • Runaway Greenhouse Super-Heated Twin",
    category: "Terrestrial",
    radius: "0.95 R⊕ (6,052 km)",
    mass: "0.815 M⊕ (4.87 × 10²⁴ kg)",
    semiMajorAxis: "0.723 AU (108.2M km)",
    orbitalPeriod: "224.7 Days (Retrograde Rotation 243d)",
    equilibriumTemp: "737 K (+464°C at 92 bar)",
    discoveryYear: "Antiquity • The Morning & Evening Star",
    hostStar: "Sol (G2V Yellow Dwarf • 0.00 ly)",
    textureType: "venus",
    surfaceColors: {
      cloud1: "#e8cf9b",
      cloud2: "#d4aa63",
      cloud3: "#b88a40",
      cloud4: "#f2dfb6",
      storm: "#966828"
    },
    atmosphereColor: "#e6b04c",
    atmosphereDensity: 2.4,
    hasRings: false,
    axialTilt: 177.3,
    coreLayers: [
      {
        name: "Sulfuric Acid Clouds & Basaltic Lithosphere",
        depth: "0 – 50 km",
        temp: "737 K (464°C)",
        pressure: "9.2 – 1.5 GPa",
        composition: "Volcanic basaltic plains, pancake domes, supercritical CO₂ with droplets of H₂SO₄",
        color: "#c29547"
      },
      {
        name: "Convective Silicate Mantle & Plumes",
        depth: "50 – 3,100 km",
        temp: "1,400 K – 3,800 K",
        pressure: "1.5 – 125 GPa",
        composition: "Bridgmanite, magnesium-iron silicates undergoing episodic catastrophic volcanic overturns",
        color: "#b03a16"
      },
      {
        name: "Molten Iron-Nickel Outer Core",
        depth: "3,100 – 5,100 km",
        temp: "3,800 K – 5,300 K",
        pressure: "125 – 290 GPa",
        composition: "Liquid metallic iron-nickel alloy lacking convection, resulting in absence of an intrinsic geodynamo",
        color: "#e65c00"
      },
      {
        name: "Solid Metallic Inner Core Seed",
        depth: "5,100 – 6,052 km",
        temp: "5,300 K – 5,800 K",
        pressure: "290 – 320 GPa",
        composition: "High-density solid iron-nickel alloy crystalline center",
        color: "#ffd54f"
      }
    ],
    lore: "Earth's searing sister world shrouded in opaque sulfuric acid cloud decks. With an atmospheric surface pressure equivalent to 900 meters deep in Earth's ocean and runaway carbon dioxide greenhouse heating, surface rocks glow dull red in the crushing planetary night."
  },

  // --- 3. EARTH ---
  {
    id: "earth",
    name: "Earth",
    designation: "Sol d • Habitable Planetary Standard",
    category: "Terrestrial",
    radius: "1.00 R⊕ (6,371 km)",
    mass: "1.00 M⊕ (5.97 × 10²⁴ kg)",
    semiMajorAxis: "1.00 AU (149.6M km)",
    orbitalPeriod: "365.25 Days",
    equilibriumTemp: "288 K (+15°C)",
    discoveryYear: "Antiquity • Direct Observation",
    hostStar: "Sol (G2V Yellow Dwarf • 0.00 ly)",
    textureType: "terrestrial",
    surfaceColors: {
      ocean: "#08244c",
      shallow: "#0d5c75",
      land1: "#2b5329",
      land2: "#6a7b3c",
      desert: "#a68d5b",
      snow: "#e8f4f8",
      clouds: "rgba(255, 255, 255, 0.75)"
    },
    atmosphereColor: "#38a2ff",
    atmosphereDensity: 1.0,
    hasRings: false,
    axialTilt: 23.44,
    coreLayers: [
      {
        name: "Silicate Crust & Hydrosphere",
        depth: "0 – 45 km",
        temp: "288 K (15°C)",
        pressure: "0.1 – 1.2 GPa",
        composition: "Granitic continental & basaltic oceanic silicates, 71% liquid surface H₂O",
        color: "#4a708b"
      },
      {
        name: "Convective Silicate Mantle",
        depth: "45 – 2,890 km",
        temp: "1,300 K – 3,800 K",
        pressure: "1.2 – 136 GPa",
        composition: "Bridgmanite, ferropericlase, high-pressure olivine peridotite",
        color: "#b84a14"
      },
      {
        name: "Molten Outer Metallic Core",
        depth: "2,890 – 5,150 km",
        temp: "4,200 K – 5,700 K",
        pressure: "136 – 329 GPa",
        composition: "Vigorously convecting liquid Iron-Nickel alloy driving the protective global magnetosphere",
        color: "#e67300"
      },
      {
        name: "Solid Crystalline Inner Core",
        depth: "5,150 – 6,371 km",
        temp: "5,700 K – 6,200 K",
        pressure: "330 – 364 GPa",
        composition: "Hexagonal close-packed (HCP) iron-nickel crystal lattice spinning in synchrony",
        color: "#ffe066"
      }
    ],
    lore: "The cosmic cradle of humanity and the standard for planetary habitability. Earth maintains a dynamic planetary magnetic dynamo driven by molten outer core convection, shielding liquid water oceans and a rich nitrogen-oxygen biosphere."
  },

  // --- 4. MARS ---
  {
    id: "mars",
    name: "Mars",
    designation: "Sol e • The Red Planet",
    category: "Terrestrial",
    radius: "0.53 R⊕ (3,389 km)",
    mass: "0.107 M⊕ (6.42 × 10²³ kg)",
    semiMajorAxis: "1.52 AU (227.9M km)",
    orbitalPeriod: "687.0 Days",
    equilibriumTemp: "210 K (-63°C)",
    discoveryYear: "Antiquity • Planetary Astronomy",
    hostStar: "Sol (G2V Yellow Dwarf • 0.00 ly)",
    textureType: "mars",
    surfaceColors: {
      base: "#b8471b",
      canyon: "#7a2a0d",
      volcano: "#5a1f0a",
      desert: "#db6b32",
      iceCap: "#f8f4f0"
    },
    atmosphereColor: "#ff9e80",
    atmosphereDensity: 0.35,
    hasRings: false,
    axialTilt: 25.19,
    coreLayers: [
      {
        name: "Oxidized Iron Silicate Crust",
        depth: "0 – 50 km",
        temp: "210 K (-63°C)",
        pressure: "0.01 – 0.8 GPa",
        composition: "Hematite (Fe₂O₃) rich dust, tholeiitic basalt, volcanic silica",
        color: "#c0392b"
      },
      {
        name: "Dormant Convective Mantle",
        depth: "50 – 1,600 km",
        temp: "1,200 K – 2,100 K",
        pressure: "0.8 – 24 GPa",
        composition: "Silicate minerals richer in iron than Earth mantle, stagnant lid regime",
        color: "#d35400"
      },
      {
        name: "Sulfur-Rich Liquid Core",
        depth: "1,600 – 3,100 km",
        temp: "2,200 K – 2,600 K",
        pressure: "24 – 40 GPa",
        composition: "Liquid iron-nickel alloy enriched with high sulfur (15-20 wt%) content",
        color: "#e67e22"
      },
      {
        name: "Solidifying Seed Core",
        depth: "3,100 – 3,389 km",
        temp: "2,600 K – 2,800 K",
        pressure: "40 – 43 GPa",
        composition: "NASA InSight seismic data reveals an exceptionally large liquid metallic core",
        color: "#f39c12"
      }
    ],
    lore: "Our neighboring rust-colored world sculpted by ancient riverbeds, massive volcanic calderas like Olympus Mons (21.9 km tall), and the colossal tectonic rift of Valles Marineris. Losing its global magnetic dynamo led to solar wind stripping its once-thick atmosphere."
  },

  // --- 5. JUPITER (WITH RINGS) ---
  {
    id: "jupiter",
    name: "Jupiter",
    designation: "Sol f • Jovian Monarch of the Solar System",
    category: "Gas Giant",
    radius: "11.2 R⊕ / 1.00 RJ (69,911 km)",
    mass: "317.8 M⊕ / 1.00 MJ (1.90 × 10²⁷ kg)",
    semiMajorAxis: "5.20 AU (778.5M km)",
    orbitalPeriod: "11.86 Years (4,333 Days)",
    equilibriumTemp: "165 K (-108°C at 1 bar)",
    discoveryYear: "Antiquity • Galileo 1610 (Moons)",
    hostStar: "Sol (G2V Yellow Dwarf • 0.00 ly)",
    textureType: "jupiter",
    surfaceColors: {
      band1: "#e0d2b4",
      band2: "#b87c4c",
      band3: "#8a532d",
      band4: "#d8c49e",
      band5: "#944e26",
      storm: "#d8382b"
    },
    atmosphereColor: "#e6a15c",
    atmosphereDensity: 1.8,
    hasRings: true,
    ringConfig: {
      type: "jupiter",
      innerRadius: 1.25,
      outerRadius: 1.65,
      opacity: 0.28,
      color: "#d4a76a"
    },
    axialTilt: 3.13,
    coreLayers: [
      {
        name: "Molecular Hydrogen & Helium Envelope",
        depth: "0 – 7,000 km",
        temp: "165 K – 3,000 K",
        pressure: "0.1 – 200 GPa",
        composition: "Gaseous H₂ (89%) and He (10%) with ammonia, ammonium hydrosulfide, and water cloud decks",
        color: "#e0b48a"
      },
      {
        name: "Supercritical Fluid Hydrogen Transition",
        depth: "7,000 – 20,000 km",
        temp: "3,000 K – 10,000 K",
        pressure: "200 – 400 GPa",
        composition: "Continuous supercritical phase where gas and liquid distinction vanishes, helium raindrops rain inward",
        color: "#c87d46"
      },
      {
        name: "Liquid Metallic Hydrogen Mantle",
        depth: "20,000 – 58,000 km",
        temp: "10,000 K – 21,000 K",
        pressure: "400 – 3,500 GPa",
        composition: "Electrically conductive liquid proton-electron soup driving the solar system largest magnetosphere",
        color: "#ff7043"
      },
      {
        name: "Dilute Fuzzy Rock-Ice Core",
        depth: "58,000 – 69,911 km",
        temp: "21,000 K – 25,000 K",
        pressure: "3,500 – 4,500 GPa",
        composition: "Juno gravity data reveals a diffuse, partially dissolved core of heavy rock, silicates, and ices (15-30 M⊕)",
        color: "#ffe082"
      }
    ],
    lore: "The majestic Jovian monarch holding over twice the mass of all other solar system planets combined. Its iconic Great Red Spot is a persistent anticyclonic hurricane larger than Earth that has raged for at least 350 years, ringed by a faint gossamer dust ring system."
  },

  // --- 6. SATURN (WITH 3D RING GEOMETRY) ---
  {
    id: "saturn",
    name: "Saturn",
    designation: "Sol g • Jewel of the Solar System with 3D Rings",
    category: "Gas Giant",
    radius: "9.45 R⊕ / 0.84 RJ (58,232 km)",
    mass: "95.2 M⊕ / 0.30 MJ (5.68 × 10²⁶ kg)",
    semiMajorAxis: "9.58 AU (1.43B km)",
    orbitalPeriod: "29.45 Years (10,759 Days)",
    equilibriumTemp: "134 K (-139°C at 1 bar)",
    discoveryYear: "Antiquity • Huygens 1655 (Rings)",
    hostStar: "Sol (G2V Yellow Dwarf • 0.00 ly)",
    textureType: "saturn",
    surfaceColors: {
      band1: "#f2e4c9",
      band2: "#d6c196",
      band3: "#bfaa7b",
      band4: "#a69061",
      band5: "#c9b385",
      storm: "#8a754c"
    },
    atmosphereColor: "#ffd699",
    atmosphereDensity: 1.6,
    hasRings: true,
    ringConfig: {
      type: "saturn_3d",
      innerRadius: 1.28,
      outerRadius: 2.38,
      cassiniInner: 1.95,
      cassiniOuter: 2.02,
      opacity: 0.92,
      color: "#e8cf9b"
    },
    axialTilt: 26.73,
    coreLayers: [
      {
        name: "Molecular Hydrogen Atmosphere & Hexagon Polar Jet",
        depth: "0 – 10,000 km",
        temp: "134 K – 4,000 K",
        pressure: "0.1 – 250 GPa",
        composition: "96% H₂, 3% He with ammonia and ammonium hydrosulfide cloud strata forming the north polar hexagonal jet",
        color: "#ded0ab"
      },
      {
        name: "Metallic Liquid Hydrogen Ocean",
        depth: "10,000 – 32,000 km",
        temp: "4,000 K – 12,000 K",
        pressure: "250 – 1,500 GPa",
        composition: "Deep fluid metallic hydrogen with continuous helium immiscibility precipitation raining down to core",
        color: "#c98e4d"
      },
      {
        name: "Superheated High-Pressure Ice Mantle",
        depth: "32,000 – 48,000 km",
        temp: "12,000 K – 16,000 K",
        pressure: "1,500 – 3,000 GPa",
        composition: "Dense supercritical water, ammonia, and methane ices under extreme hydrostatic confinement",
        color: "#e6601b"
      },
      {
        name: "Silicate & Nickel-Iron Heavy Core",
        depth: "48,000 – 58,232 km",
        temp: "16,000 K – 20,000 K",
        pressure: "3,000 – 4,000 GPa",
        composition: "Cassini gravitational data indicates a diffuse core of rock and silicates spanning ~55% of Saturn radius",
        color: "#ffe57f"
      }
    ],
    lore: "The breathtaking ringed crown jewel of our solar system. Saturn's magnificent 3D ring system spans up to 282,000 kilometers across yet is merely tens of meters thick, composed of billions of water-ice particles separated by gravitational gaps like the Cassini Division."
  },

  // --- 7. URANUS ---
  {
    id: "uranus",
    name: "Uranus",
    designation: "Sol h • Tilted Methane Ice Giant",
    category: "Ice Giant",
    radius: "4.01 R⊕ (25,362 km)",
    mass: "14.5 M⊕ (8.68 × 10²⁵ kg)",
    semiMajorAxis: "19.2 AU (2.87B km)",
    orbitalPeriod: "84.0 Years (30,687 Days)",
    equilibriumTemp: "76 K (-197°C)",
    discoveryYear: "1781 • William Herschel",
    hostStar: "Sol (G2V Yellow Dwarf • 0.00 ly)",
    textureType: "uranus",
    surfaceColors: {
      color1: "#64b5f6",
      color2: "#81d4fa",
      color3: "#b2ebf2",
      color4: "#e0f7fa",
      cloud: "#ffffff",
      spot: "#4fc3f7"
    },
    atmosphereColor: "#80deea",
    atmosphereDensity: 1.3,
    hasRings: true,
    ringConfig: {
      type: "uranus",
      innerRadius: 1.45,
      outerRadius: 1.95,
      opacity: 0.35,
      color: "#64b5f6"
    },
    axialTilt: 97.77,
    coreLayers: [
      {
        name: "Cyan Methane Atmosphere & Hazes",
        depth: "0 – 4,500 km",
        temp: "76 K – 800 K",
        pressure: "0.1 – 40 GPa",
        composition: "83% H₂, 15% He, 2.3% CH₄ with photochemical hydrocarbon hazes, coldest planetary atmosphere at 49 K",
        color: "#4dd0e1"
      },
      {
        name: "Fluid Volatile Transition Zone",
        depth: "4,500 – 10,500 km",
        temp: "800 K – 2,500 K",
        pressure: "40 – 150 GPa",
        composition: "Superheated supercritical water, ammonia, and methane fluids with stable stratified thermal layers",
        color: "#26c6da"
      },
      {
        name: "Compressed Superionic Water-Ammonia Mantle",
        depth: "10,500 – 21,500 km",
        temp: "2,500 K – 4,800 K",
        pressure: "150 – 500 GPa",
        composition: "Electrically conducting high-pressure ice mantle responsible for tilted, off-center magnetic field",
        color: "#0097a7"
      },
      {
        name: "Solid Silicate-Iron Core",
        depth: "21,500 – 25,362 km",
        temp: "4,800 K – 6,000 K",
        pressure: "500 – 700 GPa",
        composition: "Rocky iron-nickel and magnesium silicate core of approximately 0.55 Earth masses",
        color: "#ffb74d"
      }
    ],
    lore: "The enigmatic ice giant tilted 97.8° on its side, rolling around the Sun along its orbital plane. This extreme axial tilt, likely caused by an ancient protoplanetary collision, subjects its poles to 42 continuous years of sunlight followed by 42 years of frigid darkness."
  },

  // --- 8. NEPTUNE ---
  {
    id: "neptune",
    name: "Neptune",
    designation: "Sol i • Supreme Stormy Ice Giant",
    category: "Ice Giant",
    radius: "3.88 R⊕ (24,622 km)",
    mass: "17.1 M⊕ (1.02 × 10²⁶ kg)",
    semiMajorAxis: "30.07 AU (4.5B km)",
    orbitalPeriod: "164.8 Years (60,190 Days)",
    equilibriumTemp: "72 K (-201°C)",
    discoveryYear: "1846 • Le Verrier & Galle",
    hostStar: "Sol (G2V Yellow Dwarf • 0.00 ly)",
    textureType: "neptune",
    surfaceColors: {
      color1: "#1b2a47",
      color2: "#20407a",
      color3: "#2459b3",
      color4: "#2f7dfa",
      cloud: "#e6f0ff",
      spot: "#0d1b30"
    },
    atmosphereColor: "#2979ff",
    atmosphereDensity: 1.5,
    hasRings: true,
    ringConfig: {
      type: "neptune",
      innerRadius: 1.35,
      outerRadius: 1.80,
      opacity: 0.28,
      color: "#2979ff"
    },
    axialTilt: 28.32,
    coreLayers: [
      {
        name: "Hydrogen-Helium-Methane Atmosphere",
        depth: "0 – 5,000 km",
        temp: "72 K – 1,000 K",
        pressure: "0.1 – 50 GPa",
        composition: "80% H₂, 19% He, 1.5% CH₄ absorbing red light to produce vivid blue, supersonic 2,100 km/h winds",
        color: "#1e88e5"
      },
      {
        name: "Supercritical Fluid Transition Zone",
        depth: "5,000 – 11,000 km",
        temp: "1,000 K – 3,000 K",
        pressure: "50 – 200 GPa",
        composition: "Hot dense fluid where methane decomposes, forming microscopic diamond precipitation ('diamond rain')",
        color: "#1565c0"
      },
      {
        name: "Superionic Water-Ammonia Slush Mantle",
        depth: "11,000 – 20,500 km",
        temp: "3,000 K – 5,500 K",
        pressure: "200 – 600 GPa",
        composition: "Exotic superionic water where oxygen forms a solid lattice while hydrogen protons diffuse freely like a fluid",
        color: "#00acc1"
      },
      {
        name: "Silicate & Nickel-Iron Rocky Core",
        depth: "20,500 – 24,622 km",
        temp: "5,500 K – 7,000 K",
        pressure: "600 – 800 GPa",
        composition: "Dense rocky core of molten silicates, iron, and nickel of ~1.2 Earth masses",
        color: "#ffa000"
      }
    ],
    lore: "The most distant major planet in our solar system, driving the fastest planetary winds ever recorded, exceeding 2,100 km/h. High-pressure interior modeling reveals that deep methane pyrolyzes into pure carbon, condensing into diamond rain that sinks toward its superheated mantle."
  },

  // --- 9. KEPLER-186F ---
  {
    id: "kepler186f",
    name: "Kepler-186f",
    designation: "NASA Exoplanet Archive: KOI-571.05",
    category: "Terrestrial",
    radius: "1.17 R⊕ (7,454 km)",
    mass: "1.44 M⊕ (8.60 × 10²⁴ kg)",
    semiMajorAxis: "0.432 AU (64.6M km)",
    orbitalPeriod: "129.9 Days",
    equilibriumTemp: "188 K (-85°C to temperate with greenhouse)",
    discoveryYear: "2014 • Kepler Transit Photometry",
    hostStar: "Kepler-186 (M1V Red Dwarf • 582 ly)",
    textureType: "kepler186f",
    surfaceColors: {
      ocean: "#14223d",
      shallow: "#1b4d6e",
      land1: "#3a4c28",
      land2: "#5c4028",
      desert: "#8a5836",
      snow: "#c9d8e8",
      clouds: "rgba(220, 230, 255, 0.65)"
    },
    atmosphereColor: "#5599ee",
    atmosphereDensity: 1.15,
    hasRings: false,
    axialTilt: 18.5,
    coreLayers: [
      {
        name: "Basaltic Lithosphere & Cryosphere",
        depth: "0 – 60 km",
        temp: "210 K (-63°C)",
        pressure: "0.2 – 1.8 GPa",
        composition: "Cold iron-rich basalt crust, red-dwarf adapted vegetation, ice caps",
        color: "#546e7a"
      },
      {
        name: "Dense Convective Silicate Mantle",
        depth: "60 – 3,400 km",
        temp: "1,500 K – 4,100 K",
        pressure: "1.8 – 165 GPa",
        composition: "Superheated magnesium silicate, pyroxene, and high-pressure post-perovskite",
        color: "#9e3d1b"
      },
      {
        name: "Fluid Geodynamo Outer Core",
        depth: "3,400 – 6,100 km",
        temp: "4,400 K – 5,900 K",
        pressure: "165 – 380 GPa",
        composition: "Supercritical liquid iron-nickel-sulfur geodynamo shielding from stellar flares",
        color: "#d86018"
      },
      {
        name: "High-Mass Iron Inner Core",
        depth: "6,100 – 7,454 km",
        temp: "6,000 K – 6,500 K",
        pressure: "380 – 420 GPa",
        composition: "Super-dense solid crystalline iron-nickel sphere",
        color: "#ffd54f"
      }
    ],
    lore: "The historic first Earth-sized planet discovered residing inside the circumstellar habitable zone of an alien star. Orbiting an M-dwarf red star, its noon sky glows with a warm, dim orange twilight, receiving approximately one-third the solar radiation Earth receives."
  },

  // --- 10. WASP-12B ---
  {
    id: "wasp12b",
    name: "WASP-12b",
    designation: "NASA Exoplanet Archive: Ultra-Hot Egg-Shaped Jupiter",
    category: "Gas Giant",
    radius: "1.90 RJ (135,000 km)",
    mass: "1.47 MJ (2.79 × 10²⁷ kg)",
    semiMajorAxis: "0.023 AU (3.4M km)",
    orbitalPeriod: "1.09 Days (26.2 Hours)",
    equilibriumTemp: "2,600 K (2,327°C)",
    discoveryYear: "2008 • SuperWASP Transit",
    hostStar: "WASP-12 (F-type Subgiant • 1,410 ly)",
    textureType: "wasp12b",
    surfaceColors: {
      band1: "#1a1617",
      band2: "#2d2426",
      band3: "#ff3d00",
      band4: "#dd2c00",
      band5: "#ff6e40",
      storm: "#ffffff"
    },
    atmosphereColor: "#ff3d00",
    atmosphereDensity: 2.5,
    hasRings: false,
    axialTilt: 0.1,
    coreLayers: [
      {
        name: "Tidally Stripped Carbonaceous Envelope",
        depth: "0 – 25,000 km",
        temp: "2,600 K – 5,500 K",
        pressure: "0.01 – 100 GPa",
        composition: "Tidally distorted egg-shaped atmosphere rich in carbon monoxide, methane, and ionized iron",
        color: "#bf360c"
      },
      {
        name: "Overheated Low-Viscosity Mantle",
        depth: "25,000 – 70,000 km",
        temp: "5,500 K – 15,000 K",
        pressure: "100 – 800 GPa",
        composition: "Superheated fluid hydrogen stripped of molecules, rapidly convecting in an extreme tidal field",
        color: "#e64a19"
      },
      {
        name: "Metallic Liquid Conductor Layer",
        depth: "70,000 – 118,000 km",
        temp: "15,000 K – 26,000 K",
        pressure: "800 – 3,200 GPa",
        composition: "Dense liquid metallic hydrogen, intensely deformed by tidal bulge towards host star",
        color: "#ff6f00"
      },
      {
        name: "Tidally Stressed Dense Seed",
        depth: "118,000 – 135,000 km",
        temp: "26,000 K – 32,000 K",
        pressure: "3,200 – 4,500 GPa",
        composition: "Heavy metal core undergoing enormous gravitational shear as the star consumes the planet",
        color: "#ffd740"
      }
    ],
    lore: "An egg-shaped ultra-hot gas giant so close to its parent star that tidal gravity is actively tearing it apart. It reflects almost zero light—an albedo as dark as fresh asphalt—losing 189 quadrillion metric tons of material every year into a glowing accretion torus."
  },

  // --- 11. TRAPPIST-1E ---
  {
    id: "trappist1e",
    name: "TRAPPIST-1e",
    designation: "NASA Exoplanet Archive: 2MASS J23062928-0502285 e",
    category: "Terrestrial",
    radius: "0.92 R⊕ (5,861 km)",
    mass: "0.69 M⊕ (4.13 × 10²⁴ kg)",
    semiMajorAxis: "0.029 AU (4.38M km)",
    orbitalPeriod: "6.10 Days",
    equilibriumTemp: "251 K (-22°C)",
    discoveryYear: "2017 • Spitzer & TRAPPIST Transit",
    hostStar: "TRAPPIST-1 (M8V Ultra-Cool Dwarf • 39.6 ly)",
    textureType: "trappist1e",
    surfaceColors: {
      ocean: "#0a192f",
      shallow: "#12435e",
      land1: "#3c3b22",
      land2: "#6b4f2c",
      desert: "#8a5829",
      snow: "#d6e0ea",
      clouds: "rgba(240, 245, 255, 0.7)"
    },
    atmosphereColor: "#4facfe",
    atmosphereDensity: 0.95,
    hasRings: false,
    axialTilt: 0.0,
    coreLayers: [
      {
        name: "Synchronized Lithosphere & Ocean",
        depth: "0 – 35 km",
        temp: "255 K (-18°C)",
        pressure: "0.1 – 1.0 GPa",
        composition: "Tidally locked basaltic crust, substellar water ocean, anti-stellar ice sheet",
        color: "#476072"
      },
      {
        name: "Thin Silicate Upper Mantle",
        depth: "35 – 2,100 km",
        temp: "1,400 K – 3,200 K",
        pressure: "1.0 – 95 GPa",
        composition: "Compressed magnesium iron silicates, olivine, and garnet",
        color: "#af4419"
      },
      {
        name: "Enormous Molten Metallic Core",
        depth: "2,100 – 4,800 km",
        temp: "3,500 K – 5,200 K",
        pressure: "95 – 280 GPa",
        composition: "Oversized liquid iron-nickel-sulfur mixture constituting 50% of planetary radius",
        color: "#e65100"
      },
      {
        name: "Dense Hyper-Iron Core Center",
        depth: "4,800 – 5,861 km",
        temp: "5,300 K – 5,800 K",
        pressure: "280 – 330 GPa",
        composition: "High-density solid iron-cobalt-nickel crystallized core",
        color: "#ffca28"
      }
    ],
    lore: "The most Earth-like candidate of the famous seven TRAPPIST-1 worlds. With a dense iron core making up nearly half its radius and similar gravity to Earth, it is tidally locked with a perpetual substellar ocean and a prime target for JWST atmospheric spectroscopy."
  }
];
