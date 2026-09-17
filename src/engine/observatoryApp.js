// Luxury Digital Observatory 3D Engine
// Photorealistic 3D Planets (MeshPhysicalMaterial, Specular Oceans, Bump Maps, Volumetric Fresnel Atmospheres)
// Crisp Astrophotography UnrealBloomPass (threshold: 0.85, strength: 0.4)
// GSAP 2.5s power3.inOut Camera Navigation & Microgravity OrbitControls Inertia

class ObservatoryEngine {
  constructor() {
    this.container = document.getElementById("canvas-container");
    this.currentTier = "stars"; // 'stars' | 'planets' | 'galaxies'
    this.selectedGalaxy = null;
    this.selectedConstellation = null;
    this.selectedPlanet = null;
    this.selectedStar = null;
    this.isCoreExposed = false;
    this.autoOrbit = true;

    // Callbacks for UI updates
    this.onTargetSelected = null;

    // Three.js core
    this.scene = null;
    this.camera = null;
    this.renderer = null;
    this.controls = null;
    this.composer = null;
    this.bloomPass = null;

    // Master Scene Groups
    this.starsGroup = new THREE.Group();
    this.planetsGroup = new THREE.Group();
    this.galaxiesGroup = new THREE.Group();
    this.backgroundStarfield = null;

    // Interactive Raycasting System
    this.raycaster = new THREE.Raycaster();
    this.pointer = new THREE.Vector2(-999, -999);
    this.pointerDownPos = { x: 0, y: 0 };
    this.interactiveObjects = [];
    this.hoveredObject = null;

    // Dynamic Galaxy Particles
    this.galaxyParticleCount = 85000;
    this.galaxyGeometry = null;
    this.galaxyPoints = null;
    this.particlePositions = new Float32Array(this.galaxyParticleCount * 3);
    this.particleTargetPositions = new Float32Array(this.galaxyParticleCount * 3);
    this.particleSourcePositions = new Float32Array(this.galaxyParticleCount * 3);
    this.particleColors = new Float32Array(this.galaxyParticleCount * 3);
    this.particleTargetColors = new Float32Array(this.galaxyParticleCount * 3);
    this.particleSourceColors = new Float32Array(this.galaxyParticleCount * 3);
    this.morphProgress = 1.0;
    this.activeMorphTween = null;
    this.centralBlackHoleMesh = null;
    this.photonRingMesh = null;
    this.distantGalaxiesGroup = new THREE.Group();

    // Constellation & 3D Star Engine
    this.allStarMeshes = [];
    this.activeStarMeshes = [];
    this.activeCoronaMeshes = [];
    this.activeLineMesh = null;
    this.tracerMesh = null;
    this.beamTween = null;
    this.targetStarIndex = 0;
    this.targetGalaxyIndex = 0;
    this.targetPlanetIndex = 0;
    this.celestialSphereGroup = new THREE.Group();

    // Photorealistic Planet & Magma Core Slicing System
    this.leftHemisphere = null;
    this.rightHemisphere = null;
    this.leftCloudMesh = null;
    this.rightCloudMesh = null;
    this.coreMagmaSphere = null;
    this.coreDisksGroup = null;
    this.atmosphereGlow = null;
    this.planetRings = null;
    this.moonMesh = null;
    this.moonPivot = null;
    this.sliceTween = null;
    this.magmaMaterial = null;

    // Time & Animation
    this.clock = new THREE.Clock();
    this.init();
  }

  init() {
    // 1. Scene with 100% Void-Black Space
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x000000);
    this.scene.fog = new THREE.FogExp2(0x000000, 0.0002);

    // 2. Camera with cinematic field of view
    const aspect = window.innerWidth / window.innerHeight;
    this.camera = new THREE.PerspectiveCamera(46, aspect, 0.5, 9000);
    this.camera.position.set(0, 0, 92);

