const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {

      const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

      const userData = await bot.fetchUser(message.author.id);

      let passivewarn = new MessageEmbed()
    .setColor("#eda098")
    .setDescription(`You have \`PASSIVE\` enabled! your reqired to disable it to use this command.`);
  
        if (userData.passive == true) return message.channel.send(passivewarn);
  
             
        let user = message.author;

             
        function isOdd(num) {
            if ((num % 2) == 0) return false;
            else if ((num % 2) == 1) return true;
        }

        let colour = args[0];
  
  let colorbad = new MessageEmbed()
            .setColor("#eda098")
            .setDescription(`**Invalid argument! Please choose a color from below.**`);
    let colorbadinfo = new MessageEmbed()
            .setColor("#f5da9f")
            .setDescription(`> **Info <:k_paper:816369802700259358>** 

  🔴 Red | Multiplier: x1.5
  \`roulette red (amount)\`
  ⚫ Black | Multiplier: x2
  \`roulette black (amount)\`
  🟡 Yellow | Multiplier: x2.5
  \`roulette yellow (amount)\`
  🟢 Green | Multiplier: x5
  \`roulette green (amount)\`
`);
/*
🔴Red | Multiplier: x1.5
\`h roulette red (amount)\`
⚫Black | Multiplier: x2
\`h roulette black (amount)\`
🟡 Yellow | Multiplier: x2.5
\`h roulette yellow (amount)\`
🟢Green | Multiplier: x5
\`h roulette green (amount)\`
*/
        if (!colour) return message.channel.send(colorbad).then(message.channel.send(colorbadinfo));
        //////////////////////////////////////////////////////////////////////////////////if (!!colour) return message.channel.send(colorbadinfo);
        colour = colour.toLowerCase()
  
        if (colour == "b" || colour.includes("black")) colour = 0;
        else if (colour == "r" || colour.includes("red")) colour = 1;
        else if (colour == "g" || colour.includes("green")) colour = 2;
        else if (colour == "y" || colour.includes("yellow")) colour = 3;
        else return message.channel.send(colorbad).then(message.channel.send(colorbadinfo));
  
        let betAmount = args[1];
  
      let coinswarn = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`Please enter the amount you want to gamble! `);
  
    if (!betAmount || isNaN(betAmount) && betAmount !== 'all' && betAmount !== 'max') return message.channel.send(coinswarn);
  
    let coinmin = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`The minimum you can gamble is \`100\` coins!`);

           if (betAmount < 100) return message.channel.send(coinmin);
    if (betAmount == 'all' || betAmount == 'max') betAmount=userData.coinsInWallet;
    else betAmount=parseInt(args[1]);
  
           if (betAmount == 'all' || betAmount == 'max') betAmount=userData.coinsInWallet;
           if (betAmount > userData.coinsInWallet) {
           return message.channel.send("You don't have that many coins!");
           }
  
        //let betAmount = args[1];
        let coinsInWallet = await bot.fetchUser(message.author.id);

        let random = Math.floor((Math.random() * 10));

        let moneyhelp = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
            .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
            .setDescription(`Please specify an amount to gamble!\n\nroulette <color> <amount>`);

        let moneymore = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
            .setThumbnail(member.user.displayAvatarURL({ format: 'png', size: 256, dynamic: true }))
            .setDescription(`You are betting more than you have!`);

        
        if (!betAmount) return message.channel.send(moneyhelp);
        if (betAmount > coinsInWallet) return message.channel.send(moneymore);

        if (random == 1 && colour == 2) { 
            betAmount *= 5
            bot.giveCoins(message.author.id, betAmount)
            let moneyEmbed1 = new MessageEmbed()
                .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png?width=442&height=442')
                .setColor("#c4f2cc")
                .setTitle(`> ${member.user.username}'s roulette game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                .setDescription(`*Let's see what you got!*\n\n> Colour: \`🟢\`  \n> **Multiplier:** **x5**  \n\n **Winnings:** **❀ ${betAmount.toLocaleString()}** coins`)
            message.channel.send(moneyEmbed1)
          
        } else if (isOdd(random) && colour == 1) { 
            betAmount = parseInt(betAmount * 1.5)
            bot.giveCoins(message.author.id, betAmount)
            let moneyEmbed2 = new MessageEmbed()
                .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png?width=442&height=442')
                .setTitle(`> ${member.user.username}'s roulette game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                .setColor("#c4f2cc")
                .setDescription(`*Let's see what you got!*\n\n> Colour: \`🔴\` \n> Multiplier: \`x1.5\`  \n\n **Winnings:** **❀ ${betAmount.toLocaleString()}** coins`);
            message.channel.send(moneyEmbed2)
          
          } else if (random == 1 && colour == 3) { 
            betAmount = parseInt(betAmount * 2.5)
            bot.giveCoins(message.author.id, betAmount)
            let moneyEmbed4 = new MessageEmbed()
                .setTitle(`> ${member.user.username}'s roulette game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png?width=442&height=442')
                .setColor("#c4f2cc")
                .setDescription(`*Let's see what you got!*\n\n> Colour: \`🟡\` \n> Multiplier: \`x1.5\`  \n\n **Winnings:** **❀ ${betAmount.toLocaleString()}** coins`);
            message.channel.send(moneyEmbed4)
            
        } else if (!isOdd(random) && colour == 0) { 
            betAmount = parseInt(betAmount * 2)
            bot.giveCoins(message.author.id, betAmount)
            let moneyEmbed3 = new MessageEmbed()
                .setTitle(`> ${member.user.username}'s roulette game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png?width=442&height=442')
                .setColor("#c4f2cc")
                .setDescription(`*Let's see what you got!*\n\n> Colour: \`⚫\` \n> Multiplier: \`x1.5\`  \n\n **Winnings:** **❀ ${betAmount.toLocaleString()}** coins`);
            message.channel.send(moneyEmbed3)
          
        } else { 
        const lostCoins = (betAmount);
        userData.coinsInWallet -= parseInt(betAmount);
        await userData.save();
            let moneyEmbed4 = new MessageEmbed()
                .setTitle(`> ${member.user.username}'s roulette game <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png?width=442&height=442')
                .setColor("#eda098")
                .setDescription(`You lost **❀ ${betAmount.toLocaleString()}** coins! \n╰─*Try again next time.*`);
            message.channel.send(moneyEmbed4)
        }

    }


module.exports.config = {
    name: 'roulette', // Command Name
    description: 'Gamble your coins away or gain big!', // Description
    usage: 'nem roulette', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['roul'], // Aliases 
    bankSpace: 100, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
