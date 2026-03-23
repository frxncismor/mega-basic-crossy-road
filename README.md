# 🐔 Mega Basic Crossy Road — 3D Browser Game

> **A browser-based Crossy Road clone built with Three.js and TypeScript — featuring 3D rendering, collision detection, and smooth keyboard-controlled gameplay.**

[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Three.js](https://img.shields.io/badge/Three.js-0.174-000000?logo=threedotjs&logoColor=white)](https://threejs.org/)
[![Vite](https://img.shields.io/badge/Vite-6.2-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Live Demo](https://img.shields.io/badge/Live%20Demo-Vercel-000000?logo=vercel)](https://mega-basic-crossy-road.vercel.app/)

---

## 🌐 Live Demo

**[mega-basic-crossy-road.vercel.app](https://mega-basic-crossy-road.vercel.app/)**

---

## 🎯 Overview

A lightweight, browser-based implementation of the classic **Crossy Road** game using **Three.js** for 3D rendering and **TypeScript** for type-safe game logic. Built as a technical exploration of real-time 3D game mechanics in the browser without a game engine — just vanilla Three.js, TypeScript, and Vite.

---

## 🎮 Features

- **3D Rendering** — Full Three.js scene with perspective camera, lighting, and shadows
- **Keyboard Controls** — Arrow keys / WASD for smooth character movement
- **Collision Detection** — Custom bounding box collision system for obstacles and vehicles
- **Procedural Environment** — Lanes and obstacles generated dynamically as the player advances
- **Score Tracking** — Real-time score based on tiles crossed
- **Game Over & Restart** — Clean game state reset on collision

---

## 🚀 Technology Stack

| Technology | Purpose |
|------------|---------|
| **TypeScript 5.7** | Type-safe game logic |
| **Three.js 0.174** | 3D scene, camera, renderer, and geometry |
| **Vite 6.2** | Fast development server and build tool |

---

## 🏗️ Architecture

Built without a game framework — all game systems are custom implemented:

```
src/
├── scene.ts          # Three.js scene setup (camera, lights, renderer)
├── player.ts         # Player character, movement, and animation
├── map.ts            # Lane generation and procedural environment
├── collision.ts      # Bounding box collision detection
├── game.ts           # Main game loop, score, and state management
└── main.ts           # Entry point and event listeners
```

### Game Loop
1. **Input** — Keyboard events captured and queued
2. **Update** — Player movement, obstacle advancement, collision check
3. **Render** — Three.js renders the updated scene at 60fps

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
git clone https://github.com/frxncismor/mega-basic-crossy-road.git
cd mega-basic-crossy-road
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

### Build for Production

```bash
npm run build
```

---

## 🕹️ Controls

| Key | Action |
|-----|--------|
| `↑` / `W` | Move forward |
| `↓` / `S` | Move backward |
| `←` / `A` | Move left |
| `→` / `D` | Move right |

---

## 🤝 Contact

Built by [Francisco Morales](https://frxncismor.dev) · [GitHub](https://github.com/frxncismor)
