const itemss = require('../utils/items');
const { MessageEmbed } = require("discord.js");
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
module.exports.run = async (bot, message, args) => {
  let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


const item = itemss.find(x => x.name.toLowerCase() === 'bow');  
let founditem = user.items.find(x => x.name.toLowerCase() === 'bow');
    let array = [];
    array = user.items.filter(x => x.name !== 'bow');
    if (!founditem) {
              let use3embed = new MessageEmbed()
              .setColor("#eda098")
              .setDescription(`You don't own a \`BOW AND ARROW\`!\n ╰─*You need to buy one to use this command!*`);
              return message.channel.send(use3embed);
        //////return message.channel.send("you don't have this item");
    }
  /*
  const findItem = data.items.find(i => i.name.toLowerCase() == 'rifle');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'rifle');
    if (!userInv < 1) {
      
              let use2embed = new MessageEmbed()
              .setColor("RED")
              .setDescription(`${x} **${member.user.username}** : You dont have this item make sure you have typed the correct \`id\`.`);
              return message.channel.send(use2embed);
    }
*/
  
  

const randomMessage = [
  'bear',
  'deer',
  'duck',
  'pig',
  'cow',
  'fox',
  'rabbit',
  'chicken',
  'boar',
  'missed'
    ];
  
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
  
    const userData = await bot.fetchUser(message.author.id);
    
    if (response == 'bear') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedBear = new MessageEmbed()
        .setTitle('> hunting... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`You went hunting and came back with **${deerAmount}** Bear <:f_bear:816424188448866364>`)
        .setColor("#c4f2cc")
        message.channel.send(EmbedBear);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Bear `);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'bear');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'bear');
        if (findItem) {
            userInv.push({ name: 'bear', amount: (findItem.amount + deerAmount), description: '<:f_bear:816424188448866364> **Bear**', type:  `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'bear', amount: deerAmount, description: '<:f_bear:816424188448866364> **Bear**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'deer') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedDeer = new MessageEmbed()
        .setTitle('> hunting... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`You went hunting and came back with **${deerAmount}** Deer <:f_deer:816424535652958228>`)
        .setColor("#c4f2cc")
        message.channel.send(EmbedDeer);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Deer 🦌`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'deer');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'deer');
        if (findItem) {
            userInv.push({ name: 'deer', amount: (findItem.amount + deerAmount), description: '<:f_deer:816424535652958228> **Deer**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'deer', amount: deerAmount, description: '<:f_deer:816424535652958228> **Deer**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'duck') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedDuck = new MessageEmbed()
        .setTitle('> hunting... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`You went hunting and came back with **${deerAmount}** Duck <:f_duck:816425281182236742>`)
        .setColor("#c4f2cc")
        message.channel.send(EmbedDuck);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Duck 🦆`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'duck');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'duck');
        if (findItem) {
            userInv.push({ name: 'duck', amount: (findItem.amount + deerAmount), description: '<:f_duck:816425281182236742> **Duck**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'duck', amount: deerAmount, description: '<:f_duck:816425281182236742> **Duck**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'pig') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedPig = new MessageEmbed()
        .setTitle('> hunting... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`You went hunting and came back with **${deerAmount}** Pig <:f_pig:816425950938005525>`)
        .setColor("#c4f2cc")
        message.channel.send(EmbedPig);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Pig 🐷`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'pig');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'pig');
        if (findItem) {
            userInv.push({ name: 'pig', amount: (findItem.amount + deerAmount), description: '<:f_pig:816425950938005525> **Pig**', type: `Sellable`});
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'pig', amount: deerAmount, description: '<:f_pig:816425950938005525> **Pig**', type: `Sellable`});
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'cow') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedCow = new MessageEmbed()
        .setTitle('> hunting... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`You went hunting and came back with **${deerAmount}** Cow <:f_cow:816427150588248104>`)
        .setColor("#c4f2cc")
        message.channel.send(EmbedCow);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Cow 🐮`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'cow');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'cow');
        if (findItem) {
            userInv.push({ name: 'cow', amount: (findItem.amount + deerAmount), description: '<:f_cow:816427150588248104> **Cow**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'cow', amount: deerAmount, description: '<:f_cow:816427150588248104> **Cow**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'fox') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedFox = new MessageEmbed()
        .setTitle('> hunting... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`You went hunting and came back with **${deerAmount}** Fox <:f_fox:816426321700978781>`)
        .setColor("#c4f2cc")
        message.channel.send(EmbedFox);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Fox 🦊`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'fox');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'fox');
        if (findItem) {
            userInv.push({ name: 'fox', amount: (findItem.amount + deerAmount), description: '<:f_fox:816426321700978781> **Fox**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'fox', amount: deerAmount, description: '<:f_fox:816426321700978781> **Fox**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'rabbit') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedRabbit = new MessageEmbed()
        .setTitle('> hunting... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`You went hunting and came back with **${deerAmount}** Rabbit <:f_rabbit:816424679815249921>`)
        .setColor("#c4f2cc")
        message.channel.send(EmbedRabbit);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Rabbit 🐰`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'rabbit');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'rabbit');
        if (findItem) {
            userInv.push({ name: 'rabbit', amount: (findItem.amount + deerAmount), description: '<:f_rabbit:816424679815249921> **Rabbit**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'rabbit', amount: deerAmount, description: '<:f_rabbit:816424679815249921> **Rabbit**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'chicken') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedChicken = new MessageEmbed()
        .setTitle('> hunting... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`You went hunting and came back with **${deerAmount}** Chicken <:f_chicken:816427791998124122>`)
        .setColor("#c4f2cc")
        message.channel.send(EmbedChicken);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Chicken 🐔`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'chicken');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'chicken');
        if (findItem) {
            userInv.push({ name: 'chicken', amount: (findItem.amount + deerAmount), description: '<:f_chicken:816427791998124122> **Chicken**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'chicken', amount: deerAmount, description: '<:f_chicken:816427791998124122> **Chicken**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'boar') {
        const deerAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const EmbedBoar = new MessageEmbed()
        .setTitle('> hunting... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`You went hunting and came back with **${deerAmount}** Boar <:f_boar:816428251316224090>`)
        .setColor("#c4f2cc")
        message.channel.send(EmbedBoar);
        //message.channel.send(`You went hunting and came back with **${deerAmount}** x Boar 🐗`);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'boar');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'boar');
        if (findItem) {
            userInv.push({ name: 'boar', amount: (findItem.amount + deerAmount), description: '<:f_boar:816428251316224090> **Boar**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'boar', amount: deerAmount, description: '<:f_boar:816428251316224090> **Boar**', type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'missed') {
        const Embedmissed = new MessageEmbed()
        .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
        .setDescription(`You missed at every single animal. Really?`)
        .setColor("#eda098")
        message.channel.send(Embedmissed);
        }
}
module.exports.config = {
    name: 'hunt', // Command Name
    description: 'use your rifle to hunt for animals.', // Description
    usage: 'nem hunt', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 100, // Amount of bank space to give when command is used.
    cooldown: 30// Command Cooldown
}
