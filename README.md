# BigShaqBotJS
Ever wanted your very own version of BigShaq on your discord server? Well probably not but you can now do so anyway with BigShaqBotJS!

This is Big Shaq the one and only immortalised in a discord bot for all your Big Shaq needs.

## Building and Running

### Requirements
1. Node
2. NPM

### Running BigShaqBot
1. Clone the repo to wherever you intend on running the bot from.
2. Open the config.json file and copy your token from earlier into the token section.
```json
{
	"prefix": "bs!",
	"token": "TOKEN GOES HERE"
}
```
3. Run `npm ci` in the root directory of BigShaqBotJS.
4. Run `node index.js` in the root directory of BigShaqBotJS.

BigShaqBotJS should now be up and running.

## Adding BigShaqBot to a Server

### Setting up Discord Application
To setup BigShaqBot on your discord server the very first thing you will need to do is head over to the [Discord Developer Portal](https://discordapp.com/developers/applications/) and create a new application.

This application will be what your version of the bot will be so name it acordingly.

Then head to the Bot section and add a new bot. This will turn your application into a bot so that it can be invited to servers and do bot related things.

After that add an image for your bot along with a name if you want to and reveal the token provided. This token is important so take a note of this for later.

Now you have an application setup on Discord all you need to do is invite the bot to the server!

### Inviting BigShaqBot to Server
Head to the OAuth2 section of your new application and where it says `scopes` select the `bot` scope.

Then copy the link generated into your browser and add the bot to your server.

BigShaqBotJS should now be up and running on your server 😁
