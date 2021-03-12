const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const { MessageEmbed } = require("discord.js");
module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const userData = await bot.fetchUser(message.author.id);
    const enable = ['true','on','enable'];
    const disable = ['false','off','disable'];
    if (!args[0]) {
        let status = userData.passive
        if (status == false) status=`\`DISABLED\``
        else status=`\`ENABLED\``
        
        let passive1embed = new MessageEmbed()
        .setColor("#f5da9f")
        .setDescription(`> Your passive mode is curently ${status}.`);

            return message.channel.send(passive1embed).catch();
        //return message.channel.send(`Your passive mode is ${status}`);
    }
    if (enable.includes(args[0].toString().toLowerCase())) {
        let passive2embed = new MessageEmbed()
        .setColor("#f5da9f")
        .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
        .setDescription(`Your passive mode is already \`ENABLED\`!`);

        if (userData.passive == true) return message.channel.send(passive2embed).catch();
        //if (userData.passive == true) return message.reply(`You're already in passive mode`)

        userData.passive=true;
        await userData.save();

        let passive3embed = new MessageEmbed()
        .setColor("#f5da9f")
        .setTitle(`> enabled! <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
        .setDescription(`I have \`ENABLED\` your passive mode.`);

        message.channel.send(passive3embed).catch();
        //message.reply(`I have enabled your passive mode`);
    } else if (disable.includes(args[0].toString().toLowerCase())) {
         let passive4embed = new MessageEmbed()
        .setColor("#f5da9f")
        .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
        .setDescription(`Your passive mode is currently \`DISABLED\`!`);

        if (userData.passive == false) return message.channel.send(passive4embed).catch();
        //if (userData.passive == false) return message.reply(`You're not passive mode`);
        userData.passive=false;
        await userData.save();
        let passive5embed = new MessageEmbed()
        .setColor("#c4f2cc")
        .setTitle(`> disabled! <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
        .setDescription(`I have \`DISABLED\` your passive mode.`);

        message.channel.send(passive5embed).catch();
        //message.reply(`I have disabled your passive mode`);
    } else {
        let passive6embed = new MessageEmbed()
        .setColor("#eda098")
        .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
        .setDescription(`I'm sorry but that is an invalid option.`);

        message.channel.send(passive6embed).catch();

        //message.reply(`Dude that's not a valid option`);
            
           }
}
module.exports.config = {
    name: 'passive', // Command Name
    description: 'Enable / disable passive mode so robbers cant get to your wealth!', // Description
    usage: 'nem passive <on or off>', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 2, // Amount of bank space to give when command is used.
    cooldown: 300 // Command Cooldown
}
