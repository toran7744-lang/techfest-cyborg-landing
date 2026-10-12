// Simple typewriter effect for the hero subtitle
const textToType = "Merging Man and Machine for IIT Bombay Techfest 2026. System Online.";
const typingElement = document.getElementById("typewriter");
let index = 0;

function typeText() {
    if (index < textToType.length) {
        typingElement.innerHTML += textToType.charAt(index);
        index++;
        // Randomize typing speed slightly for a more "human" terminal feel
        let typeSpeed = Math.floor(Math.random() * (100 - 40 + 1)) + 40; 
        setTimeout(typeText, typeSpeed);
    } else {
        // Add a blinking cursor at the end when done
        typingElement.innerHTML += '<span style="animation: blink 1s infinite;">_</span>';
    }
}

// Start the typing effect when the window loads
window.onload = () => {
    setTimeout(typeText, 500); // slight delay before starting
};

// Add blinking animation to CSS dynamically
const style = document.createElement('style');
style.innerHTML = `
@keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0; }
    100% { opacity: 1; }
}
`;
document.head.appendChild(style);