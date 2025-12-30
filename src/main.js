import './style.css'
import * as THREE from 'three'
import NET from 'vanta/dist/vanta.net.min'

// Initialize Vanta.NET Background
const initVanta = () => {
    try {
        NET({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            color: 0xffffff,       // White points
            backgroundColor: 0x000000, // Black bg
            points: 13.00,
            maxDistance: 22.00,
            spacing: 16.00,
            THREE: THREE // Pass the THREE instance
        })
        console.log("Vanta Initialized");
    } catch (error) {
        console.error("Vanta initialization failed:", error);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initVanta();
});
