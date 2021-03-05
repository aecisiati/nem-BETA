const { MessageEmbed } = require("discord.js");
const i = '<:info:688057843558908013>'
const tick = '<:bigtick:779736050892931082>'
module.exports.run = async (bot, message, args) => {
    const userData = await bot.fetchUser(message.author.id);
    const usertag = message.member;
    const random = Math.round(Math.random() * 1000);
    const randomMessage = [
        `\n> *You found **❀ ${random.toLocaleString()}** coins!*\n ╰─*Congrats I think? Idk, all I know is that you smell bad now.*`,
       `\n> *You found **❀ ${random.toLocaleString()}** coins!*\n  ╰─*I dont know if thats a good thing.*`,
       `\n> *You found **❀ ${random.toLocaleString()}** coins!*\n  ╰─*What do I even say about this....*`,
       `\n> *You found **❀ ${random.toLocaleString()}** coins!*\n  ╰─*Wh-why is there coins there..*`,
    ];
    const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
    
    const places = [
        `tree`,
        `dog`,
        `sink`,
        `toilet`,
        `store`
    ];

    const places2 = [
        `couch`,
        `bed`,
        `hospital`,
        `cemetery`
    ];
    
    const places3 = [
        `discord`,
        `reddit`,
        `instagram`
    ];

    const places11 = places[Math.floor((Math.random() * places.length))];
    const places12 = places2[Math.floor((Math.random() * places2.length))];
    const places13 = places3[Math.floor((Math.random() * places3.length))];

    let searchembed = new MessageEmbed()
    .setColor("#f5da9f")
    .setTitle('> where do you want to search at? <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
    .setDescription(`Choose the options from below and type it!\n\`${places11}\`, \`${places12}\`,\`${places13}\``);
    message.channel.send(searchembed);

    let filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 25000,
        errors: ['time']
    }).then(message => {
        message = message.first()
        if (message.content === `${places11}`) { // if (colour == "b" || colour.includes("black")) colour = 0;
            userData.coinsInWallet += parseInt(random);
            let cancel = new MessageEmbed()
            .setColor("#c4f2cc")
            .setTitle('> searching... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
            .setDescription(`You decided to go and search a **${places11}**. ${response} `)
            return message.channel.send(cancel)
        } else if (message.content === `${places12}` ) {
            userData.coinsInWallet += parseInt(random);
            let cancel = new MessageEmbed()
            .setColor("#c4f2cc")
            .setTitle('> searching... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
            .setDescription(`You decided to go and search a **${places12}**. ${response} `)
            return message.channel.send(cancel)
        } else if (message.content === `${places13}`) {
            userData.coinsInWallet += parseInt(random);
            let cancel = new MessageEmbed()
                .setColor("#c4f2cc")
                .setTitle('> searching... <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription(`You decided to go and search **${places13}**. You found **❀ ${random.toLocaleString()}** coins! How did you find coins online? `);
            return message.channel.send(cancel)
        } else {
            //message.channel.send("you bafoon. I am taking all of your money");
                   let cancel = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
                  .setDescription(`Hey! That's not an option.`);
                  return message.channel.send(cancel).catch();
            bet("lose");
            return
        }
    }).catch(_ => {
                  let timeout = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
                  .setDescription(`You took too long to answer!`);
                  return message.channel.send(timeout).catch();
      
    })
    
    
    
    
    
    
    
}

module.exports.config = {
    name: 'search', // Command Name
    description: 'Search for coins.', // Description
    usage: 'nem search', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 150, // Amount of bank space to give when command is used.
    cooldown: 30 // Command Cooldown
}
