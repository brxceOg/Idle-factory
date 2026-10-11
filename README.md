# Little Factory — Early Build 0.1

A mobile-first idle factory game built as a static web app for iPhone Safari.

## Play on GitHub Pages
1. Open **Settings → Pages**.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select branch `main` and folder `/(root)`, then save.
4. Wait for GitHub Pages to publish. The URL will be shown in the Pages settings.
5. Open that URL in Safari on your iPhone. Use **Share → Add to Home Screen** to install it.

## Prototype features
- Animated top-down pixel-art workshop
- Scrap generated automatically over time
- Buy production machines, hire workers, and research upgrades
- Local save and offline earnings capped at 8 hours
- Mobile-friendly controls and a service-worker cache

## Notes
Saves live in the browser on the current device and do not sync between devices. Offline caching works after the app is served over HTTPS.
