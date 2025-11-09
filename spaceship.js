document.addEventListener('DOMContentLoaded', function() {
    // Create cursor elements
    const cursor = document.createElement('div');
    const follower = document.createElement('div');
    cursor.classList.add('cursor');
    follower.classList.add('cursor-follower');
    document.body.appendChild(cursor);
    document.body.appendChild(follower);

    // Responsive cursor size
    function getCursorSize() {
        // Base size scales with viewport width, min/max for usability
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        const base = Math.max(6, Math.min(12, vw * 0.009)); // Reduced to 0.5x
        const followerBase = Math.max(18, Math.min(40, vw * 0.03)); // Reduced to 0.5x
        return { base, followerBase };
    }

    function setCursorSize() {
        const { base, followerBase } = getCursorSize();
        cursor.style.width = base + 'px';
        cursor.style.height = base + 'px';
        cursor.style.marginLeft = -(base/2) + 'px';
        cursor.style.marginTop = -(base/2) + 'px';
        follower.style.width = followerBase + 'px';
        follower.style.height = followerBase + 'px';
        follower.style.marginLeft = -(followerBase/2) + 'px';
        follower.style.marginTop = -(followerBase/2) + 'px';
    }

    setCursorSize();
    window.addEventListener('resize', setCursorSize);

    // Variables for cursor position
    let posX = 0,
        posY = 0,
        mouseX = 0,
        mouseY = 0;

    // Smoothly update cursor position
    function mouseMoveAnimation() {
        posX += (mouseX - posX) * 0.13;
        posY += (mouseY - posY) * 0.13;
        cursor.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
        follower.style.transform = `translate3d(${posX}px, ${posY}px, 0)`;
        requestAnimationFrame(mouseMoveAnimation);
    }

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

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