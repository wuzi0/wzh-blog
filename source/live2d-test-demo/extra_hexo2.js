// Check if the page is loaded through browser's back button
window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
        // Force reload the page
        location.reload();
    }
});