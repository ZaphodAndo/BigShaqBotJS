const converter = require('scuffed-text');

module.exports = {
	name: 'mock',
	description: "ThIs Is SeLf ExPlAnItOrY",
	execute(message) {
    message.channel.fetchMessages({ 
      limit: 2
    }).then((msgCollection) => {
      msgCollection.forEach((msg) => {
        if (msg.content != "bs!mock") {
          let output = converter(msg.content);
          message.channel.send(output);
        }
      });
    });
	},
};
