// JavaScript to apply animations to the divs based on user input
const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const box3 = document.getElementById('box3');

// Function to apply the animation to a specific box
function applyAnimationToBox(box, animationName) {
    box.style.animationName = animationName;
}

// Prompt the user to choose a box number
const boxNumber = parseInt(prompt("Choose a box number (1. red, 2. blue, 3. green):"));

// Prompt the user to choose an animation type
const animationType = prompt("Choose an animation type: 'moveEdge', 'rotateScale', 'randomColor' 'allAnimations'");

// Check the selected box number and apply the animation accordingly
if (boxNumber === 1) {
    applyAnimationToBox(box1, animationType);
} else if (boxNumber === 2) {
    applyAnimationToBox(box2, animationType);
} else if (boxNumber === 3) {
    applyAnimationToBox(box3, animationType);
} else if (boxNumber === 1, 2, 3) {
    applyAnimationToBox(box, animationType);

    // alert("Invalid box number. Please choose 1, 2, or 3.");
}