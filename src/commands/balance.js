const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(' ').toString().toLowerCase()) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]) || message.member;
    const user = await bot.fetchUser(member.id);
    const total = user.coinsInWallet + user.coinsInBank
    if (member.id === '787359727158820864') {
       const embed = new MessageEmbed()
        .setTitle(`> ${member.user.username}'s balance! ・ <:betabadge:813878825217687633>`)
        .setDescription(`╭. . : \`❐\`────────╮\n**Pocket:** ❀ ${user.coinsInWallet.toLocaleString()}\n**Bank:** ❀ ${user.coinsInBank.toLocaleString()} / ${user.bankSpace.toLocaleString()}\n**Trinkets:** ω ${user.trinkets.toLocaleString()}\n╰───────\`❐\` : . .╯`)
        .setColor('#f5da9f')
     return message.channel.send(embed);
    } else if (member.id === "799212372145078272") { 
      const embed = new MessageEmbed()
        .setTitle(`> ${member.user.username}'s balance! ・ <:betabadge:813878825217687633>`)
        .setDescription(`╭. . : \`❐\`────────╮\n**Pocket:** ❀ ${user.coinsInWallet.toLocaleString()}\n**Bank:** ❀ ${user.coinsInBank.toLocaleString()} / ${user.bankSpace.toLocaleString()}\n**Trinkets:** ω ${user.trinkets.toLocaleString()}\n╰───────\`❐\` : . .╯`)
        .setColor('#f5da9f')
     return message.channel.send(embed);
    } else {
      const embed = new MessageEmbed()
        .setTitle(`>  \`🌿\` ⏤・${member.user.username}'s balance`)
        .setDescription(`╭. . : \`❐\`────────╮\n**Pocket:** ❀ ${user.coinsInWallet.toLocaleString()}\n**Bank:** ❀ ${user.coinsInBank.toLocaleString()} / ${user.bankSpace.toLocaleString()}\n**Trinkets:** ω ${user.trinkets.toLocaleString()}\n ╰───────\`❐\` : . .╯`)
        .setColor('#f5da9f')
       return message.channel.send(embed);
    }
  
}   

module.exports.config = {
    name: 'balance',
    description: 'View yours or another user\'s balance! This displays your wallet, bank, and how much space you have in your bank currently.',
    usage: 'nem balance (user)',
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'],
    userPerms: [],
    aliases: ['bal', 'bank'],
    bankSpace: 0,
    cooldown: 0
}

