const itemss = require('../utils/items');
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
  const usertag = message.member;
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(' ').toString().toLowerCase()) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]) || message.member;
    const authorData = await bot.fetchUser(message.author.id);
    const memberData = await bot.fetchUser(member.id)

    
    let passivewarn2 = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`I'm sorry but the user you are trying to donate to has \`PASSIVE\` enabled.\n╰─*They are required to disable it to recieve items.*`);
  
        if (memberData.passive == true) return message.channel.send(passivewarn2);

    let passivewarn = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`I'm sorry but you have \`PASSIVE\` enabled.\n╰─*You are required to disable it to use this command.*`);
  
        if (authorData.passive == true) return message.channel.send(passivewarn);

    let gifttooembed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`Who are you giving items to ?`);
    if (!member) return message.channel.send(gifttooembed).catch();
    //if (!member) return message.channel.send(`Who are you giving items to huh?`);

    let giftselfembed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`Are you that lonely you try to gift items to yourself?`);
    if (member.user.id == message.author.id) return message.channel.send(giftselfembed).catch();
    //if (member.user.id == message.author.id) return message.channel.send(`Lol you can't gift your self.`);

    let nogiftembed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`So youre... giving them nothing?`);
    if (!args[1]) return message.channel.send(nogiftembed).catch();
    //if (!args[1]) return message.channel.send(`So you are giving nothing to them???`);

    const userData = await bot.fetchUser(member.user.id);
    const authoData = await bot.fetchUser(message.author.id);
    if (!args[1]) args[1] = '';
    if (!args[2]) args[2] = '';
    const itemToGive = itemss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase() || x.name.toLowerCase() === args[1].toString().toLowerCase() || x.name.toLowerCase() === `${args[1].toString().toLowerCase()} ${args[2].toString().toLowerCase()}`);

    let giftnothingembed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`The item you are trying to gift doesn't even exist.`);
    if (!itemToGive) return message.channel.send(giftnothingembed).catch();
    //if (!itemToGive) return message.channel.send(`That items doesn't even exist lol`);

    let authoItem = authoData.items.find(i => i.name.toLowerCase() == itemToGive.name.toLowerCase());

    let userItem = userData.items.find(i => i.name.toLowerCase() == itemToGive.name.toLowerCase());

    let noitemgidtembed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`You don't own that item.`);
    if (!authoItem) return message.channel.send(noitemgidtembed).catch();
    //if (!authoItem) return message.channel.send(`You don't own that item.`);

    let giveAmount = args.slice(1).join(' ').toString().match(/([1-9][0-9]*)/);

    if (!giveAmount) giveAmount = 1;

    else giveAmount = giveAmount[0];

    let itemamountembed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`I'm sorry but you only have **${parseInt(authoItem.amount).toLocaleString()}** of that item.`);
    if (parseInt(giveAmount) > parseInt(authoItem.amount)) return message.channel.send(itemamountembed).catch();
    //if (parseInt(giveAmount) > parseInt(authoItem.amount)) return message.channel.send(`You only have **${parseInt(authoItem.amount).toLocaleString()}** of that item`);

    let authorArray = authoData.items.filter(i => i.name.toLowerCase() !== authoItem.name.toLowerCase());

    let userArray = userData.items.filter(i => i.name.toLowerCase() !== authoItem.name.toLowerCase());

    if (!userItem) {
        userArray.push({ name: itemToGive.name.toString(), amount: parseInt(giveAmount), description: itemToGive.description, type: itemToGive.type});
        userData.items = userArray;
    } else {
        userArray.push({ name: itemToGive.name.toString(), amount: (parseInt(userItem.amount) + parseInt(giveAmount)), description: itemToGive.description, type: itemToGive.type });
        userData.items = userArray;
    }
    await userData.save();
    if ((authoItem.amount-parseInt(giveAmount)) == 0) {
        authoData.items = authorArray;
    } else {
        authorArray.push({ name: itemToGive.name.toString(), amount: (parseInt(authoItem.amount) - parseInt(giveAmount)), description: itemToGive.description, type: itemToGive.type });
        authoData.items = authorArray;
    }
    await authoData.save();

    let messageembeditem = new MessageEmbed()
    .setColor("#c4f2cc")
    .setTitle(' \`🌿\` ⏤・success')
    .setDescription(`You successfully gave ${parseInt(giveAmount).toLocaleString() <= 1 ? parseInt(giveAmount).toLocaleString() + ` \`${itemToGive.name}\`` : parseInt(giveAmount).toLocaleString() + ` \`${itemToGive.name}s\``} to ${member.user}!`);
    message.channel.send(messageembeditem).catch();
    //message.channel.send(`${tick} You gave **${parseInt(giveAmount).toLocaleString()}** \`${itemToGive.name}\` to ${member.user}`);

}
module.exports.config = {
    name: 'gift', // Command Name
    description: 'Gift an item to an enemy or a friend!', // Description
    usage: 'nem gift <item id> <user>', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 7, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
