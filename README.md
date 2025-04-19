# Cards of Civilization

A real-time strategy game where players gather resources, build structures, and train military units to defeat their opponent.

## Features

- Real-time resource gathering with villagers
- Building construction and upgrades
- Military unit production and combat
- Age advancement system
- Queue-based action system
- Separate attack queue for military actions

## Setup

1. Install dependencies:
```bash
cd client
npm install
```

2. Start the development server:
```bash
npm start
```

The application will be available at http://localhost:3000

## Game Rules

- Players start with 2 villagers (1 in food, 1 in wood)
- Each villager gathers 5 units of their specific resource per time unit
- Resources can be upgraded to increase gathering rate
- Buildings have specific build times and hitpoints
- Military units can attack enemy units and buildings
- Buildings can only be attacked if there are no military units
- Town center can only be attacked if there are no other buildings
- Players can advance through 4 ages, unlocking new units and upgrades

## Development

The project is built with:
- React
- TypeScript
- Material-UI
- Socket.IO (for real-time multiplayer)

## Project Structure

- `client/` - Frontend React application
  - `src/components/` - React components
  - `src/types/` - TypeScript type definitions
  - `public/` - Static assets 