    // 3. WebGL Renderer with calibrated ACES Filmic Tone Mapping
    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      powerPreference: "high-performance",
      alpha: false
    });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.0;
    this.container.appendChild(this.renderer.domElement);

    // 4. OrbitControls with smooth microgravity inertia damping
    this.controls = new THREE.OrbitControls(this.camera, this.renderer.domElement);
    this.controls.enableDamping = true;
    this.controls.dampingFactor = 0.05; // Natural microgravity momentum
    this.controls.rotateSpeed = 0.65;
    this.controls.zoomSpeed = 0.85;
    this.controls.maxDistance = 2500;
    this.controls.minDistance = 12;

    // 5. UnrealBloomPass tuned to crisp star glimmers (threshold: 0.85, strength: 0.4)
    const renderPass = new THREE.RenderPass(this.scene, this.camera);
    this.bloomPass = new THREE.UnrealBloomPass(
      new THREE.Vector2(window.innerWidth, window.innerHeight),
      0.4,   // strength: crisp, subtle star glimmers (never blown-out)
      0.25,  // radius: compact point dispersion
      0.85   // threshold: high threshold so only true highlights bloom
    );

    this.composer = new THREE.EffectComposer(this.renderer);
    this.composer.addPass(renderPass);
    this.composer.addPass(this.bloomPass);

    // 6. Photorealistic Astrophotography Lighting
    // Subtle cosmic ambient (very low so night-side of planets remains deep space black)
    const ambientLight = new THREE.AmbientLight(0x101a2e, 0.25);
    this.scene.add(ambientLight);

    // Key sunlight (sharp solar illumination causing specular ocean reflections and crisp terminator)
    const keySun = new THREE.DirectionalLight(0xfffaed, 2.2);
    keySun.position.set(240, 90, 180);
    this.scene.add(keySun);

    // Subtle opposite rim fill
    const rimFill = new THREE.DirectionalLight(0x284878, 0.35);
    rimFill.position.set(-200, -70, -150);
    this.scene.add(rimFill);

    // 7. Mount Master Groups
    this.scene.add(this.starsGroup);
    this.scene.add(this.planetsGroup);
    this.scene.add(this.galaxiesGroup);

    this.starsGroup.add(this.celestialSphereGroup);
    this.galaxiesGroup.add(this.distantGalaxiesGroup);

    // 8. Build Scene Architectural Elements
    this.buildDeepStarfield();
    this.buildGalaxyParticles();
    this.buildPhotorealisticPlanetSystem();
    this.buildCelestialConstellationSphere();

    // 9. Attach Window & Pointer Handlers
    window.addEventListener("resize", () => this.onWindowResize());
    this.setupInteractionHandlers();

    // 10. Start in Stars Mode
    this.setTier("stars");

    // 11. Run Master Loop
    this.animate();
  }

  // --- 1. DEEP REALISTIC BACKGROUND STARFIELD ---
  buildDeepStarfield() {
    const starCount = 6500;
    const geo = new THREE.BufferGeometry();
    const positions = new Float32Array(starCount * 3);
    const colors = new Float32Array(starCount * 3);

    // Morgan-Keenan spectral classification distribution
    const spectra = [
      new THREE.Color(0x9db4ff), // O/B: Blue-white
      new THREE.Color(0xbbccff), // A: Light blue-white
      new THREE.Color(0xf8f9ff), // F: Pure white
      new THREE.Color(0xfff4e8), // G: Solar yellow-white
      new THREE.Color(0xffddb4), // K: Orange
      new THREE.Color(0xffb88c)  // M: Red-orange
    ];

    for (let i = 0; i < starCount; i++) {
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 2400 + Math.random() * 800;

      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);

      const specCol = spectra[Math.floor(Math.random() * spectra.length)];
      const brightness = 0.4 + Math.random() * 0.6;
      colors[i * 3] = specCol.r * brightness;
      colors[i * 3 + 1] = specCol.g * brightness;
      colors[i * 3 + 2] = specCol.b * brightness;
    }

    geo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    const mat = new THREE.PointsMaterial({
      size: 1.6,
      vertexColors: true,
      transparent: true,
      opacity: 0.85
    });

    this.backgroundStarfield = new THREE.Points(geo, mat);
    this.scene.add(this.backgroundStarfield);
  }

  // --- 2. STARS & CONSTELLATION ASTEROID MESHES ---
  createConstellationLabel(text) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 256, 64);

    // Minimal glowing pill background
    ctx.fillStyle = "rgba(8, 14, 28, 0.72)";
    ctx.beginPath();
    ctx.roundRect(10, 10, 236, 44, 22);
    ctx.fill();
    ctx.strokeStyle = "rgba(56, 189, 248, 0.45)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    // High contrast typography
    ctx.font = "bold 19px system-ui, sans-serif";
    ctx.fillStyle = "#7dd3fc";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text.toUpperCase(), 128, 32);

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthTest: false
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(16, 4, 1);
    return sprite;
  }

  createStarCoronaTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 128;
    canvas.height = 128;
    const ctx = canvas.getContext("2d");

    const grad = ctx.createRadialGradient(64, 64, 0, 64, 64, 64);
    grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
    grad.addColorStop(0.16, "rgba(220, 245, 255, 0.85)");
    grad.addColorStop(0.38, "rgba(120, 200, 255, 0.40)");
    grad.addColorStop(0.68, "rgba(56, 189, 248, 0.12)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 128, 128);

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  createStarDiffractionTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    // Central circular glow
    const grad = ctx.createRadialGradient(128, 128, 0, 128, 128, 128);
    grad.addColorStop(0, "rgba(255, 255, 255, 1.0)");
    grad.addColorStop(0.12, "rgba(230, 250, 255, 0.7)");
    grad.addColorStop(0.28, "rgba(100, 210, 255, 0.20)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, 256, 256);

    // Horizontal diffraction spike
    const hGrad = ctx.createLinearGradient(0, 128, 256, 128);
    hGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
    hGrad.addColorStop(0.40, "rgba(255, 255, 255, 0.35)");
    hGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.95)");
    hGrad.addColorStop(0.60, "rgba(255, 255, 255, 0.35)");
    hGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = hGrad;
    ctx.fillRect(0, 126, 256, 4);

    // Vertical diffraction spike
    const vGrad = ctx.createLinearGradient(128, 0, 128, 256);
    vGrad.addColorStop(0, "rgba(255, 255, 255, 0)");
    vGrad.addColorStop(0.40, "rgba(255, 255, 255, 0.35)");
    vGrad.addColorStop(0.5, "rgba(255, 255, 255, 0.95)");
    vGrad.addColorStop(0.60, "rgba(255, 255, 255, 0.35)");
    vGrad.addColorStop(1, "rgba(255, 255, 255, 0)");
    ctx.fillStyle = vGrad;
    ctx.fillRect(126, 0, 4, 256);

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  createStarHUDLabel(name, spectralClass) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 256, 64);

    // Futuristic pill badge
    ctx.fillStyle = "rgba(6, 12, 24, 0.72)";
    ctx.beginPath();
    ctx.roundRect(8, 8, 240, 48, 24);
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 240, 255, 0.35)";
    ctx.lineWidth = 1.2;
    ctx.stroke();

    // Star Name
    ctx.font = "bold 16px 'Inter', sans-serif";
    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.fillText(name.toUpperCase(), 128, 28);

    // Spectral Class
    ctx.font = "11px 'JetBrains Mono', monospace";
    ctx.fillStyle = "#00f0ff";
    ctx.fillText(spectralClass || "CLASS A", 128, 45);

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthTest: false
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(13, 3.25, 1);
    return sprite;
  }

  buildCelestialConstellationSphere() {
    this.celestialSphereGroup.clear();
    this.allStarMeshes = [];

    const sphereRadius = 160;
    const constellations = window.MAJOR_CONSTELLATIONS || window.ALL_88_CONSTELLATIONS || [];
    const coronaTexture = this.createStarCoronaTexture();
    const diffractionTexture = this.createStarDiffractionTexture();

    constellations.forEach((c) => {
      const raRad = (c.raH || 0) * (Math.PI / 12);
      const decRad = (c.decD || 0) * (Math.PI / 180);

      const cx = sphereRadius * Math.cos(decRad) * Math.cos(raRad);
      const cy = sphereRadius * Math.sin(decRad);
      const cz = sphereRadius * Math.cos(decRad) * Math.sin(raRad);

      const center = new THREE.Vector3(cx, cy, cz);
      const normal = center.clone().normalize();

      const up = Math.abs(normal.y) > 0.9 ? new THREE.Vector3(1, 0, 0) : new THREE.Vector3(0, 1, 0);
      const tangentX = new THREE.Vector3().crossVectors(up, normal).normalize();
      const tangentY = new THREE.Vector3().crossVectors(normal, tangentX).normalize();

      // Constellation Center Label (Subtle HUD billboard)
      const hubLabel = this.createConstellationLabel(c.name);
      hubLabel.position.copy(center).addScaledVector(tangentY, 26);
      hubLabel.userData = {
        type: "constellation_hub",
        constellationData: c,
        name: `${c.name} (${c.abbr})`
      };
      this.celestialSphereGroup.add(hubLabel);

      // Build each Big, Realistic 3D Star
      const stars = c.stars || [];
      stars.forEach((s, idx) => {
        const scale = 0.52; // Spacious separation between stars
        const worldPos = center.clone()
          .addScaledVector(tangentX, (s.x || 0) * scale)
          .addScaledVector(tangentY, (s.y || 0) * scale)
          .addScaledVector(normal, ((s.z || 0) * scale * 0.4));

        const starGroup = new THREE.Group();
        starGroup.position.copy(worldPos);

        const mag = s.mag !== undefined ? s.mag : 2.0;
        const starRadius = Math.max(2.0, 4.2 - mag * 0.45); // Big 3D sphere

        // 1. Core emissive sphere
        const starSphereGeo = new THREE.SphereGeometry(starRadius, 24, 24);
        const starMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(s.color || "#ffffff")
        });
        const starCore = new THREE.Mesh(starSphereGeo, starMat);
        starGroup.add(starCore);

        // 2. Multi-layered Corona Glow Sprite
        const baseCoronaScale = Math.max(18, 36 - mag * 3.8);
        const coronaMat = new THREE.SpriteMaterial({
          map: coronaTexture,
          color: new THREE.Color(s.color || "#99ccff"),
          transparent: true,
          opacity: 0.82,
          blending: THREE.AdditiveBlending
        });
        const corona = new THREE.Sprite(coronaMat);
        corona.scale.set(baseCoronaScale, baseCoronaScale, 1);
        corona.userData = { baseScale: baseCoronaScale };
        starGroup.add(corona);

        // 3. Astrophotographic Diffraction Spike Cross Flare
        const baseFlareScale = Math.max(26, 52 - mag * 4.8);
        const flareMat = new THREE.SpriteMaterial({
          map: diffractionTexture,
          color: new THREE.Color(s.color || "#ffffff"),
          transparent: true,
          opacity: 0.88,
          blending: THREE.AdditiveBlending
        });
        const flare = new THREE.Sprite(flareMat);
        flare.scale.set(baseFlareScale, baseFlareScale, 1);
        flare.userData = { baseScale: baseFlareScale };
        starGroup.add(flare);

        // 4. 3D Billboard HUD Name & Spectral Class
        const hudLabel = this.createStarHUDLabel(s.name, s.spectral || "Class A");
        hudLabel.position.set(0, starRadius + 3.8, 0);
        starGroup.add(hudLabel);

        const starUserData = {
          type: "star_node",
          starData: s,
          constellationData: c,
          starIndex: idx,
          worldPos: worldPos.clone(),
          normal: normal.clone(),
          name: s.name,
          spectral: s.spectral,
          mag: s.mag,
          dist: s.dist,
          color: s.color
        };

        starGroup.userData = starUserData;
        starCore.userData = starUserData;
        corona.userData = starUserData;
        flare.userData = starUserData;
        hudLabel.userData = starUserData;

        this.celestialSphereGroup.add(starGroup);
        this.allStarMeshes.push(starGroup);
        this.activeCoronaMeshes.push(corona);
      });
    });
  }

  formConstellation(constellationData, startStarIndex = 0) {
    this.selectedConstellation = constellationData;

    // Clean up previous lines & tracer
    if (this.activeLineMesh) {
      this.starsGroup.remove(this.activeLineMesh);
      this.activeLineMesh = null;
    }
    if (this.tracerMesh) {
      this.starsGroup.remove(this.tracerMesh);
      this.tracerMesh = null;
    }
    if (this.beamTween) {
      this.beamTween.kill();
      this.beamTween = null;
    }

    const stars = constellationData.stars || [];
    const connections = constellationData.connections || [];
    if (stars.length === 0 || connections.length === 0) return;

    // Find all star groups in this constellation
    const starMeshes = this.allStarMeshes.filter(m => m.userData && m.userData.constellationData && m.userData.constellationData.id === constellationData.id);

    // Map each star index in constellation to its 3D world position
    const worldPositions = stars.map((s, idx) => {
      const found = starMeshes.find(m => m.userData.starIndex === idx);
      if (found) return found.position;
      return new THREE.Vector3(s.x, s.y, s.z || 0);
    });

    const linePositions = [];
    connections.forEach(([i, j]) => {
      const p1 = worldPositions[i];
      const p2 = worldPositions[j];
      if (p1 && p2) {
        linePositions.push(p1.x, p1.y, p1.z);
        linePositions.push(p2.x, p2.y, p2.z);
      }
    });

    const totalSegments = connections.length;
    const dynamicGeo = new THREE.BufferGeometry();
    const dynamicPos = new Float32Array(linePositions.length);
    dynamicGeo.setAttribute("position", new THREE.BufferAttribute(dynamicPos, 3));

    const lineMat = new THREE.LineBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      linewidth: 2
    });

    const lineMesh = new THREE.LineSegments(dynamicGeo, lineMat);
    this.starsGroup.add(lineMesh);
    this.activeLineMesh = lineMesh;

    // Glowing laser tracer head
    const tracerGeo = new THREE.SphereGeometry(1.6, 16, 16);
    const tracerMat = new THREE.MeshBasicMaterial({ color: 0xffffff });
    const tracer = new THREE.Mesh(tracerGeo, tracerMat);

    const tracerFlare = new THREE.Sprite(new THREE.SpriteMaterial({
      map: this.createStarCoronaTexture(),
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending
    }));
    tracerFlare.scale.set(18, 18, 1);
    tracer.add(tracerFlare);

    this.starsGroup.add(tracer);
    this.tracerMesh = tracer;

    if (window.soundEngine) {
      window.soundEngine.playBeamTrace();
    }

    let lastChimedSeg = -1;
    const beamState = { progress: 0 };

    this.beamTween = gsap.to(beamState, {
      progress: 1.0,
      duration: 2.2,
      ease: "power2.inOut",
      onUpdate: () => {
        const p = beamState.progress;
        const currentFloat = p * totalSegments;
        const currentSeg = Math.min(totalSegments - 1, Math.floor(currentFloat));
        const segT = currentFloat - currentSeg;

        if (currentSeg !== lastChimedSeg) {
          lastChimedSeg = currentSeg;
          if (window.soundEngine) {
            window.soundEngine.playConstellationChime();
          }
          // Pulse target star
          const targetStarIdx = connections[currentSeg] ? connections[currentSeg][1] : -1;
          const targetMesh = starMeshes.find(m => m.userData.starIndex === targetStarIdx);
          if (targetMesh && targetMesh.children[1]) {
            const corona = targetMesh.children[1];
            const baseScale = (corona.userData && corona.userData.baseScale) || 20;
            gsap.fromTo(corona.scale, 
              { x: baseScale * 1.7, y: baseScale * 1.7 },
              { x: baseScale, y: baseScale, duration: 0.8, ease: "power2.out" }
            );
          }
        }

        let tracerX = 0, tracerY = 0, tracerZ = 0;

        for (let s = 0; s < totalSegments; s++) {
          const base = s * 6;
          const x1 = linePositions[base];
          const y1 = linePositions[base + 1];
          const z1 = linePositions[base + 2];
          const x2 = linePositions[base + 3];
          const y2 = linePositions[base + 4];
          const z2 = linePositions[base + 5];

          if (s < currentSeg) {
            dynamicPos[base] = x1;
            dynamicPos[base + 1] = y1;
            dynamicPos[base + 2] = z1;
            dynamicPos[base + 3] = x2;
            dynamicPos[base + 4] = y2;
            dynamicPos[base + 5] = z2;
          } else if (s === currentSeg) {
            const curX = THREE.MathUtils.lerp(x1, x2, segT);
            const curY = THREE.MathUtils.lerp(y1, y2, segT);
            const curZ = THREE.MathUtils.lerp(z1, z2, segT);

            dynamicPos[base] = x1;
            dynamicPos[base + 1] = y1;
            dynamicPos[base + 2] = z1;
            dynamicPos[base + 3] = curX;
            dynamicPos[base + 4] = curY;
            dynamicPos[base + 5] = curZ;

            tracerX = curX;
            tracerY = curY;
            tracerZ = curZ;
          } else {
            dynamicPos[base] = x1;
            dynamicPos[base + 1] = y1;
            dynamicPos[base + 2] = z1;
            dynamicPos[base + 3] = x1;
            dynamicPos[base + 4] = y1;
            dynamicPos[base + 5] = z1;
          }
        }

        dynamicGeo.attributes.position.needsUpdate = true;
        tracer.position.set(tracerX, tracerY, tracerZ);
      },
      onComplete: () => {
        for (let k = 0; k < linePositions.length; k++) {
          dynamicPos[k] = linePositions[k];
        }
        dynamicGeo.attributes.position.needsUpdate = true;
        gsap.to(tracerFlare.scale, {
          x: 0,
          y: 0,
          duration: 0.4,
          onComplete: () => {
            if (this.tracerMesh) {
              this.starsGroup.remove(this.tracerMesh);
              this.tracerMesh = null;
            }
          }
        });
      }
    });
  }

  displayConstellation(constellationData, flyCamera = true) {
    this.formConstellation(constellationData, 0);

    if (flyCamera) {
      const c = constellationData;
      const raRad = (c.raH || 0) * (Math.PI / 12);
      const decRad = (c.decD || 0) * (Math.PI / 180);
      const sphereRadius = 160;
      const cx = sphereRadius * Math.cos(decRad) * Math.cos(raRad);
      const cy = sphereRadius * Math.sin(decRad);
      const cz = sphereRadius * Math.cos(decRad) * Math.sin(raRad);
      const center = new THREE.Vector3(cx, cy, cz);
      const normal = center.clone().normalize();
      const camPos = center.clone().add(normal.clone().multiplyScalar(75));

      this.animateCameraTo(camPos, center, 2.2);
    }

    this.rebuildInteractiveList();
  }

  drawSequentialConstellationVectors(stars, connections) {
    if (this.selectedConstellation) {
      this.formConstellation(this.selectedConstellation, 0);
    }
  }

  // --- 3. PHOTOREALISTIC 3D PLANETS WITH MESHPYSICALMATERIAL & MAGMA CORE SLICING ---
  buildPhotorealisticPlanetSystem() {
    this.leftHemisphere = new THREE.Group();
    this.rightHemisphere = new THREE.Group();
    this.coreDisksGroup = new THREE.Group();
    this.moonPivot = new THREE.Group();
    this.floatingPlanetsGroup = new THREE.Group();

    this.planetsGroup.add(this.leftHemisphere);
    this.planetsGroup.add(this.rightHemisphere);
    this.planetsGroup.add(this.coreDisksGroup);
    this.planetsGroup.add(this.moonPivot);
    this.planetsGroup.add(this.floatingPlanetsGroup);

    this.buildFloatingPlanetsField();

    if (window.ALL_EXOPLANETS && window.ALL_EXOPLANETS.length > 0) {
      this.displayPlanet(window.ALL_EXOPLANETS[0], false);
    }
  }

  createPlanetHUDLabel(text) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 256, 64);

    ctx.fillStyle = "rgba(10, 15, 30, 0.75)";
    ctx.beginPath();
    ctx.roundRect(10, 10, 236, 44, 22);
    ctx.fill();
    ctx.strokeStyle = "rgba(0, 240, 255, 0.45)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.font = "bold 18px system-ui, sans-serif";
    ctx.fillStyle = "#00f0ff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text.toUpperCase(), 128, 32);

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthTest: false
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(16, 4, 1);
    return sprite;
  }

  buildFloatingPlanetsField() {
    const planets = window.ALL_EXOPLANETS || [];
    this.floatingPlanetsGroup.clear();

    const planetPositions = [
      { r: 75, angle: 0.25, y: 12 },    // Mercury
      { r: 95, angle: 0.95, y: -9 },    // Venus
      { r: 115, angle: 1.75, y: 15 },   // Earth
      { r: 135, angle: 2.65, y: -12 },  // Mars
      { r: 160, angle: 3.45, y: 18 },   // Jupiter
      { r: 185, angle: 4.25, y: -16 },  // Saturn
      { r: 210, angle: 5.05, y: 10 },   // Uranus
      { r: 230, angle: 5.85, y: -14 },  // Neptune
      { r: 250, angle: 0.65, y: 22 },   // Kepler-186f
      { r: 270, angle: 2.15, y: -20 },  // WASP-12b
      { r: 290, angle: 3.95, y: 16 }    // TRAPPIST-1e
    ];

    planets.forEach((p, idx) => {
      const cfg = planetPositions[idx % planetPositions.length];
      const x = Math.cos(cfg.angle) * cfg.r;
      const z = Math.sin(cfg.angle) * cfg.r;
      const y = cfg.y;

      const group = new THREE.Group();
      group.position.set(x, y, z);

      // Mini planet body
      const size = p.category === "Gas Giant" ? 4.2 : 2.5;
      const bodyGeo = new THREE.SphereGeometry(size, 24, 24);
      const colorVal = p.atmosphereColor || (p.colorProfile && p.colorProfile.ocean) || "#38bdf8";
      const bodyMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(colorVal),
        roughness: 0.6,
        metalness: 0.1
      });
      const bodyMesh = new THREE.Mesh(bodyGeo, bodyMat);
      bodyMesh.userData = {
        type: "floating_planet",
        planetData: p,
        name: p.name
      };
      group.add(bodyMesh);

      // Mini ring for Saturn / Uranus
      if (p.id === "saturn" || p.id === "uranus") {
        const ringGeo = new THREE.RingGeometry(size * 1.4, size * 2.2, 32);
        const ringMat = new THREE.MeshBasicMaterial({
          color: new THREE.Color(p.ringColor || "#e2d2b4"),
          side: THREE.DoubleSide,
          transparent: true,
          opacity: 0.65
        });
        const ring = new THREE.Mesh(ringGeo, ringMat);
        ring.rotation.x = Math.PI / 2.3;
        group.add(ring);
      }

      // Atmospheric Corona Halo
      const haloMat = new THREE.SpriteMaterial({
        map: this.createStarCoronaTexture(),
        color: new THREE.Color(colorVal),
        transparent: true,
        opacity: 0.55,
        blending: THREE.AdditiveBlending
      });
      const halo = new THREE.Sprite(haloMat);
      halo.scale.set(size * 4, size * 4, 1);
      group.add(halo);

      // Orbit trail guide
      const orbitGeo = new THREE.BufferGeometry();
      const orbitPoints = [];
      for (let a = 0; a <= Math.PI * 2; a += Math.PI / 32) {
        orbitPoints.push(Math.cos(a) * cfg.r, 0, Math.sin(a) * cfg.r);
      }
      orbitGeo.setAttribute("position", new THREE.Float32BufferAttribute(orbitPoints, 3));
      const orbitMat = new THREE.LineBasicMaterial({
        color: 0x00f0ff,
        transparent: true,
        opacity: 0.08
      });
      const orbitLine = new THREE.LineLoop(orbitGeo, orbitMat);
      orbitLine.rotation.x = 0.04 * (idx % 2 === 0 ? 1 : -1);
      this.floatingPlanetsGroup.add(orbitLine);

      // 3D Billboard Label
      const label = this.createPlanetHUDLabel(p.name);
      label.position.set(0, size + 3.4, 0);
      label.userData = {
        type: "floating_planet",
        planetData: p,
        name: p.name
      };
      group.add(label);

      this.floatingPlanetsGroup.add(group);
    });
  }

  displayPlanet(planetData, flyCamera = true) {
    this.selectedPlanet = planetData;
    this.isCoreExposed = false;

    // Reset slice transforms
    this.leftHemisphere.position.set(0, 0, 0);
    this.rightHemisphere.position.set(0, 0, 0);
    this.leftHemisphere.rotation.set(0, 0, 0);
    this.rightHemisphere.rotation.set(0, 0, 0);
    this.coreDisksGroup.visible = false;

    // Clear old meshes
    this.leftHemisphere.clear();
    this.rightHemisphere.clear();
    this.coreDisksGroup.clear();
    this.moonPivot.clear();

    if (this.atmosphereGlow) {
      this.planetsGroup.remove(this.atmosphereGlow);
      this.atmosphereGlow = null;
    }
    if (this.planetRings) {
      this.planetsGroup.remove(this.planetRings);
      this.planetRings = null;
    }

    const radius = 18;

    // 1. Generate Photorealistic Procedural Planet Texture Maps (Diffuse, Bump, Roughness/Specular)
    const { diffuseMap, bumpMap, roughnessMap } = this.generatePlanetTextureSet(planetData);

    // 2. MeshPhysicalMaterial with displacement bump maps, specular ocean reflections, and clearcoat
    const planetMaterial = new THREE.MeshPhysicalMaterial({
      map: diffuseMap,
      bumpMap: bumpMap,
      bumpScale: 0.55,
      roughnessMap: roughnessMap,
      roughness: 0.72,
      metalness: 0.04,
      clearcoat: 0.35, // Optical depth / atmosphere reflection
      clearcoatRoughness: 0.12,
      reflectivity: 0.58
    });

    // West Hemisphere Shell
    const leftGeo = new THREE.SphereGeometry(radius, 64, 64, -Math.PI / 2, Math.PI);
    const leftMesh = new THREE.Mesh(leftGeo, planetMaterial);
    leftMesh.userData = {
      type: "planet_body",
      planetData: planetData,
      name: `${planetData.name} (Click to toggle core separation)`
    };
    this.leftHemisphere.add(leftMesh);

    // East Hemisphere Shell
    const rightGeo = new THREE.SphereGeometry(radius, 64, 64, Math.PI / 2, Math.PI);
    const rightMesh = new THREE.Mesh(rightGeo, planetMaterial);
    rightMesh.userData = {
      type: "planet_body",
      planetData: planetData,
      name: `${planetData.name} (Click to toggle core separation)`
    };
    this.rightHemisphere.add(rightMesh);

    // 3. Separate Atmospheric Cloud Shells (Only for planets with cloudy atmospheres)
    const hasCloudShell = planetData.id === "earth" || planetData.id === "venus" || planetData.id === "kepler186f" || planetData.id === "trappist1e";
    if (hasCloudShell) {
      const isVenus = planetData.id === "venus";
      const cloudTexture = this.generateCloudTexture(isVenus);
      const cloudMat = new THREE.MeshStandardMaterial({
        map: cloudTexture,
        transparent: true,
        opacity: isVenus ? 0.84 : 0.48,
        roughness: 0.9,
        metalness: 0.0,
        depthWrite: false
      });

      const leftCloudGeo = new THREE.SphereGeometry(radius * 1.018, 48, 48, -Math.PI / 2, Math.PI);
      this.leftCloudMesh = new THREE.Mesh(leftCloudGeo, cloudMat);
      this.leftHemisphere.add(this.leftCloudMesh);

      const rightCloudGeo = new THREE.SphereGeometry(radius * 1.018, 48, 48, Math.PI / 2, Math.PI);
      this.rightCloudMesh = new THREE.Mesh(rightCloudGeo, cloudMat);
      this.rightHemisphere.add(this.rightCloudMesh);
    } else {
      this.leftCloudMesh = null;
      this.rightCloudMesh = null;
    }

    // 4. Volumetric Atmospheric Fresnel Rim Shader (Glowing Atmosphere Rim)
    const isAirless = planetData.id === "mercury";
    if (!isAirless) {
      const atmosColor = new THREE.Color(planetData.atmosphereColor || "#38a2ff");
      const atmosMat = new THREE.ShaderMaterial({
        vertexShader: `
          varying vec3 vNormal;
          varying vec3 vViewPos;
          void main() {
            vNormal = normalize(normalMatrix * normal);
            vec4 mvPos = modelViewMatrix * vec4(position, 1.0);
            vViewPos = -mvPos.xyz;
            gl_Position = projectionMatrix * mvPos;
          }
        `,
        fragmentShader: `
          varying vec3 vNormal;
          varying vec3 vViewPos;
          uniform vec3 uColor;
          void main() {
            vec3 viewDir = normalize(vViewPos);
            float rim = 1.0 - max(0.0, dot(vNormal, viewDir));
            float alpha = pow(rim, 3.2) * 0.95;
            gl_FragColor = vec4(uColor, alpha);
          }
        `,
        uniforms: {
          uColor: { value: atmosColor }
        },
        blending: THREE.AdditiveBlending,
        side: THREE.BackSide,
        transparent: true
      });

      const atmosGeo = new THREE.SphereGeometry(radius * 1.13, 48, 48);
      const atmosMesh = new THREE.Mesh(atmosGeo, atmosMat);
      this.planetsGroup.add(atmosMesh);
      this.atmosphereGlow = atmosMesh;
    }

    // 5. Build Glowing Emissive Magma Interior & Concentric Core Disks
    this.buildMagmaInteriorAndLayers(planetData, radius);

    // 6. Planetary 3D Ring Geometry (Saturn with Cassini divisions, Jupiter, Uranus)
    if (planetData.hasRings) {
      const isSaturn = planetData.id === "saturn";
      const isUranus = planetData.id === "uranus";
      const innerR = radius * (isSaturn ? 1.30 : isUranus ? 1.40 : 1.25);
      const outerR = radius * (isSaturn ? 2.50 : isUranus ? 2.05 : 1.70);

      const ringGeo = new THREE.RingGeometry(innerR, outerR, 128);
      const ringMat = new THREE.MeshStandardMaterial({
        map: this.generatePlanetaryRingTexture(planetData),
        side: THREE.DoubleSide,
        transparent: true,
        roughness: 0.75,
        metalness: 0.08,
        depthWrite: false
      });
      const ringMesh = new THREE.Mesh(ringGeo, ringMat);
      if (isUranus) {
        ringMesh.rotation.x = Math.PI * 0.54; // 98° steep axial tilt
      } else {
        ringMesh.rotation.x = Math.PI / 2.35; // ~27° Saturn tilt
        ringMesh.rotation.y = 0.08;
      }
      this.planetsGroup.add(ringMesh);
      this.planetRings = ringMesh;
    }

    // 7. Companion Orbiting Moon (Only for planets with natural satellites)
    this.buildCompanionMoon(planetData, radius);

    // 8. Silky Camera Flight (2.5s with power3.inOut)
    if (flyCamera) {
      this.animateCameraTo(
        { x: 0, y: 10, z: 52 },
        { x: 0, y: 0, z: 0 },
        2.5
      );
    }

    this.rebuildInteractiveList();
  }

  // Glowing, emissive magma interior + concentric geological core layers
  buildMagmaInteriorAndLayers(planetData, outerRadius) {
    // 1. Central glowing magma sphere (exposed when shells separate)
    const magmaGeo = new THREE.SphereGeometry(outerRadius * 0.44, 48, 48);
    const magmaTex = this.generateMagmaTexture();

    this.magmaMaterial = new THREE.MeshPhysicalMaterial({
      map: magmaTex,
      emissiveMap: magmaTex,
      emissive: new THREE.Color(0xff4500),
      emissiveIntensity: 2.2, // Glowing incandescent magma
      roughness: 0.28,
      metalness: 0.1
    });

    this.coreMagmaSphere = new THREE.Mesh(magmaGeo, this.magmaMaterial);
    this.coreDisksGroup.add(this.coreMagmaSphere);

    // 2. Concentric geological cut-section disks (Crust, Silicate Mantle, Outer Core, Inner Core)
    const layers = planetData.coreLayers || [
      { name: "Crust", color: "#4a708b", radius: outerRadius * 0.98 },
      { name: "Mantle", color: "#b84a14", radius: outerRadius * 0.74 },
      { name: "Outer Core", color: "#e67300", radius: outerRadius * 0.50 },
      { name: "Inner Core", color: "#ffe066", radius: outerRadius * 0.26 }
    ];

    const layerRadii = [outerRadius * 0.98, outerRadius * 0.74, outerRadius * 0.50, outerRadius * 0.26];

    layers.forEach((layer, idx) => {
      const r = layerRadii[idx] || (outerRadius * (0.95 - idx * 0.22));
      const col = new THREE.Color(layer.color || "#ff6600");

      // Cut section disk
      const diskGeo = new THREE.CircleGeometry(r, 48);
      const diskMat = new THREE.MeshStandardMaterial({
        color: col,
        roughness: 0.6,
        metalness: 0.2,
        side: THREE.DoubleSide
      });
      const disk = new THREE.Mesh(diskGeo, diskMat);
      disk.rotation.y = Math.PI / 2;
      disk.position.x = idx * 0.05;
      this.coreDisksGroup.add(disk);

      // Incandescent glowing boundary ring
      const ringEdgeGeo = new THREE.RingGeometry(r * 0.975, r, 48);
      const ringEdgeMat = new THREE.MeshBasicMaterial({
        color: idx === 3 ? 0xfffae6 : 0xff7722,
        side: THREE.DoubleSide
      });
      const ringEdge = new THREE.Mesh(ringEdgeGeo, ringEdgeMat);
      ringEdge.rotation.y = Math.PI / 2;
      ringEdge.position.x = idx * 0.05 + 0.01;
      this.coreDisksGroup.add(ringEdge);
    });
  }

  buildCompanionMoon(planetData, planetRadius) {
    if (planetData.id === "mercury" || planetData.id === "venus") {
      this.moonMesh = null;
      return;
    }

    const moonGeo = new THREE.SphereGeometry(planetRadius * 0.25, 24, 24);
    const moonMat = new THREE.MeshStandardMaterial({
      color: 0xc8cdd4,
      roughness: 0.88,
      metalness: 0.04
    });
    const moon = new THREE.Mesh(moonGeo, moonMat);
    moon.position.set(planetRadius * 2.8, 3, planetRadius * 1.2);
    moon.userData = {
      type: "moon_body",
      name: `${planetData.name} Moon / Satellite`,
      planetData: planetData
    };
    this.moonPivot.add(moon);
    this.moonMesh = moon;
  }

  // Smooth Shell-Separation Animation (2.5s with power3.inOut)
  toggleCoreExposure() {
    this.isCoreExposed = !this.isCoreExposed;
    if (window.soundEngine) window.soundEngine.playCoreExpose();

    if (this.sliceTween) this.sliceTween.kill();

    const targetSeparation = this.isCoreExposed ? 11.5 : 0;
    const targetTilt = this.isCoreExposed ? 0.14 : 0;

    this.coreDisksGroup.visible = true;

    // Silky shell separation with power3.inOut over 2.5 seconds
    gsap.to(this.leftHemisphere.position, {
      x: -targetSeparation,
      duration: 2.5,
      ease: "power3.inOut"
    });
    gsap.to(this.leftHemisphere.rotation, {
      y: -targetTilt,
      duration: 2.5,
      ease: "power3.inOut"
    });

    gsap.to(this.rightHemisphere.position, {
      x: targetSeparation,
      duration: 2.5,
      ease: "power3.inOut"
    });
    gsap.to(this.rightHemisphere.rotation, {
      y: targetTilt,
      duration: 2.5,
      ease: "power3.inOut",
      onComplete: () => {
        if (!this.isCoreExposed) {
          this.coreDisksGroup.visible = false;
        }
      }
    });

    return this.isCoreExposed;
  }

  // --- PHOTOREALISTIC PROCEDURAL TEXTURE GENERATOR ---
  generatePlanetTextureSet(planetData) {
    const width = 2048;
    const height = 1024;

    // 1. Diffuse Map (Color)
    const diffCanvas = document.createElement("canvas");
    diffCanvas.width = width;
    diffCanvas.height = height;
    const diffCtx = diffCanvas.getContext("2d");

    // 2. Bump Map (Grayscale Heightmap: Oceans = 0, Plains = 90, Mountains = 240)
    const bumpCanvas = document.createElement("canvas");
    bumpCanvas.width = width;
    bumpCanvas.height = height;
    const bumpCtx = bumpCanvas.getContext("2d");

    // 3. Roughness Map (Specular Reflections: Oceans = 22 (mirror specular), Land = 210 (matte))
    const roughCanvas = document.createElement("canvas");
    roughCanvas.width = width;
    roughCanvas.height = height;
    const roughCtx = roughCanvas.getContext("2d");

    const type = planetData.textureType || "terrestrial";
    const colors = planetData.surfaceColors || {};

    if (type === "mercury") {
      // --- MERCURY: Airless, heavily cratered slate-gray regolith ---
      diffCtx.fillStyle = colors.base || "#3a3c40";
      diffCtx.fillRect(0, 0, width, height);

      bumpCtx.fillStyle = "rgb(85, 85, 85)";
      bumpCtx.fillRect(0, 0, width, height);

      roughCtx.fillStyle = "rgb(215, 215, 215)";
      roughCtx.fillRect(0, 0, width, height);

      // Lowland smooth basalt plains
      diffCtx.fillStyle = colors.lowland || "#2b2d31";
      for (let i = 0; i < 16; i++) {
        const px = Math.random() * width;
        const py = Math.random() * height;
        const pr = 60 + Math.random() * 120;
        diffCtx.beginPath();
        diffCtx.arc(px, py, pr, 0, Math.PI * 2);
        diffCtx.fill();
      }

      // Hundreds of impact craters with raised rims and ejecta rays
      for (let c = 0; c < 140; c++) {
        const cx = Math.random() * width;
        const cy = 60 + Math.random() * (height - 120);
        const cr = 4 + Math.random() * 28;

        // Dark crater floor
        diffCtx.fillStyle = colors.crater || "#212326";
        diffCtx.beginPath();
        diffCtx.arc(cx, cy, cr, 0, Math.PI * 2);
        diffCtx.fill();

        bumpCtx.fillStyle = "rgb(35, 35, 35)";
        bumpCtx.beginPath();
        bumpCtx.arc(cx, cy, cr, 0, Math.PI * 2);
        bumpCtx.fill();

        // Bright raised crater rim
        diffCtx.strokeStyle = colors.highland || "#727782";
        diffCtx.lineWidth = Math.max(1.5, cr * 0.22);
        diffCtx.beginPath();
        diffCtx.arc(cx, cy, cr, 0, Math.PI * 2);
        diffCtx.stroke();

        bumpCtx.strokeStyle = "rgb(230, 230, 230)";
        bumpCtx.lineWidth = Math.max(1.5, cr * 0.22);
        bumpCtx.beginPath();
        bumpCtx.arc(cx, cy, cr, 0, Math.PI * 2);
        bumpCtx.stroke();

        // Radial ejecta ray systems for larger impact craters
        if (cr > 14) {
          diffCtx.strokeStyle = colors.rays || "rgba(180, 186, 198, 0.45)";
          diffCtx.lineWidth = 1.0;
          const rays = 6 + Math.floor(Math.random() * 6);
          for (let r = 0; r < rays; r++) {
            const angle = (r / rays) * Math.PI * 2 + Math.random() * 0.2;
            const rayLen = cr * (2.5 + Math.random() * 3.5);
            diffCtx.beginPath();
            diffCtx.moveTo(cx + Math.cos(angle) * cr, cy + Math.sin(angle) * cr);
            diffCtx.lineTo(cx + Math.cos(angle) * rayLen, cy + Math.sin(angle) * rayLen);
            diffCtx.stroke();
          }
        }
      }

    } else if (type === "venus") {
      // --- VENUS: Golden-amber sulfuric acid cloud layers with chevron flow bands ---
      const grad = diffCtx.createLinearGradient(0, 0, 0, height);
      grad.addColorStop(0, colors.cloud3 || "#b88a40");
      grad.addColorStop(0.25, colors.cloud1 || "#e8cf9b");
      grad.addColorStop(0.5, colors.cloud2 || "#d4aa63");
      grad.addColorStop(0.75, colors.cloud4 || "#f2dfb6");
      grad.addColorStop(1, colors.cloud3 || "#b88a40");
      diffCtx.fillStyle = grad;
      diffCtx.fillRect(0, 0, width, height);

      bumpCtx.fillStyle = "rgb(110, 110, 110)";
      bumpCtx.fillRect(0, 0, width, height);

      roughCtx.fillStyle = "rgb(175, 175, 175)";
      roughCtx.fillRect(0, 0, width, height);

      // Sweeping atmospheric chevron wave bands
      for (let w = 0; w < 32; w++) {
        const y = (w / 32) * height;
        diffCtx.strokeStyle = (w % 2 === 0) ? "rgba(245, 230, 195, 0.35)" : "rgba(160, 115, 45, 0.35)";
        diffCtx.lineWidth = 14 + Math.random() * 12;
        diffCtx.beginPath();
        for (let x = 0; x <= width; x += 40) {
          const wave = Math.sin((x / width) * Math.PI * 6 + w) * 18;
          if (x === 0) diffCtx.moveTo(x, y + wave);
          else diffCtx.lineTo(x, y + wave);
        }
        diffCtx.stroke();
      }

      // Polar vortices
      diffCtx.fillStyle = "rgba(150, 100, 35, 0.6)";
      diffCtx.beginPath();
      diffCtx.ellipse(width * 0.5, 40, 320, 35, 0, 0, Math.PI * 2);
      diffCtx.fill();
      diffCtx.beginPath();
      diffCtx.ellipse(width * 0.5, height - 40, 320, 35, 0, 0, Math.PI * 2);
      diffCtx.fill();

    } else if (type === "mars") {
      // --- MARS: Rust-red iron oxide plains, volcanic provinces, Valles Marineris, polar ice ---
      diffCtx.fillStyle = colors.base || "#b54215";
      diffCtx.fillRect(0, 0, width, height);

      bumpCtx.fillStyle = "rgb(90, 90, 90)";
      bumpCtx.fillRect(0, 0, width, height);

      roughCtx.fillStyle = "rgb(215, 215, 215)";
      roughCtx.fillRect(0, 0, width, height);

      // Highland brighter orange regolith
      diffCtx.fillStyle = colors.highland || "#cf6226";
      for (let i = 0; i < 20; i++) {
        const x = Math.random() * width;
        const y = 80 + Math.random() * (height - 160);
        const r = 80 + Math.random() * 180;
        diffCtx.beginPath();
        diffCtx.arc(x, y, r, 0, Math.PI * 2);
        diffCtx.fill();
      }

      // Dark volcanic provinces (Syrtis Major, Elysium, Mare Acidalium)
      diffCtx.fillStyle = colors.volcanic || "#381c0e";
      bumpCtx.fillStyle = "rgb(65, 65, 65)";
      const volcanics = [
        { x: width * 0.72, y: height * 0.52, r: 120 },
        { x: width * 0.28, y: height * 0.42, r: 100 },
        { x: width * 0.88, y: height * 0.38, r: 90 }
      ];
      volcanics.forEach(v => {
        diffCtx.beginPath();
        diffCtx.arc(v.x, v.y, v.r, 0, Math.PI * 2);
        diffCtx.fill();
        bumpCtx.beginPath();
        bumpCtx.arc(v.x, v.y, v.r, 0, Math.PI * 2);
        bumpCtx.fill();
      });

      // Olympus Mons giant shield volcano (massive caldera with high bump)
      const omX = width * 0.36;
      const omY = height * 0.44;
      diffCtx.fillStyle = "#6d3216";
      diffCtx.beginPath();
      diffCtx.arc(omX, omY, 55, 0, Math.PI * 2);
      diffCtx.fill();
      bumpCtx.fillStyle = "rgb(248, 248, 248)"; // Tallest peak
      bumpCtx.beginPath();
      bumpCtx.arc(omX, omY, 55, 0, Math.PI * 2);
      bumpCtx.fill();
      bumpCtx.fillStyle = "rgb(30, 30, 30)"; // Central caldera pit
      bumpCtx.beginPath();
      bumpCtx.arc(omX, omY, 14, 0, Math.PI * 2);
      bumpCtx.fill();

      // Valles Marineris canyon trench scar
      diffCtx.strokeStyle = "#250d05";
      diffCtx.lineWidth = 12;
      bumpCtx.strokeStyle = "rgb(15, 15, 15)"; // Deep trench
      bumpCtx.lineWidth = 12;
      diffCtx.beginPath();
      bumpCtx.beginPath();
      diffCtx.moveTo(width * 0.35, height * 0.56);
      bumpCtx.moveTo(width * 0.35, height * 0.56);
      diffCtx.bezierCurveTo(width * 0.42, height * 0.59, width * 0.48, height * 0.54, width * 0.55, height * 0.58);
      bumpCtx.bezierCurveTo(width * 0.42, height * 0.59, width * 0.48, height * 0.54, width * 0.55, height * 0.58);
      diffCtx.stroke();
      bumpCtx.stroke();

      // Martian Polar Ice Caps (CO2 + H2O white ice)
      diffCtx.fillStyle = colors.polar || "#ffffff";
      bumpCtx.fillStyle = "rgb(120, 120, 120)";
      roughCtx.fillStyle = "rgb(60, 60, 60)";
      diffCtx.fillRect(0, 0, width, 55);
      diffCtx.fillRect(0, height - 55, width, 55);
      bumpCtx.fillRect(0, 0, width, 55);
      bumpCtx.fillRect(0, height - 55, width, 55);
      roughCtx.fillRect(0, 0, width, 55);
      roughCtx.fillRect(0, height - 55, width, 55);

    } else if (type === "saturn") {
      // --- SATURN: Delicate golden-ochre and cream atmospheric bands with North Hexagon ---
      const bands = 54;
      const bH = height / bands;
      for (let b = 0; b < bands; b++) {
        const col = (b % 5 === 0) ? colors.band1 || "#cfb088" :
                    (b % 5 === 1) ? colors.band2 || "#e2c99b" :
                    (b % 5 === 2) ? colors.band3 || "#bf9b64" :
                    (b % 5 === 3) ? colors.band4 || "#f5e4bd" : "#a88147";
        diffCtx.fillStyle = col;
        diffCtx.fillRect(0, b * bH, width, bH + 1);

        bumpCtx.fillStyle = `rgb(${110 + (b % 4) * 15}, ${110 + (b % 4) * 15}, ${110 + (b % 4) * 15})`;
        bumpCtx.fillRect(0, b * bH, width, bH + 1);

        roughCtx.fillStyle = "rgb(140, 140, 140)";
        roughCtx.fillRect(0, b * bH, width, bH + 1);
      }

      // Saturn North Polar Hexagon
      diffCtx.strokeStyle = "#8f7041";
      diffCtx.lineWidth = 4;
      diffCtx.beginPath();
      const hx = width * 0.5;
      const hy = 40;
      const hr = 75;
      for (let s = 0; s < 6; s++) {
        const ang = (s / 6) * Math.PI * 2;
        const x = hx + Math.cos(ang) * hr;
        const y = hy + Math.sin(ang) * 20;
        if (s === 0) diffCtx.moveTo(x, y);
        else diffCtx.lineTo(x, y);
      }
      diffCtx.closePath();
      diffCtx.stroke();

    } else if (type === "gas_giant") {
      // --- JUPITER: Turbulent Jovian Belts, Zones, and Great Red Spot ---
      const bands = 42;
      const bH = height / bands;
      for (let b = 0; b < bands; b++) {
        const col = (b % 6 === 0) ? colors.band1 || "#8c6239" :
                    (b % 6 === 1) ? colors.band2 || "#c69c6d" :
                    (b % 6 === 2) ? colors.band3 || "#dfba82" :
                    (b % 6 === 3) ? colors.band4 || "#f1d4a9" :
                    (b % 6 === 4) ? "#a04820" : "#6e4c27";
        diffCtx.fillStyle = col;
        diffCtx.fillRect(0, b * bH, width, bH + 1);

        bumpCtx.fillStyle = `rgb(${100 + (b % 4) * 25}, ${100 + (b % 4) * 25}, ${100 + (b % 4) * 25})`;
        bumpCtx.fillRect(0, b * bH, width, bH + 1);

        roughCtx.fillStyle = "rgb(150, 150, 150)";
        roughCtx.fillRect(0, b * bH, width, bH + 1);
      }

      // Great Red Spot
      const grsX = width * 0.62;
      const grsY = height * 0.62;
      diffCtx.fillStyle = colors.storm || "#b33827";
      diffCtx.beginPath();
      diffCtx.ellipse(grsX, grsY, 120, 68, -0.06, 0, Math.PI * 2);
      diffCtx.fill();

      // Swirling inner eye of Great Red Spot
      diffCtx.fillStyle = "#d85338";
      diffCtx.beginPath();
      diffCtx.ellipse(grsX, grsY, 70, 36, -0.06, 0, Math.PI * 2);
      diffCtx.fill();
      diffCtx.fillStyle = "#6e1d12";
      diffCtx.beginPath();
      diffCtx.ellipse(grsX, grsY, 32, 16, -0.06, 0, Math.PI * 2);
      diffCtx.fill();

      // White storm ovals
      diffCtx.fillStyle = "rgba(255, 255, 255, 0.7)";
      for (let o = 0; o < 8; o++) {
        const ox = (grsX + 220 + o * 180) % width;
        const oy = height * 0.64 + (o % 2 === 0 ? 25 : -25);
        diffCtx.beginPath();
        diffCtx.ellipse(ox, oy, 28, 14, 0, 0, Math.PI * 2);
        diffCtx.fill();
      }

    } else if (type === "ice_giant") {
      // --- URANUS / NEPTUNE: Methane atmosphere ---
      const isNeptune = planetData.id === "neptune";
      const grad = diffCtx.createLinearGradient(0, 0, 0, height);
      if (isNeptune) {
        grad.addColorStop(0, colors.color1 || "#132b5e");
        grad.addColorStop(0.35, colors.color2 || "#1c499c");
        grad.addColorStop(0.5, colors.color3 || "#2563eb");
        grad.addColorStop(0.65, colors.color2 || "#1c499c");
        grad.addColorStop(1, colors.color1 || "#132b5e");
      } else {
        // Uranus pale aquamarine
        grad.addColorStop(0, "#56b6c4");
        grad.addColorStop(0.5, "#7be0eb");
        grad.addColorStop(1, "#56b6c4");
      }
      diffCtx.fillStyle = grad;
      diffCtx.fillRect(0, 0, width, height);

      bumpCtx.fillStyle = "rgb(40, 40, 40)";
      bumpCtx.fillRect(0, 0, width, height);

      roughCtx.fillStyle = "rgb(90, 90, 90)";
      roughCtx.fillRect(0, 0, width, height);

      if (isNeptune) {
        // Neptune's Great Dark Spot
        diffCtx.fillStyle = "#0c1b3d";
        diffCtx.beginPath();
        diffCtx.ellipse(width * 0.58, height * 0.44, 90, 48, -0.08, 0, Math.PI * 2);
        diffCtx.fill();

        // White high-altitude methane cirrus clouds (Scooter)
        diffCtx.strokeStyle = "rgba(255, 255, 255, 0.8)";
        diffCtx.lineWidth = 5;
        diffCtx.beginPath();
        diffCtx.ellipse(width * 0.58, height * 0.48, 110, 20, -0.08, 0, Math.PI);
        diffCtx.stroke();
      }

    } else if (type === "wasp12b") {
      // --- WASP-12b: Pitch-black carbonaceous ultra-hot Jupiter with incandescent lava rifts ---
      diffCtx.fillStyle = colors.base || "#121012";
      diffCtx.fillRect(0, 0, width, height);

      bumpCtx.fillStyle = "rgb(45, 45, 45)";
      bumpCtx.fillRect(0, 0, width, height);

      roughCtx.fillStyle = "rgb(230, 230, 230)";
      roughCtx.fillRect(0, 0, width, height);

      // Dayside incandescent fissures glowing fiery crimson & gold
      diffCtx.strokeStyle = colors.lava1 || "#ff3700";
      diffCtx.lineWidth = 7;
      for (let i = 0; i < 28; i++) {
        diffCtx.beginPath();
        let sx = width * 0.25 + Math.random() * (width * 0.5);
        let sy = height * 0.2 + Math.random() * (height * 0.6);
        diffCtx.moveTo(sx, sy);
        for (let seg = 0; seg < 6; seg++) {
          sx += (Math.random() - 0.5) * 140;
          sy += (Math.random() - 0.5) * 70;
          diffCtx.lineTo(sx, sy);
        }
        diffCtx.stroke();
      }

    } else if (type === "trappist") {
      // --- TRAPPIST-1e: Tidally locked with substellar sapphire ocean and dark anti-stellar glacier ---
      // Substellar ocean center
      diffCtx.fillStyle = "#0c1524";
      diffCtx.fillRect(0, 0, width, height);

      bumpCtx.fillStyle = "rgb(15, 15, 15)";
      bumpCtx.fillRect(0, 0, width, height);

      roughCtx.fillStyle = "rgb(200, 200, 200)";
      roughCtx.fillRect(0, 0, width, height);

      // Star-facing substellar ocean
      const ox = width * 0.5;
      const oy = height * 0.5;
      diffCtx.fillStyle = "#041e42";
      diffCtx.beginPath();
      diffCtx.arc(ox, oy, 280, 0, Math.PI * 2);
      diffCtx.fill();

      bumpCtx.fillStyle = "rgb(0, 0, 0)";
      bumpCtx.beginPath();
      bumpCtx.arc(ox, oy, 280, 0, Math.PI * 2);
      bumpCtx.fill();

      roughCtx.fillStyle = "rgb(22, 22, 22)"; // Specular reflection
      roughCtx.beginPath();
      roughCtx.arc(ox, oy, 280, 0, Math.PI * 2);
      roughCtx.fill();

      // Twilight continents with dark reddish-brown flora
      diffCtx.fillStyle = "#42281a";
      bumpCtx.fillStyle = "rgb(140, 140, 140)";
      for (let a = 0; a < 8; a++) {
        const ang = (a / 8) * Math.PI * 2;
        const cx = ox + Math.cos(ang) * 290;
        const cy = oy + Math.sin(ang) * 220;
        diffCtx.beginPath();
        diffCtx.arc(cx, cy, 75, 0, Math.PI * 2);
        diffCtx.fill();
        bumpCtx.beginPath();
        bumpCtx.arc(cx, cy, 75, 0, Math.PI * 2);
        bumpCtx.fill();
      }

      // Perpetual glacial ice on anti-stellar night sides
      diffCtx.fillStyle = "#dce8f5";
      roughCtx.fillStyle = "rgb(60, 60, 60)";
      diffCtx.fillRect(0, 0, width * 0.22, height);
      diffCtx.fillRect(width * 0.78, 0, width * 0.22, height);
      roughCtx.fillRect(0, 0, width * 0.22, height);
      roughCtx.fillRect(width * 0.78, 0, width * 0.22, height);

    } else if (type === "kepler") {
      // --- KEPLER-186f: Habitable world with indigo ocean and dusky infrared vegetation ---
      diffCtx.fillStyle = "#021630";
      diffCtx.fillRect(0, 0, width, height);

      bumpCtx.fillStyle = "rgb(0, 0, 0)";
      bumpCtx.fillRect(0, 0, width, height);

      roughCtx.fillStyle = "rgb(22, 22, 22)"; // Specular ocean
      roughCtx.fillRect(0, 0, width, height);

      const keplerContinents = [
        { x: 420, y: 400, r: 170 },
        { x: 920, y: 350, r: 200 },
        { x: 1350, y: 550, r: 180 },
        { x: 620, y: 680, r: 130 }
      ];

      keplerContinents.forEach(c => {
        // Shelf
        diffCtx.fillStyle = "#0b4a63";
        diffCtx.beginPath();
        diffCtx.arc(c.x, c.y, c.r * 1.15, 0, Math.PI * 2);
        diffCtx.fill();

        // Dusky vegetation
        diffCtx.fillStyle = "#1e3c25";
        bumpCtx.fillStyle = "rgb(130, 130, 130)";
        roughCtx.fillStyle = "rgb(210, 210, 210)";
        diffCtx.beginPath();
        diffCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        diffCtx.fill();
        bumpCtx.beginPath();
        bumpCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        bumpCtx.fill();
        roughCtx.beginPath();
        roughCtx.arc(c.x, c.y, c.r, 0, Math.PI * 2);
        roughCtx.fill();
      });

      // Ice caps
      diffCtx.fillStyle = "#f0f5fa";
      roughCtx.fillStyle = "rgb(65, 65, 65)";
      diffCtx.fillRect(0, 0, width, 60);
      diffCtx.fillRect(0, height - 60, width, 60);
      roughCtx.fillRect(0, 0, width, 60);
      roughCtx.fillRect(0, height - 60, width, 60);

    } else {
      // --- TERRESTRIAL (Earth): Continents, shelf shallows, mountain ridges, specular oceans ---
      const oceanGrad = diffCtx.createLinearGradient(0, 0, 0, height);
      oceanGrad.addColorStop(0, "#031024");
      oceanGrad.addColorStop(0.5, "#062244");
      oceanGrad.addColorStop(1, "#031024");
      diffCtx.fillStyle = oceanGrad;
      diffCtx.fillRect(0, 0, width, height);

      // Oceans in bump map = 0 (flat mirror)
      bumpCtx.fillStyle = "rgb(0, 0, 0)";
      bumpCtx.fillRect(0, 0, width, height);

      // Oceans in roughness map = 22 (ultra-smooth, crisp specular ocean reflections!)
      roughCtx.fillStyle = "rgb(22, 22, 22)";
      roughCtx.fillRect(0, 0, width, height);

      // Realistic Continents
      const landClusters = [
        { x: 380, y: 380, r: 180, name: "North America" },
        { x: 520, y: 640, r: 140, name: "South America" },
        { x: 1040, y: 340, r: 160, name: "Eurasia West" },
        { x: 1380, y: 360, r: 210, name: "Eurasia East" },
        { x: 1080, y: 580, r: 170, name: "Africa" },
        { x: 1540, y: 700, r: 120, name: "Australia" }
      ];

      landClusters.forEach(cluster => {
        // Continental shelf shallows
        diffCtx.fillStyle = "#0c506d";
        diffCtx.beginPath();
        diffCtx.arc(cluster.x, cluster.y, cluster.r * 1.15, 0, Math.PI * 2);
        diffCtx.fill();

        // Main landmass
        diffCtx.fillStyle = colors.land1 || "#244222";
        bumpCtx.fillStyle = "rgb(120, 120, 120)";
        roughCtx.fillStyle = "rgb(215, 215, 215)";

        diffCtx.beginPath();
        bumpCtx.beginPath();
        roughCtx.beginPath();

        diffCtx.arc(cluster.x, cluster.y, cluster.r, 0, Math.PI * 2);
        bumpCtx.arc(cluster.x, cluster.y, cluster.r, 0, Math.PI * 2);
        roughCtx.arc(cluster.x, cluster.y, cluster.r, 0, Math.PI * 2);

        diffCtx.fill();
        bumpCtx.fill();
        roughCtx.fill();

        // Arid interior / deserts
        diffCtx.fillStyle = colors.desert || "#8f7543";
        diffCtx.beginPath();
        diffCtx.arc(cluster.x + 20, cluster.y - 15, cluster.r * 0.55, 0, Math.PI * 2);
        diffCtx.fill();

        // Mountain ridge peaks (high bump height = 245)
        bumpCtx.fillStyle = "rgb(245, 245, 245)";
        bumpCtx.beginPath();
        bumpCtx.ellipse(cluster.x - 30, cluster.y - 20, cluster.r * 0.45, 18, 0.4, 0, Math.PI * 2);
        bumpCtx.fill();
      });

      // Polar Ice Caps (Glacial White)
      diffCtx.fillStyle = "#f0f6ff";
      bumpCtx.fillStyle = "rgb(90, 90, 90)";
      roughCtx.fillStyle = "rgb(65, 65, 65)";

      diffCtx.fillRect(0, 0, width, 65);
      diffCtx.fillRect(0, height - 70, width, 70);

      bumpCtx.fillRect(0, 0, width, 65);
      bumpCtx.fillRect(0, height - 70, width, 70);

      roughCtx.fillRect(0, 0, width, 65);
      roughCtx.fillRect(0, height - 70, width, 70);
    }

    const diffuseTex = new THREE.CanvasTexture(diffCanvas);
    diffuseTex.wrapS = THREE.RepeatWrapping;
    diffuseTex.wrapT = THREE.ClampToEdgeWrapping;

    const bumpTex = new THREE.CanvasTexture(bumpCanvas);
    bumpTex.wrapS = THREE.RepeatWrapping;
    bumpTex.wrapT = THREE.ClampToEdgeWrapping;

    const roughnessTex = new THREE.CanvasTexture(roughCanvas);
    roughnessTex.wrapS = THREE.RepeatWrapping;
    roughnessTex.wrapT = THREE.ClampToEdgeWrapping;

    return { diffuseMap: diffuseTex, bumpMap: bumpTex, roughnessMap: roughnessTex };
  }

  generateCloudTexture(isVenus = false) {
    const canvas = document.createElement("canvas");
    canvas.width = 2048;
    canvas.height = 1024;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (isVenus) {
      // Sulfuric acid cloud deck for Venus
      ctx.fillStyle = "rgba(242, 223, 182, 0.72)";
      for (let i = 0; i < 48; i++) {
        const x = Math.random() * canvas.width;
        const y = 80 + Math.random() * (canvas.height - 160);
        const rx = 120 + Math.random() * 200;
        const ry = 22 + Math.random() * 35;
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, (Math.random() - 0.5) * 0.3, 0, Math.PI * 2);
        ctx.fill();
      }
    } else {
      // Wispy white clouds for Earth / Habitable worlds
      ctx.fillStyle = "rgba(255, 255, 255, 0.52)";
      for (let i = 0; i < 42; i++) {
        const x = Math.random() * canvas.width;
        const y = 120 + Math.random() * (canvas.height - 240);
        const rx = 80 + Math.random() * 150;
        const ry = 16 + Math.random() * 28;
        ctx.beginPath();
        ctx.ellipse(x, y, rx, ry, (Math.random() - 0.5) * 0.4, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.wrapS = THREE.RepeatWrapping;
    tex.wrapT = THREE.ClampToEdgeWrapping;
    return tex;
  }

  generatePlanetaryRingTexture(planetData) {
    const size = 1024;
    const canvas = document.createElement("canvas");
    canvas.width = size;
    canvas.height = size;
    const ctx = canvas.getContext("2d");

    const center = size / 2;
    const maxR = size / 2;
    const isSaturn = planetData.id === "saturn";
    const isJupiter = planetData.id === "jupiter";
    const isUranus = planetData.id === "uranus";

    ctx.clearRect(0, 0, size, size);

    const innerFrac = 0.52;
    const outerFrac = 0.98;

    for (let r = Math.floor(maxR * innerFrac); r < Math.floor(maxR * outerFrac); r++) {
      const norm = (r - maxR * innerFrac) / (maxR * (outerFrac - innerFrac));
      let alpha = 0.65;

      if (isSaturn) {
        // Cassini division at norm ~ 0.67 to 0.74 (dark gap)
        if (norm > 0.67 && norm < 0.74) {
          alpha = 0.02;
        } else if (norm > 0.90 && norm < 0.93) {
          // Encke gap
          alpha = 0.04;
        } else if (norm < 0.20) {
          // Ring C (crepe ring - faint)
          alpha = 0.22;
        } else if (norm >= 0.20 && norm <= 0.67) {
          // Ring B (brightest, densest)
          const banding = Math.sin(norm * 80) * 0.15 + Math.cos(norm * 130) * 0.1;
          alpha = Math.min(0.92, 0.78 + banding);
        } else {
          // Ring A
          const banding = Math.sin(norm * 90) * 0.12;
          alpha = Math.min(0.85, 0.62 + banding);
        }
      } else if (isJupiter) {
        alpha = Math.sin(norm * Math.PI) * 0.22;
      } else if (isUranus) {
        alpha = (Math.sin(norm * 45) > 0.25) ? 0.55 : 0.04;
      }

      ctx.beginPath();
      ctx.arc(center, center, r, 0, Math.PI * 2);
      ctx.strokeStyle = planetData.ringColor || planetData.atmosphereColor || "#d2b48c";
      ctx.globalAlpha = alpha;
      ctx.lineWidth = 1.2;
      ctx.stroke();
    }

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    return tex;
  }

  generateMagmaTexture() {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 256;
    const ctx = canvas.getContext("2d");

    // Molten magma baseline
    ctx.fillStyle = "#ff2200";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Glowing incandescent yellow veins
    ctx.strokeStyle = "#fff088";
    ctx.lineWidth = 5;
    for (let i = 0; i < 20; i++) {
      ctx.beginPath();
      let x = Math.random() * canvas.width;
      let y = Math.random() * canvas.height;
      ctx.moveTo(x, y);
      for (let s = 0; s < 5; s++) {
        x += (Math.random() - 0.5) * 80;
        y += (Math.random() - 0.5) * 40;
        ctx.lineTo(x, y);
      }
      ctx.stroke();
    }

    return new THREE.CanvasTexture(canvas);
  }

  // --- 4. GALAXIES SCALE SYSTEM & MORPHING PARTICLES ---
  buildGalaxyParticles() {
    this.galaxyGeometry = new THREE.BufferGeometry();
    this.computeGalaxyParticleDistribution(0, this.particlePositions, this.particleColors);
    this.computeGalaxyParticleDistribution(0, this.particleTargetPositions, this.particleTargetColors);
    this.computeGalaxyParticleDistribution(0, this.particleSourcePositions, this.particleSourceColors);

    this.galaxyGeometry.setAttribute("position", new THREE.BufferAttribute(this.particlePositions, 3));
    this.galaxyGeometry.setAttribute("color", new THREE.BufferAttribute(this.particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 1.5,
      vertexColors: true,
      transparent: true,
      opacity: 0.88,
      blending: THREE.AdditiveBlending
    });

    this.galaxyPoints = new THREE.Points(this.galaxyGeometry, particleMat);
    this.galaxiesGroup.add(this.galaxyPoints);

    // Relativistic Central Supermassive Black Hole
    this.buildSupermassiveBlackHole();

    // Surrounding Satellite Galaxy Beacons
    this.buildDistantGalaxyBeacons();

    if (window.ALL_GALAXIES && window.ALL_GALAXIES.length > 0) {
      this.selectedGalaxy = window.ALL_GALAXIES[0];
    }
  }

  buildSupermassiveBlackHole() {
    // 1. Event Horizon (Light-trapping sphere)
    const bhGeo = new THREE.SphereGeometry(2.4, 32, 32);
    const bhMat = new THREE.MeshBasicMaterial({ color: 0x000000 });
    this.centralBlackHoleMesh = new THREE.Mesh(bhGeo, bhMat);
    this.centralBlackHoleMesh.userData = {
      type: "black_hole",
      name: "Central Singularity (Supermassive Black Hole)"
    };
    this.galaxiesGroup.add(this.centralBlackHoleMesh);

    // 2. ISCO Photon Orbit Ring
    const photonRingGeo = new THREE.RingGeometry(2.45, 2.75, 48);
    const photonRingMat = new THREE.MeshBasicMaterial({
      color: 0xffe8b4,
      side: THREE.DoubleSide
    });
    this.photonRingMesh = new THREE.Mesh(photonRingGeo, photonRingMat);
    this.photonRingMesh.rotation.x = Math.PI / 2.2;
    this.galaxiesGroup.add(this.photonRingMesh);
  }

  createGalaxyHUDLabel(text) {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 64;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, 256, 64);

    ctx.fillStyle = "rgba(10, 15, 30, 0.75)";
    ctx.beginPath();
    ctx.roundRect(10, 10, 236, 44, 22);
    ctx.fill();
    ctx.strokeStyle = "rgba(192, 132, 252, 0.45)";
    ctx.lineWidth = 1.5;
    ctx.stroke();

    ctx.font = "bold 18px system-ui, sans-serif";
    ctx.fillStyle = "#c084fc";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text.toUpperCase(), 128, 32);

    const tex = new THREE.CanvasTexture(canvas);
    tex.minFilter = THREE.LinearFilter;
    const mat = new THREE.SpriteMaterial({
      map: tex,
      transparent: true,
      depthTest: false
    });
    const sprite = new THREE.Sprite(mat);
    sprite.scale.set(16, 4, 1);
    return sprite;
  }

  buildDistantGalaxyBeacons() {
    const galaxies = window.ALL_GALAXIES || [];
    this.distantGalaxiesGroup.clear();

    const positions = [
      { x: -160, y: 35, z: -90 },
      { x: 180, y: -30, z: 80 },
      { x: 110, y: 65, z: -140 },
      { x: -130, y: -50, z: 130 },
      { x: 150, y: 45, z: 120 },
      { x: -170, y: 70, z: -30 }
    ];

    galaxies.forEach((g, idx) => {
      if (idx === 0) return; // Skip central active galaxy
      const pos = positions[(idx - 1) % positions.length];
      const gGroup = new THREE.Group();
      gGroup.position.set(pos.x, pos.y, pos.z);

      const beaconGeo = new THREE.SphereGeometry(3.6, 16, 16);
      const beaconMat = new THREE.MeshBasicMaterial({
        color: 0xc084fc,
        transparent: true,
        opacity: 0.82
      });
      const beacon = new THREE.Mesh(beaconGeo, beaconMat);
      beacon.userData = {
        type: "distant_galaxy",
        galaxyData: g,
        name: `${g.name} (${g.category})`
      };
      gGroup.add(beacon);

      // Corona halo
      const coronaMat = new THREE.SpriteMaterial({
        map: this.createStarCoronaTexture(),
        color: 0xc084fc,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending
      });
      const corona = new THREE.Sprite(coronaMat);
      corona.scale.set(16, 16, 1);
      gGroup.add(corona);

      // 3D Billboard Label
      const label = this.createGalaxyHUDLabel(g.name);
      label.position.set(0, 5.2, 0);
      label.userData = {
        type: "distant_galaxy",
        galaxyData: g,
        name: `${g.name} (${g.category})`
      };
      gGroup.add(label);

      this.distantGalaxiesGroup.add(gGroup);
    });
  }

  computeGalaxyParticleDistribution(galaxyIdx, posArr, colArr) {
    const galaxies = window.ALL_GALAXIES || [];
    const g = galaxies[galaxyIdx] || (galaxies[0] || {});
    const count = this.galaxyParticleCount;
    const profile = g.particleProfile || {};

    const type = (profile.type || g.category || "spiral").toLowerCase();
    const coreColor = new THREE.Color(profile.colorCore || g.coreColor || "#fff3cc");
    const armColor = new THREE.Color(profile.colorArms || g.armColor || "#38bdf8");
    const arms = profile.armCount || 2;
    const maxRadius = profile.diskRadius || 110;
    const winding = profile.armWinding || 0.35;

    for (let i = 0; i < count; i++) {
      let x = 0, y = 0, z = 0;

      if (type.includes("elliptical")) {
        const r = Math.pow(Math.random(), 2.0) * maxRadius * 0.75;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.acos(Math.random() * 2 - 1);
        x = r * Math.sin(phi) * Math.cos(theta);
        y = r * Math.sin(phi) * Math.sin(theta) * 0.65;
        z = r * Math.cos(phi);
      } else if (type.includes("irregular")) {
        const r = Math.pow(Math.random(), 1.5) * maxRadius * 0.8;
        const theta = Math.random() * Math.PI * 2;
        x = Math.cos(theta) * r + (Math.random() - 0.5) * 35;
        z = Math.sin(theta) * r + (Math.random() - 0.5) * 35;
        y = (Math.random() - 0.5) * 25;
      } else {
        // Spiral
        const r = Math.pow(Math.random(), 1.7) * maxRadius;
        const armIndex = i % arms;
        const armAngle = (armIndex * 2 * Math.PI) / arms;
        const spiralAngle = r * winding * 0.25;
        const scatter = (Math.random() - 0.5) * (r * 0.18 + 2.5);

        x = Math.cos(armAngle + spiralAngle) * r + scatter;
        z = Math.sin(armAngle + spiralAngle) * r + scatter;
        y = (Math.random() - 0.5) * (maxRadius * 0.08) * Math.exp(-r / 45);
      }

      posArr[i * 3] = x;
      posArr[i * 3 + 1] = y;
      posArr[i * 3 + 2] = z;

      const dist = Math.hypot(x, z);
      const lerpFactor = Math.min(1.0, dist / (maxRadius * 0.75));
      const col = coreColor.clone().lerp(armColor, lerpFactor);

      colArr[i * 3] = col.r;
      colArr[i * 3 + 1] = col.g;
      colArr[i * 3 + 2] = col.b;
    }
  }

  morphToGalaxy(galaxyData) {
    this.selectedGalaxy = galaxyData;
    const galaxies = window.ALL_GALAXIES || [];
    const idx = galaxies.findIndex(item => item.id === galaxyData.id);

    // Save source positions & colors
    for (let i = 0; i < this.galaxyParticleCount * 3; i++) {
      this.particleSourcePositions[i] = this.particlePositions[i];
      this.particleSourceColors[i] = this.particleColors[i];
    }

    this.computeGalaxyParticleDistribution(Math.max(0, idx), this.particleTargetPositions, this.particleTargetColors);

    if (this.activeMorphTween) this.activeMorphTween.kill();
    this.morphProgress = 0;

    this.activeMorphTween = gsap.to(this, {
      morphProgress: 1.0,
      duration: 2.5, // 2.5s silky morph
      ease: "power3.inOut",
      onUpdate: () => {
        const p = this.morphProgress;
        const c = this.galaxyParticleCount;
        for (let i = 0; i < c * 3; i++) {
          this.particlePositions[i] = THREE.MathUtils.lerp(
            this.particleSourcePositions[i],
            this.particleTargetPositions[i],
            p
          );
          this.particleColors[i] = THREE.MathUtils.lerp(
            this.particleSourceColors[i],
            this.particleTargetColors[i],
            p
          );
        }
        this.galaxyGeometry.attributes.position.needsUpdate = true;
        this.galaxyGeometry.attributes.color.needsUpdate = true;
      }
    });
  }

  // --- 5. INTERACTION & RAYCASTING ---
  setupInteractionHandlers() {
    this.container.addEventListener("pointermove", (e) => this.onPointerMove(e));
    this.container.addEventListener("pointerdown", (e) => this.onPointerDown(e));
    this.container.addEventListener("pointerup", (e) => this.onPointerUp(e));
  }

  rebuildInteractiveList() {
    this.interactiveObjects = [];

    if (this.currentTier === "stars") {
      if (this.allStarMeshes && this.allStarMeshes.length > 0) {
        this.allStarMeshes.forEach(s => {
          this.interactiveObjects.push(s);
          s.children.forEach(c => this.interactiveObjects.push(c));
        });
      }
      this.celestialSphereGroup.traverse(child => {
        if (child.userData && (child.userData.type === "constellation_hub" || child.userData.type === "star_node")) {
          this.interactiveObjects.push(child);
        }
      });
    } else if (this.currentTier === "planets") {
      if (this.leftHemisphere) this.leftHemisphere.children.forEach(m => this.interactiveObjects.push(m));
      if (this.rightHemisphere) this.rightHemisphere.children.forEach(m => this.interactiveObjects.push(m));
      if (this.floatingPlanetsGroup) {
        this.floatingPlanetsGroup.traverse(child => {
          if (child.userData && child.userData.type === "floating_planet") {
            this.interactiveObjects.push(child);
          }
        });
      }
      if (this.moonMesh) this.interactiveObjects.push(this.moonMesh);
    } else if (this.currentTier === "galaxies") {
      if (this.centralBlackHoleMesh) this.interactiveObjects.push(this.centralBlackHoleMesh);
      if (this.distantGalaxiesGroup) {
        this.distantGalaxiesGroup.traverse(child => {
          if (child.userData && child.userData.type === "distant_galaxy") {
            this.interactiveObjects.push(child);
          }
        });
      }
    }
  }

  onPointerMove(e) {
    this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);
    const intersects = this.raycaster.intersectObjects(this.interactiveObjects, true);

    if (intersects.length > 0) {
      let hit = intersects[0].object;
      while (hit && !hit.userData.type && hit.parent) {
        hit = hit.parent;
      }
      if (hit && hit.userData && hit.userData.name) {
        if (this.hoveredObject !== hit) {
          this.hoveredObject = hit;
          if (window.soundEngine) window.soundEngine.playHover();
        }
        this.container.style.cursor = "pointer";
        return;
      }
    }

    this.hoveredObject = null;
    this.container.style.cursor = "grab";
  }

  onPointerDown(e) {
    this.pointerDownPos.x = e.clientX;
    this.pointerDownPos.y = e.clientY;
  }

  onPointerUp(e) {
    // Only register as click if drag distance is <= 6px (preserving orbit camera dragging)
    const dist = Math.hypot(e.clientX - this.pointerDownPos.x, e.clientY - this.pointerDownPos.y);
    if (dist > 6) return;

    this.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    this.pointer.y = -(e.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.pointer, this.camera);
    const intersects = this.raycaster.intersectObjects(this.interactiveObjects, true);

    if (intersects.length > 0) {
      let hit = intersects[0].object;
      while (hit && !hit.userData.type && hit.parent) {
        hit = hit.parent;
      }

      if (!hit || !hit.userData) return;
      const data = hit.userData;
      if (window.soundEngine) window.soundEngine.playSelect();

      if (data.type === "star_node") {
        this.selectedStar = data.starData;
        this.selectedConstellation = data.constellationData;
        const s = data.starData;
        const c = data.constellationData;

        // Smooth camera glide to frame star in 3D
        if (data.worldPos && data.normal) {
          const camTarget = data.worldPos.clone().add(data.normal.clone().multiplyScalar(46));
          this.animateCameraTo(camTarget, data.worldPos, 2.2);
        } else {
          this.animateCameraTo(
            { x: s.x, y: s.y, z: (s.z || 0) + 26 },
            { x: s.x, y: s.y, z: s.z || 0 },
            2.2
          );
        }

        // Form the constellation with neon vector laser tracing!
        if (c) {
          this.formConstellation(c, data.starIndex || 0);
        }

        if (this.onTargetSelected) {
          this.onTargetSelected({
            type: "star",
            star: s,
            constellation: c
          });
        }
      } else if (data.type === "constellation_hub") {
        const c = data.constellationData;
        this.selectedConstellation = c;
        const stars = c.stars || [];
        const midStar = stars[0] || {};
        this.formConstellation(c, 0);

        const raRad = (c.raH || 0) * (Math.PI / 12);
        const decRad = (c.decD || 0) * (Math.PI / 180);
        const sphereRadius = 160;
        const cx = sphereRadius * Math.cos(decRad) * Math.cos(raRad);
        const cy = sphereRadius * Math.sin(decRad);
        const cz = sphereRadius * Math.cos(decRad) * Math.sin(raRad);
        const center = new THREE.Vector3(cx, cy, cz);
        const normal = center.clone().normalize();
        const camPos = center.clone().add(normal.clone().multiplyScalar(75));

        this.animateCameraTo(camPos, center, 2.2);

        if (this.onTargetSelected) {
          this.onTargetSelected({
            type: "constellation",
            constellation: c,
            star: midStar
          });
        }
      } else if (data.type === "floating_planet") {
        const p = data.planetData;
        this.displayPlanet(p, true);
        this.animateCameraTo(
          { x: 0, y: 8, z: 48 },
          { x: 0, y: 0, z: 0 },
          2.2
        );
        if (this.onTargetSelected) {
          this.onTargetSelected({
            type: "planet",
            planet: p,
            isCoreExposed: false
          });
        }
      } else if (data.type === "planet_body") {
        const isExposed = this.toggleCoreExposure();
        if (this.onTargetSelected) {
          this.onTargetSelected({
            type: "planet",
            planet: data.planetData || this.selectedPlanet,
            isCoreExposed: isExposed
          });
        }
      } else if (data.type === "moon_body") {
        this.animateCameraTo(
          { x: hit.position.x, y: hit.position.y, z: hit.position.z + 18 },
          { x: hit.position.x, y: hit.position.y, z: hit.position.z },
          2.2
        );
      } else if (data.type === "black_hole") {
        this.animateCameraTo(
          { x: 0, y: 20, z: 40 },
          { x: 0, y: 0, z: 0 },
          2.2
        );
      } else if (data.type === "distant_galaxy") {
        this.selectedGalaxy = data.galaxyData;
        this.morphToGalaxy(data.galaxyData);
        this.triggerGalacticBurst();
        this.animateCameraTo(
          { x: 0, y: 120, z: 220 },
          { x: 0, y: 0, z: 0 },
          2.2
        );
        if (window.soundEngine) {
          window.soundEngine.playGalaxyBurst();
        }
        if (this.onTargetSelected) {
          this.onTargetSelected({
            type: "galaxy",
            galaxy: data.galaxyData
          });
        }
      }
    }
  }

  triggerGalacticBurst() {
    if (this.photonRingMesh) {
      gsap.fromTo(this.photonRingMesh.scale,
        { x: 2.2, y: 2.2, z: 2.2 },
        { x: 1.0, y: 1.0, z: 1.0, duration: 1.8, ease: "elastic.out(1, 0.4)" }
      );
    }
    if (this.centralBlackHoleMesh) {
      gsap.fromTo(this.centralBlackHoleMesh.scale,
        { x: 1.4, y: 1.4, z: 1.4 },
        { x: 1.0, y: 1.0, z: 1.0, duration: 1.2, ease: "power2.out" }
      );
    }
  }

  resetRoamView() {
    if (this.currentTier === "stars") {
      this.animateCameraTo({ x: 0, y: 30, z: 240 }, { x: 0, y: 0, z: 0 }, 2.2);
    } else if (this.currentTier === "galaxies") {
      this.animateCameraTo({ x: 0, y: 140, z: 260 }, { x: 0, y: 0, z: 0 }, 2.2);
    } else if (this.currentTier === "planets") {
      this.animateCameraTo({ x: 0, y: 120, z: 320 }, { x: 0, y: 0, z: 0 }, 2.2);
    }
    if (window.soundEngine) window.soundEngine.playTelemetryVoice();
  }

  nextTarget() {
    if (this.currentTier === "stars") {
      const list = this.allStarMeshes || [];
      if (list.length === 0) return;
      this.targetStarIndex = ((this.targetStarIndex || 0) + 1) % list.length;
      const target = list[this.targetStarIndex];
      if (target && target.userData) {
        this.triggerStarSelect(target.userData);
      }
    } else if (this.currentTier === "galaxies") {
      const list = window.ALL_GALAXIES || [];
      if (list.length === 0) return;
      this.targetGalaxyIndex = ((this.targetGalaxyIndex || 0) + 1) % list.length;
      const g = list[this.targetGalaxyIndex];
      this.morphToGalaxy(g);
      this.triggerGalacticBurst();
      this.animateCameraTo({ x: 0, y: 120, z: 220 }, { x: 0, y: 0, z: 0 }, 2.2);
      if (window.soundEngine) window.soundEngine.playGalaxyBurst();
      if (this.onTargetSelected) {
        this.onTargetSelected({ type: "galaxy", galaxy: g });
      }
    } else if (this.currentTier === "planets") {
      const list = window.ALL_EXOPLANETS || [];
      if (list.length === 0) return;
      this.targetPlanetIndex = ((this.targetPlanetIndex || 0) + 1) % list.length;
      const p = list[this.targetPlanetIndex];
      this.displayPlanet(p, true);
      this.animateCameraTo({ x: 0, y: 8, z: 48 }, { x: 0, y: 0, z: 0 }, 2.2);
      if (this.onTargetSelected) {
        this.onTargetSelected({ type: "planet", planet: p, isCoreExposed: false });
      }
    }
  }

  prevTarget() {
    if (this.currentTier === "stars") {
      const list = this.allStarMeshes || [];
      if (list.length === 0) return;
      this.targetStarIndex = ((this.targetStarIndex || 0) - 1 + list.length) % list.length;
      const target = list[this.targetStarIndex];
      if (target && target.userData) {
        this.triggerStarSelect(target.userData);
      }
    } else if (this.currentTier === "galaxies") {
      const list = window.ALL_GALAXIES || [];
      if (list.length === 0) return;
      this.targetGalaxyIndex = ((this.targetGalaxyIndex || 0) - 1 + list.length) % list.length;
      const g = list[this.targetGalaxyIndex];
      this.morphToGalaxy(g);
      this.triggerGalacticBurst();
      this.animateCameraTo({ x: 0, y: 120, z: 220 }, { x: 0, y: 0, z: 0 }, 2.2);
      if (window.soundEngine) window.soundEngine.playGalaxyBurst();
      if (this.onTargetSelected) {
        this.onTargetSelected({ type: "galaxy", galaxy: g });
      }
    } else if (this.currentTier === "planets") {
      const list = window.ALL_EXOPLANETS || [];
      if (list.length === 0) return;
      this.targetPlanetIndex = ((this.targetPlanetIndex || 0) - 1 + list.length) % list.length;
      const p = list[this.targetPlanetIndex];
      this.displayPlanet(p, true);
      this.animateCameraTo({ x: 0, y: 8, z: 48 }, { x: 0, y: 0, z: 0 }, 2.2);
      if (this.onTargetSelected) {
        this.onTargetSelected({ type: "planet", planet: p, isCoreExposed: false });
      }
    }
  }

  triggerStarSelect(data) {
    this.selectedStar = data.starData;
    this.selectedConstellation = data.constellationData;
    const s = data.starData;
    const c = data.constellationData;

    if (data.worldPos && data.normal) {
      const camTarget = data.worldPos.clone().add(data.normal.clone().multiplyScalar(46));
      this.animateCameraTo(camTarget, data.worldPos, 2.2);
    }

    if (c) {
      this.formConstellation(c, data.starIndex || 0);
    }

    if (window.soundEngine) window.soundEngine.playSelect();

    if (this.onTargetSelected) {
      this.onTargetSelected({
        type: "star",
        star: s,
        constellation: c
      });
    }
  }

  // --- 6. TIER SWITCHING & 2.2s CAMERA FLY CONTROLLER ---
  setTier(tierName) {
    this.currentTier = tierName;
    if (window.soundEngine) window.soundEngine.playWarpShift();

    if (tierName === "stars") {
      this.starsGroup.visible = true;
      this.planetsGroup.visible = false;
      this.galaxiesGroup.visible = false;

      this.animateCameraTo(
        { x: 0, y: 30, z: 240 },
        { x: 0, y: 0, z: 0 },
        2.2
      );
    } else if (tierName === "planets") {
      this.starsGroup.visible = false;
      this.planetsGroup.visible = true;
      this.galaxiesGroup.visible = false;

      if (!this.selectedPlanet && window.ALL_EXOPLANETS && window.ALL_EXOPLANETS.length > 0) {
        const earth = window.ALL_EXOPLANETS.find(p => p.id === "earth") || window.ALL_EXOPLANETS[0];
        this.displayPlanet(earth, false);
      }

      this.animateCameraTo(
        { x: 0, y: 10, z: 52 },
        { x: 0, y: 0, z: 0 },
        2.2
      );
    } else if (tierName === "galaxies") {
      this.starsGroup.visible = false;
      this.planetsGroup.visible = false;
      this.galaxiesGroup.visible = true;

      this.animateCameraTo(
        { x: 0, y: 130, z: 230 },
        { x: 0, y: 0, z: 0 },
        2.2
      );
    }

    this.rebuildInteractiveList();
  }

  // Camera navigation smoothly tweens camera position and target using power3.inOut over 2.5 seconds
  animateCameraTo(targetPos, targetLookAt, duration = 2.5, onComplete = null) {
    gsap.to(this.camera.position, {
      x: targetPos.x,
      y: targetPos.y,
      z: targetPos.z,
      duration: duration,
      ease: "power3.inOut"
    });

    gsap.to(this.controls.target, {
      x: targetLookAt.x,
      y: targetLookAt.y,
      z: targetLookAt.z,
      duration: duration,
      ease: "power3.inOut",
      onComplete: () => {
        if (onComplete) onComplete();
      }
    });
  }

  onWindowResize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height);
    this.composer.setSize(width, height);
    if (this.bloomPass) {
      this.bloomPass.setSize(width, height);
    }
  }

  // --- 7. MASTER RENDER & INERTIAL TICK LOOP ---
  animate() {
    requestAnimationFrame(() => this.animate());

    const delta = this.clock.getDelta();
    const elapsedTime = this.clock.getElapsedTime();

    // 1. Controls inertial update
    if (this.controls) this.controls.update();

    // 2. Slow microgravity auto-orbit
    if (this.autoOrbit) {
      if (this.currentTier === "stars") {
        this.celestialSphereGroup.rotation.y += 0.0003;
      } else if (this.currentTier === "planets") {
        this.planetsGroup.rotation.y += 0.0010;
        if (this.leftCloudMesh) this.leftCloudMesh.rotation.y += 0.0006;
        if (this.rightCloudMesh) this.rightCloudMesh.rotation.y += 0.0006;
        if (this.moonPivot) this.moonPivot.rotation.y += 0.0022;

        // Pulsating glowing magma convective heat when core is exposed
        if (this.coreMagmaSphere && this.isCoreExposed) {
          this.coreMagmaSphere.rotation.y += 0.003;
          if (this.magmaMaterial) {
            this.magmaMaterial.emissiveIntensity = 2.0 + Math.sin(elapsedTime * 3.0) * 0.4;
          }
        }
      } else if (this.currentTier === "galaxies") {
        this.galaxiesGroup.rotation.y += 0.0004;
        if (this.photonRingMesh) this.photonRingMesh.rotation.z += 0.008;
      }
    }

    // 3. Subtle star corona breathing
    if (this.currentTier === "stars" && this.activeCoronaMeshes.length > 0) {
      this.activeCoronaMeshes.forEach((corona, idx) => {
        corona.material.opacity = 0.68 + Math.sin(elapsedTime * 2.5 + idx * 0.9) * 0.12;
      });
    }

    // 4. Render Post-Processing
    this.composer.render();
  }
}

window.ObservatoryEngine = ObservatoryEngine;
