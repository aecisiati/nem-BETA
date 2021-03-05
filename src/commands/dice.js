const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const botRoll = Math.floor(Math.random() * 7)+1;
    const userChoice = Math.floor(Math.random() * 7)+1;
    const userData = await bot.fetchUser(message.author.id);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let passivewarn = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`You have \`PASSIVE\` enabled! you are required to disable it to use this command!`);
  
    if (userData.passive == true) return message.channel.send(passivewarn);
  
    let betAmount = args[0];
    const result = userChoice-botRoll;
  
    let coinswarn = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`Please enter the amount you want to gamble. `);

    if (!betAmount || isNaN(betAmount) && betAmount !== 'all' && betAmount !== 'max') return message.channel.send(coinswarn);

    let coinmin = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`The minimum you can gamble is \`100\` coins!`);

    if (betAmount < 100) return message.channel.send(coinmin);

    if (betAmount == 'all' || betAmount == 'max') betAmount=userData.coinsInWallet;
    else betAmount=parseInt(args[0]);
  
    let moneywarn = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`You dont have that many coins!`);

           if (betAmount > userData.coinsInWallet) {
           return message.channel.send(moneywarn);
           }
  
    if (botRoll < userChoice) {
        const wonCoins = (betAmount + (betAmount * 0.20));
        userData.coinsInWallet += parseInt(wonCoins);
        await userData.save();
        const wonEmbed = new MessageEmbed()
        .setColor('#c4f2cc')
        .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png?width=442&height=442')
        .setTitle(`> ${member.user.username}'s dice game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
        .setDescription(`Winnings: **❀ ${wonCoins.toLocaleString()}** coins\n`)
        .addFields(
          {
            name: `${member.user.username}`,
            value: `Rolled \`${userChoice}\``,
            inline: true
          },
          {
            name: `Nem`,
            value: `Rolled \`${botRoll}\``,
            inline: true
          }
        )
        message.channel.send(wonEmbed);
    } else if (botRoll == userChoice) {
        const tieCoins = parseInt(betAmount/2);
        userData.coinsInWallet -= parseInt(tieCoins);
        userData.save();
        const tieEmbed = new MessageEmbed()
        .setColor('#f5da9f')
        .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png?width=442&height=442')
        .setTitle(`> ${member.user.username}'s dice game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
        .setDescription(`**${member.user.username}** & **Nem** Tied\nLost: **❀ ${tieCoins.toLocaleString()}** coins\n`)
        .addFields(
          {
            name: `${member.user.username}`,
            value: `Rolled \`${userChoice}\``,
            inline: true
          },
          {
            name: `Nem`,
            value: `Rolled \`${botRoll}\``,
            inline: true
          }
        )
        message.channel.send(tieEmbed);
    } else if (botRoll > userChoice) {
        const lostCoins = (betAmount);
        userData.coinsInWallet -= parseInt(betAmount);
        await userData.save();
        const lostEmbed = new MessageEmbed()
        .setColor('#eda098')
        .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png?width=442&height=442')
        .setTitle(`> ${member.user.username}'s dice game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
        .setDescription(`Lost: **❀ ${lostCoins.toLocaleString()}** coins\n`)
        .addFields(
          {
            name: `${member.user.username}`,
            value: `Rolled \`${userChoice}\``,
            inline: true
          },
          {
            name: `Nem`,
            value: `Rolled \`${botRoll}\``,
            inline: true
          }
        )
        message.channel.send(lostEmbed);
    }
}   
module.exports.config = {
    name: 'dice', // Command Name
    description: 'Gamble your savings and try to win big.', // Description
    usage: 'nem dice <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 100, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}

