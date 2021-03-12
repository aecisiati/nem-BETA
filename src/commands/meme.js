const { MessageEmbed } = require('discord.js');
const itemss = require('../utils/items');
const randomPuppy = require('random-puppy')
const got = require('got');

module.exports.run = async (bot, message, args) => { 
  got('https://www.reddit.com/r/dankmemes/random/.json').then(res => {
    let content = JSON.parse(res.body)
    message.channel.send(
        new MessageEmbed()
            .setTitle(content[0].data.children[0].data.title)
            .setImage(content[0].data.children[0].data.url)
            .setColor("#daaf60")
            .setFooter(`👍 ${content[0].data.children[0].data.ups} | 💬 : ${content[0].data.children[0].data.num_comments}`)
    )
  })
}

module.exports.config = {
    name: 'meme', // Command Name
    description: 'Some unfunny memes :P', // Description
    usage: 'nem meme', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI', 'ATTACH_FILES'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['meme'], // Aliases 
    bankSpace: 15, // Amount of bank space to give when command is used.
    cooldown: 1 // Command Cooldown
}

