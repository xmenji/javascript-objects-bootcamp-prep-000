var playlist = {
  'The Weeknd': 'House of Balloons'
};

function updatePlaylist(playlist, artistName, songTitle){
 return Object.assign({}, playlist, {artistName : songTitle});
}