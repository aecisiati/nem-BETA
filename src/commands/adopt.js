const { MessageEmbed } = require('discord.js');
const petss = require('../utils/pets');
const economy = require('../models/EconomyModel')
const beta = ['']

module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let user = await bot.fetchUser(message.author.id);
    if (!args.join(' ')) {
            let buynothingerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`You can't adopt nothing! Please enter the correct pet \`id\`.`)

            return message.channel.send(buynothingerrorembed).catch();
        //return message.channel.send("you can't buy nothing, please enter the correct item id");
    }
    const pet = petss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase() || x.name.toLowerCase() === args[0].toString().toLowerCase() || x.name.toLowerCase() === `${args[0].toString().toLowerCase()}`);
    if (!pet) {
            let wrongiderrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`You can't buy a pet that doesn't exist! Please use the correct pet \`id\`.`);

            return message.channel.send(wrongiderrorembed).catch();
        //return message.channel.send("You can't buy an item that doesn't exist please use the correct item id");
    }
    if (pet.canBuy == false) {
            let cantbuyerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`I'm sorry, this pet isn't able to be purchased!`);

            return message.channel.send(cantbuyerrorembed).catch();
        //return message.channel.send(":thinking: You can't buy this item");
    }
    if (pet.price > user.trinkets) {
            let nomoneyerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`You don't have the funds to purchase this pet!`);

            return message.channel.send(nomoneyerrorembed).catch();
        //return message.channel.send("You dont have the funds to buy this item.");
    }
    let foundpet = user.pets.find(x => x.name.toLowerCase() === pet.name.toLowerCase());
    let array = [];
    array = user.pets.filter(x => x.name !== pet.name);

    if(foundpet){
        let nomoneyerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`You already own that kind of species!`);
        return message.channel.send(nomoneyerrorembed)
    } else if (user.pets.length > 0) {
        let nomoneyerrorembed = new MessageEmbed()
        .setColor("#eda098")
        .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
        .setDescription(`You have already reached your max of adopting 1 pet!`);
        return message.channel.send(nomoneyerrorembed)
    } else if(!foundpet) {
        user.pets.push({
        name: pet.name,
        description: pet.description,
        type: pet.type,
        social: pet.social,
        about: pet.about,
        symbol: pet.symbol
    });
    await user.save();
    }
        
    user.trinkets -= (parseInt(pet.price));
    await user.save();
            let itempayedembed = new MessageEmbed()
            .setColor('#c4f2cc')
            .setTitle('> success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
            .setDescription(`**You successfully adopted a** ${pet.description}\n╰─*Take care of them!*`);

            message.channel.send(itempayedembed).catch();
    //message.channel.send(`You bought **${parseInt(buyAmount).toLocaleString()}** \`${item.name}\``);
}

module.exports.config = {
    name: 'adopt', // Command Name
    description: 'Purchase pets from the shop. You can take care of it, play with it and much more! Hopefully you dont disown your pet.', // Description
    usage: 'nem adopt <pet id>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 2 // Command Cooldown
}
