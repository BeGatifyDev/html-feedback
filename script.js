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
        videoModal.style.display = 'flex';
    });
});

// Close the modal
closeBtn.addEventListener('click', () => {
    videoModal.style.display = 'none';
    videoIframe.src = ''; // Stop the video when closing
});

// Close the modal if clicked outside of the content area
window.addEventListener('click', (event) => {
    if (event.target === videoModal) {
        videoModal.style.display = 'none';
        videoIframe.src = ''; // Stop the video when closing
    }
});
