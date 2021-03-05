
const { MessageEmbed } = require("discord.js");

module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    if(args[0] == 'dev') { 
      if(message.author.id === '295032461862109186'){
        const toGive = args[1];
        bot.giveCoins(message.author.id, toGive)
        let sendcoinsembed3 = new MessageEmbed()
        .setColor("#c4f2cc")
        .setTitle('> \`🌿\` ⏤・success ')
        .setDescription(`You successfully gave yourself **❀ ${parseInt(toGive).toLocaleString() <= 1 ? parseInt(toGive).toLocaleString() + `** coin!` : parseInt(toGive).toLocaleString() + `** coins!`}`);
        return message.channel.send(sendcoinsembed3).catch();
      } else if(message.author.id === '817389951506579466') { 
        const toGive = args[1];
        bot.giveCoins(message.author.id, toGive)
        let sendcoinsembed3 = new MessageEmbed()
        .setColor("#c4f2cc")
        .setTitle('> \`🌿\` ⏤・success')
        .setDescription(`You successfully gave yourself **❀ ${parseInt(toGive).toLocaleString() <= 1 ? parseInt(toGive).toLocaleString() + `** coin!` : parseInt(toGive).toLocaleString() + `** coins!`}`)
        return message.channel.send(sendcoinsembed3).catch();
      } else if(message.author.id === '799212372145078272') { 
        const toGive = args[1];
        bot.giveCoins(message.author.id, toGive)
        let sendcoinsembed3 = new MessageEmbed()
        .setColor("#c4f2cc")
        .setTitle('> \`🌿\` ⏤・success')
        .setDescription(`You successfully gave yourself **❀ ${parseInt(toGive).toLocaleString() <= 1 ? parseInt(toGive).toLocaleString() + `** coin!` : parseInt(toGive).toLocaleString() + `** coins!`}`)
        return message.channel.send(sendcoinsembed3).catch();
      } else {
        return;
      }

    }
    const authorData = await bot.fetchUser(message.author.id);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]);
    const memberData = await bot.fetchUser(member.id)

    let passivewarn = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`I'm sorry but you have \`PASSIVE\` enabled.\n╰─*You are required to disable it to use this command.*`);
  
        if (authorData.passive == true) return message.channel.send(passivewarn);

    let passivewarn2 = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`I'm sorry but the user you are trying to donate to has \`PASSIVE\` enabled.\n╰─*They are required to disable it to recieve coins.*`);
  
        if (memberData.passive == true) return message.channel.send(passivewarn2);

    if (!member || !args[0]) {
      
    let sendcoinsembed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`Who are you giving coins to ?`);
    return message.channel.send(sendcoinsembed).catch();
        //return message.channel.send(`Who are you giving the coins to?`);
    }
    if (member.user.id == message.author.id) {
    let sendcoinsembed1 = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`Hey! You can't cheat the system..`);
    return message.channel.send(sendcoinsembed1).catch();
   //return message.channel.send(`Lol you can't give yourself coins u crazy.`);
    } 
    
    if(args[1] < 0) {
      let sendcoinsembed1 = new MessageEmbed()
      .setColor("#eda098")
      .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
      .setDescription(`Please input a positive integer!`);
      return message.channel.send(sendcoinsembed1).catch();
    }

    if(message.content.includes == ',') {
      let sendcoinsembed1 = new MessageEmbed()
      .setColor("#eda098")
      .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
      .setDescription(`I can't register commas. Please input the number again **without** the commas.`);
      return message.channel.send(sendcoinsembed1).catch();
    }

    if (!args[1]) {
    let sendcoinsembed2 = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`Are you giving them no coins?`);
    return message.channel.send(sendcoinsembed2).catch();
    //return message.channel.send(`How much coins are you giving them?`);
    }

    if (isNaN(args[1]) && args[1] != 'all') {
      let sendcoinsembed1 = new MessageEmbed()
      .setColor("#eda098")
      .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
      .setDescription(`That's not a valid option!`);
      return message.channel.send(sendcoinsembed1).catch();
    }
    const userData = await bot.fetchUser(member.user.id);
    if (userData.passive == true) {
    let sendcoinsembed3 = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`I'm sorry but the user you are trying to give coins to has \`PASSIVE\` enabled! They will have to disable it to be able to recieve coins.`);
    return message.channel.send(sendcoinsembed3).catch();
      //return message.channel.send(`That user is in passive mode, they can't recive any coins`);
    }
                                  
    if (args[1] == 'all') {
        const toGive = authorData.coinsInWallet;

        authorData.coinsInWallet = 0;

        await authorData.save();

        userData.coinsInWallet = (userData.coinsInWallet + toGive);

        userData.save();

    let sendcoinsembed3 = new MessageEmbed()
    .setColor("#c4f2cc")
    .setTitle('> \`🌿\` ⏤・success')
    .setDescription(`You successfully gave ${member} **❀ ${parseInt(toGive).toLocaleString()}** coins`);
    message.channel.send(sendcoinsembed3).catch();
        //message.channel.send(`You gave ${member} **${parseInt(toGive).toLocaleString()}** coins`); //Change the message how u like
    } else {
        const toGive = args[1];

        if (toGive > authorData.coinsInWallet) {
          
    let sendcoinsembed222 = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`You don't have that many coins!`);
    return message.channel.send(sendcoinsembed222).catch();
          
          //return message.reply(`You don't have that many coins.`);
        }

        authorData.coinsInWallet = (authorData.coinsInWallet - parseInt(toGive));

        await authorData.save();

        userData.coinsInWallet = (userData.coinsInWallet + parseInt(toGive));

        await userData.save();
    const usertag = message.member;
    let sendcoinsembed3 = new MessageEmbed()
    .setColor("#c4f2cc")
    .setTitle('> \`🌿\` ⏤・success')
    .setDescription(`You successfully gave ${member} **❀ ${parseInt(toGive).toLocaleString() <= 1 ? parseInt(toGive).toLocaleString() + `** coin!` : parseInt(toGive).toLocaleString() + `** coins!`}`);
    message.channel.send(sendcoinsembed3).catch();
    }

}
module.exports.config = {
    name: 'give', // Command Name
    description: 'Give an enemy or friend some coins!', // Description
    usage: 'nem give <amount>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['share', 'pay'], // Aliases 
    bankSpace: 3, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}
