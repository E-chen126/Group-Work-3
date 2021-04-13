var myMusic = document.getElementById('myMusic');
var icon = document.getElementById('icon');

icon.onclick = function () {
  if (myMusic.paused) {
      myMusic.play();
      icon.src = 'images/pause.png';
    } else {
      myMusic.pause();
      icon.src = 'images/play.png';
    }
  };
