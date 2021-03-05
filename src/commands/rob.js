const { MessageEmbed, Message } = require('discord.js');
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
const s = '<:hydrashild:780113155744595978>'
module.exports.run = async (bot, message, args) => {
    const usertag = message.member;
    const user = await bot.fetchUser(message.author.id);
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(' ').toString().toLowerCase()) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]) || message.member;
  
  
    let passivewarn = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`You have \`PASSIVE\` enabled! you are required to disable it to use this command.`);
  
    if (user.passive == true) return message.channel.send(passivewarn);
  
    if (!member) {
      
    let rob1embed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`You forgot to tag the person you wanted to rob.`);
    return message.channel.send(rob1embed);
    //return message.channel.send("You think you can rob nobody?");
      
    }

    if(member.user.id === message.author.id){
    let rob4embed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`You can't rob yourself!`);
    return message.channel.send(rob4embed);
    }

    const devs = ['295032461862109186'];

    if (devs.includes(member.user.id)) {
      
    let rob2embed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`You tried to rob ${member.user.tag}, but they have protections from being robbed!`);
    return message.channel.send(rob2embed);
      //return message.channel.send(`You can't rob the bot devs lol.`);
    }
    
    const robbedUser = await bot.fetchUser(member.id);
    if (robbedUser.passive == true) {
      
    let rob3embed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`The user you tried to rob has passive \`ENABLED\`.`);
    return message.channel.send(rob3embed);
      //return message.channel.send(`Leave them alone... they are in passive mode`);
    }

    if(user.coinsInWallet < 500) {
        let rob44embed = new MessageEmbed()
        .setColor("#eda098")
        .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
        .setDescription(`You need at least 500 coins to rob someone!`);
        return message.channel.send(rob44embed)
    }
    if (robbedUser.coinsInWallet < 500) {
    let rob4embed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
    .setDescription(`Hey, they have less than 500 coins!`);
    return message.channel.send(rob4embed);
        //return message.channel.send("This user doesn't have much coins, I wouldn't rob them");
    }


    if (user.items.find(x => x.name == 'luckyclover')) {
        const newInv = user.items.filter(i => i.name != 'luckyclover');
        const bypass = user.items.find(i => i.name == 'luckyclover');
        if (bypass.amount == 1) {
            user.items = newInv;
        } else {
            newInv.push({ name: 'luckyclover', amount: bypass.amount - 1, description: bypass.description });
            user.items = newInv
        }
    } else {
        const random = Math.floor(Math.random() * 5);
        let punish = parseInt(user.coinsInWallet * 0.05);
        bot.rmvCoins(message.author.id, punish)
        bot.giveCoins(member.user.id, punish)
        if (random === 3) {
              let rob5embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
              .setDescription(`You tried to rob **${member.user.tag}** but you got caught! You had to pay the victim **❀ ${punish.toLocaleString()}** coins.`);
              return message.channel.send(rob5embed);
            //return message.channel.send(`You tried to rob **${member.user.tag}** but got caught👮! Better luck next time.`);
        }
    }
    let array = robbedUser.items.filter(x => x.name !== 'padlock');
    let array2 = robbedUser.items.filter(x => x.name !== 'dynamite');
    const padlock = robbedUser.items.find(x => x.name === 'padlock');
    const hedgehog = robbedUser.pets.find(x => x.name === 'hedgehog');
    const fwog = user.pets.find(x => x.name === 'fwog');
    const penguin = robbedUser.pets.find(x => x.name === 'penguin');
    const dynamite = robbedUser.items.find(x => x.name === 'dynamite');
    const cloudie = robbedUser.pets.find(x => x.name === 'cloudie');

    if(penguin) {
      const random = Math.round(Math.floor() * 5) + 1
      bot.rmvPetEnergy(member.user.id, random)
      let rob6embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
              .setDescription(`You tried to rob **${member.user.tag}**, but they have a <:p_penguin:816686209270808617> **Penguin**! Their penguin protected them from you!`);
              return message.channel.send(rob6embed);
    } else if(robbedUser.petEnergy < 40) {
      let worth = Math.round(robbedUser.coinsInWallet * 0.3);
      bot.giveCoins(message.author.id, worth)
      bot.rmvCoins(member.user.id, worth)
      let smallembed = new MessageEmbed()
      .setTitle('> robbery success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
      .setColor("#c4f2cc")
      .setDescription(`Their <:p_penguin:816686209270808617> **Penguin** was way too tired to fight. You managed to steal a **small** 💰 percentage of **❀ ${worth.toLocaleString()}** coins!`)
      return message.channel.send(smallembed)
    }

    if(cloudie) {
      const random = Math.round(Math.floor() * 5) + 1
      bot.rmvPetEnergy(member.user.id, random)
      let rob6embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
              .setDescription(`You tried to rob **${member.user.tag}**, but they have a <:p_cloud:816613179487682571> **Cloudie**! Their cloudie protected them from you!`);
              return message.channel.send(rob6embed);
    } else if(robbedUser.petEnergy < 40) {
      let worth = Math.round(robbedUser.coinsInWallet * 0.3);
      bot.giveCoins(message.author.id, worth)
      bot.rmvCoins(member.user.id, worth)
      let smallembed = new MessageEmbed()
      .setTitle('> robbery success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
      .setColor("#c4f2cc")
      .setDescription(`Their <:p_cloud:816613179487682571> **Cloudie** was way too tired to fight. You managed to steal a **small** 💰 percentage of **❀ ${worth.toLocaleString()}** coins!`)
      return message.channel.send(smallembed)
    }
    
    if(hedgehog) {
      const random = Math.round(Math.floor() * 5) + 1
      let punish = parseInt(user.coinsInWallet * 0.03);
      bot.rmvCoins(message.author.id, punish)
      bot.giveCoins(member.user.id, punish)
      bot.rmvPetEnergy(member.user.id, random)
      let rob6embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
              .setDescription(`You tried to rob **${member.user.tag}**, but they have a <:pet_hedgehog:814592959126437908> **Hedgehog**! Their hedgehog attacked you and stole **❀ ${punish}** coins from you!`);
              return message.channel.send(rob6embed);
    } else if(robbedUser.petEnergy < 40) {
      let worth = Math.round(robbedUser.coinsInWallet * 0.3);
      bot.giveCoins(message.author.id, worth)
      bot.rmvCoins(member.user.id, worth)
      let smallembed = new MessageEmbed()
      .setTitle('> robbery success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
      .setColor("#c4f2cc")
      .setDescription(`Their <:pet_hedgehog:814592959126437908> **Hedgehog** was way too tired to fight. You managed to steal a **small** 💰 percentage of **❀ ${worth.toLocaleString()}** coins!`)
      return message.channel.send(smallembed)
    }

    if(dynamite) { 
      let dynrandom = Math.round(Math.floor() * 10) 
      let punish = parseInt(user.coinsInWallet * 0.50);
      bot.rmvCoins(message.author.id, punish)
        let rob6embed = new MessageEmbed()
          .setColor("#eda098")
          .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
          .setDescription(`You tried to rob **${member.user.tag}**, but they had a <:f_dynamite:816710512405381181> **Dynamite**!\n╰─*You lost* **❀ ${punish}** *coins.* `);
        message.channel.send(rob6embed);

         if (dynamite.amount === 1) {
            robbedUser.items = array2;
            await robbedUser.save();
            return;
        }
        else {
            array2.push({
                name: 'dynamite',
                amount: dynamite.amount - 1,
                description: dynamite.description,
                type: dynamite.type
            });
            robbedUser.items = array2;
            await robbedUser.save();
            return;
        }
    }

    if (padlock) {
      
              let rob6embed = new MessageEmbed()
              .setColor("#eda098")
              .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
              .setDescription(`You tried to rob **${member.user.tag}**, but they had a <:f_padlock:816399111355105310> **Padlock**! Try again next time.`);
              message.channel.send(rob6embed);
        //message.channel.send(`You tried to rob **${member.user.tag}**, but they had a **Padlock**🔒. Try again next time.`);
      
        if (padlock.amount === 1) {
            robbedUser.items = array;
            await robbedUser.save();
            return;
        }
        else {
            array.push({
                name: 'padlock',
                amount: padlock.amount - 1,
                description: padlock.description,
                type: padlock.type
            });
            robbedUser.items = array;
            await robbedUser.save();
            return;
        }
    }

    let stealingOdds = Math.floor(Math.random() * 100);



    if (stealingOdds > 60 && stealingOdds <= 80) {
      if(fwog) {
      let worth = Math.round(robbedUser.coinsInWallet * 0.5);
      bot.giveCoins(message.author.id, worth)
      bot.rmvCoins(member.user.id, worth)
      let largeembed = new MessageEmbed()
      .setTitle('> robbery success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
      .setColor("#c4f2cc")
      .setDescription(`You almost failed... But because of your <:p_fwog:816683329696825385> **Fwog**, you successfully stole a **LARGE** 💸 amount of **❀ ${worth.toLocaleString()}** coins!`)
      return message.channel.send(largeembed)
      } else { 
      let worth = Math.round(robbedUser.coinsInWallet * 0.3);
      bot.giveCoins(message.author.id, worth)
      bot.rmvCoins(member.user.id, worth)
      let smallembed = new MessageEmbed()
      .setTitle('> robbery success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
      .setColor("#c4f2cc")
      .setDescription(`You managed to steal a **small** 💰 percentage of **❀ ${worth.toLocaleString()}** coins!`)
      return message.channel.send(smallembed)
      }

      } else if(stealingOdds <=60) {
      let worth = Math.round(robbedUser.coinsInWallet * 0.3);
      bot.giveCoins(message.author.id, worth)
      bot.rmvCoins(member.user.id, worth)
      let smallembed = new MessageEmbed()
      .setTitle('> robbery success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
      .setColor("#c4f2cc")
      .setDescription(`You managed to steal a **small** 💰 percentage of **❀ ${worth.toLocaleString()}** coins!`)
      return message.channel.send(smallembed)
      
      
      } else if (stealingOdds > 80 && stealingOdds <= 90) {
      let worth = Math.round(robbedUser.coinsInWallet * 0.5);
      bot.giveCoins(message.author.id, worth)
      bot.rmvCoins(member.user.id, worth)
      let largeembed = new MessageEmbed()
      .setTitle('> robbery success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
      .setColor("#c4f2cc")
      .setDescription(`You successfully stole a **LARGE** 💸 amount of **❀ ${worth.toLocaleString()}** coins!`)
      return message.channel.send(largeembed)
      
      } else {
      let worth = Math.round(robbedUser.coinsInWallet * 0.8);
      bot.giveCoins(message.author.id, worth)
      bot.rmvCoins(member.user.id, worth)
      let tonembed = new MessageEmbed()
      .setTitle('> robbery success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
      .setColor("#c4f2cc")
      .setDescription(`You stole a whole **TON** 🤑 of **❀ ${worth.toLocaleString()}** coins! `)
      return message.channel.send(tonembed)
      }
  
    //message.channel.send(`:moneybag: You stole **${randomAmount.toLocaleString()}** coins from ${member}!`);

}

module.exports.config = {
    name: 'rob', // Command Name
    description: 'steal someone elses life savings! ', // Description
    usage: 'nem rob <user>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['steal'], // Aliases 
    bankSpace: 50, // Amount of bank space to give when command is used.
    cooldown: 50 // Command Cooldown
}
