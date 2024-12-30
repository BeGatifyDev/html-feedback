// Modal logic for video previews
const videoThumbnails = document.querySelectorAll('.video-thumbnail');
const videoModal = document.getElementById('videoModal');
const closeBtn = document.querySelector('.close');
const videoIframe = document.getElementById('videoIframe');

// Open modal when a thumbnail is clicked
videoThumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        const videoId = thumbnail.getAttribute('data-video-id');
        videoIframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;

        // Show modal with a fade-in effect
        videoModal.style.display = 'flex';
        setTimeout(() => {
            videoModal.classList.add('show');
        }, 50); // Delay to trigger animation
    });
});

// Close the modal
closeBtn.addEventListener('click', () => {
    videoModal.classList.remove('show');
    setTimeout(() => {
        videoModal.style.display = 'none';
    }, 300); // Delay to ensure smooth fade-out
    videoIframe.src = ''; // Stop the video when closing
});

// Close the modal if clicked outside of the content area
window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.classList.remove('show');
        setTimeout(() => {
            videoModal.style.display = 'none';
        }, 300); // Delay for fade-out effect
        videoIframe.src = ''; // Stop the video when closing
    }
});

// Responsive styling for iframe inside modal
const updateIframeSize = () => {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Adjust iframe size to ensure it fits well on smaller screens
    if (windowWidth < 768) {
        videoIframe.style.width = `${windowWidth - 40}px`; // Subtract some padding
        videoIframe.style.height = `${(windowWidth - 40) * 0.5625}px`; // 16:9 aspect ratio
    } else {
        videoIframe.style.width = '800px';
        videoIframe.style.height = '450px';
    }
};

// Adjust iframe size when the window is resized
window.addEventListener('resize', updateIframeSize);

// Initial iframe size update
updateIframeSize();
