const itemss = require('../utils/items');
const { MessageEmbed } = require("discord.js");
const hd = '<:d_diamond:816410071172251678>'
const hr = '<:d_ruby:816410275116089364> '
const hg = '<:d_jade:816411787334778900>'
const ha = '<:d_amethyst:816410443295227936>'
const hp = '<:d_precious:816410650589790248> '

module.exports.run = async (bot, message, args) => {
  let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


const item = itemss.find(x => x.name.toLowerCase() === 'pickaxe');  
let founditem = user.items.find(x => x.name.toLowerCase() === 'pickaxe');
    let array = [];
    array = user.items.filter(x => x.name !== 'pickaxe');
    if (!founditem) {
              let use3embed = new MessageEmbed()
              .setColor("#eda098")
              .setDescription(`You don't own a \`PICKAXE\`!\n ╰─*You need to buy one to use this command!*`);
              return message.channel.send(use3embed);
        //////return message.channel.send("you don't have this item");
    }
  
  

const randomMessage = [
  'd','d','d','d','d',
  'r','r','r','r',
  'g','g','g',
  'a','a',
  'p',
  'missed','missed','missed','missed'
    ];
  
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
  
    const userData = await bot.fetchUser(message.author.id);
    
    if (response == 'd') {
        
        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embeddiamond = new MessageEmbed()
        .setTitle('> mining... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`You went mining and came back with **${Amount}** Diamond(s) ${hd}!`)
        .setColor("#c4f2cc")
        message.channel.send(Embeddiamond);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'diamond');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'diamond');
        if (findItem) {
            userInv.push({ name: 'diamond', amount: (findItem.amount + Amount), description: `${hd} **Diamond**`, type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'diamond', amount: Amount, description: `${hd} **Diamond**`, type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'r') {        
        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedruby = new MessageEmbed()
        .setTitle('> mining... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`you went mining and came back with **${Amount}** Ruby ${hr}.`)
        .setColor("#c4f2cc")
        message.channel.send(Embedruby);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'ruby');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'ruby');
        if (findItem) {
            userInv.push({ name: 'ruby', amount: (findItem.amount + Amount), description: `${hr} **Ruby**`, type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'ruby', amount: Amount, description: `${hr} **Ruby**`, type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
    } else if (response == 'g') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedgade = new MessageEmbed()
        .setTitle('> mining... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`you went mining and came back with **${Amount}** Jade ${hg}.`)
        .setColor("#c4f2cc")
        message.channel.send(Embedgade);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'jade');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'jade');
        if (findItem) {
            userInv.push({ name: 'jade', amount: (findItem.amount + Amount), description: `${hg} **Jade**`, type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'jade', amount: Amount, description: `${hg} **Jade**`, type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'a') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedveryrare = new MessageEmbed()
        .setTitle('> mining... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`you went mining and came back with **${Amount}** Amethyst ${ha}.`)
        .setColor("#c4f2cc")
        message.channel.send(Embedveryrare);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'amethyst');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'amethyst');
        if (findItem) {
            userInv.push({ name: 'amethyst', amount: (findItem.amount + Amount), description: `${ha} **Amethyst**`, type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'amethyst', amount: Amount, description: `${ha} **Amethyst**`, type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
          } else if (response == 'p') {

        const Amount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedled = new MessageEmbed()
        .setTitle('> mining... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`you went fishing and came back with **${Amount}** Precious ${hp}.`)
        .setColor("#c4f2cc")
        message.channel.send(Embedled);
        const findItem = data.items.find(i => i.name.toLowerCase() == 'precious');
        let userInv = data.items.filter(i => i.name.toLowerCase() !== 'precious');
        if (findItem) {
            userInv.push({ name: 'precious', amount: (findItem.amount + Amount), description: `${hp} **Precious**`, type: `Sellable` });
            data.items = userInv;
            await data.save();
        } else {
            userInv.push({ name: 'precious', amount: Amount, description: `${hp} **Precious**`, type: `Sellable` });
            data.items = userInv;
            await data.save();
        }
        } else if (response == 'missed') {
        const Embedmissed = new MessageEmbed()
        .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
        .setDescription(`Your pickaxe snapped in half! Why did you buy one from walmart?`)
        .setColor("#eda098")
        message.channel.send(Embedmissed);
        }
}
module.exports.config = {
    name: 'mine', // Command Name
    description: 'Use your pickaxe to find some gems.', // Description
    usage: 'nem mine', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 5, // Amount of bank space to give when command is used.
    cooldown: 30// Command Cooldown
}
