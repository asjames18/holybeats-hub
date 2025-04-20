app.get("/tracks", async (req, res) => {
    const spotifyTracks = await fetchSpotify();
    const youtubeTracks = await fetchYouTube();
    res.json([...spotifyTracks, ...youtubeTracks]);
  });