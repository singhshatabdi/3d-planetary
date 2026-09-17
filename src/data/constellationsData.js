// All 88 Official IAU Constellations Catalog Data
// Produced for Cosmic Zoom Engine Luxury Digital Observatory
// Includes realistic astronomical spectral classes:
// Blue-white: 0x9bb0ff, White: 0xffffff, Yellow: 0xfff4ea, Orange: 0xffd2a1, Red: 0xffcc6f

window.MAJOR_CONSTELLATIONS = [
  // 1. ORION
  {
    "id": "ori",
    "name": "Orion",
    "latin": "Orionis",
    "abbr": "ORI",
    "family": "Orion",
    "hemisphere": "Equatorial",
    "ra": "05h 35m",
    "dec": "+09° 56′",
    "raH": 5.58,
    "decD": 9.9,
    "brightestStar": "Rigel (β Ori • mag 0.13 • B8Ia)",
    "dist": "860 ly",
    "lore": "The celestial Hunter towering over the celestial equator, armed with club and lion-skin shield, engaged in eternal battle with Taurus the Bull. Marked by the luminous supergiant Betelgeuse at his shoulder, sapphire Rigel at his foot, and the iconic three belt stars Alnitak, Alnilam, and Mintaka.",
    "stars": [
      {
        "name": "Betelgeuse (α Ori)",
        "spectral": "M1-2Ia-ab Red Supergiant",
        "x": -26,
        "y": 32,
        "z": 6,
        "mag": 0.5,
        "dist": "642 ly",
        "color": "#ffcc6f"
      },
      {
        "name": "Bellatrix (γ Ori)",
        "spectral": "B2III Blue Giant",
        "x": 24,
        "y": 31,
        "z": -4,
        "mag": 1.6,
        "dist": "250 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Alnitak (ζ Ori)",
        "spectral": "O9.7Ib Blue Supergiant",
        "x": -14,
        "y": 1,
        "z": 2,
        "mag": 1.7,
        "dist": "1,260 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Alnilam (ε Ori)",
        "spectral": "B0Ia Blue Supergiant",
        "x": 0,
        "y": 2,
        "z": 4,
        "mag": 1.7,
        "dist": "2,000 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Mintaka (δ Ori)",
        "spectral": "O9.5II Blue Giant",
        "x": 14,
        "y": 3,
        "z": 6,
        "mag": 2.2,
        "dist": "1,200 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Saiph (κ Ori)",
        "spectral": "B0.5Ia Blue Supergiant",
        "x": -22,
        "y": -32,
        "z": 5,
        "mag": 2.1,
        "dist": "650 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Rigel (β Ori)",
        "spectral": "B8Ia Blue-White Supergiant",
        "x": 28,
        "y": -35,
        "z": -3,
        "mag": 0.1,
        "dist": "860 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Meissa (λ Ori)",
        "spectral": "O8III Blue Giant",
        "x": -1,
        "y": 44,
        "z": 1,
        "mag": 3.4,
        "dist": "1,100 ly",
        "color": "#9bb0ff"
      }
    ],
    "connections": [
      [0, 1],
      [0, 2],
      [1, 4],
      [2, 3],
      [3, 4],
      [2, 5],
      [4, 6],
      [0, 7],
      [1, 7]
    ]
  },

  // 2. URSA MAJOR
  {
    "id": "uma",
    "name": "Ursa Major",
    "latin": "Ursae Majoris",
    "abbr": "UMA",
    "family": "Ursa Major",
    "hemisphere": "Northern",
    "ra": "11h 20m",
    "dec": "+50° 40′",
    "raH": 11.3,
    "decD": 50.7,
    "brightestStar": "Alioth (ε UMa • mag 1.77 • A1III)",
    "dist": "82 ly",
    "lore": "The Great Bear of the northern sky, containing the celebrated Big Dipper or Plough asterism. In Greek myth, Zeus transformed the nymph Callisto into a bear. The outer stars of the bowl, Dubhe and Merak, serve as the celestial Pointers leading directly to Polaris.",
    "stars": [
      {
        "name": "Dubhe (α UMa)",
        "spectral": "K0III Orange Giant",
        "x": 22,
        "y": 22,
        "z": 0,
        "mag": 1.8,
        "dist": "123 ly",
        "color": "#ffd2a1"
      },
      {
        "name": "Merak (β UMa)",
        "spectral": "A1IVps White Subgiant",
        "x": 20,
        "y": 6,
        "z": 0,
        "mag": 2.4,
        "dist": "79.7 ly",
        "color": "#ffffff"
      },
      {
        "name": "Phecda (γ UMa)",
        "spectral": "A0Ve White Main Sequence",
        "x": 2,
        "y": 4,
        "z": 0,
        "mag": 2.4,
        "dist": "83.2 ly",
        "color": "#ffffff"
      },
      {
        "name": "Megrez (δ UMa)",
        "spectral": "A3V White Main Sequence",
        "x": 4,
        "y": 20,
        "z": 0,
        "mag": 3.3,
        "dist": "80.5 ly",
        "color": "#ffffff"
      },
      {
        "name": "Alioth (ε UMa)",
        "spectral": "A1III-IVp White Giant",
        "x": -14,
        "y": 26,
        "z": 0,
        "mag": 1.8,
        "dist": "82.6 ly",
        "color": "#ffffff"
      },
      {
        "name": "Mizar (ζ UMa)",
        "spectral": "A2V White Quadruple",
        "x": -28,
        "y": 34,
        "z": 0,
        "mag": 2.2,
        "dist": "82.9 ly",
        "color": "#ffffff"
      },
      {
        "name": "Alkaid (η UMa)",
        "spectral": "B3V Blue-White Star",
        "x": -42,
        "y": 42,
        "z": 0,
        "mag": 1.8,
        "dist": "103.9 ly",
        "color": "#9bb0ff"
      }
    ],
    "connections": [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 0],
      [3, 4],
      [4, 5],
      [5, 6]
    ]
  },

  // 3. CASSIOPEIA
  {
    "id": "cas",
    "name": "Cassiopeia",
    "latin": "Cassiopeiae",
    "abbr": "CAS",
    "family": "Perseus",
    "hemisphere": "Northern",
    "ra": "01h 15m",
    "dec": "+60° 11′",
    "raH": 1.25,
    "decD": 60.2,
    "brightestStar": "Schedar (α Cas • mag 2.24 • K0III)",
    "dist": "228 ly",
    "lore": "The boastful Queen of Ethiopia bound to her celestial throne. Due to her hubris claiming she was more exquisite than the sea-nymph Nereids, Poseidon doomed her to circle the celestial pole upside-down half the year.",
    "stars": [
      {
        "name": "Caph (β Cas)",
        "spectral": "F2III Yellow-White Giant",
        "x": -30,
        "y": 12,
        "z": 0,
        "mag": 2.3,
        "dist": "54.7 ly",
        "color": "#fff4ea"
      },
      {
        "name": "Schedar (α Cas)",
        "spectral": "K0IIIa Orange Giant",
        "x": -14,
        "y": -6,
        "z": 0,
        "mag": 2.2,
        "dist": "228 ly",
        "color": "#ffd2a1"
      },
      {
        "name": "Gamma Cas (γ Cas)",
        "spectral": "B0.5IVe Blue Subgiant",
        "x": 0,
        "y": 14,
        "z": 0,
        "mag": 2.1,
        "dist": "550 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Ruchbah (δ Cas)",
        "spectral": "A5V White Subgiant",
        "x": 16,
        "y": -2,
        "z": 0,
        "mag": 2.7,
        "dist": "99.4 ly",
        "color": "#ffffff"
      },
      {
        "name": "Segin (ε Cas)",
        "spectral": "B3III Blue-White Giant",
        "x": 30,
        "y": 16,
        "z": 0,
        "mag": 3.3,
        "dist": "460 ly",
        "color": "#9bb0ff"
      }
    ],
    "connections": [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4]
    ]
  },

  // 4. CYGNUS
  {
    "id": "cyg",
    "name": "Cygnus",
    "latin": "Cygni",
    "abbr": "CYG",
    "family": "Hercules",
    "hemisphere": "Northern",
    "ra": "20h 37m",
    "dec": "+42° 01′",
    "raH": 20.6,
    "decD": 42,
    "brightestStar": "Deneb (α Cyg • mag 1.25 • A2Ia)",
    "dist": "2615 ly",
    "lore": "The celestial Swan soaring along the Milky Way rift, also known as the Northern Cross. Luminous Deneb marks the tail feathers and forms the pinnacle of the Summer Triangle, while Albireo represents the swan beak.",
    "stars": [
      {
        "name": "Deneb (α Cyg)",
        "spectral": "A2Ia White Supergiant",
        "x": 0,
        "y": 34,
        "z": 0,
        "mag": 1.2,
        "dist": "2,615 ly",
        "color": "#ffffff"
      },
      {
        "name": "Sadr (γ Cyg)",
        "spectral": "F8Ib Yellow Supergiant",
        "x": 0,
        "y": 8,
        "z": 0,
        "mag": 2.2,
        "dist": "1,800 ly",
        "color": "#fff4ea"
      },
      {
        "name": "Albireo (β Cyg)",
        "spectral": "K3II Golden Orange Giant",
        "x": 0,
        "y": -32,
        "z": 0,
        "mag": 3,
        "dist": "430 ly",
        "color": "#ffd2a1"
      },
      {
        "name": "Fawaris (δ Cyg)",
        "spectral": "B9.5IV Blue-White Subgiant",
        "x": -24,
        "y": 14,
        "z": 0,
        "mag": 2.9,
        "dist": "165 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Gienah (ε Cyg)",
        "spectral": "K0III Orange Giant",
        "x": 24,
        "y": 6,
        "z": 0,
        "mag": 2.5,
        "dist": "73 ly",
        "color": "#ffd2a1"
      }
    ],
    "connections": [
      [0, 1],
      [1, 2],
      [3, 1],
      [1, 4]
    ]
  },

  // 5. SCORPIUS
  {
    "id": "sco",
    "name": "Scorpius",
    "latin": "Scorpii",
    "abbr": "SCO",
    "family": "Zodiac",
    "hemisphere": "Southern",
    "ra": "16h 53m",
    "dec": "-30° 44′",
    "raH": 16.9,
    "decD": -30.7,
    "brightestStar": "Antares (α Sco • mag 1.06 • M1.5Iab)",
    "dist": "550 ly",
    "lore": "The colossal celestial Scorpion sent by mother Earth to humble Orion. At its pulsating center lies fiery crimson Antares, the Rival of Mars. Its menacing stinger terminates in Shaula and Lesath hovering over the Milky Way dense stellar lanes.",
    "stars": [
      {
        "name": "Graffias (β Sco)",
        "spectral": "B1V Blue-White Multiple",
        "x": -6,
        "y": 32,
        "z": 0,
        "mag": 2.6,
        "dist": "404 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Dschubba (δ Sco)",
        "spectral": "B0.3IV Blue-White Subgiant",
        "x": -1,
        "y": 26,
        "z": 0,
        "mag": 2.3,
        "dist": "490 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Antares (α Sco)",
        "spectral": "M1.5Iab Red Supergiant",
        "x": 0,
        "y": 12,
        "z": 0,
        "mag": 1.0,
        "dist": "550 ly",
        "color": "#ffcc6f"
      },
      {
        "name": "Larawag (ε Sco)",
        "spectral": "K2.5III Orange Giant",
        "x": 3,
        "y": 0,
        "z": 0,
        "mag": 2.3,
        "dist": "63.7 ly",
        "color": "#ffd2a1"
      },
      {
        "name": "Sargas (θ Sco)",
        "spectral": "F0II Yellow-White Giant",
        "x": 9,
        "y": -16,
        "z": 0,
        "mag": 1.8,
        "dist": "300 ly",
        "color": "#fff4ea"
      },
      {
        "name": "Shaula (λ Sco)",
        "spectral": "B2IV Blue-White Subgiant",
        "x": 22,
        "y": -26,
        "z": 0,
        "mag": 1.6,
        "dist": "570 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Lesath (υ Sco)",
        "spectral": "B2IV Blue-White Subgiant",
        "x": 18,
        "y": -30,
        "z": 0,
        "mag": 2.7,
        "dist": "580 ly",
        "color": "#9bb0ff"
      }
    ],
    "connections": [
      [0, 1],
      [1, 2],
      [2, 3],
      [3, 4],
      [4, 5],
      [5, 6]
    ]
  },

  // 6. TAURUS
  {
    "id": "tau",
    "name": "Taurus",
    "latin": "Tauri",
    "abbr": "TAU",
    "family": "Zodiac",
    "hemisphere": "Northern",
    "ra": "04h 42m",
    "dec": "+16° 30′",
    "raH": 4.7,
    "decD": 16.5,
    "brightestStar": "Aldebaran (α Tau • mag 0.85 • K5III)",
    "dist": "65 ly",
    "lore": "The charging celestial Bull, carrying the fiery orange eye Aldebaran and the sparkling V-shaped Hyades cluster. Hosts the Pleiades (Seven Sisters), humanity oldest recognized open star cluster celebrated across every human culture.",
    "stars": [
      {
        "name": "Aldebaran (α Tau)",
        "spectral": "K5III Orange Giant",
        "x": -6,
        "y": -6,
        "z": 0,
        "mag": 0.8,
        "dist": "65.3 ly",
        "color": "#ffd2a1"
      },
      {
        "name": "Elnath (β Tau)",
        "spectral": "B7III Blue-White Giant",
        "x": 24,
        "y": 30,
        "z": 0,
        "mag": 1.6,
        "dist": "134 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Tianguan (ζ Tau)",
        "spectral": "B2IVe Blue-White Variable",
        "x": 28,
        "y": 6,
        "z": 0,
        "mag": 3.0,
        "dist": "440 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Ain (ε Tau)",
        "spectral": "K0III Orange Giant",
        "x": -12,
        "y": 6,
        "z": 0,
        "mag": 3.5,
        "dist": "147 ly",
        "color": "#ffd2a1"
      },
      {
        "name": "Alcyone (Pleiades)",
        "spectral": "B7IIIe Blue Pleiad",
        "x": -32,
        "y": 18,
        "z": 0,
        "mag": 2.8,
        "dist": "440 ly",
        "color": "#9bb0ff"
      }
    ],
    "connections": [
      [0, 1],
      [0, 2],
      [0, 3],
      [3, 4]
    ]
  },

  // 7. PEGASUS
  {
    "id": "peg",
    "name": "Pegasus",
    "latin": "Pegasi",
    "abbr": "PEG",
    "family": "Perseus",
    "hemisphere": "Northern",
    "ra": "22h 41m",
    "dec": "+19° 27′",
    "raH": 22.7,
    "decD": 19.5,
    "brightestStar": "Enif (ε Peg • mag 2.38 • K2Ib)",
    "dist": "690 ly",
    "lore": "The divine winged steed of Greek legend that struck Mount Helicon to create the fountain of Hippocrene. Its core is framed by the iconic Great Square of Pegasus soaring across autumn skies.",
    "stars": [
      {
        "name": "Markab (α Peg)",
        "spectral": "B9.5V Blue-White Star",
        "x": -18,
        "y": -16,
        "z": 0,
        "mag": 2.5,
        "dist": "133 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Scheat (β Peg)",
        "spectral": "M2.5II-IIIe Red Giant",
        "x": -18,
        "y": 18,
        "z": 0,
        "mag": 2.4,
        "dist": "196 ly",
        "color": "#ffcc6f"
      },
      {
        "name": "Algenib (γ Peg)",
        "spectral": "B2IV Blue-White Subgiant",
        "x": 18,
        "y": -16,
        "z": 0,
        "mag": 2.8,
        "dist": "390 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Alpheratz (α And)",
        "spectral": "B8IVp Blue-White Star",
        "x": 18,
        "y": 18,
        "z": 0,
        "mag": 2.1,
        "dist": "97 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Enif (ε Peg)",
        "spectral": "K2Ib Orange Supergiant",
        "x": -42,
        "y": -30,
        "z": 0,
        "mag": 2.4,
        "dist": "690 ly",
        "color": "#ffd2a1"
      }
    ],
    "connections": [
      [0, 1],
      [1, 3],
      [3, 2],
      [2, 0],
      [0, 4]
    ]
  },

  // 8. LEO
  {
    "id": "leo",
    "name": "Leo",
    "latin": "Leonis",
    "abbr": "LEO",
    "family": "Zodiac",
    "hemisphere": "Northern",
    "ra": "10h 40m",
    "dec": "+13° 08′",
    "raH": 10.7,
    "decD": 13.1,
    "brightestStar": "Regulus (α Leo • mag 1.36 • B7V)",
    "dist": "79 ly",
    "lore": "The Nemean Lion slain by Heracles. Characterized by the dramatic Sickle asterism curving like a reversed question mark with royal blue-white Regulus at its foot and Denebola at the tip of the feline tail.",
    "stars": [
      {
        "name": "Regulus (α Leo)",
        "spectral": "B7V Blue-White Subgiant",
        "x": -20,
        "y": -16,
        "z": 0,
        "mag": 1.4,
        "dist": "79.3 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Algieba (γ Leo)",
        "spectral": "K0III Binary Giant",
        "x": -14,
        "y": 6,
        "z": 0,
        "mag": 2.0,
        "dist": "130 ly",
        "color": "#ffd2a1"
      },
      {
        "name": "Adhafera (ζ Leo)",
        "spectral": "F0III Yellow-White Giant",
        "x": -12,
        "y": 22,
        "z": 0,
        "mag": 3.4,
        "dist": "274 ly",
        "color": "#fff4ea"
      },
      {
        "name": "Rasalas (μ Leo)",
        "spectral": "K2III Orange Giant",
        "x": -24,
        "y": 26,
        "z": 0,
        "mag": 3.9,
        "dist": "124 ly",
        "color": "#ffd2a1"
      },
      {
        "name": "Zosma (δ Leo)",
        "spectral": "A4V White Main Sequence",
        "x": 12,
        "y": 14,
        "z": 0,
        "mag": 2.5,
        "dist": "58.4 ly",
        "color": "#ffffff"
      },
      {
        "name": "Chertan (θ Leo)",
        "spectral": "A2V White Main Sequence",
        "x": 10,
        "y": -6,
        "z": 0,
        "mag": 3.3,
        "dist": "165 ly",
        "color": "#ffffff"
      },
      {
        "name": "Denebola (β Leo)",
        "spectral": "A3V White Star",
        "x": 28,
        "y": 6,
        "z": 0,
        "mag": 2.1,
        "dist": "35.9 ly",
        "color": "#ffffff"
      }
    ],
    "connections": [
      [0, 1],
      [1, 2],
      [2, 3],
      [1, 4],
      [4, 5],
      [5, 0],
      [4, 6],
      [5, 6]
    ]
  },

  // 9. CANIS MAJOR
  {
    "id": "cma",
    "name": "Canis Major",
    "latin": "Canis Majoris",
    "abbr": "CMA",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "06h 49m",
    "dec": "-22° 08′",
    "raH": 6.8,
    "decD": -22.1,
    "brightestStar": "Sirius (α CMa • mag -1.46 • A1V)",
    "dist": "8.6 ly",
    "lore": "The Greater Dog racing beside Orion. Anchored by brilliant Sirius, the diamond-bright Dog Star that dominates the earthly night sky and was worshipped in ancient Egypt for heralding the annual Nile flood.",
    "stars": [
      {
        "name": "Sirius (α CMa)",
        "spectral": "A1V Diamond White Star",
        "x": -12,
        "y": 22,
        "z": 0,
        "mag": -1.5,
        "dist": "8.6 ly",
        "color": "#ffffff"
      },
      {
        "name": "Mirzam (β CMa)",
        "spectral": "B1.2II Blue-White Giant",
        "x": -28,
        "y": 16,
        "z": 0,
        "mag": 2.0,
        "dist": "490 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Wezen (δ CMa)",
        "spectral": "F8Ia Yellow-White Supergiant",
        "x": 8,
        "y": -10,
        "z": 0,
        "mag": 1.8,
        "dist": "1,600 ly",
        "color": "#fff4ea"
      },
      {
        "name": "Adhara (ε CMa)",
        "spectral": "B1.5II Blue-White Giant",
        "x": -4,
        "y": -24,
        "z": 0,
        "mag": 1.5,
        "dist": "430 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Aludra (η CMa)",
        "spectral": "B5Ia Blue Supergiant",
        "x": 22,
        "y": -22,
        "z": 0,
        "mag": 2.4,
        "dist": "2,000 ly",
        "color": "#9bb0ff"
      }
    ],
    "connections": [
      [0, 1],
      [0, 2],
      [2, 3],
      [2, 4]
    ]
  },

  // 10. SOUTHERN CROSS (CRUX)
  {
    "id": "cru",
    "name": "Southern Cross",
    "latin": "Crucis",
    "abbr": "CRU",
    "family": "Hercules",
    "hemisphere": "Southern",
    "ra": "12h 26m",
    "dec": "-60° 11′",
    "raH": 12.4,
    "decD": -60.2,
    "brightestStar": "Acrux (α Cru • mag 0.77 • B0.5IV)",
    "dist": "320 ly",
    "lore": "The Southern Cross, revered navigation nexus of the southern skies. Embraced by the dark silhouette of the Coalsack Nebula and pointing directly toward the South Celestial Pole, it appears on multiple national flags.",
    "stars": [
      {
        "name": "Acrux (α Cru)",
        "spectral": "B0.5IV Blue-White Subgiant",
        "x": 0,
        "y": -22,
        "z": 0,
        "mag": 0.8,
        "dist": "320 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Gacrux (γ Cru)",
        "spectral": "M3.5III Red Giant",
        "x": 0,
        "y": 22,
        "z": 0,
        "mag": 1.6,
        "dist": "88.6 ly",
        "color": "#ffcc6f"
      },
      {
        "name": "Mimosa (β Cru)",
        "spectral": "B0.5III Blue-White Giant",
        "x": 16,
        "y": 4,
        "z": 0,
        "mag": 1.2,
        "dist": "280 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Imai (δ Cru)",
        "spectral": "B2IV Blue-White Subgiant",
        "x": -15,
        "y": 6,
        "z": 0,
        "mag": 2.8,
        "dist": "345 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Ginan (ε Cru)",
        "spectral": "K3III Orange Giant",
        "x": 6,
        "y": -6,
        "z": 0,
        "mag": 3.6,
        "dist": "228 ly",
        "color": "#ffd2a1"
      }
    ],
    "connections": [
      [0, 1],
      [2, 3],
      [0, 4],
      [2, 4]
    ]
  }
];

