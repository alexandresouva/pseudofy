export const environment = {
  production: false
};

export const SpotifyConfiguration = {
  clientId: '8a2ac3b4fc76458b948f609a6c437970',
  authEndpoint: 'https://accounts.spotify.com/authorize',
  redirectUrl: 'http://localhost:4200/login/',
  scopes: [
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
    'user-library-read',
    'playlist-read-private',
    'playlist-read-collaborative'
  ]
};
