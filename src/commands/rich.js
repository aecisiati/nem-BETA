
const { MessageEmbed } = require('discord.js');
const economy = require('../models/EconomyModel');

module.exports.run = async (bot, message, args) => {
let data = await economy.find().sort([['coinsInWallet', 'descending']])
    data = data.filter(x => message.guild.members.cache.get(x.userId) && message.guild.members.cache.get(x.userId).bot != true).slice(0, 6);
    if (data.length == 0) return message.channel.send('No rich people in this server!'); 
    
    const emojis = ['<:n_one:816534522807189534>', '<:n_two:816534584694407188>', '<:n_three:816534637454426122>'];
    data = data.map((x, i) => `${emojis[i] || '🔹'} **${x.coinsInWallet.toLocaleString()}** - ${bot.users.cache.get(x.userId).tag || 'Unknown#0000'}`);

    const embed = new MessageEmbed()
        .setTitle(`> Richest people in ${message.guild.name}`)
        .setDescription(`${data.join('\n')}`)
        .setColor('#f5da9f')
        .setThumbnail('https://media.discordapp.net/attachments/816429759713771561/816537111636607027/unknown.png?width=442&height=442')
        .setFooter('wish I had that much money');
    message.channel.send(embed);


    /*let array = [];
    const members = message.guild.members.cache.filter(member => !member.user.bot);
    for(const member of members.array()) {
        const user = await bot.fetchUser(member.user.id);
        array.push({
            tag: bot.users.cache.get(member.user.id).tag ? bot.users.cache.get(member.user.id).tag : 'Unknown#0000',
            coins: user.coinsInWallet ? user.coinsInWallet : 0
        });
    }
    const emojis = [':first_place:', ':second_place:', ':third_place:'];
    array = array.filter(user => user.coins > 0);
    if (array.length < 1) {
        return message.channel.send('No rich people in this server lmao');
    }
    array = array.sort((a, b) => {
        return b.coins - a.coins
    });
    array = array.slice(0, 6);
    array = array.map((x, i) => `${emojis[i] || '🔹'} **${x.coins.toLocaleString()}** - ${x.tag}`);
    const embed = new MessageEmbed()
        .setAuthor(`Richest people in ${message.guild.name}`)
        .setDescription(`${array.join('\n')}`)
        .setColor('RANDOM')
        .setFooter('wish I had that much money');
    message.channel.send(embed);*/
}
module.exports.config = {
    name: 'rich', // Command Name
    description: 'shows the richest people in your server!', // Description
    usage: 'nem rich', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI', 'ATTACH_FILES'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['leader', 'lb', 'leaderboard'], // Aliases 
    bankSpace: 1, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
