const { MessageEmbed } = require('discord.js');
const prettyMilliseconds = require('pretty-ms');

module.exports.run = async (bot, message, args) => {

  const member = message.member;
    let user = await bot.fetchUser(message.author.id);
    if ((Date.parse(user.dailyStreak) + 86400000) > Date.now()) {
        const embed = new MessageEmbed()
            .setTitle('> slow down!! <a:panic:805883559981744199> <a:wrhibud8:802298776308023316>')
            .setDescription(`This command is on a cooldown!\n╰─*You can run this command again in : \`${prettyMilliseconds((Date.parse(user.dailyStreak) + 86400000) - Date.now())}\`.*`)
            .setColor("#f5da9f")
        return message.channel.send(embed);
    } else {
        const amount = 2500;
        const claimed = new MessageEmbed()
        .setColor("#f5da9f")
        .setTitle('> 𓂃 ．⸝⸝ daily coins!')
        .setDescription(`you've collected your daily reward of **❀ ${amount.toLocaleString()}** coins!`)
        .addFields(
          {
            name:'> hmm.. how do i get more coins? <:girlhmmthink:804652502951395368>',
            value: 'you can get more ❀ by voting for nem!',
          }
        )
        message.channel.send(claimed);
        bot.giveCoins(message.author.id, 2500)
       user.save().then(user.dailyStreak = new Date(Date.now()))
      
    }
}

module.exports.config = {
    name: 'daily', // Command Name
    description: 'Daily Reward.', // Description
    usage: 'nem daily', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 100, // Amount of bank space to give when command is used.
    cooldown: 0.1 // Command Cooldown
}
