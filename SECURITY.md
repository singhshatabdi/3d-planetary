# Security Policy

## Supported Versions

Security is a top priority for **3D Planetary Learning Studio**. As this application combines client-side WebGL rendering with API communications via the Gemini 1.5 API, we adhere to best practices for data safety, credential management, and dependency hygiene.

---

## 🛡️ Supported Versions

| Version | Supported |
| ------- | ------------------ |
| Main (Latest) | ✅ Yes |
| < 1.0.0 | ❌ No |

---

## 🚨 Reporting a Vulnerability

If you discover a potential security flaw (such as exposed API keys, cross-site scripting risks, or unsafe shader input handlers), please report it responsibly.

**Do NOT report security vulnerabilities through public GitHub issues.**

### How to Report
1. Contact the maintainer via email at **`YOUR_EMAIL@example.com`** or submit a **Private Vulnerability Report** directly through the Security tab of this repository.
2. Include a detailed description of the vulnerability and a step-by-step proof-of-concept (PoC).

### Our Commitment
* **Initial Response:** Within **48 hours**.
* **Fix Timeline:** Validated vulnerabilities will be patched promptly on the `main` branch.
* **Attribution:** Vulnerability reporters will be acknowledged in release notes (unless anonymity is requested).

---

## 🔑 API Key & Environment Safety

* **Zero Key Commits:** Never hardcode your Google Gemini API key into any source file. Always load keys via `.env` files or secure runtime secret managers.
* **CORS & Endpoint Hygiene:** All requests to Gemini API endpoints must use HTTPS and validate incoming JSON schemas prior to DOM rendering.
* **Dependencies:** Run `npm audit` routinely to patch third-party package vulnerabilities.
