# Journee 📝

> A digital diary web application inspired by Medium, designed for personal reflection, self-expression, and growth.

![Journee Banner](./public/banner.png) <!-- Add your banner image -->

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Journee is a digital diary web application inspired by Medium.com, originally created by a former Twitter co-founder. While Medium focuses on public storytelling and blogging, Journee brings that same writing experience into a personal, private space — designed for reflection, self-expression, and growth.

### Why Journee?

- **Private & Personal**: Your thoughts stay yours
- **Beautiful Writing Experience**: Inspired by Medium's elegant design
- **Rich Text Editing**: Full-featured editor for expressive writing
- **Track Your Growth**: Watch your journey unfold over time
- **Distraction-Free**: Focus on what matters—your thoughts

## ✨ Features

- 🔐 **User Authentication** - Secure login and registration
- ✍️ **Rich Text Editor** - Powered by TipTap with full formatting support
- 📖 **Personal Journal Entries** - Create, edit, and organize your thoughts
- 🎨 **Beautiful UI** - Clean, modern design with Tailwind CSS
- 📱 **Responsive Design** - Works seamlessly on all devices
- 🔒 **Privacy-Focused** - Your entries are completely private
- 🌙 **Dark Mode Ready** - (If implemented)
- 🔍 **Search & Filter** - (If implemented)
- 🏷️ **Tags & Categories** - (If implemented)

## 🛠️ Tech Stack

### Core

- **[React](https://react.dev/)** (v19.1.1) - Frontend framework
- **[React Router DOM](https://reactrouter.com/)** (v7.9.4) - Client-side routing
- **[Vite](https://vitejs.dev/)** - Build tool and dev server

### UI & Styling

- **[Tailwind CSS](https://tailwindcss.com/)** (v4.1.14) - Utility-first CSS framework
- **[Flowbite React](https://flowbite-react.com/)** (v0.12.9) - UI component library
- **[Lucide React](https://lucide.dev/)** (v0.546.0) - Icon library
- **[React Icons](https://react-icons.github.io/react-icons/)** (v5.5.0) - Additional icons
- **[Tailwind Scrollbar](https://github.com/adoxography/tailwind-scrollbar)** (v4.0.2) - Custom scrollbar styling

### Rich Text Editor

- **[TipTap](https://tiptap.dev/)** (v3.7.2) - Headless rich text editor
  - `@tiptap/react` - React integration
  - `@tiptap/starter-kit` - Essential extensions bundle
  - `@tiptap/extension-image` - Image support
  - `@tiptap/extension-link` - Hyperlink support
  - `@tiptap/extension-placeholder` - Placeholder text
# Journee — Frontend (React + Vite)

![Journee banner](./public/banner.png)

A personal digital diary web application (frontend) built with React and Vite. This repository contains the SPA that interacts with the Journee backend API to create, edit, and manage diary entries using a rich text editor.

## Table of contents

- [About](#about)
- [Features](#features)
- [Tech & Tools](#tech--tools)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Environment variables](#environment-variables)
- [Project structure](#project-structure)
- [API contract (backend)](#api-contract-backend)
- [Contributing](#contributing)
- [License & Contact](#license--contact)

## About

Journee is a minimal, beautiful writing experience inspired by Medium — adapted for private journaling. The frontend is responsible for authenticated UI, rich-text entry editing (TipTap), and communicating with the backend API for persistence.

## Features

- User registration & authentication
- Create, read, update and delete personal posts
- Rich text editor (TipTap) with images and links
- Responsive UI using Tailwind CSS
- Toast notifications and cookie-based token handling
- Basic pagination and post list views

## Tech & Tools

Core:
- React (v19)
- Vite (dev server & build)
- React Router DOM (routing)
- Axios (HTTP client)

Editor & UI:
- TipTap (@tiptap/react and extensions) — rich text editor
- Tailwind CSS (+ plugins)
- Flowbite React — UI components
- Lucide React / React Icons — iconography
- Spline — optional 3D scene integration (decorative)

State & utilities:
- react-cookie — cookie management for token
- react-toastify — notifications

Dev & tooling:
- ESLint, @vitejs/plugin-react, Vite

This list is taken from `package.json` and matches installed dependencies.

## Prerequisites

- Node.js (v18+ recommended)
- npm (v9+) or Yarn

## Getting started

1. Clone the repository and change into the frontend folder:

```bash
git clone https://github.com/Ludens509/journee.git
cd journee/Journee_frontend
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Create a `.env` file (see Environment variables below).

4. Start the development server:

```bash
npm run dev
# or
yarn dev
```

The app will usually be served at `http://localhost:5173` (Vite default).

## Available scripts

The scripts in `package.json` are:

- `dev` — start Vite dev server
- `build` — build the production bundle
- `preview` — serve a local preview of the production build
- `lint` — run ESLint

Run them with npm, e.g. `npm run dev`.

## Environment variables

Create a `.env` file at `Journee_frontend/.env` or at repo root depending on your setup. At minimum set the backend API URL:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Journee
```

Optionally add third-party keys (e.g. Spline scene URL) as `VITE_` prefixed variables.

> Note: Vite exposes `VITE_` prefixed env variables to the client.

## Project structure

```
Journee_frontend/
├── public/                # Static assets (images, banners)
├── src/
│   ├── apiService/        # API client wrappers (apiService.mjs)
│   ├── assets/            # Images, icons, etc.
│   ├── components/        # Reusable components (cards, menus)
│   ├── context/           # React contexts (auth, user)
│   ├── pages/             # Route pages (Home, Post, Auth)
│   ├── utils.jsx          # Utility helpers (stripHtml etc.)
│   ├── App.jsx            # App root
│   └── main.jsx           # App entry (Vite)
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## API contract (backend)

The frontend expects a backend API (see `Journee-backend`) and uses the following environment variable to locate it: `VITE_API_URL`.

Common endpoints used by the frontend:

- `POST /api/users` — register (returns `{ token }`)
- `POST /api/auth` — login (returns `{ token }`)
- `GET /api/auth` — get current user (protected; pass `x-auth-token`)
- `GET /api/posts` — list posts
- `GET /api/posts/:id` — get a single post
- `POST /api/posts` — create post (protected)
- `PUT /api/posts/:id/edit` — update post (protected)
- `DELETE /api/posts/:id` — delete a post (protected)

Authentication: the app currently stores the JWT in a cookie (react-cookie). For higher security we recommend migrating to server-set `httpOnly` cookies and using CORS `credentials: true` on the server.

## Contributing

Contributions are welcome. Suggested workflow:

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/my-feature`
3. Commit changes and open a Pull Request

Please follow the established code style and run the linter before submitting.

## License & contact

This project uses the ISC license (see repository root).

If you have questions or want to collaborate, reach out:

- Email: alexandreludens2@gmail.com
- GitHub: https://github.com/Ludens509

---

Backend repository: https://github.com/Ludens509/Journee-backend

Made with ❤️ for personal growth and reflection
