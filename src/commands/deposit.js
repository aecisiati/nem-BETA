const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let data = await bot.fetchUser(message.author.id);
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;

    if (args.join(' ') === 'all'|| args.join(' ') === 'All' || args.join(' ') === 'max' || args.join(' ') === 'Max') {
        if (data.coinsInWallet > data.bankSpace) {
            const max_deposit = (data.coinsInWallet + data.coinsInBank - data.bankSpace);

          if (data.coinsInBank-data.bankSpace === 0) {
            let bankerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`Your bank is full!`);

            return message.channel.send(bankerrorembed).catch();
            //return message.channel.send("You don't have that much space in your bank. ");
        }
          
          
            data.coinsInWallet = max_deposit;
            let dep111embed = new MessageEmbed()
            .setColor("#c4f2cc")
            .setTitle(`**❀ ${(data.bankSpace - data.coinsInBank).toLocaleString()}** coins deposited.`);

            await message.channel.send(dep111embed).catch();
            //await message.channel.send(`Deposited **${data.bankSpace - data.coinsInBank}** coins.`);

            data.coinsInBank = ((data.coinsInWallet + data.bankSpace) - max_deposit);

            await data.save();
        } else {

            if ((data.coinsInWallet + data.coinsInBank) > data.bankSpace) {
                const left = (data.coinsInWallet + data.coinsInBank) - data.bankSpace;
                
            let begembed = new MessageEmbed()
            .setColor("#c4f2cc")
            .setTitle(`**❀ ${(data.coinsInWallet - left).toLocaleString()}** coins deposited.`);

            await message.channel.send(begembed).catch();
              
                //message.channel.send(`Deposited **${(data.coinsInWallet - left).toLocaleString()}** coins`);
                
                data.coinsInBank += (data.coinsInWallet - left);
                data.coinsInWallet = left;

                await data.save();
            } else {
            let dep111embed = new MessageEmbed()
            .setColor("#c4f2cc")
            .setTitle(`**❀ ${(data.coinsInWallet).toLocaleString()}** coins deposited.`);
            await message.channel.send(dep111embed).catch();
            //message.channel.send(`Deposited **${(data.coinsInWallet).toLocaleString()}** coins`);

                data.coinsInBank += data.coinsInWallet;
                data.coinsInWallet = 0;

                await data.save();
            }
        }
    } else {
        if (isNaN(args[0])) {
          let numbererrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`That's not a number.`);

            return message.channel.send(numbererrorembed).catch();
            //return message.channel.send('That\'s not a number.');
        }
        if ( data.bankSpace - data.coinsInBank < parseInt(args[0])) {
            let bankfullerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`Your bank is not big enough!`);

            return message.channel.send(bankfullerrorembed).catch();
            //return message.channel.send('Your bank is not big enough.');
        }
        if (parseInt(args[0]) > data.coinsInWallet) {
          let moneyerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`You don't have that much money.`);
            //return message.channel.send("You don't have that much money.");
        }

        data.coinsInBank += parseInt(args[0]);
            let depamountembed = new MessageEmbed()
            .setColor("#c4f2cc")
            .setTitle(`**❀ ${parseInt(args[0]).toLocaleString()}** coins deposited.`);

            await message.channel.send(depamountembed).catch();
        //await message.channel.send(`Deposited **${args[0]}** coins.`);

        data.coinsInWallet -= parseInt(args[0]);

        await data.save();
    }
}

module.exports.config = {
    name: 'deposit', // Command Name
    description: 'Deposit money into your bank to prevent robbers from stealing your hard earned cash!', // Description
    usage: 'nem deposit <amount>', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['dep'], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
