const Canvas = require('canvas');
const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
  const canvas = Canvas.createCanvas(1000, 500);
  const ctx = canvas.getContext('2d');

  if(message.author.id !== "295032461862109186") return;
  const background = await Canvas.loadImage('https://media.discordapp.net/attachments/816416430303739967/816589575186284564/unknown.png?width=884&height=442')
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)

  const avatar = await Canvas.loadImage('https://media.discordapp.net/attachments/816416430303739967/816594550360506368/unknown.png')
  ctx.drawImage(avatar, 50, -50, 400, canvas.height)

  const pigtext = await Canvas.loadImage('https://media.discordapp.net/attachments/816416430303739967/816596262856949770/unknown.png?width=884&height=442')
  ctx.drawImage(pigtext, 110, -10, 900, canvas.height)

  const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'test.jpeg')

  message.channel.send(attachment)
}

module.exports.config = {
    name: 'test', // Command Name
    description: '', // Description
    usage: 'nem test', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 1 // Command Cooldown
}