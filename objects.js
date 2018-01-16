var playlist = {
  'The Weeknd': 'House of Balloons'
};

function updatePlaylist(playlist, artistName, songTitle){
  playlist[artistName] = songTitle;
  return playlist;
}

function removeFromPlaylist(playlist, artistame){
  delete playlist.artistName;
}