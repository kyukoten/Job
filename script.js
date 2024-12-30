// Select the pricing text element and hover box
const pricingText = document.querySelector('.pricing-text'); // Pricing text
const hoverBox = document.querySelector('.hover-box'); // Hover box

// Add mouseover event to show hover box
pricingText.addEventListener('mouseover', function() {
    hoverBox.style.display = 'block'; // Show hover box
});

// Add mouseout event to hide hover box when mouse leaves pricing text
pricingText.addEventListener('mouseout', function() {
    if (!hoverBox.matches(':hover')) { // Check if mouse is not over the hover box
        hoverBox.style.display = 'none'; // Hide hover box
    }
});

// Add mouseover event to keep hover box visible when mouse is over it
hoverBox.addEventListener('mouseover', function() {
    hoverBox.style.display = 'block'; // Keep hover box visible
});

// Add mouseout event to hide hover box when mouse leaves hover box
hoverBox.addEventListener('mouseout', function() {
    hoverBox.style.display = 'none'; // Hide hover box
});

// Select text elements for the first, second, and third boxes
const textElement1 = document.querySelector('.new-rectangular-box .new-rectangular-box-text'); // First box text
const textElement2 = document.querySelector('.new-rectangular-box-2 .new-rectangular-box-text'); // Second box text
const textElement3 = document.querySelector('.new-rectangular-box-3 .new-rectangular-box-text'); // Third box text

// Add mouseover event to change color on hover for the first box
textElement1.addEventListener('mouseover', function() {
    textElement1.style.color = '#0030f9'; // Change color on hover
});

// Add mouseout event to revert color when not hovering for the first box
textElement1.addEventListener('mouseout', function() {
    textElement1.style.color = '#000000'; // Revert to original color
});

// Add mouseover event to change color on hover for the second box
textElement2.addEventListener('mouseover', function() {
    textElement2.style.color = '#0030f9'; // Change color on hover
});

// Add mouseout event to revert color when not hovering for the second box
textElement2.addEventListener('mouseout', function() {
    textElement2.style.color = '#000000'; // Revert to original color
});

// Add mouseover event to change color on hover for the third box
textElement3.addEventListener('mouseover', function() {
    textElement3.style.color = '#0030f9'; // Change color on hover
});

// Add mouseout event to revert color when not hovering for the third box
textElement3.addEventListener('mouseout', function() {
    textElement3.style.color = '#000000'; // Revert to original color
});