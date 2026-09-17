// Digital Observatory Minimalist Audio Synthesizer
// Pure Web Audio API: Sound effects for open, close, and constellation stars

class ObservatorySoundEngine {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.masterGain = null;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
      this.masterGain = this.ctx.createGain();
      this.masterGain.gain.setValueAtTime(0.65, this.ctx.currentTime);
      this.masterGain.connect(this.ctx.destination);
    } catch (e) {
      console.warn("Web Audio API not permitted yet:", e);
    }
  }

  resumeContext() {
    this.init();
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Sound for opening or turning ON the HUD Card / Telemetry
  playOpen() {
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      // Dual-tone rising sci-fi chime (e.g. 660Hz -> 880Hz)
      const tones = [660, 880];
      tones.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + idx * 0.05);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.08, now + idx * 0.05 + 0.12);

        gain.gain.setValueAtTime(0.045, now + idx * 0.05);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + idx * 0.05 + 0.28);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + idx * 0.05);
        osc.stop(now + idx * 0.05 + 0.3);
      });
    } catch (e) {}
  }

  // Sound for closing or dismissing the HUD Card
  playClose() {
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      // Soft, sleek damped click (820Hz -> 420Hz)
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "triangle";
      osc.frequency.setValueAtTime(820, now);
      osc.frequency.exponentialRampToValueAtTime(380, now + 0.09);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.1);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.11);
    } catch (e) {}
  }

  // Ascending harmonic celestial chime for star selection and constellation line tracing
  playConstellationChime() {
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      // Pentatonic crystalline celestial bells (F#5, G#5, C#6, E6)
      const notes = [739.99, 830.61, 1108.73, 1318.51];
      notes.forEach((freq, idx) => {
        const delay = idx * 0.08;
        const carrier = this.ctx.createOscillator();
        const mod = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const gain = this.ctx.createGain();

        carrier.type = "sine";
        carrier.frequency.setValueAtTime(freq, now + delay);

        mod.type = "sine";
        mod.frequency.setValueAtTime(freq * 2.0, now + delay);
        modGain.gain.setValueAtTime(freq * 0.6, now + delay);
        modGain.gain.exponentialRampToValueAtTime(0.01, now + delay + 0.8);

        mod.connect(modGain);
        modGain.connect(carrier.frequency);

        gain.gain.setValueAtTime(0.038, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.2);

        carrier.connect(gain);
        gain.connect(this.masterGain);

        carrier.start(now + delay);
        mod.start(now + delay);
        carrier.stop(now + delay + 1.3);
        mod.stop(now + delay + 1.3);
      });
    } catch (e) {}
  }

  // Gentle laser trace pulse
  playBeamTrace() {
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(440, now);
      osc.frequency.exponentialRampToValueAtTime(1180, now + 0.22);

      gain.gain.setValueAtTime(0.03, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.38);
    } catch (e) {}
  }

  // Planetary magma core exposure separation rumble
  playCoreExpose() {
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(65, now);
      osc.frequency.exponentialRampToValueAtTime(32, now + 1.2);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(120, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.06, now + 0.15);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.4);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 1.5);
    } catch (e) {}
  }

  // Gentle UI hover blip
  playHover() {
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(1320, now);

      gain.gain.setValueAtTime(0.012, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.045);
    } catch (e) {}
  }

  playSelect() {
    this.playOpen();
  }

  playWarpShift() {
    this.playOpen();
  }

  playGalaxyBurst() {
    this.resumeContext();
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(110, now);
      osc.frequency.exponentialRampToValueAtTime(330, now + 0.4);
      osc.frequency.exponentialRampToValueAtTime(80, now + 1.1);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 1.25);
    } catch (e) {}
  }

  // Compatibility stubs
  startAmbient() {
    this.resumeContext();
  }
  cycleSoundscape() {
    this.isMuted = !this.isMuted;
    if (this.isMuted) this.playClose();
    else this.playOpen();
    return { mode: this.isMuted ? "OFF" : "ON" };
  }
}

