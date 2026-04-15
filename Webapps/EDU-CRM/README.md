
# EDU-CRM Project Gallery

<div align="center">

### ⚠️ **CRITICAL USAGE NOTE** ⚠️
**Open on PC/Horizontal view on Phone**
[Click here to open the Live Demo](https://tubular-caramel-dcb454.netlify.app/)

</div>

---

**Note:** Add a new student in "Students" module with appropriate info to unlock complete functionality of CRM

## ⚡ Tech Stack & Architecture

Built with a focus on zero-latency, local-first data processing, leveraging a modern layout to deliver a fast CRM experience.

<div align="center">
  <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite" />
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" alt="HTML5 APIs" />
</div>

<br/>

### 🧠 Core Engineering & Skills Demonstrated

* **Frontend Framework:** Fully component-driven architecture using **React** with functional components and complex Hooks (`useState`, `useEffect`, `useRef`) for isolated state management.
* **Type Safety:** Heavily typed with **TypeScript**, utilizing strict interfaces (`DocState`, `UniApplication`, `Student`) to ensure reliable data flow across the application lifecycle.
* **Schema Validation:** Custom **Zod-compatible** validation engine and Regex sanitization for secure, real-time input handling (e.g., region-specific Passport formatting, phone sanitization).
* **Document Handling:** Utilizes Browser **Blob & File APIs** (`URL.createObjectURL`) to render PDF and image previews directly in the client without server uploads.
* **Local-First Persistence:** Implements a zero-backend architecture using HTML5 `localStorage` with automated data migration functions to handle legacy state updates.
* **Interactive UI/UX:** Features a custom SVG icon system, responsive inline-styling, and a dynamic **Kanban Drag-and-Drop** pipeline with logic-locked staging (prevents moving students without required verified documents).
* **Automated Logic:** Includes reactive computational logic for Visa Status dependencies, dynamic Email Template generation, and automated Task tracking.

## 🖥️ Dashboard & Pipeline
Here is an overview of the student intake pipeline and activity tracking.

![Main Dashboard](./Preview%20Images/Dashboard.png)
*Figure 1: Main Dashboard overview*


![Student Pipeline](./Preview%20Images/Pipeline.png)
*Figure 2: Student lifecycle stages and pipeline management*


## 👥 Student Management
Detailed views for managing student inquiries, emails, and university applications.

![Student List View](./Preview%20Images/Students(List%20View).png)
*Figure 3: Students List*


![Student Overview](./Preview%20Images/Students(Overview%20Tab).png)
*Figure 4: Overview Tab of Students Module*


![Student Overview](./Preview%20Images/Students(Universities%20Tab).png)
*Figure 5: University and Course Selection*


![Student Overview](./Preview%20Images/Students(Email%20Tab).png)
*Figure 6: Email drafted for students' needs*


## 📊 Activity & Tasks
Systematic tracking of logs and daily tasks to ensure high conversion rates.

![Activity Log](./Preview%20Images/Activity%20Log.png)
*Figure 7: Activity Log*


![Task Management](./Preview%20Images/Tasks.png)
*Figure 8: Tasks Module*
