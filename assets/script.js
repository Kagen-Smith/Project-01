const song = document.getElementById('song');
const band = document.getElementById('band');
const genre = document.getElementById('genre');
const saveButton = document.getElementById('save');

function savePlaylist() {
  const playlist = {
    song: song.value,
    band: band.value,
    genre: genre.value
  };
  localStorage.setItem('playlist', JSON.stringify(playlist));
}

function renderPlaylist() {
  const lastPlaylist = JSON.parse(localStorage.getItem('playlist'));

  if (lastPlaylist !== null) {
    document.getElementById('saved-song').innerHTML = lastPlaylist.song;
    document.getElementById('saved-band').innerHTML = lastPlaylist.band;
    document.getElementById('saved-genre').innerHTML = lastPlaylist.genre;
  } else {
    return;
  }
}