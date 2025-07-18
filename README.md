# ✨ Google AI Studio Clone

<div align="center">
  <img src="./screenshot.png" alt="Google AI Studio Clone" width="800"/>
  <br/>
  <!-- Live Demo link placeholder -->
  <a href="https://google-ai-studio-lemon.vercel.app"><strong>Live Demo 🚀</strong></a>
  <br/><br/>
  <a href="https://reactjs.org/"><img src="https://img.shields.io/badge/React-18.2.0-blue?logo=react"></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-3.3.0-06B6D4?logo=tailwindcss"></a>
  <a href="LICENSE"><img src="https://img.shields.io/badge/License-MIT-green.svg"></a>
</div>

A beautiful, pixel-perfect frontend clone of Google AI Studio built with modern web technologies.

---

## 📑 Table of Contents

- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Screenshots](#-screenshots)
- [Getting Started](#-getting-started)
- [Contributing](#-contributing)
- [License](#-license)
- [Contact](#-contact)

---

## 🚀 Features

| Feature | Description | Icon |
|---------|-------------|------|
| **Chat Interface** | Complete chat prompt UI with dynamic placeholders | 💬 |
| **API Dashboard** | API key management interface | 🔑 |
| **Realtime Streaming** | Stream interface with media controls | 📡 |
| **Settings Panel** | Configurable model parameters | ⚙️ |
| **Responsive Design** | Works on all device sizes | 📱 |
| **Dark Mode** | Accurate Google-style dark theme | 🌙 |

---

## 🛠 Tech Stack

| Core | UI | Icons | Routing |
|------|----|-------|---------|
| <img src="https://cdn.worldvectorlogo.com/logos/react-2.svg" width="40" alt="React"> <br/> React 18 | <img src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg" width="40" alt="Tailwind"> <br/> Tailwind CSS 3 | <img src="https://lucide.dev/logo.svg" width="40" alt="Lucide"> <br/> Lucide React | <img src="https://reactrouter.com/favicon.ico" width="40" alt="React Router"> <br/> React Router 6 |

---

## 📸 Screenshots

<div align="center">
  <img src="./screenshot.png" alt="Main UI" width="600"/>
  <!-- Add more screenshots or GIFs as needed -->
</div>

---

## 📂 Project Structure

| File                        | Purpose / Section                                                                                   |
|-----------------------------|-----------------------------------------------------------------------------------------------------|
| **App.jsx**                 | Main entry point, sets up routing and wraps everything in the main layout.                          |
| **MainLayoutWrapper.jsx**   | Handles overall page layout, sidebar logic, top navigation, and main content area.                  |
| **Sidebar.jsx**             | Unified sidebar for both mobile and desktop, includes studio and dashboard links, scrollable.       |
| **Sidebar2.jsx**            | Dashboard-specific sidebar (used only for desktop dashboard view).                                  |
| **TopNav.jsx**              | Top header/navigation bar, Gemini dropdown, settings icon, Tune icon, and settings dropdown menu.   |
| **SettingPanel.jsx**        | (If present) Old settings slider panel (may be obsolete if using dropdown for settings).            |
| **ModelDropdown.jsx**       | Custom Gemini model dropdown component (used in TopNav and SettingPanel).                           |
| **UseIsMobile.jsx**         | Custom React hook to detect if the device is mobile.                                                |
| **ChatPrompt.jsx**          | Main chat prompt UI, input, chat history, and “What’s new” section.                                 |
| **pages/Home.jsx**          | Home/chat page (usually imports and renders ChatPrompt).                                            |
| **pages/Stream.jsx**        | “Stream Realtime” page, with action buttons and input bar.                                          |
| **pages/Dashboard.jsx**     | Dashboard page, API key management, usage/billing info, and table.                                  |
| **RightSlide.jsx**          | (If present) Right-side floating icon section (settings/gallery), mostly for desktop.               |
| **index.css**               | Global CSS and Tailwind styles.                                                                    |
| **main.jsx**                | React root rendering and strict mode setup.                                                         |

---

## 🏁 Getting Started

### Prerequisites

- Node.js ≥ 16
- npm or yarn

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/google-ai-studio-clone.git
   cd google-ai-studio-clone
   ```

2. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Build for production:**
   ```bash
   npm run build
   # or
   yarn build
   ```

---

## 🤝 Contributing

Contributions are welcome! Please open an issue or submit a pull request for any bug fixes, improvements, or new features.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 📬 Contact

For questions, feedback, or support, please open an issue or contact [your-email@example.com](mailto:your-email@example.com).

---

> Inspired by Google AI Studio. This project is for educational purposes only and is not affiliated with Google.
