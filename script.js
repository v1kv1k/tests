document.addEventListener('DOMContentLoaded', () => {
    const livePhoto = document.getElementById('livePhoto');
    const video = livePhoto.querySelector('video');

    livePhoto.addEventListener('mouseenter', () => {
        video.play();
    });

    livePhoto.addEventListener('mouseleave', () => {
        video.pause();
        video.currentTime = 0;
    });
}); 