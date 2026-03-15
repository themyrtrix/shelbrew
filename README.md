# Shelbrew Self-Ordering Kiosk

> ⚠️ This project is currently in active development. Features may be incomplete or subject to change.

A self-ordering kiosk system for Shelbrew coffee shop. Customers can browse the menu, select a dining option, and place orders directly from the kiosk. Staff can manage orders and menu availability through the admin dashboard.

## Features

- **Kiosk** — dining option selection, menu browsing, search, and cart
- **Admin** — secure login, order management, menu availability toggle
- **Real-time** — menu and order updates powered by Firestore
- **Responsive** — scales across tablet and large screen displays

## Tech Stack

| Technology | Purpose |
|------------|---------|
| React + Vite | UI framework and build tool |
| JavaScript | Core language |
| Firebase Firestore | Database |
| Firebase Authentication | Admin login |
| React Router DOM | Page navigation |
| CSS | Styling |

## Project Structure
```
shelbrew/
├── public/
│   ├── images/        ← menu item images
│   └── icons/         ← SVG icons
├── src/
│   ├── admin/         ← admin dashboard
│   ├── client/        ← customer kiosk
│   ├── shared/        ← firebase, constants, global styles
│   └── main.jsx
├── .env.kiosk
├── .env.admin
└── vite.config.js
```

## Prerequisites

Before running this project, make sure you have the following installed:
- Node.js v18 or higher — [Download here](https://nodejs.org)
- npm — comes bundled with Node.js
- A Firebase project with Firestore and Email/Password Authentication enabled

## Setup

### 1. Clone the repository

Clone the project to your local machine and navigate into the project folder.
```bash
git clone https://github.com/themyrtrix/shelbrew.git
```

### 2. Install dependencies

Inside the project folder, install the required packages.
```bash
npm install
```

### 3. Configure Firebase

Open `src/shared/firebase.js` and replace the Firebase config values with your own project credentials from the Firebase Console.

Make sure the following are enabled in your Firebase project:
- Firestore Database
- Authentication → Email/Password sign-in method

### 4. Run the app locally

You can run either the kiosk or admin app independently.
```bash
# Customer-facing kiosk
npm run dev:kiosk

# Admin dashboard
npm run dev:admin
```

Once running, open your browser and go to `http://localhost:5173`.

## Team

| Name | Role |
|------|------|
| Myrtle | Full Stack — Frontend, Firebase, Project Manager |
| Charles | Backend — Firebase, Authentication |
