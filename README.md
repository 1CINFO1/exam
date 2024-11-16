# Game Management System

A Node.js/Express application for managing game matches and players, featuring real-time updates using Socket.io.

## Features

- Player Management (CRUD operations)
- Match Creation and Management
- Real-time Game Statistics
- Attack System between Players
- WebSocket Integration for Live Updates

## Technologies Used

- Node.js with ES Modules (Not CommonJS)
- Express.js
- MongoDB with Mongoose
- Socket.io
- Twig(HTML)/CSS/JavaScript

## Prerequisites

Before running this project, make sure you have installed:
- Node.js (v14 or higher)
- MongoDB
- npm (Node Package Manager)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/mohamedboukari/game-management-system.git
cd game-management-system
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and add:
```env
MONGODB_URI=mongodb://localhost:27017/myexam2023
PORT=3000
```

## Database Schema

### Player Model
```javascript
{
  pseudo: String,
  sante: Number,
  score: Number
}
```

### Match Model
```javascript
{
  nom: String,
  joueur_1: String,
  joueur_2: String,
  etat: String
}
```

## API Endpoints

### Players
- `POST /api/joueur` - Create a new player
- `GET /api/joueur` - Get all players
- `GET /api/joueur/:id` - Get player by ID
- `DELETE /api/joueur/:id` - Delete player
- `POST /api/joueur/attack` - Launch attack between players

### Matches
- `POST /api/partie` - Create a new match
- `GET /api/partie` - Get all matches

## Socket.io Events

- `newMatch` - Emitted when a new match is created
- `playerStats` - Emitted when player statistics are requested

## Important Note About Modules

This project uses ES Modules (`type: "module"` in package.json) instead of CommonJS. This means:

- Use `import` instead of `require`
- Use `export` instead of `module.exports`
- File extensions (`.js`) must be included in imports
- For importing JSON files, use `createRequire` from `module`

Example:
```javascript
// Correct usage
import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

// Instead of
const express = require('express');
const { dirname } = require('path');
```

## Running the Application

1. Start MongoDB:
```bash
mongod
```

2. Run the application:
```bash
npm start
```

The application will be available at `http://localhost:3000`

## Testing

You can test the API endpoints using Postman or any other API testing tool.

Example attack request:
```json
POST /api/players/attack
{
  "attackerId": "player1_id",
  "victimId": "player2_id"
}
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.