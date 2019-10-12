const converter = require('scuffed-text');

module.exports = {
	name: 'convert',
	description: "ThIs Is SeLf ExPlAnItOrY",
	execute(message) {
    let input = message.content;
    input = input.split('bs!convert ').pop();

    let output = converter(input);
		message.channel.send(output);
	},
};