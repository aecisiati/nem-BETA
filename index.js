{
}
const config = require('./config.json');
const token = config.token;
const { Collection } = require('discord.js');
const MongoClient = require('./src/utils/MongoClient');
const bot = new MongoClient({
	ws: { intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'] },
	fetchAllMembers: false
});

bot.commands = new Collection();
bot.aliases = new Collection();
bot.cooldowns = new Collection();

require('./src/utils/handlers/command')(bot);
require('./src/utils/handlers/event')(bot);

bot.login(token);
