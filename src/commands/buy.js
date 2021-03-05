const { MessageEmbed } = require('discord.js');
const itemss = require('../utils/items');

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let user = await bot.fetchUser(message.author.id);
    if (!args.join(' ')) {
            let buynothingerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`You can't buy nothing! Please enter the correct item \`id\`.`);

            return message.channel.send(buynothingerrorembed).catch();
        //return message.channel.send("you can't buy nothing, please enter the correct item id");
    }
    if (!args[1]) args[1] = '';
    const item = itemss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase() || x.name.toLowerCase() === args[0].toString().toLowerCase() || x.name.toLowerCase() === `${args[0].toString().toLowerCase()} ${args[1].toString().toLowerCase()}`);
    if (!item) {
            let wrongiderrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`You can't buy an item that doesn't exist!! Please use the correct item \`id\`.`);

            return message.channel.send(wrongiderrorembed).catch();
        //return message.channel.send("You can't buy an item that doesn't exist please use the correct item id");
    }
    if (item.canBuy == false) {
            let cantbuyerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`I'm sorry, this item isn't able to be purchased!`);

            return message.channel.send(cantbuyerrorembed).catch();
        //return message.channel.send(":thinking: You can't buy this item");
    }
    let buyAmount = args.join(' ').toString().match(/([1-9][0-9]*)/)
    if (!buyAmount) buyAmount=1;
    else buyAmount = buyAmount[0]
    if (item.price > user.coinsInWallet || (buyAmount*item.price) > user.coinsInWallet) {
            let nomoneyerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`You don't have the funds to purchase this item!`);

            return message.channel.send(nomoneyerrorembed).catch();
        //return message.channel.send("You dont have the funds to buy this item.");
    }
     
    let founditem = user.items.find(x => x.name.toLowerCase() === item.name.toLowerCase());
    let array = [];
    array = user.items.filter(x => x.name !== item.name);
    if (founditem) {
        array.push({
            name: item.name,
            amount: (parseInt(founditem.amount) + parseInt(buyAmount)),
            description: item.description,
            type: item.type
        });
        user.items = array;
        await user.save();
    }
    else {
        user.items.push({
            name: item.name,
            amount: buyAmount,
            description: item.description,
            type: item.type
        });
        await user.save();
    }
    user.coinsInWallet -= (parseInt(item.price)*parseInt(buyAmount));
    await user.save();
            let itempayedembed = new MessageEmbed()
            .setColor('#c4f2cc')
            .setTitle('>  \`🌿\` ⏤・success')
            .setDescription(`You successfully purchased **${parseInt(buyAmount).toLocaleString() <= 1 ? parseInt(buyAmount).toLocaleString() + ` **\`${item.name}\`` : parseInt(buyAmount).toLocaleString() + ` **\`${item.name}s\``}`);

            message.channel.send(itempayedembed).catch();
    //message.channel.send(`You bought **${parseInt(buyAmount).toLocaleString()}** \`${item.name}\``);
}

module.exports.config = {
    name: 'buy', // Command Name
    description: 'Purchase items from the shop!', // Description
    usage: 'nem buy <item id>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 2 // Command Cooldown
}