window.soundEngine = new ObservatorySoundEngine();


  getSoundscapeInfo() {
    const mode = this.soundscapeModes[this.currentModeIndex];
    const labels = {
      "DRIFT": "SOUND: DRIFT",
      "PULSAR": "SOUND: PULSAR",
      "VOID": "SOUND: VOID",
      "OFF": "SOUND: OFF"
    };
    return {
      mode,
      label: labels[mode] || "SOUND: DRIFT",
      isMuted: this.isMuted
    };
  }

  clearActiveSoundscape() {
    if (this.chimeTimer) {
      clearTimeout(this.chimeTimer);
      this.chimeTimer = null;
    }
    if (this.rhythmTimer) {
      clearInterval(this.rhythmTimer);
      this.rhythmTimer = null;
    }
    this.activeNodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {}
    });
    this.activeNodes = [];
  }

  loadSoundscape(mode) {
    this.clearActiveSoundscape();
    if (!this.ctx || this.isMuted) return;

    if (mode === "DRIFT") {
      this.buildDriftSoundscape();
    } else if (mode === "PULSAR") {
      this.buildPulsarSoundscape();
    } else if (mode === "VOID") {
      this.buildVoidSoundscape();
    }
  }

  // --- 1. ETHEREAL INTERSTELLAR DRIFT ---
  buildDriftSoundscape() {
    const now = this.ctx.currentTime;

    // Deep Sub-Harmonic Cosmic Drift (F#1 46.25Hz, C#2 69.30Hz, F#2 92.50Hz)
    const subFreqs = [46.25, 69.30, 92.50];
    subFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime((idx - 1) * 3, now);

      filter.type = "lowpass";
      filter.frequency.setValueAtTime(140 + idx * 40, now);
      filter.Q.setValueAtTime(1.5, now);

      const targetVol = [0.08, 0.05, 0.04][idx];
      gain.gain.setValueAtTime(targetVol, now);

      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.06 + idx * 0.02, now);
      lfoGain.gain.setValueAtTime(targetVol * 0.35, now);

      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ambientGain);

      osc.start();
      lfo.start();
      this.activeNodes.push(osc, lfo, gain, filter);
    });

    // Crystalline Suspended Celestial Pad (F#3, A#3, C#4, F4, G#4)
    const padFreqs = [185.0, 233.08, 277.18, 349.23, 415.30];
    padFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = idx % 2 === 0 ? "triangle" : "sine";
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime((idx - 2) * 5, now);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(freq * 1.2, now);
      filter.Q.setValueAtTime(3.5, now);

      const targetVol = [0.035, 0.030, 0.028, 0.022, 0.018][idx];
      gain.gain.setValueAtTime(targetVol, now);

      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.1 + idx * 0.035, now);
      lfoGain.gain.setValueAtTime(targetVol * 0.45, now);

      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ambientGain);

      osc.start();
      lfo.start();
      this.activeNodes.push(osc, lfo, gain, filter);
    });

    // Solar Wind Filtered Pink Noise
    this.addSolarWindNoise(800, 0.016);

    // Generative Pulsar Bells (Every 3 to 6s)
    this.startGenerativePulsarChimes([554.37, 659.25, 830.61, 987.77, 1108.73, 1318.51], 3000, 3500);
  }

  // --- 2. CRYSTALLINE PULSAR SHIMMER ---
  buildPulsarSoundscape() {
    const now = this.ctx.currentTime;

    // Rhythmic Neutron Star Pulsar Drone (B1 61.74Hz + F#2 92.5Hz with 2.4Hz beat pulse)
    const baseFreqs = [61.74, 92.50];
    baseFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, now);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(160, now);

      gain.gain.setValueAtTime(0.04, now);

      // Pulsing amplitude LFO
      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(1.8 + idx * 0.4, now);
      lfoGain.gain.setValueAtTime(0.025, now);

      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ambientGain);

      osc.start();
      lfo.start();
      this.activeNodes.push(osc, lfo, gain, filter);
    });

    // High Celestial Ionosphere Pad (D#4 311.13Hz, F#4 369.99Hz, A#4 466.16Hz, C#5 554.37Hz)
    const shimmerFreqs = [311.13, 369.99, 466.16, 554.37];
    shimmerFreqs.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(freq, now);
      osc.detune.setValueAtTime(idx * 7 - 10, now);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(freq * 1.5, now);
      filter.Q.setValueAtTime(4.0, now);

      gain.gain.setValueAtTime(0.028, now);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.ambientGain);

      osc.start();
      this.activeNodes.push(osc, gain, filter);
    });

    // Glittering Crystalline Bells (Higher Pitch, Faster Cadence 1.8s to 3.8s)
    this.startGenerativePulsarChimes([830.61, 987.77, 1108.73, 1318.51, 1661.22], 1800, 2000);
  }

  // --- 3. DEEP VOID GRAVITATIONAL CAVERN ---
  buildVoidSoundscape() {
    const now = this.ctx.currentTime;

    // Sub-bass Gravitational Wave Hum (34.65Hz, 43.65Hz)
    [34.65, 43.65].forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.09, now);

      const lfo = this.ctx.createOscillator();
      const lfoGain = this.ctx.createGain();
      lfo.frequency.setValueAtTime(0.04 + idx * 0.015, now);
      lfoGain.gain.setValueAtTime(0.035, now);

      lfo.connect(lfoGain);
      lfoGain.connect(gain.gain);

      osc.connect(gain);
      gain.connect(this.ambientGain);

      osc.start();
      lfo.start();
      this.activeNodes.push(osc, lfo, gain);
    });

    // Distant Cosmic Whispers (Deep Low-Pass Pink Noise)
    this.addSolarWindNoise(420, 0.024);

    // Rare Distant Radio Echo (Every 6 to 10s)
    this.startGenerativePulsarChimes([220.0, 329.63, 440.0], 6000, 4000);
  }

  addSolarWindNoise(filterFreq, vol) {
    try {
      const bufferSize = this.ctx.sampleRate * 2;
      const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const output = noiseBuffer.getChannelData(0);
      let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
      for (let i = 0; i < bufferSize; i++) {
        const white = Math.random() * 2 - 1;
        b0 = 0.99886 * b0 + white * 0.0555179;
        b1 = 0.99332 * b1 + white * 0.0750759;
        b2 = 0.96900 * b2 + white * 0.1538520;
        b3 = 0.86650 * b3 + white * 0.3104856;
        b4 = 0.55000 * b4 + white * 0.5329522;
        b5 = -0.7616 * b5 - white * 0.0168980;
        output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.06;
        b6 = white * 0.115926;
      }

      const noiseSource = this.ctx.createBufferSource();
      noiseSource.buffer = noiseBuffer;
      noiseSource.loop = true;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.setValueAtTime(filterFreq, this.ctx.currentTime);
      noiseFilter.Q.setValueAtTime(3.5, this.ctx.currentTime);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(vol, this.ctx.currentTime);

      const noiseLfo = this.ctx.createOscillator();
      const noiseLfoGain = this.ctx.createGain();
      noiseLfo.frequency.setValueAtTime(0.04, this.ctx.currentTime);
      noiseLfoGain.gain.setValueAtTime(filterFreq * 0.35, this.ctx.currentTime);
      noiseLfo.connect(noiseLfoGain);
      noiseLfoGain.connect(noiseFilter.frequency);

      noiseSource.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.ambientGain);

      noiseSource.start();
      noiseLfo.start();
      this.activeNodes.push(noiseSource, noiseLfo, noiseGain, noiseFilter);
    } catch (e) {}
  }

  startGenerativePulsarChimes(notes, baseDelay, jitter) {
    if (this.chimeTimer) clearTimeout(this.chimeTimer);

    const trigger = () => {
      if (!this.ctx || this.isMuted || !this.isPlaying) return;
      try {
        const now = this.ctx.currentTime;
        const freq = notes[Math.floor(Math.random() * notes.length)];

        // FM Bell Synthesis: Carrier + Modulator for crystalline celestial sparkle
        const carrier = this.ctx.createOscillator();
        const modulator = this.ctx.createOscillator();
        const modGain = this.ctx.createGain();
        const bellGain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        carrier.type = "sine";
        carrier.frequency.setValueAtTime(freq, now);

        modulator.type = "sine";
        modulator.frequency.setValueAtTime(freq * 2.756, now);
        modGain.gain.setValueAtTime(freq * 1.5, now);
        modGain.gain.exponentialRampToValueAtTime(0.01, now + 1.8);

        modulator.connect(modGain);
        modGain.connect(carrier.frequency);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(freq * 3.5, now);
        filter.frequency.exponentialRampToValueAtTime(freq * 0.8, now + 2.4);

        const vol = 0.020 + Math.random() * 0.012;
        bellGain.gain.setValueAtTime(vol, now);
        bellGain.gain.exponentialRampToValueAtTime(0.00005, now + 3.2);

        carrier.connect(filter);
        filter.connect(bellGain);
        bellGain.connect(this.ambientGain);

        carrier.start(now);
        modulator.start(now);
        carrier.stop(now + 3.3);
        modulator.stop(now + 3.3);
      } catch (e) {}

      const nextDelay = baseDelay + Math.random() * jitter;
      this.chimeTimer = setTimeout(trigger, nextDelay);
    };

    this.chimeTimer = setTimeout(trigger, baseDelay);
  }

  startAmbient() {
    this.init();
    if (!this.ctx) return;
    if (this.ctx.state === "suspended") {
      this.ctx.resume();
    }
    this.isPlaying = true;
    const targetGain = this.isMuted ? 0 : 0.65;
    this.ambientGain.gain.cancelScheduledValues(this.ctx.currentTime);
    this.ambientGain.gain.linearRampToValueAtTime(targetGain, this.ctx.currentTime + 2.5);
  }

  toggleMute() {
    return this.cycleSoundscape();
  }

  // Deep-Space Synthetic Radio Telemetry Chirp (Apollo / Voyager Transmit Murmur)
  playTelemetryVoice() {
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      // Dual tone NASA frequency chirp
      const tones = [1850, 2480];
      tones.forEach((f, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now + i * 0.04);
        osc.frequency.exponentialRampToValueAtTime(f * 1.08, now + 0.09 + i * 0.04);

        gain.gain.setValueAtTime(0.025, now + i * 0.04);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.14 + i * 0.04);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + i * 0.04);
        osc.stop(now + 0.16 + i * 0.04);
      });
    } catch (e) {}
  }

  // Constellation Formation Melodic Harmonic Cascade (Ascending Chime)
  playConstellationChime() {
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const notes = [554.37, 659.25, 830.61, 1108.73]; // C#5, E5, G#5, C#6
      notes.forEach((freq, idx) => {
        const delay = idx * 0.12;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now + delay);
        osc.frequency.exponentialRampToValueAtTime(freq * 1.01, now + delay + 1.2);

        gain.gain.setValueAtTime(0.035, now + delay);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + delay + 1.6);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + delay);
        osc.stop(now + delay + 1.8);
      });
    } catch (e) {}
  }

  // Sci-fi micro HUD hover blip
  playHover() {
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(1480, now);
      osc.frequency.exponentialRampToValueAtTime(2200, now + 0.04);

      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 0.06);
    } catch (e) {}
  }

  // High-tech sci-fi HUD mode toggle confirmation tone
  playSelect() {
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const freqs = [880, 1320];
      freqs.forEach((f, i) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = "sine";
        osc.frequency.setValueAtTime(f, now + i * 0.035);
        osc.frequency.exponentialRampToValueAtTime(f * 1.25, now + 0.12 + i * 0.035);

        gain.gain.setValueAtTime(0.035, now + i * 0.035);
        gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.5 + i * 0.035);

        osc.connect(gain);
        gain.connect(this.masterGain);
        osc.start(now + i * 0.035);
        osc.stop(now + 0.55 + i * 0.035);
      });
    } catch (e) {}
  }

  // Glowing neon vector laser trace sweep
  playBeamTrace() {
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(320, now);
      osc.frequency.exponentialRampToValueAtTime(1280, now + 0.35);
      osc.frequency.exponentialRampToValueAtTime(640, now + 1.1);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(800, now);
      filter.Q.setValueAtTime(3.5, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.045, now + 0.18);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.2);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 1.3);
    } catch (e) {}
  }

  // Tectonic planetary crust separation & magma dynamo rumble
  playCoreExpose() {
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(62, now);
      osc.frequency.exponentialRampToValueAtTime(28, now + 1.6);

      const filter = this.ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(110, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.085, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.9);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 2.0);

      const bufferSize = this.ctx.sampleRate * 0.9;
      const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.28));
      }
      const noise = this.ctx.createBufferSource();
      noise.buffer = buffer;

      const noiseFilter = this.ctx.createBiquadFilter();
      noiseFilter.type = "bandpass";
      noiseFilter.frequency.setValueAtTime(1600, now);
      noiseFilter.Q.setValueAtTime(2.2, now);

      const noiseGain = this.ctx.createGain();
      noiseGain.gain.setValueAtTime(0.045, now);
      noiseGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.85);

      noise.connect(noiseFilter);
      noiseFilter.connect(noiseGain);
      noiseGain.connect(this.masterGain);

      noise.start(now);
    } catch (e) {}
  }

  // Smooth warp Doppler shift for camera transitions
  playWarpShift() {
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = "sine";
      osc.frequency.setValueAtTime(180, now);
      osc.frequency.exponentialRampToValueAtTime(520, now + 0.55);
      osc.frequency.exponentialRampToValueAtTime(220, now + 1.5);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.04, now + 0.25);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 1.6);

      osc.connect(gain);
      gain.connect(this.masterGain);
      osc.start(now);
      osc.stop(now + 1.7);
    } catch (e) {}
  }

  // Relativistic Active Galactic Nucleus Jet Burst
  playGalaxyBurst() {
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const filter = this.ctx.createBiquadFilter();

      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(95, now);
      osc.frequency.exponentialRampToValueAtTime(420, now + 0.6);
      osc.frequency.exponentialRampToValueAtTime(110, now + 1.8);

      filter.type = "bandpass";
      filter.frequency.setValueAtTime(650, now);
      filter.Q.setValueAtTime(2.8, now);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.065, now + 0.2);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.1);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + 2.2);
    } catch (e) {}
  }

  // 5-Band Live Frequency Analyzer Levels for Telemetry Display
  getVisualizerLevels() {
    if (!this.analyser || !this.dataArray || this.isMuted || !this.isPlaying) {
      return [0.15, 0.15, 0.15, 0.15, 0.15];
    }
    this.analyser.getByteFrequencyData(this.dataArray);
    const b0 = (this.dataArray[1] || 0) / 255;
    const b1 = (this.dataArray[3] || 0) / 255;
    const b2 = (this.dataArray[6] || 0) / 255;
    const b3 = (this.dataArray[10] || 0) / 255;
    const b4 = (this.dataArray[14] || 0) / 255;
    return [
      Math.max(0.12, b0),
      Math.max(0.12, b1),
      Math.max(0.12, b2),
      Math.max(0.12, b3),
      Math.max(0.12, b4)
    ];
  }
}

window.soundEngine = new ObservatorySoundEngine();
