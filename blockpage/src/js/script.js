// This file contains JavaScript functionality for the block page.
// It may handle user interactions, animations, or any dynamic content that enhances the user experience.

document.addEventListener('DOMContentLoaded', function() {
    const message = document.getElementById('block-message');
    const refreshButton = document.getElementById('refresh-button');

    // Display a random motivational quote
    const quotes = [
        "Access denied. But remember, every setback is a setup for a comeback!",
        "Oops! Looks like you hit a roadblock. Keep pushing forward!",
        "This page is blocked. But don't let that stop you from achieving your goals!",
        "Access restricted. Stay positive and keep trying!",
        "Blocked! But every challenge is an opportunity in disguise."
    ];
    
    message.textContent = quotes[Math.floor(Math.random() * quotes.length)];

    // Refresh button functionality
    refreshButton.addEventListener('click', function() {
        location.reload();
    });
});