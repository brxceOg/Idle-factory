# Idle Mining — Phase 1 Prototype

A mobile-friendly 2D side-view pixel-art idle mining prototype built with HTML Canvas, CSS, and JavaScript. Designed for static hosting on GitHub Pages.

## Run locally

Open `index.html` in a modern browser. No build step or dependencies are required.

## Publish on GitHub Pages

1. Open **Settings → Pages**.
2. Under **Build and deployment**, select **Deploy from a branch**.
3. Choose branch `phase-1-mining-prototype` and folder `/(root)` to preview this prototype, or merge the branch into `main` first and publish `main`.
4. Save and open the published URL.

## Current prototype

- Side-view Plains terrain with individual dirt, stone, and ore tiles.
- One visible worker that wanders before mining starts.
- Start Mining and Stop & Reset controls.
- Autonomous mining, tile health, cracks, and tile destruction.
- Cash rewards for stone and ore; dirt is worth $0.
- Camera follows the worker underground.
- Cash and best depth persist in browser local storage.
- Run reset restores the terrain without wiping saved cash.

## Scope

This branch implements the first playable loop. Workforce hiring, assignment types, permanent upgrades, biome checkpoints, robust save/restore of an active run, and offline progression remain future phases. Values and terrain generation are provisional and will need playtesting.

Saves are local to the current browser and do not sync across devices.
