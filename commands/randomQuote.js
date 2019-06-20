const { quotes } = require('../quotes.json');

module.exports = {
	name: 'randomquote',
	description: 'Big shaq showers you with a free quote!',
	execute(message, args) {
		let item = quotes.quotesArray[Math.floor(Math.random()*quotes.quotesArray.length)];
		message.channel.send(item);
	},
};