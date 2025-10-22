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
  - `@tiptap/extension-text-align` - Text alignment
  - `@tiptap/extension-underline` - Underline formatting

### State & Data Management

- **[Axios](https://axios-http.com/)** (v1.12.2) - HTTP client for API requests
- **[React Cookie](https://github.com/reactivestack/cookies)** (v8.0.1) - Cookie management

### Notifications & UX

- **[React Toastify](https://fkhadra.github.io/react-toastify/)** (v11.0.5) - Toast notifications

### 3D Graphics

- **[Spline](https://spline.design/)** - 3D design tool
  - `@splinetool/react-spline` (v4.1.0) - React integration
  - `@splinetool/runtime` (v1.10.85) - Runtime engine

## 📦 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v18.0.0 or higher)
- **npm** (v9.0.0 or higher) or **yarn** (v1.22.0 or higher)
- **Git**

## 🚀 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/journee.git
cd journee
```

2. **Install dependencies**

```bash
npm install
# or
yarn install
```

3. **Set up environment variables**

Create a `.env` file in the root directory:

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=Journee
```

4. **Start the development server**

```bash
npm run dev
# or
yarn dev
```

The app will be available at `http://localhost:5173`

## 💻 Usage

### Development

```bash
npm run dev          # Start development server
npm run build        # Build for production

```

### Creating Your First Entry

1. **Sign up** or **Log in** to your account
2. Click **"Create New Entry"**
3. Start writing with the rich text editor
4. Add formatting, images, and links as needed
5. Click **"Save"** to store your entry

## 📁 Project Structure

```
journee/
├── public/              # Static assets
├── src/
│   ├── assets/          # Images, fonts, etc.
│   ├── components/      # Reusable components
│   │   ├── MenuPosts.jsx
│   │   └── ...
│   ├── context/         # React Context providers
│   │   └── authContext/
│   ├── pages/           # Page components
│   │   ├── CreatePost.jsx
│   │   ├── PostDetail.jsx
│   │   └── ...
│   ├── apiService/      # API integration
│   │   └── apiService.mjs
│   ├── utils/           # Utility functions
│   │   └── sanitize.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # App entry point
│   └── index.css        # Global styles
├── .env                 # Environment variables
├── .gitignore
├── package.json
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind configuration
└── README.md
```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# API Configuration
VITE_API_URL=http://localhost:3000/api

# App Configuration
VITE_APP_NAME=Journee
VITE_APP_VERSION=1.0.0

# Optional: Third-party services
VITE_SPLINE_SCENE_URL=your_spline_scene_url
```

## 📜 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style

- Follow the existing code style
- Use meaningful variable and function names
- Comment complex logic
- Keep components small and focused
- Write tests for new features (if applicable)

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Your Name** - *Ismael Luden Alexandre* - [YourGitHub](https://github.com/Ludens509)

## 🙏 Acknowledgments

- Inspired by [Medium.com](https://medium.com/)
- Built with [TipTap](https://tiptap.dev/) for rich text editing
- UI components from [Flowbite React](https://flowbite-react.com/)
- Icons from [Lucide](https://lucide.dev/)

## 📧 Contact

For questions or feedback, please reach out:

- **Email**: your.email@example.com
- **GitHub**: [@yourusername](https://github.com/yourusername)
- **Twitter**: [@yourhandle](https://twitter.com/yourhandle)

## 🗺️ Roadmap

- [ ] Dark mode implementation
- [ ] Advanced search and filtering
- [ ] Export entries to PDF/Markdown
- [ ] Mobile app (React Native)
- [ ] Mood tracking
- [ ] Writing streaks and statistics
- [ ] Rich media support (audio, video)
- [ ] Encryption for enhanced privacy

---
# ⚙️ Backend_link
https://github.com/Ludens509/Journee-backend.git


**Made with ❤️ for personal growth and reflection**
