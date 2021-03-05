const itemss = require('../utils/items');
const bam = '<:f_branch:816414838246211594>'
const tre = '<:f_tree:816414291346718761>'
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;


    const item = itemss.find(x => x.name.toLowerCase() === 'axe');  
    let founditem = user.items.find(x => x.name.toLowerCase() === 'axe');
    let array = [];
    array = user.items.filter(x => x.name !== 'axe');
    if (!founditem) {
              let use3embed = new MessageEmbed()
              .setColor("#eda098")
              .setDescription(`You don't own an \`AXE\`!\n ╰─*You need to buy one to use this command!*`);
              return message.channel.send(use3embed);
        //////return message.channel.send("you don't have this item");
    }


    const randomMessage = [
        'branch',
        'berries',
        'tree'
    ];
        
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
        
    const userData = await bot.fetchUser(message.author.id);

    if (response == 'berries') {
        
        const chopAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedleaves = new MessageEmbed()
        .setTitle('>  \`🌿\` ⏤・chopping... ')
        .setDescription(`*Well, you chopped something!* Type \`timber\` in order to grab it!`)
        .setColor("#f5da9f")
        message.channel.send(Embedleaves);
        let filter = m => m.author.id === message.author.id;
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 25000,
            errors: ['time']
        }).then(message => {
            message = message.first()
            if (message.content === 'timber' || message.content === 'Timber') {
                const findItem = data.items.find(i => i.name.toLowerCase() == 'berries');
                let userInv = data.items.filter(i => i.name.toLowerCase() !== 'berries');
                if (findItem) {
                    userInv.push({ name: 'berries', amount: (findItem.amount + chopAmount), description: `<:m_berries:816445290445799485> **Berries**`, type: `Sellable` });
                    data.items = userInv;
                    data.save();
                } else {
                    userInv.push({ name: 'berries', amount: chopAmount, description: `<:m_berries:816445290445799485> **Berries** `, type: `Sellable` });
                    data.items = userInv;
                    data.save();
                }
                let legene = new MessageEmbed()
                .setTitle('>  \`🌿\` ⏤・chopping... ')
                .setDescription(`You did it! You got **${chopAmount}** **Berries** <:m_berries:816445290445799485>\n ╰─*Sell it to earn some extra coins!* `)
                .setColor("#c4f2cc")
                return message.channel.send(legene)
            } else {
                let wrong = new MessageEmbed()
                .setTitle('> aww... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription(' *Nope! Sorry, but you didnt type the correct word, and the whole tree crushed you!*')
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
    } else if (response == 'tree') {
        const chopAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedbranch = new MessageEmbed()
        .setTitle('>  \`🌿\` ⏤・chopping... ')
        .setDescription(`*Well, you chopped something!* Type \`timber\` in order to grab it!`)
        .setColor("#f5da9f")
        message.channel.send(Embedbranch);
        let filter = m => m.author.id === message.author.id;
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 2500,
            errors: ['time']
        }).then(message => {
            message = message.first()
            if (message.content === 'timber' || message.content === 'Timber') {
                const findItem = data.items.find(i => i.name.toLowerCase() == 'tree');
                let userInv = data.items.filter(i => i.name.toLowerCase() !== 'tree');
                if (findItem) {
                    userInv.push({ name: 'tree', amount: (findItem.amount + chopAmount), description: `${tre} **Tree**`, type: `Sellable` });
                    data.items = userInv;
                    data.save();
                } else {
                    userInv.push({ name: 'tree', amount: chopAmount, description: `${tre} **Tree** `, type: `Sellable` });
                    data.items = userInv;
                    data.save();
                }
                let legene = new MessageEmbed()
                .setTitle('>  \`🌿\` ⏤・chopping...')
                .setDescription(`You did it! You got **${chopAmount <= 1 ? parseInt(chopAmount) + ` Tree** ${tre}` : parseInt(chopAmount) + ` Trees** ${tre}`}\n ╰─*Sell it to earn some extra coins!* `)
                .setColor("#c4f2cc")
                return message.channel.send(legene)
            } else {
                let wrong = new MessageEmbed()
                .setTitle('> aww... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription(' *Nope! Sorry, but you didnt type the correct word, and the whole tree crushed you!*')
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
    } else if (response == 'branch') {
        const chopAmount = Math.round(Math.random() * 1) + 1;
        const data = await bot.fetchUser(message.author.id);
        const Embedbranch = new MessageEmbed()
        .setTitle('>  \`🌿\` ⏤・chopping... ')
        .setDescription(`*Well, you chopped something!* Type \`timber\` in order to grab it!`)
        .setColor("#f5da9f")
        message.channel.send(Embedbranch);
        let filter = m => m.author.id === message.author.id;
        message.channel.awaitMessages(filter, {
            max: 1,
            time: 2500,
            errors: ['time']
        }).then(message => {
            message = message.first()
            if (message.content === 'timber' || message.content === 'Timber') {
                const findItem = data.items.find(i => i.name.toLowerCase() == 'branch');
                let userInv = data.items.filter(i => i.name.toLowerCase() !== 'branch');
                if (findItem) {
                    userInv.push({ name: 'branch', amount: (findItem.amount + chopAmount), description: `${bam} **Branch**`, type: `Sellable` });
                    data.items = userInv;
                    data.save();
                } else {
                    userInv.push({ name: 'branch', amount: chopAmount, description: `${bam} **Branch** `, type: `Sellable` });
                    data.items = userInv;
                    data.save();
                }
                let legene = new MessageEmbed()
                .setTitle('>  \`🌿\` ⏤・chopping... ')
                .setDescription(`You did it! You got **${chopAmount <= 1 ? parseInt(chopAmount) + ` Branch** ${bam}` : parseInt(chopAmount) + ` Branches** ${bam}`} \n ╰─*Sell it to earn some extra coins!* `)
                .setColor("#c4f2cc")
                return message.channel.send(legene)
            } else {
                let wrong = new MessageEmbed()
                .setTitle('> aww... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription('*Nope! Sorry, but you didnt type the correct word, and the whole tree crushed you!*')
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
    } 



}

module.exports.config = {
    name: 'chop', // Command Name
    description: 'Chops some wood down!', // Description
    usage: 'nem chop', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 100, // Amount of bank space to give when command is used.
    cooldown: 30 // Command Cooldown
}

