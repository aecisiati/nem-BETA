const { MessageEmbed } = require('discord.js')
const jobss = require('../utils/jobs')

module.exports.run = async(bot, message, args) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    let user = await bot.fetchUser(message.author.id);
    if (!args.join(' ')) {
      
              let sell1embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`You forgot to type the job's \`id\`.`);
              return message.channel.send(sell1embed);
        //////return message.channel.send("you can't sell nothing lmao");
      
    }

    const job = jobss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase());
    let foundjob = user.jobs.find(x => x.name.toLowerCase() === job.name.toLowerCase());
    let array = [];
    array = user.jobs.filter(x => x.name !== job.name);

    if (!job) {
      
              let use2embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`You dont work this job! Make sure you have typed the correct \`id\`.`);
              return message.channel.send(use2embed);
        //////return message.channel.send("can't use this item");
      
    }

      if (!foundjob) {
              let sell3embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
              .setDescription(`You don't work this job.`);
              return message.channel.send(sell3embed);
        //////return message.channel.send("you don't have this item");
      } 
      
          user.jobs = array
          await user.save();
          let listembed = new MessageEmbed()
          .setColor('#f5da9f')
          .setTitle(`\`🌿\` ⏤・ resigned`)
          .setDescription(`You resigned your job as a ${job.description}.`)
          message.channel.send(listembed)
          

}

module.exports.config = {
    name: 'resign', // Command Name
    description: 'Resign your old job for a better one.', // Description
    usage: 'nem resign <job-name>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['quit'], // Aliases 
    bankSpace: 1, // Amount of bank space to give when command is used.
    cooldown: 2 // Command Cooldown
}