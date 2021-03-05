const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const itemss = require('../utils/items');
const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let user = await bot.fetchUser(message.author.id);
    if (!args.join(' ')) {
      
              let sell1embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`You forgot to type the item's \`id\`.`);
              return message.channel.send(sell1embed);
        //////return message.channel.send("you can't sell nothing lmao");
      
    }
    if (!args[1]) args[1] = '';
    const item = itemss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase() || x.name.toLowerCase() === args[0].toString().toLowerCase() || x.name.toLowerCase() === `${args[0].toString().toLowerCase()} ${args[1].toString().toLowerCase()}`);
    let sellAmount = args.join(' ').toString().match(/([1-9][0-9]*)/);
    if (!sellAmount) sellAmount = 1;
    else sellAmount = sellAmount[0]
    if(item.sellAmount === false) {
      let sell2embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`This item is not sellable.`);
              return message.channel.send(sell2embed);
    } else { 
    if (!item) {
              let sell2embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`This item is not sellable.`);
              return message.channel.send(sell2embed);
        //////return message.channel.send("can't sell this item");
    }
    let founditem = user.items.find(x => x.name.toLowerCase() === item.name.toLowerCase());
    let array = [];
    array = user.items.filter(x => x.name !== item.name);
    if (!founditem) {
              let sell3embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`You don't have this item.`);
              return message.channel.send(sell3embed);
        //////return message.channel.send("you don't have this item");
    }
    if (args[1] == 'all' || args[2] == 'all' || args[1] == 'max' || args[2] == 'max') {
        sellAmount = Math.floor(founditem.amount * item.sellAmount);
        user.items = array
        user.coinsInWallet += (sellAmount);
        user.save();
        const embed = new MessageEmbed()
        .setTitle('> \`🌿\` ⏤・success')
            .setDescription(`You sold **${parseInt(sellAmount/item.sellAmount).toLocaleString()}** ${item.description} for **❀ ${(sellAmount).toLocaleString()}** coins!`)
            .setColor('#c4f2cc');
        return message.channel.send(embed);
    }
    if (founditem.amount < parseInt(sellAmount)) {
              let sell4embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`You only have **${founditem.amount}** of this item`);
              return message.channel.send(sell4embed);
     /////////return message.channel.send(`You only have ${founditem.amount} of this item`);
    }
    if (founditem.amount === 1) {
        user.items = array;
        await user.save();
    }
    else {
        if (founditem.amount - parseInt(sellAmount) == 0) {
            user.items = array;
            await user.save();
        } else {
            array.push({
                name: item.name,
                amount: (founditem.amount - parseInt(sellAmount)),
                description: item.description,
                type: item.type
            });
            user.items = array;
            await user.save();
        }
    }
    user.coinsInWallet += (item.sellAmount * parseInt(sellAmount));
    await user.save();
    const embed = new MessageEmbed()
        .setTitle('> \`🌿\` ⏤・success')
        .setDescription(`You sold **${parseInt(sellAmount).toLocaleString()}** ${item.description} for **❀ ${parseInt(item.sellAmount * sellAmount).toLocaleString()}** coins!`)
        .setColor('#c4f2cc');
    message.channel.send(embed);
  }
}

module.exports.config = {
    name: 'sell', // Command Name
    description: 'Sell items to earn coins.', // Description
    usage: 'nem sell <item id>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 10, // Amount of bank space to give when command is used.
    cooldown: 2 // Command Cooldown
}
