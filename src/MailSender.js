const nodemailer = require('nodemailer');

class MailSender {
  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.MAIL_ADDRESS,
        pass: process.env.MAIL_PASSWORD,
      },
    });
  }

  sendMail(targetEmail, content) {
    const message = {
      from: 'Open Music API',
      to: targetEmail,
      subject: 'Export lagu di dalam playlist',
      text: 'Terlampir hasil dari export lagu di dalam playlist',
      attachments: {
        filename: 'playlistSongs.json',
        content,
      },
    };

    return this.transporter.sendMail(message);
  }
}

module.exports = MailSender;
