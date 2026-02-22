Planix
A kanban board app to manage tasks and projects visually. Built with vanilla JavaScript, HTML and CSS — no frameworks, no dependencies.

What it does:
- Planix lets you organize tasks across four columns: New, In Progress, Pending and Completed.
- You can create tasks, move them between columns with drag & drop, and check their details in a modal. 
- Everything gets saved to localStorage so your data persists between sessions.

Features:
- Create tasks with title, description, priority and state
- Drag & drop tasks between columns
- Color-coded priority and state tags
- Task detail modal with delete option
- Real-time search filter by task name
- Data persistence with localStorage

Tech stack:
- HTML
- CSS
- Vanilla JavaScript

Structure:
planix/
├── index.html
├── styles.css
└── script.js

Getting started
Clone the repo and open index.html in your browser:

git clone https://github.com/tuusuario/planix.git
cd planix
open index.html

How to use:

1. Click **+ Create** to add a new task — fill in the title, description, priority and state.
2. Tasks appear in their corresponding column automatically.
3. **Drag and drop** cards between columns to update their state.
4. Click any card to open the detail modal with full task info.
5. Use the **search bar** to filter tasks by name in real time.
6. Hit **Delete** inside the modal to remove a task.
