function updateTime() {
    const timeElement = document.getElementById('time');
    const now = new Date();
    timeElement.textContent = now.toLocaleString();
}

// Update time when page loads
updateTime();
