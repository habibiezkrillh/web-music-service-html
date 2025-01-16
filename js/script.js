document.addEventListener("DOMContentLoaded", function() {
    const audioPlayer = document.getElementById("audio-player");
    const floatingAudio = document.getElementById("floating-audio");
    const playlistLinks = document.querySelectorAll("#playlist a");

    playlistLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            event.preventDefault();
            const songSrc = this.getAttribute("data-src");
            audioPlayer.src = songSrc;
            floatingAudio.src = songSrc;
            audioPlayer.play();
            floatingAudio.play();
        });
    });
});
