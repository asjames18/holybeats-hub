
//Spotify
fetch("https://api.spotify.com/v1/playlists/PLAYLIST_ID", {
    headers: { Authorization: "Bearer YOUR_ACCESS_TOKEN" }
  }).then(res => res.json());

  //Apple Music

  //Youtube
  fetch("https://www.googleapis.com/youtube/v3/search?part=snippet&q=christian+rap&type=video&key=YOUR_API_KEY")
  .then(res => res.json());

  //Soundcloud
  fetch("https://api.soundcloud.com/tracks?client_id=YOUR_CLIENT_ID&q=christian+hip+hop")
  .then(res => res.json());

