class Listener {
  constructor(playlistsService, mailSender) {
    this.playlistsService = playlistsService;
    this.mailSender = mailSender;
  }

  async listen(message) {
    try {
      const { playlistId, targetEmail } = JSON.parse(message.content.toString());

      const songs = await this.playlistsService.getPlaylistSongs(playlistId);
      const result = await this.mailSender.sendMail(targetEmail, JSON.stringify(songs));

      console.log(message);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Listener;
