document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const playlistLinks = document.querySelectorAll("#playlist a");

    playlistLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const songSrc = this.getAttribute("data-src");
            audioPlayer.src = songSrc;
            audioPlayer.play();
        });
    });
});
