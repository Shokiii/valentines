let heartAnimationComplete = false;

// Function to create floating hearts
function createHearts() {
    const container = document.querySelector('.heart-float');
    const numHearts = 25; // Adjust the number of hearts as needed
    
    for (let i = 0; i < numHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heartfloating';
        heart.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        heart.style.top = Math.random() * 100 + 'vh'; // Random vertical position
        heart.style.animationDuration = Math.random() * 3 + 2 + 's'; // Random animation duration
        container.appendChild(heart);
    }
}

// Function to play audio when heart is clicked
function playAudio() {
    // Check if heart animation has completed
    if (!heartAnimationComplete) {
        const audio = new Audio('sound.mp3'); // Replace 'sound.mp3' with the path to your audio file
        audio.play();
    }
}

// Wait for the page to load
window.addEventListener('load', function() {
    // Select the heart container
    const heartContainer = document.getElementById('heart');
    const heartContaine = document.getElementById('heart-container');

    // Add event listener to the heart container to play audio when clicked
    heartContainer.addEventListener(playAudio);
    heartContainer.addEventListener(playAudio);
});


// Wait for the page to load
window.addEventListener('click', function() {
    // Select the heart and content elements
    const heart = document.getElementById('heart');
    const content = document.getElementById('content');
    // Animate the heart using GSAP
    gsap.to(heart, {
        duration: 4, // Animation duration in seconds
        scale: 25, // Scale up the heart (change this value as needed)
        opacity: 0, // Fade out the heart
        rotation: 360, // Rotate the heart 360 degrees
        
        ease: "power4.out", // Easing function
        
        onComplete: function() {
            // Hide the heart after the animation is complete
            heart.style.display = 'none';
            // Animate the content to appear
            if (!heartAnimationComplete){
            gsap.fromTo(content, {
                opacity: 0, // Initially set opacity to 0
                scale: 0.5 // Initially set scale to 0.5 (half size)
            }, {
                duration: 0.5, // Animation duration in seconds
                opacity: 1, // Fade in the content
                scale: 1, // Scale up to normal size
                ease: "power4.out", // Easing function
                onComplete: function() {
                    
                    // Call the function to create hearts after the first animation is completed
                    if (!heartAnimationComplete) {
                        createHearts();
                    // Show the heart container after the first animation is completed
                        document.querySelector('.heart-float').style.display = 'block';
                    }
                    heartAnimationComplete = true;
                }
            });
        }
        }
    });
});
window.addEventListener('click', playAudio);

