document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("handleInput");
  const saveBtn = document.getElementById("saveBtn");
  const status = document.getElementById("status");
  const current = document.getElementById("currentHandle");
  const toggleThemeBtn = document.getElementById("toggleTheme");
  const body = document.body;

  // Load existing handle
  chrome.storage.local.get(["cfHandle", "theme"], (data) => {
    if (data.cfHandle) {
      current.textContent = `Current saved handle: ${data.cfHandle}`;
      input.value = data.cfHandle;
    }

    // Load theme
    if (data.theme === "dark") {
      body.setAttribute("data-theme", "dark");
      toggleThemeBtn.textContent = "Light";
    }
  });

  // Save handle
  saveBtn.addEventListener("click", () => {
    const handle = input.value.trim();
    if (!handle) {
      status.textContent = "Please enter a valid handle.";
      status.style.color = "red";
      return;
    }

    chrome.storage.local.set({ cfHandle: handle }, () => {
      status.textContent = "Handle saved successfully!";
      status.style.color = "green";
      current.textContent = `Current saved handle: ${handle}`;
    });
  });

  // Toggle theme
  toggleThemeBtn.addEventListener("click", () => {
    const isDark = body.getAttribute("data-theme") === "dark";
    const newTheme = isDark ? "light" : "dark";
    body.setAttribute("data-theme", newTheme);
    toggleThemeBtn.textContent = isDark ? "Dark" : "Light";

    chrome.storage.local.set({ theme: newTheme });
  });
});