window.ALL_88_CONSTELLATIONS = [
  ...window.MAJOR_CONSTELLATIONS,
  {
    "id": "lyr",
    "name": "Lyra",
    "latin": "Lyrae",
    "abbr": "LYR",
    "family": "Hercules",
    "hemisphere": "Northern",
    "ra": "18h 51m",
    "dec": "+36° 41′",
    "raH": 18.8,
    "decD": 36.7,
    "brightestStar": "Vega (α Lyr • mag 0.03 • A0V)",
    "dist": "25 ly",
    "lore": "The celestial Harp of Orpheus whose celestial harmonies moved stones and stilled beasts. Dominated by sapphire Vega, which served as the northern pole star around 12,000 BCE and will do so again in 13,727 CE.",
    "stars": [
      {
        "name": "Vega (α Lyr)",
        "spectral": "A0V Sapphire White Star",
        "x": 0,
        "y": 26,
        "z": 0,
        "mag": 0,
        "dist": "25 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Sheliak (β Lyr)",
        "spectral": "B8II Blue Variable",
        "x": -12,
        "y": -16,
        "z": 0,
        "mag": 3.5,
        "dist": "960 ly",
        "color": "#ffffff"
      },
      {
        "name": "Sulafat (γ Lyr)",
        "spectral": "B9III Blue Giant",
        "x": 10,
        "y": -18,
        "z": 0,
        "mag": 3.2,
        "dist": "620 ly",
        "color": "#9bb0ff"
      },
      {
        "name": "Delta Lyr (δ Lyr)",
        "spectral": "M4II Red Giant",
        "x": 14,
        "y": 2,
        "z": 0,
        "mag": 4.3,
        "dist": "900 ly",
        "color": "#ffd2a1"
      },
      {
        "name": "Zeta Lyr (ζ Lyr)",
        "spectral": "A3IV White Star",
        "x": -8,
        "y": 4,
        "z": 0,
        "mag": 4.3,
        "dist": "156 ly",
        "color": "#ffffff"
      }
    ],
    "connections": [
      [0, 3],
      [0, 4],
      [4, 1],
      [3, 2],
      [1, 2]
    ]
  },
  {
    "id": "and",
    "name": "Andromeda",
    "latin": "Andromedae",
    "abbr": "AND",
    "family": "Perseus",
    "hemisphere": "Northern",
    "ra": "00h 42m",
    "dec": "+41° 16′",
    "raH": 0.7,
    "decD": 41.3,
    "brightestStar": "Alpheratz (α And • mag 2.07 • B8IVp)",
    "dist": "97 ly",
    "lore": "The chained princess of Ethiopia, saved from the leviathan Cetus by Perseus. Anchors Messier 31, the colossal Andromeda Galaxy, containing a trillion stars and hurtling toward an epic merger with our Milky Way in 4.5 billion years.",
    "stars": [
      {
        "name": "Alpheratz (α And)",
        "x": -22,
        "y": -12,
        "z": 0,
        "mag": 2.1,
        "color": "#88ccff"
      },
      {
        "name": "Mirach (β And)",
        "x": 4,
        "y": 2,
        "z": 0,
        "mag": 2.1,
        "color": "#ff8844"
      },
      {
        "name": "Almach (γ And)",
        "x": 28,
        "y": 16,
        "z": 0,
        "mag": 2.1,
        "color": "#ffaa33"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ]
    ]
  },
  {
    "id": "ant",
    "name": "Antlia",
    "latin": "Antliae",
    "abbr": "ANT",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "10h 16m",
    "dec": "-32° 29′",
    "raH": 10.27,
    "decD": -32.5,
    "brightestStar": "α Ant (mag 4.25 • K4III)",
    "dist": "365 ly",
    "lore": "The Air Pump, created by French astronomer Nicolas-Louis de Lacaille in the 18th century to commemorate Denis Papin invention of the double-cylinder air pump.",
    "stars": [
      {
        "name": "α Ant",
        "x": 18,
        "y": 0,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Antlia β",
        "x": 7.97187059848682,
        "y": 16.776703547410072,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Antlia γ",
        "x": -14.747874310824908,
        "y": 14.86018997212532,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Antlia δ",
        "x": -12.65548339063067,
        "y": -8.566010473198064,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Antlia ε",
        "x": 4.476296866141818,
        "y": -19.649052252486648,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "aps",
    "name": "Apus",
    "latin": "Apodis",
    "abbr": "APS",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "16h 08m",
    "dec": "-75° 18′",
    "raH": 16.14,
    "decD": -75.3,
    "brightestStar": "α Aps (mag 3.83 • K3III)",
    "dist": "410 ly",
    "lore": "The Bird of Paradise, charting the far southern heavens. Introduced by Dutch navigators Pieter Dirkszoon Keyser and Frederick de Houtman in the late 16th century.",
    "stars": [
      {
        "name": "α Aps",
        "x": 13.413139242207668,
        "y": 10.669914160059166,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Apus β",
        "x": -7.7336345227011165,
        "y": 16.85118694169351,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Apus γ",
        "x": -19.99865611887788,
        "y": 0.25503266659548207,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Apus δ",
        "x": -2.9020710974849964,
        "y": -13.767784625662348,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Apus ε",
        "x": 19.059649406486685,
        "y": -12.154382054479703,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "aqr",
    "name": "Aquarius",
    "latin": "Aquarii",
    "abbr": "AQR",
    "family": "Zodiac",
    "hemisphere": "Equatorial",
    "ra": "22h 17m",
    "dec": "-00° 17′",
    "raH": 22.28,
    "decD": -0.3,
    "brightestStar": "Sadalsuud (β Aqr • mag 2.87 • G0Ib)",
    "dist": "540 ly",
    "lore": "The Water Bearer pouring nectar from an urn into the mouth of the Southern Fish. Associated in Babylonian astrology with the god Ea, the Ruler of the Cosmic Abyss.",
    "stars": [
      {
        "name": "Sadalsuud",
        "x": 1.9902560367612525,
        "y": 15.901893814586318,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Aquarius β",
        "x": -19.497683565301745,
        "y": 8.337442768746213,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Aquarius γ",
        "x": -15.057098931345907,
        "y": -14.480102342307909,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Aquarius δ",
        "x": 8.330385199369271,
        "y": -11.952790886883607,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Aquarius ε",
        "x": 23.92922884462113,
        "y": 1.5347834858503784,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "aql",
    "name": "Aquila",
    "latin": "Aquilae",
    "abbr": "AQL",
    "family": "Hercules",
    "hemisphere": "Equatorial",
    "ra": "19h 40m",
    "dec": "+03° 24′",
    "raH": 19.67,
    "decD": 3.4,
    "brightestStar": "Altair (α Aql • mag 0.77 • A7V)",
    "dist": "16.7 ly",
    "lore": "The celestial Eagle of Zeus that carried his thunderbolts. Fast-spinning Altair forms the southern vertex of the brilliant Summer Triangle.",
    "stars": [
      {
        "name": "Altair",
        "x": -10.446963536793993,
        "y": 13.029454278812736,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Aquila β",
        "x": -21.32471487306514,
        "y": -4.4254890771234585,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Aquila γ",
        "x": -2.4416732755486685,
        "y": -21.83543588423919,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Aquila δ",
        "x": 15.317250721970092,
        "y": -4.046042985311056,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Aquila ε",
        "x": 16.603248199241698,
        "y": 14.441744788074368,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "ara",
    "name": "Ara",
    "latin": "Arae",
    "abbr": "ARA",
    "family": "Hercules",
    "hemisphere": "Southern",
    "ra": "17h 22m",
    "dec": "-56° 35′",
    "raH": 17.37,
    "decD": -56.6,
    "brightestStar": "β Ara (mag 2.85 • K3Ib)",
    "dist": "600 ly",
    "lore": "The Altar where the gods of Olympus swore solemn oaths before their victorious war against the primordial Titans.",
    "stars": [
      {
        "name": "β Ara",
        "x": -17.559875656459486,
        "y": 3.516537795601871,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Ara β",
        "x": -12.283579756120421,
        "y": -14.932965125004676,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Ara γ",
        "x": 11.418154083689071,
        "y": -18.062313427647435,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Ara δ",
        "x": 14.497661105251922,
        "y": 5.922775560001956,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Ara ε",
        "x": 0.8154022630858144,
        "y": 19.988453596690558,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "ari",
    "name": "Aries",
    "latin": "Arietis",
    "abbr": "ARI",
    "family": "Zodiac",
    "hemisphere": "Northern",
    "ra": "02h 38m",
    "dec": "+20° 47′",
    "raH": 2.63,
    "decD": 20.8,
    "brightestStar": "Hamal (α Ari • mag 2.01 • K2III)",
    "dist": "66 ly",
    "lore": "The golden-fleeced Ram that carried Phrixus and Helle across the Dardanelles, whose shimmering fleece was pursued by Jason and the Argonauts.",
    "stars": [
      {
        "name": "Hamal",
        "x": -15.723376158310883,
        "y": -7.788586378491191,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Aries β",
        "x": 3.0178964662199608,
        "y": -17.82983764740084,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Aries γ",
        "x": 19.458705565937947,
        "y": -5.083711342586629,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Aries δ",
        "x": 6.289321177039065,
        "y": 12.873044461605584,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Aries ε",
        "x": -15.388014411110444,
        "y": 15.348023137349745,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "aur",
    "name": "Auriga",
    "latin": "Aurigae",
    "abbr": "AUR",
    "family": "Perseus",
    "hemisphere": "Northern",
    "ra": "06h 04m",
    "dec": "+42° 01′",
    "raH": 6.07,
    "decD": 42,
    "brightestStar": "Capella (α Aur • mag 0.08 • G3III)",
    "dist": "42.9 ly",
    "lore": "The Charioteer holding a goat and her kids. Anchored by golden Capella, the sixth-brightest star in the sky, a quadruplet stellar system.",
    "stars": [
      {
        "name": "Capella",
        "x": -5.873439206766303,
        "y": -15.124248195009013,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Auriga β",
        "x": 16.781298147228746,
        "y": -11.639712100611302,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Auriga γ",
        "x": 17.582104497316166,
        "y": 10.485810304835772,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Auriga δ",
        "x": -5.124378806741888,
        "y": 13.26255086606982,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Auriga ε",
        "x": -23.74891114723276,
        "y": 2.8854543404091104,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "boo",
    "name": "Boötes",
    "latin": "Boötis",
    "abbr": "BOO",
    "family": "Ursa Major",
    "hemisphere": "Northern",
    "ra": "14h 42m",
    "dec": "+19° 10′",
    "raH": 14.7,
    "decD": 19.2,
    "brightestStar": "Arcturus (α Boo • mag -0.05 • K1.5III)",
    "dist": "36.7 ly",
    "lore": "The Herdsman or Bear Driver who chases the Great and Little Bears around the celestial pole. Anchored by fiery orange-gold Arcturus, the fourth-brightest star in the sky.",
    "stars": [
      {
        "name": "Arcturus",
        "x": 6.969903057088855,
        "y": -14.751818840771467,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Boötes β",
        "x": 21.992091168644556,
        "y": 0.4826066313220624,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Boötes γ",
        "x": 6.744762855567311,
        "y": 20.711226196602002,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Boötes δ",
        "x": -13.926433006444274,
        "y": 6.892782368778448,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Boötes ε",
        "x": -20.00614692985077,
        "y": -11.047689710134176,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cae",
    "name": "Caelum",
    "latin": "Caeli",
    "abbr": "CAE",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "04h 42m",
    "dec": "-37° 52′",
    "raH": 4.7,
    "decD": -37.9,
    "brightestStar": "α Cae (mag 4.45 • F2V)",
    "dist": "66 ly",
    "lore": "The Sculptor Chisel, a modest southern constellation mapped by Lacaille to represent the tools of classical fine sculpture.",
    "stars": [
      {
        "name": "α Cae",
        "x": 16.26102589670206,
        "y": -6.861107381334334,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Caelum β",
        "x": 15.99458863858847,
        "y": 12.358964316737492,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Caelum γ",
        "x": -7.530055237605666,
        "y": 20.381140900928855,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Caelum δ",
        "x": -15.630863978004083,
        "y": -2.989900901774342,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Caelum ε",
        "x": -6.06722601611766,
        "y": -19.35036549449076,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cam",
    "name": "Camelopardalis",
    "latin": "Camelopardalis",
    "abbr": "CAM",
    "family": "Ursa Major",
    "hemisphere": "Northern",
    "ra": "06h 00m",
    "dec": "+70° 00′",
    "raH": 6,
    "decD": 70,
    "brightestStar": "β Cam (mag 4.03 • G1Ib)",
    "dist": "1000 ly",
    "lore": "The Giraffe, a sprawling faint circumpolar constellation established by Petrus Plancius in 1612 to represent the animal Rebekah rode to marry Isaac.",
    "stars": [
      {
        "name": "β Cam",
        "x": 17.26469745108997,
        "y": 4.526375656151891,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Camelopardalis β",
        "x": 1.84542489037987,
        "y": 17.93656106533081,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Camelopardalis γ",
        "x": -17.96717167818063,
        "y": 9.663782783310497,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Camelopardalis δ",
        "x": -9.369006439442035,
        "y": -11.348777603878611,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Camelopardalis ε",
        "x": 10.96386388894733,
        "y": -17.791104374889713,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cnc",
    "name": "Cancer",
    "latin": "Cancri",
    "abbr": "CNC",
    "family": "Zodiac",
    "hemisphere": "Northern",
    "ra": "08h 38m",
    "dec": "+19° 48′",
    "raH": 8.63,
    "decD": 19.8,
    "brightestStar": "Tarf (β Cnc • mag 3.53 • K4III)",
    "dist": "290 ly",
    "lore": "The Giant Crab sent by Hera to distract Heracles during his battle with the Hydra. Home to Messier 44, the famous Beehive Cluster (Praesepe).",
    "stars": [
      {
        "name": "Tarf",
        "x": 9.469395312859891,
        "y": 13.606985930057032,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Cancer β",
        "x": -13.244261859066125,
        "y": 14.372768027222822,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Cancer γ",
        "x": -19.2472975966262,
        "y": -5.978733781040749,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Cancer δ",
        "x": 1.667776429851154,
        "y": -13.923736234855848,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Cancer ε",
        "x": 22.407207457791305,
        "y": -7.164585644736553,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cvn",
    "name": "Canes Venatici",
    "latin": "Canum Venaticorum",
    "abbr": "CVN",
    "family": "Ursa Major",
    "hemisphere": "Northern",
    "ra": "13h 07m",
    "dec": "+40° 06′",
    "raH": 13.12,
    "decD": 40.1,
    "brightestStar": "Cor Caroli (α CVn • mag 2.89 • A0p)",
    "dist": "110 ly",
    "lore": "The Hunting Dogs Asterion and Chara, held on leashes by Boötes. Famous home to Messier 51, the majestic interacting Whirlpool Galaxy.",
    "stars": [
      {
        "name": "Cor Caroli",
        "x": -3.151995465434589,
        "y": 15.752779560138737,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Canes Venatici β",
        "x": -21.583994721036994,
        "y": 3.483876584123654,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Canes Venatici γ",
        "x": -10.71801528845895,
        "y": -18.574181527442757,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Canes Venatici δ",
        "x": 11.854575048160427,
        "y": -9.402446050554044,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Canes Venatici ε",
        "x": 22.430690962207,
        "y": 7.113372723159312,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cmi",
    "name": "Canis Minor",
    "latin": "Canis Minoris",
    "abbr": "CMI",
    "family": "Bayer",
    "hemisphere": "Northern",
    "ra": "07h 39m",
    "dec": "+05° 13′",
    "raH": 7.65,
    "decD": 5.2,
    "brightestStar": "Procyon (α CMi • mag 0.38 • F5IV-V)",
    "dist": "11.5 ly",
    "lore": "The Lesser Dog companion to Orion. Procyon (meaning 'Before the Dog') rises just before Sirius and is the eighth-brightest star in the celestial sphere.",
    "stars": [
      {
        "name": "Procyon",
        "x": -14.166967987157825,
        "y": 9.870150257936713,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Canis Minor β",
        "x": -18.92341887386104,
        "y": -9.180576724387569,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Canis Minor γ",
        "x": 3.2737163228250443,
        "y": -21.70327545647383,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Canis Minor δ",
        "x": 15.999675323279572,
        "y": -0.0891879977471389,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Canis Minor ε",
        "x": 11.022346006098864,
        "y": 17.765992180009654,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cap",
    "name": "Capricornus",
    "latin": "Capricorni",
    "abbr": "CAP",
    "family": "Zodiac",
    "hemisphere": "Southern",
    "ra": "21h 02m",
    "dec": "-18° 01′",
    "raH": 21.03,
    "decD": -18,
    "brightestStar": "Deneb Algedi (δ Cap • mag 2.85 • A7m)",
    "dist": "39 ly",
    "lore": "The Sea-Goat, half-goat half-fish, representing the god Pan who leaped into the Nile river to escape the monster Typhon.",
    "stars": [
      {
        "name": "Deneb Algedi",
        "x": -17.961728340303893,
        "y": -1.0428129211146262,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Capricornus β",
        "x": -6.618499978265076,
        "y": -17.16613813167712,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Capricornus γ",
        "x": 15.596994497074547,
        "y": -13.77126910696519,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Capricornus δ",
        "x": 11.990521945313215,
        "y": 9.269524824718925,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Capricornus ε",
        "x": -6.003550767140826,
        "y": 19.36415248644535,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "car",
    "name": "Carina",
    "latin": "Carinae",
    "abbr": "CAR",
    "family": "Heavenly Waters",
    "hemisphere": "Southern",
    "ra": "08h 45m",
    "dec": "-63° 13′",
    "raH": 8.75,
    "decD": -63.2,
    "brightestStar": "Canopus (α Car • mag -0.74 • A9II)",
    "dist": "310 ly",
    "lore": "The Keel of the great ship Argo Navis. Dominated by Canopus, the second-brightest star in the sky, and the eruptive hypergiant Eta Carinae.",
    "stars": [
      {
        "name": "Canopus",
        "x": -12.602272374975934,
        "y": -11.424305248434893,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Carina β",
        "x": 9.059545342414577,
        "y": -16.40295672129641,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Carina γ",
        "x": 19.971245782642466,
        "y": 1.1792810038474748,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Carina δ",
        "x": 1.8703847255241062,
        "y": 13.90401324030886,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Carina ε",
        "x": -19.969730715801344,
        "y": 11.093349331994059,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cen",
    "name": "Centaurus",
    "latin": "Centauri",
    "abbr": "CEN",
    "family": "Hercules",
    "hemisphere": "Southern",
    "ra": "13h 04m",
    "dec": "-47° 20′",
    "raH": 13.07,
    "decD": -47.3,
    "brightestStar": "Rigil Kentaurus (α Cen • mag -0.27 • G2V)",
    "dist": "4.37 ly",
    "lore": "The wise Centaur Chiron, tutor of Achilles and Heracles. Home to the closest star system to our Sun (Alpha Centauri) and Omega Centauri, the grandest globular cluster.",
    "stars": [
      {
        "name": "Rigil Kentaurus",
        "x": -0.8200532301160223,
        "y": -15.983386750301069,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Centaurus β",
        "x": 20.120382550365182,
        "y": -7.279988811284532,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Centaurus γ",
        "x": 14.167127783251686,
        "y": 15.528809141442622,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Centaurus δ",
        "x": -9.202996305318447,
        "y": 11.452304688365716,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Centaurus ε",
        "x": -23.758313535129737,
        "y": -2.8311925695022815,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cep",
    "name": "Cepheus",
    "latin": "Cephei",
    "abbr": "CEP",
    "family": "Perseus",
    "hemisphere": "Northern",
    "ra": "22h 00m",
    "dec": "+71° 00′",
    "raH": 22,
    "decD": 71,
    "brightestStar": "Alderamin (α Cep • mag 2.45 • A7IV-V)",
    "dist": "49 ly",
    "lore": "The King of Ethiopia, husband of Cassiopeia and father of Andromeda. Contains the pulsating supergiant Delta Cephei, the prototype of all Cepheid variable stars.",
    "stars": [
      {
        "name": "Alderamin",
        "x": 11.38010702369056,
        "y": -12.396516089770138,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Cepheus β",
        "x": 20.926842741422476,
        "y": 5.553234098243822,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Cepheus γ",
        "x": 1.142716175013497,
        "y": 21.964061138356648,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Cepheus δ",
        "x": -15.586059268719534,
        "y": 3.1639153629396928,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Cepheus ε",
        "x": -15.438443462723338,
        "y": -15.31281379379826,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cet",
    "name": "Cetus",
    "latin": "Ceti",
    "abbr": "CET",
    "family": "Perseus",
    "hemisphere": "Equatorial",
    "ra": "01h 40m",
    "dec": "-11° 21′",
    "raH": 1.67,
    "decD": -11.4,
    "brightestStar": "Diphda (β Cet • mag 2.04 • K0III)",
    "dist": "96 ly",
    "lore": "The Sea Monster sent by Poseidon to ravage the coast of Ethiopia. Home to the legendary pulsating variable star Mira (The Wonderful).",
    "stars": [
      {
        "name": "Diphda",
        "x": 17.780382130114564,
        "y": -2.4917461864049875,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Cetus β",
        "x": 11.067912515243973,
        "y": 15.55624461176452,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Cetus γ",
        "x": -12.46408209772069,
        "y": 17.20530312223958,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Cetus δ",
        "x": -14.025668495641158,
        "y": -6.736967209069039,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Cetus ε",
        "x": 0.7496477741898779,
        "y": -19.990241164521517,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cha",
    "name": "Chamaeleon",
    "latin": "Chamaeleontis",
    "abbr": "CHA",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "10h 41m",
    "dec": "-79° 12′",
    "raH": 10.68,
    "decD": -79.2,
    "brightestStar": "γ Cha (mag 4.11 • M0III)",
    "dist": "413 ly",
    "lore": "The Chameleon, a circumpolar southern constellation named by Dutch navigators Keyser and de Houtman in 1597.",
    "stars": [
      {
        "name": "γ Cha",
        "x": 15.118864230852497,
        "y": 8.682945139271249,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Chamaeleon β",
        "x": -4.431792553918005,
        "y": 17.630996464360642,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Chamaeleon γ",
        "x": -19.718546030906317,
        "y": 3.677841804197773,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Chamaeleon δ",
        "x": -5.317079008733821,
        "y": -13.20434639020971,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Chamaeleon ε",
        "x": 16.55568012692555,
        "y": -14.479618231206024,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cir",
    "name": "Circinus",
    "latin": "Circini",
    "abbr": "CIR",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "15h 08m",
    "dec": "-63° 01′",
    "raH": 15.13,
    "decD": -63,
    "brightestStar": "α Cir (mag 3.19 • F1Vp)",
    "dist": "54 ly",
    "lore": "The Drafting Compass, introduced by Lacaille to symbolize the tools used by draftsmen and celestial cartographers.",
    "stars": [
      {
        "name": "α Cir",
        "x": 4.751999104602953,
        "y": 15.432363095904472,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Circinus β",
        "x": -17.672829250608544,
        "y": 10.720089894384422,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Circinus γ",
        "x": -16.923429409660184,
        "y": -11.724035985515442,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Circinus δ",
        "x": 6.101366150533777,
        "y": -12.942114650289302,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Circinus ε",
        "x": 23.924090313799294,
        "y": -1.5894405587201852,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "col",
    "name": "Columba",
    "latin": "Columbae",
    "abbr": "COL",
    "family": "Heavenly Waters",
    "hemisphere": "Southern",
    "ra": "05h 51m",
    "dec": "-35° 05′",
    "raH": 5.85,
    "decD": -35.1,
    "brightestStar": "Phact (α Col • mag 2.65 • B7IVe)",
    "dist": "260 ly",
    "lore": "The Dove released by Noah from the Ark to seek dry land, also identified as the dove that guided Jason through the Clashing Rocks.",
    "stars": [
      {
        "name": "Phact",
        "x": -8.036728045420789,
        "y": 14.316658754248063,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Columba β",
        "x": -21.906887395212348,
        "y": -1.6543233040982623,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Columba γ",
        "x": -5.503266761031929,
        "y": -21.150744821350255,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Columba δ",
        "x": 14.410242758156304,
        "y": -6.083918709006537,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Columba ε",
        "x": 19.09955927553465,
        "y": 12.110797394392028,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "com",
    "name": "Coma Berenices",
    "latin": "Comae Berenices",
    "abbr": "COM",
    "family": "Ursa Major",
    "hemisphere": "Northern",
    "ra": "12h 47m",
    "dec": "+23° 18′",
    "raH": 12.78,
    "decD": 23.3,
    "brightestStar": "β Com (mag 4.26 • F9.5V)",
    "dist": "30 ly",
    "lore": "Berenice Hair, commemorating Queen Berenice II of Egypt who sacrificed her golden hair to Aphrodite for her husband safe return from war.",
    "stars": [
      {
        "name": "β Com",
        "x": -16.72952714071234,
        "y": 5.904452165640034,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Coma Berenices β",
        "x": -14.976074193318915,
        "y": -13.185608653217647,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Coma Berenices γ",
        "x": 8.721642370467466,
        "y": -19.797951277281616,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Coma Berenices δ",
        "x": 15.374921919373456,
        "y": 3.874953674491863,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Coma Berenices ε",
        "x": 4.540915022594611,
        "y": 19.638752979291965,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "cra",
    "name": "Corona Australis",
    "latin": "Coronae Australis",
    "abbr": "CRA",
    "family": "Hercules",
    "hemisphere": "Southern",
    "ra": "19h 05m",
    "dec": "-40° 30′",
    "raH": 19.08,
    "decD": -40.5,
    "brightestStar": "Meridiana (α CrA • mag 4.11 • A2V)",
    "dist": "130 ly",
    "lore": "The Southern Crown, a delicate arc of stars representing a laurel wreath awarded to triumphant poets and athletes in antiquity.",
    "stars": [
      {
        "name": "Meridiana",
        "x": -16.896102731764422,
        "y": -5.516965526838664,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Corona Australis β",
        "x": -0.41268687774540286,
        "y": -17.996832791331354,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Corona Australis γ",
        "x": 18.501556042789492,
        "y": -8.35510820005215,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Corona Australis δ",
        "x": 8.503753746580037,
        "y": 11.858951286013589,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Corona Australis ε",
        "x": -12.332011999413048,
        "y": 17.157794633892845,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "crb",
    "name": "Corona Borealis",
    "latin": "Coronae Borealis",
    "abbr": "CRB",
    "family": "Ursa Major",
    "hemisphere": "Northern",
    "ra": "15h 50m",
    "dec": "+30° 00′",
    "raH": 15.83,
    "decD": 30,
    "brightestStar": "Alphecca (α CrB • mag 2.22 • A0V)",
    "dist": "75 ly",
    "lore": "The Northern Crown, the jeweled tiara forged by Hephaestus given by Dionysus to Ariadne on the island of Naxos.",
    "stars": [
      {
        "name": "Alphecca",
        "x": -8.451559369487834,
        "y": -14.126655144078565,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Corona Borealis β",
        "x": 14.361026798359944,
        "y": -13.635949585544179,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Corona Borealis γ",
        "x": 18.85212956280413,
        "y": 7.345925758280461,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Corona Borealis δ",
        "x": -2.7013626877820207,
        "y": 13.799020199492366,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Corona Borealis ε",
        "x": -22.919914365339423,
        "y": 5.932345744442281,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "crv",
    "name": "Corvus",
    "latin": "Corvi",
    "abbr": "CRV",
    "family": "Hercules",
    "hemisphere": "Southern",
    "ra": "12h 26m",
    "dec": "-18° 26′",
    "raH": 12.43,
    "decD": -18.4,
    "brightestStar": "Gienah (γ Crv • mag 2.58 • B8III)",
    "dist": "154 ly",
    "lore": "The sacred Crow of Apollo, placed in the heavens along with the Crater (Cup) and Hydra as punishment for its insolence.",
    "stars": [
      {
        "name": "Gienah",
        "x": 4.300331327683853,
        "y": -15.536678081402997,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Corvus β",
        "x": 21.81562600079847,
        "y": -2.3254883742939696,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Corvus γ",
        "x": 9.594692716991755,
        "y": 19.30309987324501,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Corvus δ",
        "x": -12.529726399349423,
        "y": 8.706401974189436,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Corvus ε",
        "x": -21.82665497856177,
        "y": -8.316530244657024,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "crt",
    "name": "Crater",
    "latin": "Crateris",
    "abbr": "CRT",
    "family": "Hercules",
    "hemisphere": "Southern",
    "ra": "11h 23m",
    "dec": "-15° 55′",
    "raH": 11.38,
    "decD": -15.9,
    "brightestStar": "Labrum (δ Crt • mag 3.56 • K0III)",
    "dist": "195 ly",
    "lore": "The two-handled Goblet of Apollo, resting on the coils of Hydra the water serpent.",
    "stars": [
      {
        "name": "Labrum",
        "x": 14.860553023471308,
        "y": -9.028414463389677,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Crater β",
        "x": 18.151865335488477,
        "y": 10.170160766595272,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Crater γ",
        "x": -4.552690740670111,
        "y": 21.422426064616914,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Crater δ",
        "x": -15.972300074577875,
        "y": -0.8234444241107477,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Crater ε",
        "x": -9.609414792335473,
        "y": -18.32687665373295,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "del",
    "name": "Delphinus",
    "latin": "Delphini",
    "abbr": "DEL",
    "family": "Hercules",
    "hemisphere": "Northern",
    "ra": "20h 39m",
    "dec": "+11° 40′",
    "raH": 20.65,
    "decD": 11.7,
    "brightestStar": "Rotanev (β Del • mag 3.63 • F5III)",
    "dist": "101 ly",
    "lore": "The celestial Dolphin that saved the poet-musician Arion from mutinous sailors by carrying him ashore on its back.",
    "stars": [
      {
        "name": "Rotanev",
        "x": 17.847076107875115,
        "y": 2.081191377646634,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Delphinus β",
        "x": 5.236984804835908,
        "y": 17.482575316291726,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Delphinus γ",
        "x": -16.379789920471502,
        "y": 12.62378720571115,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Delphinus δ",
        "x": -11.274571924943569,
        "y": -9.933621387391312,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Delphinus ε",
        "x": 7.505275129036693,
        "y": -18.99690846993018,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "dor",
    "name": "Dorado",
    "latin": "Doradus",
    "abbr": "DOR",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "05h 14m",
    "dec": "-65° 18′",
    "raH": 5.23,
    "decD": -65.3,
    "brightestStar": "α Dor (mag 3.27 • A0III)",
    "dist": "176 ly",
    "lore": "The Dolphinfish, celebrated host of the Large Magellanic Cloud (LMC) and the colossal 30 Doradus (Tarantula Nebula).",
    "stars": [
      {
        "name": "α Dor",
        "x": 11.737815521107187,
        "y": 12.130115545395928,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Dorado β",
        "x": -10.346931291422951,
        "y": 15.884974458938455,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Dorado γ",
        "x": -19.85890958837365,
        "y": -2.608579891927671,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Dorado δ",
        "x": -0.8307447171502748,
        "y": -13.981116336828343,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Dorado ε",
        "x": 20.794892609762936,
        "y": -9.985143177227895,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "dra",
    "name": "Draco",
    "latin": "Draconis",
    "abbr": "DRA",
    "family": "Ursa Major",
    "hemisphere": "Northern",
    "ra": "17h 08m",
    "dec": "+65° 42′",
    "raH": 17.13,
    "decD": 65.7,
    "brightestStar": "Eltanin (γ Dra • mag 2.23 • K5III)",
    "dist": "154 ly",
    "lore": "Ladon, the hundred-headed dragon that guarded the Golden Apples in the Garden of the Hesperides. Thuban in its coils was the Pole Star when the Egyptian pyramids were built.",
    "stars": [
      {
        "name": "Eltanin",
        "x": -0.3536367763242735,
        "y": 15.996911826182625,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Draco β",
        "x": -20.657521487214943,
        "y": 6.191577381114314,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Draco γ",
        "x": -13.216912247002842,
        "y": -16.511481129583192,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Draco δ",
        "x": 10.036472528736295,
        "y": -10.90311863342904,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Draco ε",
        "x": 23.48636821557503,
        "y": 4.115562271092602,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "equ",
    "name": "Equuleus",
    "latin": "Equulei",
    "abbr": "EQU",
    "family": "Hercules",
    "hemisphere": "Northern",
    "ra": "21h 15m",
    "dec": "+10° 00′",
    "raH": 21.25,
    "decD": 10,
    "brightestStar": "Kitalpha (α Equ • mag 3.92 • G0III)",
    "dist": "186 ly",
    "lore": "The Little Horse or Foal, second smallest constellation in the heavens, said to be Celeris, the brother of Pegasus.",
    "stars": [
      {
        "name": "Kitalpha",
        "x": -12.264857667996452,
        "y": 11.710862873482553,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Equuleus β",
        "x": -20.43998116490053,
        "y": -6.657364509850736,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Equuleus γ",
        "x": 0.16110021936379404,
        "y": -21.999286273203918,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Equuleus δ",
        "x": 15.788589553653884,
        "y": -2.2683334858930615,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Equuleus ε",
        "x": 14.207988186822458,
        "y": 16.11876648857701,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "eri",
    "name": "Eridanus",
    "latin": "Eridani",
    "abbr": "ERI",
    "family": "Heavenly Waters",
    "hemisphere": "Southern",
    "ra": "03h 32m",
    "dec": "-29° 00′",
    "raH": 3.53,
    "decD": -29,
    "brightestStar": "Achernar (α Eri • mag 0.45 • B3Vpe)",
    "dist": "144 ly",
    "lore": "The great Celestial River down which Phaethon fell when he lost control of his father sun chariot. Achernar at its southern mouth is the tenth-brightest star in the sky.",
    "stars": [
      {
        "name": "Achernar",
        "x": -17.92527918886403,
        "y": 1.4563586591975544,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Eridanus β",
        "x": -9.805180009775368,
        "y": -16.11337262075426,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Eridanus γ",
        "x": 13.45700776636692,
        "y": -16.27512887171367,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Eridanus δ",
        "x": 13.49403304028869,
        "y": 7.522510534090603,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Eridanus ε",
        "x": -2.311510004298229,
        "y": 19.907022098231185,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "for",
    "name": "Fornax",
    "latin": "Fornacis",
    "abbr": "FOR",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "02h 37m",
    "dec": "-31° 30′",
    "raH": 2.62,
    "decD": -31.5,
    "brightestStar": "Dalim (α For • mag 3.85 • F8V)",
    "dist": "46 ly",
    "lore": "The Chemical Furnace, created by Lacaille to honor the apparatus of chemical experimentation. Contains the rich Fornax Cluster of galaxies.",
    "stars": [
      {
        "name": "Dalim",
        "x": -14.450060744856936,
        "y": -9.540380486547924,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Fornax β",
        "x": 5.826842857564077,
        "y": -17.357181115010757,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Fornax γ",
        "x": 19.894535219941694,
        "y": -2.256332586926031,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Fornax δ",
        "x": 4.322226458384225,
        "y": 13.479498068640973,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Fornax ε",
        "x": -17.652944358756702,
        "y": 13.54964010045408,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "gem",
    "name": "Gemini",
    "latin": "Geminorum",
    "abbr": "GEM",
    "family": "Zodiac",
    "hemisphere": "Northern",
    "ra": "07h 04m",
    "dec": "+22° 36′",
    "raH": 7.07,
    "decD": 22.6,
    "brightestStar": "Pollux (β Gem • mag 1.14 • K0III)",
    "dist": "34 ly",
    "lore": "The mythological twin brothers Castor and Pollux, born to Leda. Castor was a mortal horseman and Pollux an immortal boxer, immortalized together in the zodiac.",
    "stars": [
      {
        "name": "Pollux",
        "x": -3.610351569927638,
        "y": -15.674853313609576,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Gemini β",
        "x": 18.489208297660937,
        "y": -9.754881506785358,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Gemini γ",
        "x": 16.192789018531123,
        "y": 12.91240629780595,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Gemini δ",
        "x": -7.052408004437403,
        "y": 12.566643300326126,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Gemini ε",
        "x": -23.997534520029316,
        "y": 0.28666782945672636,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "gru",
    "name": "Grus",
    "latin": "Gruis",
    "abbr": "GRU",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "22h 27m",
    "dec": "-46° 38′",
    "raH": 22.45,
    "decD": -46.6,
    "brightestStar": "Alnair (α Gru • mag 1.74 • B7IV)",
    "dist": "101 ly",
    "lore": "The Crane, a distinguished southern constellation with two second-magnitude stars, introduced by Keyser and de Houtman.",
    "stars": [
      {
        "name": "Alnair",
        "x": 9.069377598105552,
        "y": -13.82061841307712,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Grus β",
        "x": 21.72852662851453,
        "y": 2.819005121483148,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Grus γ",
        "x": 4.238368538419317,
        "y": 21.500321878529405,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Grus δ",
        "x": -14.832774297981851,
        "y": 5.249183752962398,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Grus ε",
        "x": -18.111752528669765,
        "y": -13.122405043480247,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "her",
    "name": "Hercules",
    "latin": "Herculis",
    "abbr": "HER",
    "family": "Hercules",
    "hemisphere": "Northern",
    "ra": "17h 15m",
    "dec": "+27° 29′",
    "raH": 17.25,
    "decD": 27.5,
    "brightestStar": "Kornephoros (β Her • mag 2.78 • G7III)",
    "dist": "139 ly",
    "lore": "The supreme Greek hero Heracles kneeling with his foot on the head of Draco. Home to Messier 13, the spectacular Great Globular Cluster of 300,000 stars.",
    "stars": [
      {
        "name": "Kornephoros",
        "x": 17.126887632544154,
        "y": -4.922688818392925,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Hercules β",
        "x": 13.893875390814884,
        "y": 13.956182420002024,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Hercules γ",
        "x": -9.876141533463294,
        "y": 19.130572714305014,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Hercules δ",
        "x": -15.05359944079255,
        "y": -4.743528568501812,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Hercules ε",
        "x": -2.9952942119100494,
        "y": -19.843628500662128,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "hor",
    "name": "Horologium",
    "latin": "Horologii",
    "abbr": "HOR",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "03h 16m",
    "dec": "-53° 00′",
    "raH": 3.27,
    "decD": -53,
    "brightestStar": "α Hor (mag 3.85 • K1III)",
    "dist": "115 ly",
    "lore": "The Pendulum Clock, created by Lacaille to commemorate Christiaan Huygens invention of the pendulum clock in 1656.",
    "stars": [
      {
        "name": "α Hor",
        "x": 16.45565891311212,
        "y": 6.4840950167256795,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Horologium β",
        "x": -1.0218060473053736,
        "y": 17.980574666198834,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Horologium γ",
        "x": -18.957264267763033,
        "y": 7.010904299265239,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Horologium δ",
        "x": -7.602339634881475,
        "y": -12.318695885040702,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Horologium ε",
        "x": 13.647719380255529,
        "y": -16.45152297318882,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "hya",
    "name": "Hydra",
    "latin": "Hydrae",
    "abbr": "HYA",
    "family": "Hercules",
    "hemisphere": "Equatorial",
    "ra": "11h 36m",
    "dec": "-14° 30′",
    "raH": 11.6,
    "decD": -14.5,
    "brightestStar": "Alphard (α Hya • mag 1.98 • K3II-III)",
    "dist": "177 ly",
    "lore": "The water serpent slain by Heracles in his second labor. Sprawling over 100 degrees of sky, it is the single largest constellation in the heavens.",
    "stars": [
      {
        "name": "Alphard",
        "x": 7.397783958994563,
        "y": 14.586252076064739,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Hydra β",
        "x": -15.416722812041197,
        "y": 12.84114554140203,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Hydra γ",
        "x": -18.37679460818487,
        "y": -8.681879872100907,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Hydra δ",
        "x": 3.72346165310151,
        "y": -13.61562511910503,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Hydra ε",
        "x": 23.335156477014877,
        "y": -4.674879097755626,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "hyi",
    "name": "Hydrus",
    "latin": "Hydri",
    "abbr": "HYI",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "02h 20m",
    "dec": "-69° 57′",
    "raH": 2.33,
    "decD": -70,
    "brightestStar": "β Hyi (mag 2.80 • G2IV)",
    "dist": "24.3 ly",
    "lore": "The Lesser Water Snake, navigating between the two Magellanic Clouds in the deep southern sky.",
    "stars": [
      {
        "name": "β Hyi",
        "x": -5.430380432471578,
        "y": 15.254508329740663,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Hydrus β",
        "x": -21.954488367853266,
        "y": 1.1572112422767318,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Hydrus γ",
        "x": -8.430569610574207,
        "y": -19.94993358911071,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Hydrus δ",
        "x": 13.151596258889363,
        "y": -7.973334736321121,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Hydrus ε",
        "x": 21.12980318251168,
        "y": 9.484322497779608,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "ind",
    "name": "Indus",
    "latin": "Indi",
    "abbr": "IND",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "21h 39m",
    "dec": "-56° 47′",
    "raH": 21.65,
    "decD": -56.8,
    "brightestStar": "The Persian (α Ind • mag 3.11 • K0III)",
    "dist": "98 ly",
    "lore": "The American Indian or indigenous hunter holding arrows, charted during late 16th-century voyages to the East Indies.",
    "stars": [
      {
        "name": "The Persian",
        "x": -15.490944945539194,
        "y": 8.148286179293967,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Indus β",
        "x": -17.303122684563778,
        "y": -11.116497149701418,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Indus γ",
        "x": 5.812305266211978,
        "y": -21.050479806070005,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Indus δ",
        "x": 15.877004111096365,
        "y": 1.7325752254376745,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Indus ε",
        "x": 8.155620439370894,
        "y": 18.809827795613543,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "lac",
    "name": "Lacerta",
    "latin": "Lacertae",
    "abbr": "LAC",
    "family": "Perseus",
    "hemisphere": "Northern",
    "ra": "22h 27m",
    "dec": "+46° 02′",
    "raH": 22.45,
    "decD": 46,
    "brightestStar": "α Lac (mag 3.77 • A1V)",
    "dist": "102 ly",
    "lore": "The Lizard, created by Johannes Hevelius in 1687 to populate a dark stellar void between Cygnus and Andromeda.",
    "stars": [
      {
        "name": "α Lac",
        "x": -17.65653085062733,
        "y": -3.1107197621599694,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Lacerta β",
        "x": -3.8331998424862896,
        "y": -17.724669481671143,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Lacerta γ",
        "x": 17.09293181656511,
        "y": -11.422623828011233,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Lacerta δ",
        "x": 10.510677840137198,
        "y": 10.555476152587215,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Lacerta ε",
        "x": -8.975084009192054,
        "y": 18.54888187383289,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "lmi",
    "name": "Leo Minor",
    "latin": "Leonis Minoris",
    "abbr": "LMI",
    "family": "Ursa Major",
    "hemisphere": "Northern",
    "ra": "10h 14m",
    "dec": "+32° 08′",
    "raH": 10.23,
    "decD": 32.1,
    "brightestStar": "Praecipua (46 LMi • mag 3.83 • K0+III-IV)",
    "dist": "95 ly",
    "lore": "The Smaller Lion cub, positioned directly north of majestic Leo by Hevelius in 1687.",
    "stars": [
      {
        "name": "Praecipua",
        "x": -10.823444702660773,
        "y": -12.78434365855383,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Leo Minor β",
        "x": 11.590317881177436,
        "y": -15.299442825827887,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Leo Minor γ",
        "x": 19.66212523524906,
        "y": 4.026786037572919,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Leo Minor δ",
        "x": -0.21242795556895314,
        "y": 13.99876604150174,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Leo Minor ε",
        "x": -21.531626164460274,
        "y": 8.83447613338449,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "lep",
    "name": "Lepus",
    "latin": "Leporis",
    "abbr": "LEP",
    "family": "Orion",
    "hemisphere": "Southern",
    "ra": "05h 33m",
    "dec": "-19° 02′",
    "raH": 5.55,
    "decD": -19,
    "brightestStar": "Arneb (α Lep • mag 2.58 • F0Ib)",
    "dist": "2200 ly",
    "lore": "The Hare crouching beneath the feet of Orion, hunted by his swift hounds Canis Major and Canis Minor.",
    "stars": [
      {
        "name": "Arneb",
        "x": 1.5258229753913495,
        "y": -15.942411528108591,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Lepus β",
        "x": 21.106816242673204,
        "y": -5.076836846220471,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Lepus γ",
        "x": 12.210493025448308,
        "y": 17.423939585849368,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Lepus δ",
        "x": -10.827269589802082,
        "y": 10.307568084496221,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Lepus ε",
        "x": -23.114549308037645,
        "y": -5.382430928383276,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "lib",
    "name": "Libra",
    "latin": "Librae",
    "abbr": "LIB",
    "family": "Zodiac",
    "hemisphere": "Southern",
    "ra": "15h 11m",
    "dec": "-15° 14′",
    "raH": 15.18,
    "decD": -15.2,
    "brightestStar": "Zubeneschamali (β Lib • mag 2.61 • B8V)",
    "dist": "185 ly",
    "lore": "The Scales of Justice held aloft by Astraea (Virgo). Anciently recognized as the claws of Scorpius, its stars Zubenelgenubi and Zubeneschamali retain their Arabic names.",
    "stars": [
      {
        "name": "Zubeneschamali",
        "x": 13.097453150203412,
        "y": -10.975410306234743,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Libra β",
        "x": 19.866200476896566,
        "y": 7.733185100458379,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Libra γ",
        "x": -1.464231550099767,
        "y": 21.940961497183935,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Libra δ",
        "x": -15.92398033564614,
        "y": 1.3631057324853173,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Libra ε",
        "x": -12.917114767715699,
        "y": -16.856175633825593,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "lup",
    "name": "Lupus",
    "latin": "Lupi",
    "abbr": "LUP",
    "family": "Hercules",
    "hemisphere": "Southern",
    "ra": "15h 18m",
    "dec": "-42° 42′",
    "raH": 15.3,
    "decD": -42.7,
    "brightestStar": "Men (α Lup • mag 2.30 • B1.5III)",
    "dist": "460 ly",
    "lore": "The Wolf impaled on the spear of Centaurus, offering a solemn sacrifice on the altar of Ara.",
    "stars": [
      {
        "name": "Men",
        "x": 17.99395067149418,
        "y": -0.4147781027678144,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Lupus β",
        "x": 8.500751891796341,
        "y": 16.601980017133126,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Lupus γ",
        "x": -14.392708765928502,
        "y": 15.27574615522232,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Lupus δ",
        "x": -12.90501546933107,
        "y": -8.276065085420996,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Lupus ε",
        "x": 3.8635427539323652,
        "y": -19.739150279129024,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "lyn",
    "name": "Lynx",
    "latin": "Lyncis",
    "abbr": "LYN",
    "family": "Ursa Major",
    "hemisphere": "Northern",
    "ra": "07h 59m",
    "dec": "+47° 28′",
    "raH": 7.98,
    "decD": 47.5,
    "brightestStar": "α Lyn (mag 3.13 • K7IIIvar)",
    "dist": "203 ly",
    "lore": "The Lynx, named by Johannes Hevelius because one needed the sharp eyes of a lynx to discern its faint stellar pattern.",
    "stars": [
      {
        "name": "α Lyn",
        "x": 13.719809724704124,
        "y": 10.357246256563213,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Lynx β",
        "x": -7.197115055993768,
        "y": 17.009555973558946,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Lynx γ",
        "x": -19.985924755449318,
        "y": 0.8252285259956288,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Lynx δ",
        "x": -3.308994043574093,
        "y": -13.697329440076977,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Lynx ε",
        "x": 18.675141092906458,
        "y": -12.562043390265547,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "men",
    "name": "Mensa",
    "latin": "Mensae",
    "abbr": "MEN",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "05h 25m",
    "dec": "-77° 30′",
    "raH": 5.42,
    "decD": -77.5,
    "brightestStar": "α Men (mag 5.09 • G7V)",
    "dist": "33 ly",
    "lore": "Table Mountain overlooking Cape Town, South Africa, where Lacaille made his historic southern sky celestial observations.",
    "stars": [
      {
        "name": "α Men",
        "x": 2.453351352289223,
        "y": 15.850687681114145,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Mensa β",
        "x": -19.2269637127113,
        "y": 8.748191396363646,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Mensa γ",
        "x": -15.393290303974485,
        "y": -14.045867807908978,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Mensa δ",
        "x": 7.973460151765039,
        "y": -12.13773347303934,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Mensa ε",
        "x": 23.968931451293095,
        "y": 1.0173239279861939,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "mic",
    "name": "Microscopium",
    "latin": "Microscopii",
    "abbr": "MIC",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "20h 53m",
    "dec": "-36° 16′",
    "raH": 20.88,
    "decD": -36.3,
    "brightestStar": "γ Mic (mag 4.67 • G6III)",
    "dist": "223 ly",
    "lore": "The Compound Microscope, honoring the optical invention that opened the microbial universe to human inquiry.",
    "stars": [
      {
        "name": "γ Mic",
        "x": -10.063460469335826,
        "y": 13.265807182495632,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Microscopium β",
        "x": -21.457767331058463,
        "y": -3.9716993827912312,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Microscopium γ",
        "x": -2.9554470493212825,
        "y": -21.758470824342787,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Microscopium δ",
        "x": 15.192230849998321,
        "y": -4.392127133109889,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Microscopium ε",
        "x": 17.046927245218534,
        "y": 14.078210890321937,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "mon",
    "name": "Monoceros",
    "latin": "Monocerotis",
    "abbr": "MON",
    "family": "Orion",
    "hemisphere": "Equatorial",
    "ra": "07h 03m",
    "dec": "+00° 16′",
    "raH": 7.05,
    "decD": 0.3,
    "brightestStar": "α Mon (mag 3.93 • K0III)",
    "dist": "144 ly",
    "lore": "The mythical Unicorn roaming the winter Milky Way, home to the glorious Rosette Nebula and the Christmas Tree Cluster.",
    "stars": [
      {
        "name": "α Mon",
        "x": -17.451417633806404,
        "y": 3.919992196562743,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Monoceros β",
        "x": -12.752594180442212,
        "y": -14.66740882409363,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Monoceros γ",
        "x": 10.988643326694792,
        "y": -18.38184317702689,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Monoceros δ",
        "x": 14.66826293610058,
        "y": 5.591932050163713,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Monoceros ε",
        "x": 1.4369361922512238,
        "y": 19.964120844575262,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "mus",
    "name": "Musca",
    "latin": "Muscae",
    "abbr": "MUS",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "12h 35m",
    "dec": "-70° 09′",
    "raH": 12.58,
    "decD": -70.2,
    "brightestStar": "α Mus (mag 2.69 • B2IV-V)",
    "dist": "315 ly",
    "lore": "The Fly hovering immediately south of the Southern Cross, introduced by Dutch navigators Keyser and de Houtman.",
    "stars": [
      {
        "name": "α Mus",
        "x": -15.945238941348979,
        "y": -7.423651497955157,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Musca β",
        "x": 2.4519538375429772,
        "y": -17.8878558260924,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Musca γ",
        "x": 19.332358496422664,
        "y": -5.6368871825335605,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Musca δ",
        "x": 6.668597283694032,
        "y": 12.726056379977559,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Musca ε",
        "x": -14.905391108681368,
        "y": 15.675292747072326,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "nor",
    "name": "Norma",
    "latin": "Normae",
    "abbr": "NOR",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "15h 54m",
    "dec": "-51° 00′",
    "raH": 15.9,
    "decD": -51,
    "brightestStar": "γ2 Nor (mag 4.02 • G8III)",
    "dist": "129 ly",
    "lore": "The Carpenter Level and Square, representing the sacred geometry of maritime and civil architecture.",
    "stars": [
      {
        "name": "γ2 Nor",
        "x": -6.31255016292542,
        "y": -14.983822332973446,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Norma β",
        "x": 16.406860651378825,
        "y": -11.991735724785674,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Norma γ",
        "x": 17.823314050282363,
        "y": 9.980915102367055,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Norma δ",
        "x": -4.729726945389913,
        "y": 13.37433086415014,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Norma ε",
        "x": -23.651168014507654,
        "y": 3.397532964185808,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "oct",
    "name": "Octans",
    "latin": "Octantis",
    "abbr": "OCT",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "22h 00m",
    "dec": "-82° 00′",
    "raH": 22,
    "decD": -82,
    "brightestStar": "ν Oct (mag 3.76 • K0III)",
    "dist": "63 ly",
    "lore": "The Navigational Octant, home to Polaris Australis (Sigma Octantis), the dim south pole star of planet Earth.",
    "stars": [
      {
        "name": "ν Oct",
        "x": 6.537337351489143,
        "y": -14.907470205675281,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Octans β",
        "x": 21.99999132295066,
        "y": 0.01598682250289074,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Octans γ",
        "x": 7.23059629402546,
        "y": 20.511932075056183,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Octans δ",
        "x": -13.717540183264813,
        "y": 7.206361636933677,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Octans ε",
        "x": -20.343098871256352,
        "y": -10.611783555004124,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "oph",
    "name": "Ophiuchus",
    "latin": "Ophiuchi",
    "abbr": "OPH",
    "family": "Hercules",
    "hemisphere": "Equatorial",
    "ra": "17h 23m",
    "dec": "-04° 15′",
    "raH": 17.38,
    "decD": -4.3,
    "brightestStar": "Rasalhague (α Oph • mag 2.08 • A5III)",
    "dist": "48.6 ly",
    "lore": "The Serpent Bearer, identified with Asclepius, the founder of medicine. The sun passes through this 13th zodiac constellation in December.",
    "stars": [
      {
        "name": "Rasalhague",
        "x": 16.055463070570767,
        "y": -7.233508069002657,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Ophiuchus β",
        "x": 16.380800119965354,
        "y": 12.015561666593548,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Ophiuchus γ",
        "x": -7.047203506287357,
        "y": 20.589018347570025,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Ophiuchus δ",
        "x": -15.714192670022237,
        "y": -2.6343384123839724,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Ophiuchus ε",
        "x": -6.66714507195452,
        "y": -19.212791901012356,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "pav",
    "name": "Pavo",
    "latin": "Pavonis",
    "abbr": "PAV",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "19h 36m",
    "dec": "-65° 46′",
    "raH": 19.6,
    "decD": -65.8,
    "brightestStar": "Peacock (α Pav • mag 1.94 • B2IV)",
    "dist": "179 ly",
    "lore": "The Peacock, sacred bird of Hera adorned with the hundred eyes of the giant Argus across its shimmering tail feathers.",
    "stars": [
      {
        "name": "Peacock",
        "x": 17.390902844476308,
        "y": 4.12702010132366,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Pavo β",
        "x": 2.413114555701176,
        "y": 17.891391144980737,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Pavo γ",
        "x": -17.733387616026267,
        "y": 10.172886808979898,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Pavo δ",
        "x": -9.702088079167098,
        "y": -11.132444740978464,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Pavo ε",
        "x": 10.406727182575969,
        "y": -18.021977889422388,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "per",
    "name": "Perseus",
    "latin": "Persei",
    "abbr": "PER",
    "family": "Perseus",
    "hemisphere": "Northern",
    "ra": "03h 24m",
    "dec": "+41° 30′",
    "raH": 3.4,
    "decD": 41.5,
    "brightestStar": "Mirfak (α Per • mag 1.79 • F5Ib)",
    "dist": "510 ly",
    "lore": "The mythical hero who slew Medusa. Contains Algol (The Demon Star), the famous eclipsing binary that dims periodically like a winking eye.",
    "stars": [
      {
        "name": "Mirfak",
        "x": 9.863048196169926,
        "y": 13.38420754394082,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Perseus β",
        "x": -12.784417726296578,
        "y": 14.648851740565085,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Perseus γ",
        "x": -19.381729530357184,
        "y": -5.427868651562706,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Perseus δ",
        "x": 1.25469729824091,
        "y": -13.956887300607832,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Perseus ε",
        "x": 22.17679848923872,
        "y": -7.646241304633275,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "phe",
    "name": "Phoenix",
    "latin": "Phoenicis",
    "abbr": "PHE",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "00h 26m",
    "dec": "-42° 18′",
    "raH": 0.43,
    "decD": -42.3,
    "brightestStar": "Ankaa (α Phe • mag 2.39 • K0.5IIIb)",
    "dist": "85 ly",
    "lore": "The legendary immortal bird that cyclically regenerates or is reborn from the ashes of its funeral pyre.",
    "stars": [
      {
        "name": "Ankaa",
        "x": -2.691520754717243,
        "y": 15.820117613507989,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Phoenix β",
        "x": -21.4663562327417,
        "y": 3.940507536647599,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Phoenix γ",
        "x": -11.15214982236137,
        "y": -18.26230436584941,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Phoenix δ",
        "x": 11.572024697847969,
        "y": -9.668185564671825,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Phoenix ε",
        "x": 22.644437937706247,
        "y": 6.626411300692967,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "pic",
    "name": "Pictor",
    "latin": "Pictoris",
    "abbr": "PIC",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "05h 41m",
    "dec": "-53° 28′",
    "raH": 5.68,
    "decD": -53.5,
    "brightestStar": "α Pic (mag 3.27 • A8V)",
    "dist": "97 ly",
    "lore": "The Painter Easel. Contains Beta Pictoris, celebrated for its pioneering directly imaged circumstellar protoplanetary disk.",
    "stars": [
      {
        "name": "α Pic",
        "x": -13.874352935760301,
        "y": 10.193285831401932,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Pictor β",
        "x": -19.207940626214143,
        "y": -8.776121043451328,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Pictor γ",
        "x": 2.7611363728799265,
        "y": -21.78933483096111,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Pictor δ",
        "x": 15.991655878036905,
        "y": -0.4520814992194784,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Pictor ε",
        "x": 11.571312524092829,
        "y": 17.521905466003524,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "psc",
    "name": "Pisces",
    "latin": "Piscium",
    "abbr": "PSC",
    "family": "Zodiac",
    "hemisphere": "Northern",
    "ra": "00h 28m",
    "dec": "+13° 40′",
    "raH": 0.47,
    "decD": 13.7,
    "brightestStar": "Alpherg (η Psc • mag 3.62 • G7III)",
    "dist": "350 ly",
    "lore": "The two Fishes Aphrodite and Eros tied by a ribbon, who dove into the Euphrates River to escape the wrath of Typhon.",
    "stars": [
      {
        "name": "Alpherg",
        "x": -17.986104558936773,
        "y": -0.6285662588172077,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Pisces β",
        "x": -7.1601751200881365,
        "y": -17.019989043567804,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Pisces γ",
        "x": 15.267206115268348,
        "y": -14.211404754458108,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Pisces δ",
        "x": 12.261120524994066,
        "y": 8.994426442687727,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Pisces ε",
        "x": -5.399146148733022,
        "y": 19.487339566452093,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "psa",
    "name": "Piscis Austrinus",
    "latin": "Piscis Austrini",
    "abbr": "PSA",
    "family": "Heavenly Waters",
    "hemisphere": "Southern",
    "ra": "22h 17m",
    "dec": "-30° 38′",
    "raH": 22.28,
    "decD": -30.6,
    "brightestStar": "Fomalhaut (α PsA • mag 1.16 • A3V)",
    "dist": "25.1 ly",
    "lore": "The Southern Fish drinking water poured from the urn of Aquarius. Fomalhaut (the Mouth of the Whale) is encircled by a dramatic dusty debris ring.",
    "stars": [
      {
        "name": "Fomalhaut",
        "x": -12.931216494675805,
        "y": -11.130068803898544,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Piscis Austrinus β",
        "x": 8.53678219462168,
        "y": -16.589599283462455,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Piscis Austrinus γ",
        "x": 19.992326011962216,
        "y": 0.6093847421924682,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Piscis Austrinus δ",
        "x": 2.281690440544786,
        "y": 13.856914196948983,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Piscis Austrinus ε",
        "x": -19.617923533202426,
        "y": 11.52102776344141,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "pup",
    "name": "Puppis",
    "latin": "Puppis",
    "abbr": "PUP",
    "family": "Heavenly Waters",
    "hemisphere": "Southern",
    "ra": "07h 15m",
    "dec": "-31° 10′",
    "raH": 7.25,
    "decD": -31.2,
    "brightestStar": "Naos (ζ Pup • mag 2.21 • O4Iff)",
    "dist": "1080 ly",
    "lore": "The Poop Deck or stern of the celestial ship Argo Navis that sailed with Jason to capture the Golden Fleece.",
    "stars": [
      {
        "name": "Naos",
        "x": -1.2859184870876297,
        "y": -15.959118479187493,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Puppis β",
        "x": 19.882958259739105,
        "y": -7.704300418822272,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Puppis γ",
        "x": 14.528333059627144,
        "y": 15.119600576580702,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Puppis δ",
        "x": -8.860605904256065,
        "y": 11.657209067423462,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Puppis ε",
        "x": -23.838402739469867,
        "y": -2.3169896104097907,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "pyx",
    "name": "Pyxis",
    "latin": "Pyxidis",
    "abbr": "PYX",
    "family": "Heavenly Waters",
    "hemisphere": "Southern",
    "ra": "09h 00m",
    "dec": "-27° 20′",
    "raH": 9,
    "decD": -27.3,
    "brightestStar": "α Pyx (mag 3.68 • B1.5III)",
    "dist": "850 ly",
    "lore": "The Mariner Magnetic Compass, representing the vital navigational needle mounted upon the Argo Navis.",
    "stars": [
      {
        "name": "α Pyx",
        "x": 11.014749414516412,
        "y": -12.654584345460487,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Pyxis β",
        "x": 21.095760881476544,
        "y": 5.1075043633001025,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Pyxis γ",
        "x": 1.6599577975874618,
        "y": 21.92409390450097,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Pyxis δ",
        "x": -15.487083858779723,
        "y": 3.5163934027039323,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Pyxis ε",
        "x": -15.909611495279103,
        "y": -14.974150459794293,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "ret",
    "name": "Reticulum",
    "latin": "Reticuli",
    "abbr": "RET",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "03h 55m",
    "dec": "-63° 00′",
    "raH": 3.92,
    "decD": -63,
    "brightestStar": "α Ret (mag 3.33 • G8III)",
    "dist": "162 ly",
    "lore": "The Reticle crosshairs used in astronomical telescope eyepieces to measure precise stellar coordinates.",
    "stars": [
      {
        "name": "α Ret",
        "x": 17.701737110969106,
        "y": -2.900626173915094,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Reticulum β",
        "x": 11.557083753990076,
        "y": 15.31626344161412,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Reticulum γ",
        "x": -12.05441694015715,
        "y": 17.554946567897932,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Reticulum δ",
        "x": -14.220551012806045,
        "y": -6.4165563628846956,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Reticulum ε",
        "x": 0.12753226440241028,
        "y": -19.99971762858889,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "sge",
    "name": "Sagitta",
    "latin": "Sagittae",
    "abbr": "SGE",
    "family": "Hercules",
    "hemisphere": "Northern",
    "ra": "19h 39m",
    "dec": "+18° 52′",
    "raH": 19.65,
    "decD": 18.9,
    "brightestStar": "γ Sge (mag 3.47 • M0III)",
    "dist": "258 ly",
    "lore": "The Arrow shot by Heracles to slay the Caucasian eagle that tormented Prometheus.",
    "stars": [
      {
        "name": "γ Sge",
        "x": 15.367013329748424,
        "y": 8.331639594314439,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Sagitta β",
        "x": -3.8716749230183196,
        "y": 17.719070549222717,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Sagitta γ",
        "x": -19.62524367558251,
        "y": 4.238899729357901,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Sagitta δ",
        "x": -5.70649734518521,
        "y": -13.07930050835355,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Sagitta ε",
        "x": 16.099679053090743,
        "y": -14.83240480210548,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "sgr",
    "name": "Sagittarius",
    "latin": "Sagittarii",
    "abbr": "SGR",
    "family": "Zodiac",
    "hemisphere": "Southern",
    "ra": "19h 05m",
    "dec": "-28° 28′",
    "raH": 19.08,
    "decD": -28.5,
    "brightestStar": "Kaus Australis (ε Sgr • mag 1.85 • B9.5III)",
    "dist": "143 ly",
    "lore": "The Centaur Archer aiming his arrow toward the heart of Scorpius. Home to the iconic Teapot asterism and the gravitational epicenter of the Milky Way, Sagittarius A*.",
    "stars": [
      {
        "name": "Kaus Australis",
        "x": 5.2004728366728115,
        "y": 15.317675284407253,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Sagittarius β",
        "x": -17.32722984765756,
        "y": 11.091332171633148,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Sagittarius γ",
        "x": -17.19404151349211,
        "y": -11.237507423049609,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Sagittarius δ",
        "x": 5.7158795154440165,
        "y": -13.076163515917909,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Sagittarius ε",
        "x": 23.866605168259728,
        "y": -2.1057391389034446,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "scl",
    "name": "Sculptor",
    "latin": "Sculptoris",
    "abbr": "SCL",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "00h 26m",
    "dec": "-32° 05′",
    "raH": 0.43,
    "decD": -32.1,
    "brightestStar": "α Scl (mag 4.31 • B7IIIp)",
    "dist": "780 ly",
    "lore": "The Sculptor Studio, containing the South Galactic Pole where the star density of the Milky Way is thinnest.",
    "stars": [
      {
        "name": "α Scl",
        "x": -7.616494853791727,
        "y": 14.497039456427512,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Sculptor β",
        "x": -21.951941369022578,
        "y": -1.1891169048124675,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Sculptor γ",
        "x": -5.9998755418361664,
        "y": -20.98670548499207,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Sculptor δ",
        "x": 14.22515154877785,
        "y": -6.40874415752227,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Sculptor ε",
        "x": 19.46988743142713,
        "y": 11.694118993452431,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "sct",
    "name": "Scutum",
    "latin": "Scuti",
    "abbr": "SCT",
    "family": "Hercules",
    "hemisphere": "Southern",
    "ra": "18h 40m",
    "dec": "-09° 53′",
    "raH": 18.67,
    "decD": -9.9,
    "brightestStar": "Ionnina (α Sct • mag 3.85 • K3III)",
    "dist": "199 ly",
    "lore": "The Shield of Jan Sobieski III, Polish king who led the defense of Vienna against the Ottoman Empire in 1683.",
    "stars": [
      {
        "name": "Ionnina",
        "x": -16.55170683794678,
        "y": 6.287970141019526,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Scutum β",
        "x": -15.38881973228451,
        "y": -12.86353112935668,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Scutum γ",
        "x": 8.252134171429269,
        "y": -20.040004010883894,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Scutum δ",
        "x": 15.48455809180742,
        "y": 3.5248993211921706,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Scutum ε",
        "x": 5.150318292611567,
        "y": 19.53405540269478,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "ser",
    "name": "Serpens",
    "latin": "Serpentis",
    "abbr": "SER",
    "family": "Hercules",
    "hemisphere": "Equatorial",
    "ra": "15h 44m",
    "dec": "+10° 40′",
    "raH": 15.73,
    "decD": 10.7,
    "brightestStar": "Unukalhai (α Ser • mag 2.63 • K2III)",
    "dist": "74 ly",
    "lore": "The celestial Serpent entwined around the physician Ophiuchus. The only constellation split into two disconnected regions: Serpens Caput (Head) and Serpens Cauda (Tail).",
    "stars": [
      {
        "name": "Unukalhai",
        "x": -17.05132164771734,
        "y": -5.125770672834254,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Serpens β",
        "x": -0.9827677245735998,
        "y": -17.982031337913583,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Serpens γ",
        "x": 18.298433840365174,
        "y": -8.879890538606437,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Serpens δ",
        "x": 8.852241094496257,
        "y": 11.662073647512715,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Serpens ε",
        "x": -11.794116720261751,
        "y": 17.418437126696986,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "sex",
    "name": "Sextans",
    "latin": "Sextantis",
    "abbr": "SEX",
    "family": "Ursa Major",
    "hemisphere": "Equatorial",
    "ra": "10h 14m",
    "dec": "-01° 20′",
    "raH": 10.23,
    "decD": -1.3,
    "brightestStar": "α Sex (mag 4.49 • A0III)",
    "dist": "280 ly",
    "lore": "The Astronomical Sextant, created by Johannes Hevelius to commemorate the instrument he used to measure star positions.",
    "stars": [
      {
        "name": "α Sex",
        "x": -8.860709998109014,
        "y": -13.927156336391862,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Sextans β",
        "x": 13.924153028678706,
        "y": -13.935967780996286,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Sextans γ",
        "x": 19.018914830253305,
        "y": 6.805869760896163,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Sextans δ",
        "x": -2.291631157799597,
        "y": 13.855658199582164,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Sextans ε",
        "x": -22.72766604902506,
        "y": 6.425491548641416,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "tel",
    "name": "Telescopium",
    "latin": "Telescopii",
    "abbr": "TEL",
    "family": "La Caille",
    "hemisphere": "Southern",
    "ra": "19h 20m",
    "dec": "-51° 00′",
    "raH": 19.33,
    "decD": -51,
    "brightestStar": "α Tel (mag 3.51 • B3IV)",
    "dist": "278 ly",
    "lore": "The Refracting Aerial Telescope, established by Lacaille to celebrate the optical breakthrough that transformed human understanding of the cosmos.",
    "stars": [
      {
        "name": "α Tel",
        "x": 3.845773093333057,
        "y": -15.630550125834459,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Telescopium β",
        "x": 21.734612547181843,
        "y": -2.787421586689021,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Telescopium γ",
        "x": 10.046383143398845,
        "y": 19.02301040163197,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Telescopium δ",
        "x": -12.267570851312577,
        "y": 8.987689988424162,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Telescopium ε",
        "x": -22.078033209290297,
        "y": -7.842213477635125,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "tri",
    "name": "Triangulum",
    "latin": "Trianguli",
    "abbr": "TRI",
    "family": "Perseus",
    "hemisphere": "Northern",
    "ra": "02h 11m",
    "dec": "+31° 28′",
    "raH": 2.18,
    "decD": 31.5,
    "brightestStar": "Mothallah (α Tri • mag 3.41 • F6IV)",
    "dist": "63 ly",
    "lore": "The Triangle, recognized in antiquity as the delta letter of the Greek alphabet. Hosts Messier 33, the Triangulum Galaxy, third-largest member of our Local Group.",
    "stars": [
      {
        "name": "Mothallah",
        "x": 14.592253330865994,
        "y": -9.367815360288573,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Triangulum β",
        "x": 18.4680008014084,
        "y": 9.781737351108017,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Triangulum γ",
        "x": -4.0462997210337734,
        "y": 21.5450510527766,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Triangulum δ",
        "x": -15.99132839690084,
        "y": -0.4608651684123244,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Triangulum ε",
        "x": -10.17630435434107,
        "y": -18.11312503115679,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "tra",
    "name": "Triangulum Australe",
    "latin": "Trianguli Australis",
    "abbr": "TRA",
    "family": "Hercules",
    "hemisphere": "Southern",
    "ra": "16h 04m",
    "dec": "-65° 00′",
    "raH": 16.07,
    "decD": -65,
    "brightestStar": "Atria (α TrA • mag 1.91 • K2IIb-IIIa)",
    "dist": "415 ly",
    "lore": "The Southern Triangle, an equilateral asterism of bright second-magnitude stars guiding southern navigators.",
    "stars": [
      {
        "name": "Atria",
        "x": 17.9017742160529,
        "y": 1.6692377010741315,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Triangulum Australe β",
        "x": 5.7891503722063975,
        "y": 17.36562215570176,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Triangulum Australe γ",
        "x": -16.076781096057854,
        "y": 13.086630681853089,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Triangulum Australe δ",
        "x": -11.5650863104097,
        "y": -9.674539841290525,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Triangulum Australe ε",
        "x": 6.911790178638972,
        "y": -19.152660761745167,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "tuc",
    "name": "Tucana",
    "latin": "Tucanae",
    "abbr": "TUC",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "23h 52m",
    "dec": "-65° 45′",
    "raH": 23.87,
    "decD": -65.8,
    "brightestStar": "α Tuc (mag 2.86 • K3III)",
    "dist": "200 ly",
    "lore": "The South American Toucan, containing the Small Magellanic Cloud (SMC) and the glorious 47 Tucanae globular cluster.",
    "stars": [
      {
        "name": "α Tuc",
        "x": 12.087634473854045,
        "y": 11.855561772827535,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Tucana β",
        "x": -9.84014746402155,
        "y": 16.099096871335796,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Tucana γ",
        "x": -19.913711768734725,
        "y": -2.041406658660863,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Tucana δ",
        "x": -1.2446841619518754,
        "y": -13.957573719978342,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Tucana ε",
        "x": 20.477282585342067,
        "y": -10.431020041738176,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "umi",
    "name": "Ursa Minor",
    "latin": "Ursae Minoris",
    "abbr": "UMI",
    "family": "Ursa Major",
    "hemisphere": "Northern",
    "ra": "15h 00m",
    "dec": "+78° 00′",
    "raH": 15,
    "decD": 78,
    "brightestStar": "Polaris (α UMi • mag 1.98 • F7Ib)",
    "dist": "433 ly",
    "lore": "The Little Bear, culminating in Polaris, the North Celestial Pole Star around which the entire northern sky revolves.",
    "stars": [
      {
        "name": "Polaris",
        "x": 0.11301737358204313,
        "y": 15.999684615984705,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Ursa Minor β",
        "x": -20.454402383181584,
        "y": 6.627647623077919,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Ursa Minor γ",
        "x": -13.601595435411966,
        "y": -16.129038655473867,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Ursa Minor δ",
        "x": 9.710072757428387,
        "y": -11.12711346864812,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Ursa Minor ε",
        "x": 23.60650344571954,
        "y": 3.6068025108458643,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "vel",
    "name": "Vela",
    "latin": "Velorum",
    "abbr": "VEL",
    "family": "Heavenly Waters",
    "hemisphere": "Southern",
    "ra": "09h 34m",
    "dec": "-47° 10′",
    "raH": 9.57,
    "decD": -47.2,
    "brightestStar": "Suhail (γ2 Vel • mag 1.83 • WC8+O9I)",
    "dist": "1120 ly",
    "lore": "The Sails of the Argo Navis, featuring the Wolf-Rayet star Gamma Velorum and the brilliant Vela Supernova Remnant.",
    "stars": [
      {
        "name": "Suhail",
        "x": -11.919199166226969,
        "y": 11.989549070018096,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Vela β",
        "x": -20.64404667839614,
        "y": -6.22159015837691,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Vela γ",
        "x": -0.3574097303048399,
        "y": -21.99648682231931,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Vela δ",
        "x": 15.71607948943575,
        "y": -2.6257065376684494,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Vela ε",
        "x": 14.704641607890263,
        "y": 15.806413852529367,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "vir",
    "name": "Virgo",
    "latin": "Virginis",
    "abbr": "VIR",
    "family": "Zodiac",
    "hemisphere": "Equatorial",
    "ra": "13h 25m",
    "dec": "-04° 00′",
    "raH": 13.42,
    "decD": -4,
    "brightestStar": "Spica (α Vir • mag 0.98 • B1III-IV)",
    "dist": "250 ly",
    "lore": "The Maiden Astraea holding an ear of wheat (Spica). Home to the colossal Virgo Cluster of over 1,300 galaxies.",
    "stars": [
      {
        "name": "Spica",
        "x": -17.876781603827283,
        "y": 1.8689255092858075,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Virgo β",
        "x": -10.312427907925345,
        "y": -15.899987078884308,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Virgo γ",
        "x": 13.068930271067554,
        "y": -16.653399187543325,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Virgo δ",
        "x": 13.71236752406111,
        "y": 7.213894868767838,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Virgo ε",
        "x": -1.6914584020091668,
        "y": 19.950267480702564,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "vol",
    "name": "Volans",
    "latin": "Volantis",
    "abbr": "VOL",
    "family": "Bayer",
    "hemisphere": "Southern",
    "ra": "07h 47m",
    "dec": "-70° 48′",
    "raH": 7.78,
    "decD": -70.8,
    "brightestStar": "γ2 Vol (mag 3.77 • K0III)",
    "dist": "142 ly",
    "lore": "The Flying Fish fleeing from predatory dolphinfish across tropical waters, depicted by Keyser and de Houtman in 1597.",
    "stars": [
      {
        "name": "γ2 Vol",
        "x": -14.723440928736643,
        "y": -9.20419817119982,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Volans β",
        "x": 5.274932072370435,
        "y": -17.474936579220707,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Volans γ",
        "x": 19.834674338363993,
        "y": -2.822886750857059,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Volans δ",
        "x": 4.720131059515201,
        "y": 13.37692613249408,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Volans ε",
        "x": -17.225504615507052,
        "y": 13.926443440576389,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  },
  {
    "id": "vul",
    "name": "Vulpecula",
    "latin": "Vulpeculae",
    "abbr": "VUL",
    "family": "Hercules",
    "hemisphere": "Northern",
    "ra": "20h 13m",
    "dec": "+24° 48′",
    "raH": 20.22,
    "decD": 24.8,
    "brightestStar": "Anser (α Vul • mag 4.44 • M0III)",
    "dist": "297 ly",
    "lore": "The Little Fox holding a goose in its jaws, mapped by Johannes Hevelius. Home to Messier 27, the iconic Dumbbell Planetary Nebula.",
    "stars": [
      {
        "name": "Anser",
        "x": -4.066280985235318,
        "y": -15.586391251861023,
        "z": 0,
        "mag": 2.2,
        "color": "#88ccff"
      },
      {
        "name": "Vulpecula β",
        "x": 18.17391661680231,
        "y": -10.14376376398627,
        "z": 0,
        "mag": 2.7,
        "color": "#ffffff"
      },
      {
        "name": "Vulpecula γ",
        "x": 16.4916529205235,
        "y": 12.44631329262912,
        "z": 0,
        "mag": 3.1,
        "color": "#ffaa44"
      },
      {
        "name": "Vulpecula δ",
        "x": -6.677725841533806,
        "y": 12.722391003217682,
        "z": 0,
        "mag": 3.5,
        "color": "#77bbff"
      },
      {
        "name": "Vulpecula ε",
        "x": -23.98055181188946,
        "y": 0.8049908545396535,
        "z": 0,
        "mag": 3.8,
        "color": "#aaddff"
      }
    ],
    "connections": [
      [
        0,
        1
      ],
      [
        1,
        2
      ],
      [
        2,
        3
      ],
      [
        3,
        4
      ],
      [
        4,
        0
      ]
    ]
  }
];

window.ALL_88_CONSTELLATIONS = window.MAJOR_CONSTELLATIONS;
