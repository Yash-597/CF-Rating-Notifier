chrome.runtime.onInstalled.addListener(() => {
  chrome.alarms.create("checkCF", { periodInMinutes: 1 });

  chrome.runtime.openOptionsPage();
});

chrome.alarms.onAlarm.addListener(async (alarm) => {
  if (alarm.name === "checkCF") {
    chrome.storage.local.get("cfHandle", async (data) => {
      const handle = data.cfHandle;
      if (!handle) return;

      const apiUrl = `https://codeforces.com/api/user.info?handles=${handle}`;

      try {
        const res = await fetch(apiUrl);
        const json = await res.json();
        const currentRating = json.result[0].rating;

        chrome.storage.local.get("lastRating", (stored) => {
          if (stored.lastRating !== currentRating) {
            chrome.notifications.create({
              type: "basic",
              iconUrl: "icon.png",
              title: `${handle} Rating Updated!`,
              message: `New rating: ${currentRating}`,
            });
            chrome.storage.local.set({ lastRating: currentRating });
          }
        });
      } catch (err) {
        console.error("API error:", err);
      }
    });
  }
});
