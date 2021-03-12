const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const msg = await message.channel.send(`pinging...`)
        const embed = new MessageEmbed()
            .setTitle('ping pong!')
            .setDescription(`Websocket ping is **${bot.ws.ping}MS**`)
            .setColor('#f5da9f')
            await message.channel.send(embed)
            msg.delete()
}
module.exports.config = {
    name: 'ping', // Command Name
    description: 'Displays nems ping!', // Description
    usage: 'nem ping', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
