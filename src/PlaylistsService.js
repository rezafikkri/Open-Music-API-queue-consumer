const { Pool } = require('pg');

class PlaylistsService {
  constructor() {
    this.pool = new Pool();
  }

  async getPlaylistSongs(playlistId) {
    const query = {
      text: `SELECT s.* FROM playlistsongs ps
      INNER JOIN songs s ON s.id = ps.song_id
      WHERE playlist_id = $1`,
      values: [playlistId],
    };
    const result = await this.pool.query(query);
    return result.rows;
  }
}

module.exports = PlaylistsService;
