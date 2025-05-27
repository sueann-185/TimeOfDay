// Simple update function
function updateColors() {
    // Get current hour
    const date = new Date();
    const hours = date.getHours();
    
    // Update time display
    document.getElementById('time').textContent = date.toLocaleTimeString();
    
    // Select color
    let color = '#FFFFFF'; // default
    if (hours >= 6 && hours < 12) {
        color = '#88CCCC';
    } else if (hours >= 12 && hours < 18) {
        color = '#DDDD33';
    } else if (hours >= 18 && hours < 21) {
        color = '#33CC66';
    } else {
        color = '#113333';
    }

    // Update color display
    document.body.style.backgroundColor = color;
    document.getElementById('color').textContent = color;
    document.getElementById('currentColor').style.backgroundColor = color;
}

// Update every second
updateColors();
setInterval(updateColors, 1000);