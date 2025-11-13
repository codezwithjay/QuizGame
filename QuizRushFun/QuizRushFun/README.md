# QuizRush — 50 Levels of Fun 🎮

A complete offline quiz game with 50 levels and 250 unique questions! Built with pure HTML, CSS, and JavaScript.

## 🎯 Features

- **50 Levels** with 5 unique questions each (250 total questions)
- **10-second timer** for each question with visual countdown
- **Pass requirement**: Get at least 3 out of 5 correct to advance
- **Progressive difficulty** across all levels
- **Score tracking** with localStorage persistence
- **Sound effects** for correct/wrong answers and level completion
- **Confetti animations** when clearing levels
- **Fireworks animation** when completing all 50 levels
- **Fully responsive** - works on mobile, tablet, and desktop
- **PWA enabled** - works offline and can be installed on mobile devices

## 🚀 Quick Start

1. **Run the Game**:
   - Open `index.html` in any modern web browser
   - Or run a local server: `python3 -m http.server 5000`
   - All sound effects are built-in using Web Audio API (no external files needed!)

2. **Add Icons** (Optional, for PWA):
   - Create `icon-192.png` (192x192 pixels)
   - Create `icon-512.png` (512x512 pixels)

## 🎮 How to Play

1. Answer each question within 10 seconds
2. Get at least 3 out of 5 questions correct to pass the level
3. Progress through all 50 levels to become a Quiz Master!
4. Your progress is automatically saved

## 📱 Install as PWA

On mobile devices:
- **Android**: Tap "Add to Home Screen" in your browser menu
- **iOS**: Tap the Share button and select "Add to Home Screen"

## 🛠️ Technical Details

- **No backend required** - everything runs in the browser
- **localStorage** for saving progress
- **Service Worker** for offline functionality
- **Canvas Confetti** library (locally bundled) for celebration animations
- **Web Audio API** for programmatic sound generation
- Pure vanilla JavaScript (no frameworks)

## 📂 File Structure

```
quizrush/
├── index.html                 # Main game structure
├── styles.css                 # All styling and animations
├── game.js                    # Game logic with 250 questions
├── sounds.js                  # Web Audio API sound generator
├── confetti.browser.min.js    # Confetti animation library (local)
├── manifest.json              # PWA configuration
└── serviceWorker.js           # Offline caching
```

## 🎨 Customization

You can easily customize:
- **Questions**: Edit the `questions` array in `game.js`
- **Colors**: Modify the gradient in `styles.css`
- **Timer duration**: Change the initial `timeLeft` value in `game.js`
- **Pass requirement**: Modify the `levelCorrectAnswers >= 3` condition

## 📝 License

Free to use and modify for personal and commercial projects.

Enjoy playing QuizRush! 🎉
