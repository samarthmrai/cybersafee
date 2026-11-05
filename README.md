# 🛡️ CyberSafe — Public Cyber Safety & Digital Fraud Awareness Portal

**CyberSafe** is a responsive, public-friendly web application designed to empower students, senior citizens, rural communities, and digital beginners to stay safe from online fraud, scams, and cyber threats.

---

## 🌟 Key Features

1. **🏠 Home Dashboard with Daily Cyber Safety Tips**
   - Rotating daily cyber safety tips with speech synthesis **Audio Listen (🔊)** feature for senior citizens and accessibility.
   - 3 Golden Rules: Never share OTP/PIN, No PIN needed to receive money, No police arrests over video calls.
   - Quick emergency access to India's National Cyber Helpline **1930**.

2. **📚 Learn Scams Section**
   - In-depth coverage of 6 major scam vectors:
     - **Phishing Scams** (fake electricity cut, bank blocked SMS)
     - **UPI & OTP Fraud** (screen sharing, fake collect requests)
     - **Fake Part-Time Jobs** (YouTube like tasks, Telegram prepaid fraud)
     - **Digital Arrest Scams** (fake CBI, ED, Police video calls)
     - **QR Code Scams** (tricked into scanning to receive money)
     - **Social Media Fraud** (impersonation, hacked accounts, friend in emergency)
   - Real-world case scenarios, critical red flags, and clear Do's & Don'ts.

3. **🎮 Interactive Scam Simulator**
   - Realistic phone/SMS/chat simulation window.
   - 5 interactive scenarios with multiple choices, real-time feedback, and safety points (+10 for safe action, -10 for dangerous mistake).

4. **🎯 Cyber Safety Quiz with Certificate**
   - 10 comprehensive cyber awareness questions with live progress tracking.
   - Immediate educational explanation for every answer.
   - Personalized, printable **Certificate of Cyber Safety Awareness** with candidate name and completion date.

5. **🚨 Emergency Help Guide**
   - Step-by-step action plan for:
     - **Stolen Money / Financial Fraud** (The critical 2-hour "Golden Hour" response)
     - **Hacked WhatsApp / Social Media Accounts**
     - **Clicked Suspicious Link / Downloaded Unknown APK**
     - **Threatened with "Digital Arrest"**
   - Direct one-tap calling to **1930** and official portal link [cybercrime.gov.in](https://cybercrime.gov.in/).
   - 24x7 emergency helpline directory for major Indian banks.

6. **🪔 Festival Awareness**
   - Dedicated fraud guides for **Diwali, Holi, Eid, Christmas & New Year**.
   - Common traps: fake sweet delivery, spin the wheel, free recharge scams, fake holiday resorts.
   - Universal 4-step safe festive online shopping checklist.

7. **🔍 Suspicious Message & SMS Checker**
   - 100% private, client-side JavaScript heuristic engine (no data sent to servers).
   - Evaluates urgency keywords, APK downloads, fake job bait, suspicious domains, and credential traps.
   - Risk meter (Safe, Suspicious, Dangerous) with diagnostic red flag findings.
   - One-click sample test buttons (Electricity SMS, Job Scam, Fake KYC, Safe Alert).

8. **✅ Cyber Safety Checklist & Achievement Score**
   - 10 essential security habits with persistent browser storage (`localStorage`).
   - Dynamic safety percentage score (0% to 100%) and achievement badges:
     - *Cyber Shield Guardian* (100%)
     - *Proactive Cyber Citizen* (70-90%)
     - *Awareness In Progress* (40-60%)
     - *High Risk* (<40%)

9. **🤖 AI-Powered CyberMitra Chatbot**
   - AI-powered virtual assistant backed by a secure Python FastAPI backend (`server.py`) and Google Gemini API.
   - API keys are securely managed in `.env` and **never exposed to frontend code**.
   - Answers questions about cybersecurity, explains scams, and analyzes suspicious messages in simple language.
   - Multilingual support in **English**, **ಕನ್ನಡ (Kannada)**, and **हिंदी (Hindi)**.
   - Built-in sensitive credential guardrail: blocks any collection of OTPs, UPI PINs, or passwords.
   - Automatically detects emergencies and illuminates India's **1930** helpline and **https://cybercrime.gov.in/**.
   - Modern chat interface: user/bot message bubbles, animated typing indicators, suggested question chips, and text-to-speech audio.
   - Accessible directly from the **Home page** (hero button & dedicated showcase card) and via a **global floating launcher button** on all screens.
   - Clear educational disclaimers.

10. **📺 Cybersecurity Videos**
    - Video gallery and player embedding the official awareness videos:
      - `https://youtu.be/RQ46CJBe3NQ?si=xXm1gt8R-7mhYkNk`
      - `https://youtu.be/3RMWM4oNQ8A?si=kD72DQRyXARSJG6h`
      - `https://youtu.be/lonTsrGAN9E?si=t34WruPTKAgC44AM`
      - `https://youtu.be/siyTZ6DaFeQ?si=9aJBZMOmiWbatE7q`

11. **📰 Trusted Cybersecurity Resources & Articles**
    - Direct links to official government and regulatory portals:
      - [National Cyber Crime Reporting Portal (cybercrime.gov.in)](https://cybercrime.gov.in/)
      - [Reserve Bank of India — RBI Kehta Hai](https://rbikehtahai.rbi.org.in/)
      - [CERT-In (Indian Computer Emergency Response Team)](https://www.cert-in.org.in/)
      - [Sanchar Saathi & Chakshu (DoT)](https://sancharsaathi.gov.in/)
      - [NPCI UPI Safety Guide](https://www.npci.org.in/)
      - [CyberPeace Foundation](https://www.cyberpeace.org/)

---

## ♿ Accessibility & Senior Citizen Features

- **Multilingual Support**: Instant toggle between **English**, **ಕನ್ನಡ (Kannada)**, and **हिंदी (Hindi)**.
- **Adjustable Text Size**: Easy one-click text switcher: **A** (Normal), **A+** (Large), **A++** (Extra Large).
- **Text-to-Speech (Audio)**: Built-in voice narration reads daily tips, scam warnings, and chatbot answers aloud.
- **High Contrast**: Clean color coding (Green = Safe, Amber = Warning, Red = Danger), large clickable buttons, mobile-friendly touch targets.
- **Zero Login Required**: Instant public access for community kiosks, panchayats, and village centers.

---

## 🚀 Running Locally

### Option 1: AI-Powered Full-Stack Server (Recommended)
Open PowerShell / Terminal in the project directory:
```powershell
python server.py
```
This runs the FastAPI backend with Gemini AI integration on port 8080.  
Then visit: `http://localhost:8080` in your web browser.

### Option 2: Direct Browser Launch
Simply double-click `index.html` to open directly in Chrome, Edge, Firefox, or Safari! (Uses the built-in offline knowledge engine when no backend is running).

---

## 🌐 Public Deployment
This app is ready for zero-config public deployment:
- **GitHub Pages**: Upload the folder or push to a GitHub repository, enable GitHub Pages on `main` branch.
- **Vercel / Netlify / Cloudflare Pages**: Drag and drop the `cybersafe` folder for instant global HTTPS hosting.
