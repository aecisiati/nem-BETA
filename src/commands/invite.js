const { MessageEmbed } = require('discord.js')
module.exports.run = async (bot, message, args) => {
    let embed = new MessageEmbed()
    .setTitle('> ;D you want to invite me? <a:emoon:802256873327034428>')
    .setDescription(`You can invite nem to your server by [clicking here!](https://discord.com/api/oauth2/authorize?client_id=803683520001343528&permissions=2147483639&scope=bot)`)
    .setColor('#f5da9f')

  await message.channel.send(embed)
}

module.exports.config = {
    name: 'invite', // Command Name
    description: 'Invite nem to your server!', // Description
    usage: 'nem invite', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 2, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
