# 🚀 InternNova — Modern UI/UX Redesign & Intern Portal

[![Live Demo](https://img.shields.io/badge/Live-Demo_Available-success?style=for-the-badge&logo=githubpages&logoColor=white)](#-live-links)
[![GitHub Repo](https://img.shields.io/badge/GitHub-Repository-indigo?style=for-the-badge&logo=github&logoColor=white)](#)
[![Built With](https://img.shields.io/badge/Tech-HTML5_•_TailwindCSS_•_JavaScript-blue?style=for-the-badge)](#-tech-stack)

A modern, responsive, and production-ready redesign of the **InternNova** web platform. This project upgrades the platform's visual identity with sleek glassmorphism, introduces a **top-left offcanvas hamburger navigation drawer**, and adds a dedicated **Interactive Intern Dashboard** with task submission, session scheduling, and credential verification.

---

## 📌 Project Overview & Objectives

* **Client/Platform**: [InternNova](https://internnova.co.in)
* **Goal**: Analyze the existing InternNova website and execute a complete homepage redesign featuring modern visual hierarchy, responsive layouts, interactive elements, and an all-in-one Intern Dashboard.
* **Deliverables**: Live Website Deployment, Public GitHub Repository, and UI/UX Documentation.

---

## 🔗 Live Links

* **Live Website**: `https://<your-username>.github.io/internnova-redesign/`
* **GitHub Repository**: `https://github.com/<your-username>/internnova-redesign`

---

## 💡 Key UI/UX Enhancements

| Area | Previous State | Redesigned Experience |
| :--- | :--- | :--- |
| **Navigation** | Standard top navbar layout | **Top-Left Hamburger Menu** with smooth backdrop blur slide-out drawer for mobile & desktop |
| **Aesthetics** | Flat dark colors | **Modern Glassmorphism (`backdrop-blur-xl`)**, subtle ambient glow gradients, and cohesive rocket-neon branding |
| **Dashboard** | Separate or minimal portal | **Integrated Single-Page Dashboard** with instant tab toggling for Tasks, Schedule, and Certificates |
| **Task Management** | Static instructions | Interactive task milestone cards with due date tags, score metrics, and **live submission modal** |
| **Responsiveness** | Mobile-adapted desktop view | Mobile-first architecture with touch-friendly tap targets and adaptable CSS grids |

---

## ✨ Features & Modules

### 1. 🍔 Top-Left Offcanvas Navigation Drawer
* Smooth slide-in menu accessible directly from the top-left burger icon.
* Houses links to:
  * **Home**
  * **About InternNova**
  * **Internship Domains**
  * **Intern Dashboard**
  * **Workshops & Mentorship**
  * **Intern Testimonials**
  * **Help & FAQ**
* Auto-closes upon link selection or backdrop tap.

### 2. 📊 Interactive Intern Dashboard
* **📋 Tasks Milestone Tracker**: View active assignments (e.g., *Homepage UI/UX Redesign*), completed grades, and locked upcoming modules. Includes a functional modal to input repository and live demo links.
* **📅 Schedule & Mentorship**: Sync live sessions, technical workshops, and mock interview times directly to calendar workflows.
* **🎓 Verified Certificate Portal**: Built-in credential card displaying verification badges, unique credential ID (`IN-2026-WD-8924`), and instant preview/download options.

### 3. 🌐 Complete Homepage Sections
* **Hero Banner**: Engaging headline, active cohort status pill, and primary call-to-actions.
* **Real-Time Platform Stats**: Showcasing intern enrollments, completion rates, and partner metrics.
* **Domain Showcase**: Interactive cards for Web Development, AI/ML, Python, UI/UX, Cloud, and Java tracks.
* **Interactive FAQ Accordion**: Expandable Q&A accordion addressing submissions, evaluations, and certifications.

---

## 🛠️ Tech Stack

* **Structure**: Semantic HTML5
* **Styling**: [Tailwind CSS CDN](https://tailwindcss.com/) + Custom Glassmorphic CSS (`style.css`)
* **Logic & Interactivity**: Vanilla JavaScript (ES6+ DOM manipulation for modal, drawer, and tab switching)
* **Iconography**: [Font Awesome 6.5](https://fontawesome.com/)
* **Typography**: Inter (Google Fonts)

---

## 📁 Repository File Structure

```text
internnova-redesign/
│
├── index.html        # Complete semantic HTML homepage & dashboard
├── style.css         # Glassmorphism, animations & scrollbar customization
├── script.js         # Burger drawer, tab switching & submission modal logic
├── README.md         # Project documentation & submission details
└── assets/           # (Optional) Screenshots and images
