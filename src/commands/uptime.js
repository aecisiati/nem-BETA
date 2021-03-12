const { Client, Message, MessageEmbed } = require("discord.js")
const pm = require('pretty-ms');
const i = '<:infomation:779736273639440394>'
module.exports.run = async (bot, message, args) => {
    const Embed = new MessageEmbed()
    .setTitle(`\`🌿\` ⏤・Nem's Uptime: ${pm(bot.uptime)}`)
    .setColor("#f5da9f")
    message.channel.send(Embed);
}
module.exports.config = {
    name: 'uptime',
    description: 'See the bot\'s uptime',
    usage: 'nem uptime',
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'],
    userPerms: [],
    aliases: [],
    bankSpace: 1,
    cooldown: 5
}
