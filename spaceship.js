document.addEventListener('DOMContentLoaded', function() {
    // Create cursor elements
    const cursor = document.createElement('div');
    const follower = document.createElement('div');
    
    // Add classes to cursor elements
    cursor.classList.add('cursor');
    follower.classList.add('cursor-follower');
    
    // Append cursor elements to body
    document.body.appendChild(cursor);
    document.body.appendChild(follower);
    
    // Variables for cursor position
    let posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    // Smoothly update cursor position
    function mouseMoveAnimation() {
        posX += (mouseX - posX) * 0.1;
        posY += (mouseY - posY) * 0.1;
        
        // Update cursor positions
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
        
        requestAnimationFrame(mouseMoveAnimation);
    }

    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Start animation
    mouseMoveAnimation();

    // Add hover effect for clickable elements
    const links = document.querySelectorAll('a, button, .btn, .nav-links a, .portfolio-item, .social-links a');
    
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            cursor.classList.add('cursor-hover');
            follower.classList.add('cursor-hover');
        });
        
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('cursor-hover');
            follower.classList.remove('cursor-hover');
        });
    });
});