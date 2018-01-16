var playlist = {
  'The Weeknd': 'House of Balloons'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}