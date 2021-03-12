const { MessageEmbed } = require('discord.js');
const leveling = require('discord-leveling');

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username.toLowerCase() === args.join(' ').toString().toLowerCase()) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]) || message.member;
    const user = await bot.fetchUser(member.id);
    let number = 1;

    let profile = await leveling.Fetch(message.author.id);
    let output = await leveling.Fetch(member.id)

    if(profile.xp + 1 > 100){
        leveling.AddLevel(message.author.id, 1);
        leveling.SetXp(message.author.id, 0)
        let levelupembed = new MessageEmbed()
        .setColor('#c4f2cc')
        .setTitle('> success! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
        .setDescription(`Congrats! Your pet just leveled up to level \`${profile.level + 1}\`!`)
        message.channel.send(levelupembed)
    }

    let page;
    if (user.pets.length <= 1) page = 1;

    let pet = user.pets.slice(number - 1, number);
    if (pet.length < 1) {
        return message.channel.send('No pets here...');
    }
    const random = Math.round(Math.random() * 1);
    const petname = pet.map(x => `${x.name}`);
    const petname2 = pet.map(x => `${x.description}`);
    const pettype = pet.map(x => `${x.type}`);
    const petsocial = pet.map(x => `${x.social}`);
    const petdesc = pet.map(x => `${x.about}`);
    const embed = new MessageEmbed()
        .setTitle(`>  \`🌿\` ⏤・${member.user.username}'s Pet!`)
        .setDescription(`๑ Pet: ${petname2}\n> **About:** ${petdesc} `)
        .addFields(
            {
                name: `Specialty:`,
                value: pettype,
                inline: true
            },
            {
                name: `Social?`,
                value: petsocial,
                inline: true
            },
            {
                name: `Experience:`,
                value: `\`Level ${output.level}\`\n ╰─XP: ${output.xp} `,
                inline: true
            },
            {
                name: `Happiness:`,
                value: `\`${user.petHappy}%\``,
                inline: true
            },
            {
              name: `Energy:`,
              value: `\`${user.petEnergy}%\``,
              inline: true
            }
        )
        .setFooter(`- the lower your pet's happiness or energy is, the worse it will respond to your commands.`)
        .setColor('#f5da9f');
    bot.rmvPetEnergy(message.author.id, random)
    bot.rmvPetHappy(message.author.id, random)
    message.channel.send(embed);
    
    
}

module.exports.config = {
    name: 'pet', // Command Name
    description: "Displays your pet", // Description
    usage: 'nem pet', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 10, // Amount of bank space to give when command is used.
    cooldown: 2, // Command Cooldown
}
