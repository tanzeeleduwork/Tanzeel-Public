# EduCRM — Student Admissions Management System

> A purpose-built CRM for international education consultancies. Manage student pipelines, documents, file notes, follow-up tasks, and generate formal letters — all from a single, fast, browser-based interface.

![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?style=flat-square&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)
![Status](https://img.shields.io/badge/Status-Active-brightgreen?style=flat-square)

---

## 📌 Overview

EduCRM was built to mirror the exact day-to-day workflow of an international education consultant working with Australian universities. It replaces scattered spreadsheets, loose email threads, and paper file notes with a single, structured system that tracks every student from first inquiry through to enrolled status.

Built with React, TypeScript, and Vite — no backend, no database, no cloud dependency. Everything runs in the browser and persists via `localStorage`, making it instantly deployable and zero-cost to host.

---

## ✨ Features

### 🗂 Student Pipeline (Kanban Board)
- Visual drag-and-drop board across 6 stages: **New Inquiry → Counselled → Applied → Offer Received → COE Issued → Enrolled**
- Each card shows the student's university, document completion progress, and pending task count
- Overdue tasks are flagged with a red border directly on the card
- Stage updates are reflected instantly across all modules

### 👤 Student Profile & CRM Record
- Full personal and application detail view per student
- Structured across 4 tabs: **Overview, Documents, Notes, Tasks**
- Inline stage change without navigating away

### 📄 Document Checklist
Tracks 10 document types per student with a single click to mark received:
- Passport Copy, SSC & HSC Certificates, Bachelor's Degree
- IELTS / English Test Result, Offer Letter
- Confirmation of Enrolment (COE), Visa Grant Letter
- Medical Clearance, Police Clearance Certificate

Visual progress bar updates in real time as documents are received.

### 📝 File Notes & Activity Log
- Add timestamped file notes per student categorised by type: **Call, Email, Meeting, Walk-in, WhatsApp, System**
- Every note records the date, author, and full text
- Notes display newest-first for a clean chronological audit trail
- Recent activity across all students appears on the Dashboard

### ✅ Task & Follow-up Manager
- Add follow-up tasks with due dates at the student level
- Global Tasks view aggregates all tasks across all students, grouped as:
  - ⚠ Overdue
  - 📅 Due Today
  - 🔜 Upcoming
  - ✓ Completed
- One-click completion toggle; overdue tasks highlighted in red

### 📊 Dashboard & Monthly Targets
- KPI cards: total students, converted, this month's conversions vs target, overdue task count
- Monthly enrollment target progress bar (configurable)
- Live conversion rate percentage
- Pipeline stage snapshot with proportional bars
- Upcoming follow-ups and recent activity feed

### 📨 Letter & Document Generator
Generates professional, print-ready letters pre-filled from student records:
1. **Offer Letter Acknowledgment** — confirms receipt and lists next steps
2. **COE Advisory Letter** — formal COE notification with visa instructions
3. **Visa Application Support Letter** — addressed to the Australian Dept. of Home Affairs
4. **Student Retention Follow-up** — after-enrollment engagement communication

Copy to clipboard or download as `.txt` with one click.

---

## 🗃 Project Structure

```
edu-crm/
├── public/                  # Static assets
├── src/
│   ├── App.tsx              # Root component, routing logic
│   ├── main.tsx             # React entry point
│   └── ...                  # Components and modules
├── .gitignore
├── eslint.config.js         # ESLint configuration
├── index.html               # HTML shell
├── package.json             # Dependencies and scripts
├── package-lock.json        # Lockfile
├── tsconfig.json            # Base TypeScript config
├── tsconfig.app.json        # App-level TS config
├── tsconfig.node.json       # Node-level TS config (Vite)
└── vite.config.ts           # Vite build configuration
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18 or higher
- npm 9 or higher

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/edu-crm.git
cd edu-crm

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

### Build for Production

```bash
npm run build
```

The output will be in the `dist/` folder, ready to deploy to any static host.

### Preview Production Build

```bash
npm run preview
```

---

## ☁️ Deployment

This app requires no backend. Deploy the `dist/` folder to any of the following:

**Vercel (recommended — free)**
```bash
npm install -g vercel
vercel --prod
```

**Netlify**
```bash
npm install -g netlify-cli
netlify deploy --prod --dir=dist
```

**GitHub Pages**
```bash
npm run build
# Push the dist/ folder to your gh-pages branch
```

---

## 💾 Data Storage

All student data, notes, tasks, and document statuses are persisted in the browser's `localStorage` under the key `educrm_students`. Data survives page refreshes and browser restarts automatically — no account, login, or internet connection required after the initial load.

To reset to demo data, clear `localStorage` in your browser's developer tools:
```js
localStorage.removeItem("educrm_students")
```

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| React 18 | UI component library |
| TypeScript 5 | Type safety and IDE support |
| Vite 5 | Build tool and dev server |
| localStorage API | Client-side data persistence |
| HTML5 Drag and Drop API | Kanban board interactions |
| CSS-in-JS (inline styles) | Zero-dependency styling |
| Clipboard API | Copy-to-clipboard for letters |
| Blob API | Letter download as `.txt` |

No external UI libraries. No CSS frameworks. No backend. No database.

---

## 📋 CRM Workflow This App Supports

This system was designed around the real responsibilities of an education consultant:

| Responsibility | Where it's handled |
|---|---|
| Counsel students for international admissions | Student Profile → Notes tab |
| Track application stage from inquiry to enrollment | Pipeline Kanban / Stage badge |
| Maintain inquiry notes and file notes | Student Profile → Notes tab |
| Record offer letters, COEs, admissions entries | Documents checklist |
| Manage follow-up tasks and due dates | Tasks tab + Global Tasks view |
| Monitor monthly conversion targets | Dashboard KPI cards + progress bar |
| Generate formal correspondence | Letter Generator module |
| After-sales retention engagement | Retention Follow-up letter template |
| Social and marketing content planning | *(roadmap)* |

---

## 🔮 Roadmap

- [ ] Export full student record as PDF
- [ ] Email integration (send letters directly from the app)
- [ ] Multi-consultant support with role-based access
- [ ] Cloud sync via Firebase or Supabase
- [ ] University and course database with search
- [ ] OSHC and visa deadline reminders
- [ ] Social media content calendar module
- [ ] Reporting dashboard with chart exports

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to the branch: `git push origin feature/your-feature`
5. Open a Pull Request

Please follow [Conventional Commits](https://www.conventionalcommits.org/) for commit messages.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

## 👨‍💻 Author

Built with care to reflect real-world education consultancy workflows.  
Designed specifically for the Australian international student admissions process.

---

*If this project helped you, consider giving it a ⭐ on GitHub.*

