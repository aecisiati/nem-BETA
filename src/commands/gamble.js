const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const botRoll = Math.floor(Math.random() * 13)+1;
    const userChoice = Math.floor(Math.random() * 13)+1;
    const userData = await bot.fetchUser(message.author.id);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  

    let passivewarn = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`I'm sorry but you have \`PASSIVE\` enabled! You are required to disable it to use this command.`);
  
    if (userData.passive == true) return message.channel.send(passivewarn);
  
  
    let betAmount = args[0];
    const result = userChoice-botRoll;
  
    let coinswarn = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`Please enter the amount you want to gamble. `);

    if (!betAmount || isNaN(betAmount) && betAmount !== 'all' && betAmount !== 'max') return message.channel.send(coinswarn);

    if(betAmount > 150000) {
      let coinmin = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`The maxiumum you can gamble is \`150k\` coins.`);
    }

  
    let coinmin = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`The minimum you can gamble is \`100\` coins.`);

           if (betAmount < 100) return message.channel.send(coinmin);
    if (betAmount == 'all' || betAmount == 'max') {
      betAmount=userData.coinsInWallet;
    } else  {
      betAmount=parseInt(args[0]);
    }
  
    let moneywarn = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`You dont have that many coins!`);

           if (betAmount > userData.coinsInWallet) {
           return message.channel.send(moneywarn);
           }
  
    if (botRoll < userChoice) {
        const wonCoins = parseInt(betAmount + (betAmount * 0.20));
        userData.coinsInWallet += parseInt(wonCoins);
        await userData.save();
        const wonEmbed = new MessageEmbed()
        .setColor('#c4f2cc')
        .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png?width=442&height=442')
        .setTitle(`> ${member.user.username}'s gambling game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
        .setDescription(`Win rate: \`${Math.floor(userChoice-botRoll)*10}%\`\n╰─Won: **❀ ${wonCoins.toLocaleString()}** coins\n`)
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
        await userData.save();
        const tieEmbed = new MessageEmbed()
        .setColor('#f5da9f')
        .setTitle(`> ${member.user.username}'s gambling game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
       .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png?width=442&height=442')
        .setDescription(`**${member.user.username}** & **Nem** Tied\n╰─Lost: **❀ ${tieCoins.toLocaleString()}** coins\n`)
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
        .setTitle(`> ${member.user.username}'s gambling game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
        .setDescription(`Lost rate: \`${Math.floor(botRoll-userChoice)*10}%\`\n╰─Lost: **❀ ${lostCoins.toLocaleString()}** coins\n`)
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
    name: 'gamble', // Command Name
    description: 'Gain a whole ton of coins, or lose all your life savings! Input your bet amount, and nem will randomly choose between you winning or losing.', // Description
    usage: 'nem gamble <amount>', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI', 'ATTACH_FILES'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['bet'], // Aliases 
    bankSpace: 150, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
