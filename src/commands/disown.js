const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const petss = require('../utils/pets');
const leveling = require('discord-leveling')
const { MessageEmbed } = require('discord.js');
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let user = await bot.fetchUser(message.author.id);
    if (!args.join(' ')) {
      
              let sell1embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`You forgot to type the pet's \`id\`.`);
              return message.channel.send(sell1embed);
        //////return message.channel.send("you can't sell nothing lmao");
      
    }
    const pet = petss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase() || x.name.toLowerCase() === args[0].toString().toLowerCase() || x.name.toLowerCase() === `${args[0].toString().toLowerCase()}`);
    if(args[1]){
        return message.channel.send(`Huh?`)
    }
    let sellAmount = args.join(' ').toString().match(/([1-9][0-9]*)/);
    if (!sellAmount) sellAmount = 1;
    else sellAmount = sellAmount[0]
    if (!pet) {
              let sell2embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`This pet is not sellable.`);
              return message.channel.send(sell2embed);
        //////return message.channel.send("can't sell this item");
    }
    let foundpet = user.pets.find(x => x.name.toLowerCase() === pet.name.toLowerCase());
    let array = [];
    array = user.pets.filter(x => x.name !== pet.name);
    if (!foundpet) {
              let sell3embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`You don't own this kind of pet.`);
              return message.channel.send(sell3embed);
        //////return message.channel.send("you don't have this item");
    }
    if (foundpet.amount < parseInt(sellAmount)) {
              let sell4embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`You only own **${foundpet.amount}** of this kind of pet.`);
              return message.channel.send(sell4embed);
     /////////return message.channel.send(`You only have ${founditem.amount} of this item`);
    }
    sellAmount = Math.floor(foundpet.amount * pet.sellAmount);
    user.pets = array
    leveling.SetLevel(message.author.id, 0)
    leveling.SetXp(message.author.id, 0)
    bot.resetPetHappy(message.author.id);
    bot.resetPetEnergy(message.author.id);
    await user.save();
    const embed = new MessageEmbed()
        .setTitle('> success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`**You disowned your** ${pet.description}\n╰─*Since you left your pet in the dark, you don't get any coins in return.*`)
        .setColor('#c4f2cc');
    message.channel.send(embed);
}

module.exports.config = {
    name: 'disown', // Command Name
    description: 'Disown your sad, lonely pet in exchange for a better one! :O', // Description
    usage: 'nem disown <pet id>', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 10, // Amount of bank space to give when command is used.
    cooldown: 2, // Command Cooldown
}
