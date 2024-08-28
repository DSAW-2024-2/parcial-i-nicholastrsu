document.addEventListener('DOMContentLoaded', function() {
    const shareButton = document.querySelector('.share-button');
    const shareOptions = document.querySelector('.share-options');

    shareButton.addEventListener('click', function() {
        shareOptions.classList.toggle('visible');
    });
});
