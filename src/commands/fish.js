const itemss = require('../utils/items');
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


const item = itemss.find(x => x.name.toLowerCase() === 'fishingrod');  
let founditem = user.items.find(x => x.name.toLowerCase() === 'fishingrod');
    let array = [];
    array = user.items.filter(x => x.name !== 'fishingrod');
    if (!founditem) {
              let use3embed = new MessageEmbed()
              .setColor("#eda098")
              .setDescription(`You don't own a \`FISHINGROD\`!\n ╰─*You need to buy one to use this command!*`);
              return message.channel.send(use3embed);
        //////return message.channel.send("you don't have this item");
    }
  
  

const randomMessage = [
  'common',
  'uncommon',
  'rare',
  'veryrare',
  'legendary',
  'missed'
    ];
  
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
  
    const userData = await bot.fetchUser(message.author.id);
    
    if (response == 'common') {
        
        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedcommon = new MessageEmbed()
        .setTitle('>  \`🌿\` ⏤・fishing...')
        .setDescription(`*You got something!* Type \`reel\` in order to get it!`)
        .setColor("#f5da9f")
        message.channel.send(Embedcommon);
        let filter = m => m.author.id === message.author.id;
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 25000,
            errors: ['time']
        }).then(message => {
            message = message.first()
            if (message.content === 'reel' || message.content === 'Reel') {
                const findItem = data.items.find(i => i.name.toLowerCase() == 'common');
                let userInv = data.items.filter(i => i.name.toLowerCase() !== 'common');
                if (findItem) {
                userInv.push({ name: 'common', amount: (findItem.amount + fishAmount), description: '<:f_commonfish:816418641619976273> **Common Fish**', type: `Sellable` });
                data.items = userInv;
                data.save();
                } else {
                userInv.push({ name: 'common', amount: fishAmount, description: '<:f_commonfish:816418641619976273> **Common Fish**', type: `Sellable` });
                data.items = userInv;
                data.save();
                }
                let reele = new MessageEmbed()
                .setTitle('>  \`🌿\` ⏤・fishing... ')
                .setColor("#c4f2cc")
                .setDescription(`You did it! You got **${fishAmount}** Common Fish <:f_commonfish:816418641619976273>\n ╰─*Sell it to earn some extra coins!*`);
            return message.channel.send(reele)
            } else {
                let wrong = new MessageEmbed()
                .setTitle('> aww... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription('*Nope! Sorry, but you didnt type the correct word, and the fish got away!*')
                .setColor("#c4f2cc")
                return message.channel.send(wrong)
            }
        }).catch(_ => {
            let timeout = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
            .setDescription(`You took too long to answer!`);
            return message.channel.send(timeout).catch();
        })
        //message.channel.send(`You went fishing and came back with **${fishAmount}** x  Common Fish 🐟`);
    } else if (response == 'uncommon') {        
        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embeduncommon = new MessageEmbed()
        .setTitle('>  \`🌿\` ⏤・fishing... ')
        .setDescription(`*You got something!* Type \`reel\` in order to get it!`)
        .setColor("#f5da9f")
        message.channel.send(Embeduncommon);
        let filter = m => m.author.id === message.author.id;
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 25000,
            errors: ['time']
        }).then(message => {
            message = message.first()
            if (message.content === 'reel' || message.content === 'Reel') {
                let reele = new MessageEmbed()
                .setTitle('> \`🌿\` ⏤・ fishing... ')
                .setColor("#c4f2cc")
                .setDescription(`You did it! You got **${fishAmount}** Uncommon Fish <:f_uncommon:816418784096157727> \n ╰─*Sell it to earn some extra coins!*`);
                const findItem = data.items.find(i => i.name.toLowerCase() == 'uncommon');
                let userInv = data.items.filter(i => i.name.toLowerCase() !== 'uncommon');
                if (findItem) {
                userInv.push({ name: 'uncommon', amount: (findItem.amount + fishAmount), description: '<:f_uncommon:816418784096157727>  **Uncommon Fish**', type: `Sellable` });
                data.items = userInv;
                data.save();
                } else {
                userInv.push({ name: 'uncommon', amount: fishAmount, description: '<:f_uncommon:816418784096157727>  **Uncommon Fish**', type: `Sellable` });
                data.items = userInv;
                data.save();
                }
            return message.channel.send(reele)
            } else {
                let wrong = new MessageEmbed()
                .setTitle('> aww... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription('> *Nope! Sorry, but you didnt type the correct word, and the fish got away!*')
                .setColor("#c4f2cc")
                return message.channel.send(wrong)
            }
        }).catch(_ => {
            let timeout = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
            .setDescription(`You took too long to answer!`);
            return message.channel.send(timeout).catch();
        })
        //message.channel.send(`You went fishing and came back with **${fishAmount}** x  Uncommon Fish 🐠`);
    } else if (response == 'rare') {

        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedrare = new MessageEmbed()
        .setTitle('> \`🌿\` ⏤・ fishing... ')
        .setDescription(`*You got something!* Type \`reel\` in order to get it!`)
        .setColor("#f5da9f")
        message.channel.send(Embedrare);
        let filter = m => m.author.id === message.author.id;
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 25000,
            errors: ['time']
        }).then(message => {
            message = message.first()
            if (message.content === 'reel' || message.content === 'Reel') {
                const findItem = data.items.find(i => i.name.toLowerCase() == 'rare');
                let userInv = data.items.filter(i => i.name.toLowerCase() !== 'rare');
                if (findItem) {
                    userInv.push({ name: 'rare', amount: (findItem.amount + fishAmount), description: '<:f_rare:816419715479371806>  **Rare Fish**', type: `Sellable` });
                    data.items = userInv;
                     data.save();
                } else {
                    userInv.push({ name: 'rare', amount: fishAmount, description: '<:f_rare:816419715479371806>  **Rare Fish**', type: `Sellable` });
                    data.items = userInv;
                    data.save();
                }
                let reele = new MessageEmbed()
                .setTitle('>  \`🌿\` ⏤・fishing...')
                .setColor("#c4f2cc")
                .setDescription(`You did it! You got **${fishAmount}** Rare Fish <:f_rare:816419715479371806> \n ╰─*Sell it to earn some extra coins!*`);
                return message.channel.send(reele)
                
            } else {
                let wrong = new MessageEmbed()
                .setTitle('> aww... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription('> *Nope! Sorry, but you didnt type the correct word, and the fish got away!*')
                .setColor("#c4f2cc")
                return message.channel.send(wrong)
            }
        }).catch(_ => {
            let timeout = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
            .setDescription(`You took too long to answer!`);
            return message.channel.send(timeout).catch();
        })
        
    } else if (response == 'veryrare') {

        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedveryrare = new MessageEmbed()
        .setTitle('>  \`🌿\` ⏤・fishing... ')
        .setDescription(`*You got something!* Type \`reel\` in order to get it!`)
        .setColor("#f5da9f")
        message.channel.send(Embedveryrare);
        let filter = m => m.author.id === message.author.id;
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 25000,
            errors: ['time']
        }).then(message => {
            message = message.first()
            if (message.content === 'reel' || message.content === 'Reel') {
                const findItem = data.items.find(i => i.name.toLowerCase() == 'veryrare');
                let userInv = data.items.filter(i => i.name.toLowerCase() !== 'veryrare');
                if (findItem) {
                    userInv.push({ name: 'veryrare', amount: (findItem.amount + fishAmount), description: '<:f_veryrare:816419570885328916> **Very Rare Fish**', type: `Sellable` });
                    data.items = userInv;
                    data.save();
                } else {
                    userInv.push({ name: 'veryrare', amount: fishAmount, description: '<:f_veryrare:816419570885328916> **Very Rare Fish**' , type: `Sellable` });
                    data.items = userInv;
                    data.save();
                }
                let reele = new MessageEmbed()
                .setTitle('>  \`🌿\` ⏤・fishing... ')
                .setColor("#c4f2cc")
                .setDescription(`You did it! You got **${fishAmount}** Very Rare Fish <:f_veryrare:816419570885328916>\n ╰─*Sell it to earn some extra coins!*`);
                return message.channel.send(reele)
            } else {
                let wrong = new MessageEmbed()
                .setTitle('> aww... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription('> *Nope! Sorry, but you didnt type the correct word, and the fish got away!*')
                .setColor("#c4f2cc")
                return message.channel.send(wrong)
            }
        }).catch(_ => {
            let timeout = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
            .setDescription(`You took too long to answer!`);
            return message.channel.send(timeout).catch();
        })
        } else if (response == 'legendary') {

        const fishAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedled = new MessageEmbed()
        .setTitle('>  \`🌿\` ⏤・fishing... ')
        .setDescription(`*You got something!* Type \`reel\` in order to get it!`)
        .setColor("#f5da9f")
        message.channel.send(Embedled);
        let filter = m => m.author.id === message.author.id;
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 2500,
            errors: ['time']
        }).then(message => {
            message = message.first()
            if (message.content === 'reel' || message.content === 'Reel') {
                const findItem = data.items.find(i => i.name.toLowerCase() == 'legendary');
                let userInv = data.items.filter(i => i.name.toLowerCase() !== 'legendary');
                if (findItem) {
                    userInv.push({ name: 'legendary', amount: (findItem.amount + fishAmount), description: `<:f_legendary:816421422951694407> **Legendary Whale**`, type: `Sellable` });
                    data.items = userInv;
                    data.save();
                } else {
                    userInv.push({ name: 'legendary', amount: fishAmount, description: `<:f_legendary:816421422951694407> **Legendary Whale** `, type: `Sellable` });
                    data.items = userInv;
                    data.save();
                }
                let legene = new MessageEmbed()
                .setTitle('>  \`🌿\` ⏤・woah! ')
                .setDescription(`WOAH! This is a big one! You got **${fishAmount}** **Legendary Whale** <:f_legendary:816421422951694407> \n ╰─*Sell it to earn some extra coins!* `)
                .setColor("#c4f2cc")
                return message.channel.send(legene)
            } else {
                let wrong = new MessageEmbed()
                .setTitle('> aww... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription('> *Nope! Sorry, but you didnt type the correct word, and the fish got away!*')
                .setColor("#c4f2cc")
                return message.channel.send(wrong)
            }
        }).catch(_ => {
            let timeout = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
            .setDescription(`You took too long to answer!`);
            return message.channel.send(timeout).catch();
        })
        
        } else if (response == 'missed') {
        const Embedmissed = new MessageEmbed()
        .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
        .setDescription(`You forgot to bring bait?! You suck at this.`)
        .setColor("#eda098")
        message.channel.send(Embedmissed);
        }
}
module.exports.config = {
    name: 'fish', // Command Name
    description: 'Fish random items from the shore! Catch a whale, or catch a tire! Who knows?', // Description
    usage: 'nem fish', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 100, // Amount of bank space to give when command is used.
    cooldown: 30// Command Cooldown
}
