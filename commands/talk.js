module.exports = {
  name: "talk",
  description: "🎶 Yo Big Shaq 🎶",
  execute(message) {
    if (!message.guild) return;

    if (message.member.voiceChannel) {
      message.member.voiceChannel
        .join()
        .then((connection) => {
          message.reply("I have successfully connected to the channel!");
          connection.playFile("sounds/big-shaq-mans-not-hot-music-video.mp3");
        })
        .catch(console.log);
    } else {
      message.reply("You need to join a channel first");
    }
  }
};
