# 🚀 Codeforces Rating Notifier - Chrome Extension

Stay instantly updated on your Codeforces rating changes with this lightweight and user-friendly Chrome Extension.

---

## 🔔 Overview

**Codeforces Rating Notifier** is a Chrome extension that periodically checks your Codeforces rating using the official [Codeforces API](https://codeforces.com/apiHelp) and sends a desktop notification when your rating is updated.

---

## 🎯 Features

- ⏱️ Automatic rating checks every minute using `chrome.alarms`
- 🔔 Desktop notifications on rating updates
- 💾 Persistent storage of your Codeforces handle
- 🎨 Light/Dark mode toggle for a personalized UI
- 🧠 Background service worker with error handling

---

## 🛠️ Technologies Used

**Technologies:** JavaScript, HTML, CSS, Chrome Extension APIs (runtime, alarms, storage, notifications), Service Workers, Codeforces API

---

## 📦 Installation

1. Clone or download this repository.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** (top right).
4. Click **"Load unpacked"** and select the project folder.
5. The extension icon will appear in your browser toolbar.
6. Click the icon, enter your Codeforces handle, and you're all set!

---

## 📸 Screenshots

![ss](https://github.com/user-attachments/assets/6e1640c6-7220-4f6b-ad63-a2cbff5c5b30)

---

## 📬 How It Works

- When the extension is installed, it prompts the user to enter their Codeforces handle.
- Every minute, it fetches your current rating from the Codeforces API.
- If your rating has changed since the last check, it displays a Chrome notification with the new rating.
- Your handle and theme preference are saved locally using `chrome.storage`.

---

## 🙋‍♂️ Contribution

Contributions are welcome! Feel free to fork the project and submit a pull request for any enhancements or bug fixes.

---


