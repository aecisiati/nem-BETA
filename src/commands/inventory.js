const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const user = await bot.fetchUser(member.id);
    let number = 5 * parseInt(args[0])
    if (user.items.length <= 5) page = 1;
    else if (user.items.length <= 10) page = 2;
    else if (user.items.length <= 15) page = 3;
    else if (user.items.length <= 20) page = 4;
    else if (user.items.length <= 25) page = 5;
    else if (user.items.length <= 30) page = 6;
    else if (user.items.length <= 35) page = 7;
    else if (user.items.length <= 40) page = 8;
    else if (user.items.length <= 45) page = 9;
    else if (user.items.length <= 50) page = 10;
    else if (user.items.length <= 55) page = 11;
    else if (user.items.length <= 60) page = 12;
    else if (user.items.length <= 65) page = 13;
    else if (user.items.length <= 70) page = 14;
    else if (user.items.length <= 75) page = 15;

    if (!args[0]) {
        number = 5;
    }

    if(args[0] < 1) {
      return message.channel.send('Please input a number greater or equal to 1!')
    }

    let item = user.items.slice(number - 5, number);
    if (item.length < 1) {
      const empty = new MessageEmbed()
      .setTitle(`> \`🌿\` ⏤・${member.user.username}'s inventory `)
      .setDescription(`***There is nothing in this page!***`)
      .setColor('#f5da9f');
        return message.channel.send(empty);
    }
    const items = item.map(x => `${x.description} — ${x.amount.toLocaleString()}\n*ID* \`${x.name}\` — ${x.type}`);
    const embed = new MessageEmbed()
        .setTitle(`> \`🌿\` ⏤・${member.user.username}'s inventory `)
        .setDescription(`${items.join('\n\n')}`)
        .setFooter(`─ Page ${args[0] || 1} of ${page}`)
        .setColor('#f5da9f');
    message.channel.send(embed);

    
}

module.exports.config = {
    name: 'inventory', // Command Name
    description: "Displays your inventory.", // Description
    usage: 'nem inventory', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['inv'], // Aliases 
    bankSpace: 1, // Amount of bank space to give when command is used.
    cooldown: 1 // Command Cooldown

}
