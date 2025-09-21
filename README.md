# Vaulta Fullstack Starter (Combined)

This repo contains a minimal full-stack starter for Vaulta with both frontend (React) and backend (Express).

## Quick local run (developer)
1. Install dependencies for server and client separately:
   - `cd server && npm install`
   - `cd client && npm install`
2. Start backend: `cd server && npm start` (runs on port 4200)
3. Start frontend: `cd client && npm start` (runs on port 3000, proxy to backend)
4. Open http://localhost:3000

## Deploy
- Frontend: connect `/client` to Vercel — set framework to Create React App, build command `npm run build`, output dir `build`.
- Backend: connect `/server` to Render or Railway (Node service).

The client is configured to proxy API calls to `http://localhost:4200` during development.
