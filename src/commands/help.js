const { MessageEmbed } = require('discord.js');

module.exports.run = async (bot, message, args) => {

 const command = bot.commands.get(args.slice(0).join(' ').toString().toLowerCase()) || bot.commands.get(bot.aliases.get(args.join(' ').toString().toLowerCase()));
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(member => member.user.username === args.slice(0).join(' ') || member.user.username === args[0]) || message.member;
    const user = await bot.fetchUser(member.id);
  if (command) {
        const embed = new MessageEmbed()
            .setTitle(`> nem ${command.config.name}`)
            .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816379743992938497/unknown.png?width=442&height=442')
            .addField('Description:', command.config.description)
            .addField('Usage:', `\`${command.config.usage}\``, true)
            .addField('Aliases:', `${command.config.aliases.join(',  ') ? command.config.aliases : "no aliases"}`)
            .addField('Cooldown:', `${(command.config.cooldown)} seconds`)
            .setColor('#f5da9f')
        return message.channel.send(embed);
    }

  if(args[0] === 'basics' || args[0] === 'basic') {
      const embed = new MessageEmbed()
      .setTitle(`> \`🌿\` 𓂃．basics`)
      .setColor('#f5da9f')
      .setDescription(`**To view a command individually, do \`help (command)\`.**`)
      .addFields(
        {
          name: `>  \`balance\``,
          value: `︰・ *help bal*`,
          inline: true
        },
        {
          name: `> \`shop\``,
          value: `︰・*help shop*`,
          inline: true
        },
        {
          name: `> \`buy\``,
          value: `︰・*help buy*`,
          inline: true
        },
        {
          name: `> \`sell\``,
          value: `︰・*help sell*`,
          inline: true
        },
        {
          name: `> \`give\``,
          value: `︰・*help give*`,
          inline: true
        },
        {
          name: `> \`gift\``,
          value: `︰・*help gift*`,
          inline: true
        },
        {
          name: `> \`passive\``,
          value: `︰・*help passive*`,
          inline: true
        },
        {
          name: `> \`rich\``,
          value: `︰・*help rich*`,
          inline: true
        },
        {
          name: `> \`profile\``,
          value: `︰・*help profile*`,
          inline: true
        },
        {
          name: `> \`inventory\``,
          value: `︰・*help inv*`,
          inline: true
        },
        {
          name: `> \`deposit\``,
          value: `︰・*help dep*`,
          inline: true
        },
        {
          name: `> \`withdraw\``,
          value: `︰・*help with*`,
          inline: true
        },
        {
          name: `> \`use\``,
          value: `︰・*help use*`,
          inline: true
        },
        {
          name: `> \`daily\``,
          value: `︰・*help daily*`,
          inline: true
        },
        {
          name: `> \`rob\``,
          value: `︰・*help rob*`,
          inline: true
        },
        {
            name : "nem",
            value: '[support server](https://discord.gg/6RMejTZZVB) | [invite nem](https://discord.com/api/oauth2/authorize?client_id=803683520001343528&permissions=8&scope=bot)',
            
        }
      )
      .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816369779798573056/unknown.png?width=442&height=442')
      return message.channel.send(embed)
  }

  if (args[0] === 'gambling') {
    const embed = new MessageEmbed()
      .setTitle(`> \`🌿\` 𓂃．gambling`)
      .setColor('#f5da9f')
      .setDescription(`**To view a command individually, do \`help (command)\`.**`)
      .addFields(
        {
          name: `>  \`slots\``,
          value: `︰・ *help slots*`,
          inline: true
        },
        {
          name: `> \`gamble\``,
          value: `︰・*help gamble*`,
          inline: true
        },
        {
          name: `> \`blackjack\``,
          value: `︰・*help bj*`,
          inline: true
        },
        {
          name: `> \`roulette\``,
          value: `︰・*help roulette*`,
          inline: true
        },
        {
          name: `> \`dice\``,
          value: `︰・*help dice*`,
          inline: true
        },
        {
          name: `> \`bet\``,
          value: `︰・*help bet*`,
          inline: true
        },
        {
            name : "nem",
            value: '[support server](https://discord.gg/6RMejTZZVB) | [invite nem](https://discord.com/api/oauth2/authorize?client_id=803683520001343528&permissions=8&scope=bot)',
            
        }
      )
      .setThumbnail('https://images-ext-2.discordapp.net/external/IBz7Gf4GzY0KFbIkfMU75g80-jH9tcSh4RVNW0Gu_cg/%3Fwidth%3D442%26height%3D442/https/media.discordapp.net/attachments/807343785763012672/816360814558314496/unknown.png')
      return message.channel.send(embed)
  }

  if(args[0] === 'pets') {
    const embed = new MessageEmbed()
      .setTitle(`> \`🌿\` 𓂃．pets`)
      .setColor('#f5da9f')
      .setDescription(`**To view a command individually, do \`help (command)\`.**`)
      .addFields(
        {
          name: `>  \`adopt\``,
          value: `︰・ *help adopt*`,
          inline: true
        },
        {
          name: `> \`disown\``,
          value: `︰・*help disown*`,
          inline: true
        },
        {
          name: `> \`pet\``,
          value: `︰・*help pet*`,
          inline: true
        },
        {
          name: `> \`play\``,
          value: `︰・*help play*`,
          inline: true
        },
        {
          name: `> \`feed\``,
          value: `︰・*help feed*`,
          inline: true
        },
        {
          name: `> \`petshop\``,
          value: `︰・*help petshop*`,
          inline: true
        },
        {
            name : "nem",
            value: '[support server](https://discord.gg/6RMejTZZVB) | [invite nem](https://discord.com/api/oauth2/authorize?client_id=803683520001343528&permissions=8&scope=bot)',
            
        }
      )
      .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816370194590728232/unknown.png?width=442&height=442')
      return message.channel.send(embed)
  }

  if(args[0] === 'fun') {
    const embed = new MessageEmbed()
      .setTitle(`> \`🌿\` 𓂃．fun`)
      .setColor('#f5da9f')
      .setDescription(`**To view a command individually, do \`help (command)\`.**`)
      .addFields(
        {
          name: `>  \`trivia\``,
          value: `︰・ *help trivia*`,
          inline: true
        },
        {
          name: `> \`search\``,
          value: `︰・*help search*`,
          inline: true
        },
        {
          name: `> \`hunt\``,
          value: `︰・*help hunt*`,
          inline: true
        },
        {
          name: `> \`fish\``,
          value: `︰・*help fish*`,
          inline: true
        },
        {
          name: `> \`chop\``,
          value: `︰・*help chop*`,
          inline: true
        },
        {
          name: `> \`mine\``,
          value: `︰・*help mine*`,
          inline: true
        },
        {
          name: `> \`beg\``,
          value: `︰・*help beg*`,
          inline: true
        },
        {
          name: `> \`work\``,
          value: `︰・*help work*`,
          inline: true
        },
        {
          name: `> \`resign\``,
          value: `︰・*help resign*`,
          inline: true
        },
        {
            name : "nem",
            value: '[support server](https://discord.gg/6RMejTZZVB) | [invite nem](https://discord.com/api/oauth2/authorize?client_id=803683520001343528&permissions=8&scope=bot)',
            
        }
      )
      .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816370956976390144/unknown.png?width=442&height=442')
      return message.channel.send(embed)
  }

    if(args[0] === 'info') {
    const embed = new MessageEmbed()
      .setTitle(`> \`🌿\` 𓂃．info`)
      .setColor('#f5da9f')
      .setDescription(`**To view a command individually, do \`help (command)\`.**`)
      .addFields(
        {
          name: `>  \`uptime\``,
          value: `︰・ *help uptime*`,
          inline: true
        },
        {
          name: `> \`ping\``,
          value: `︰・*help ping*`,
          inline: true
        },
        {
          name: `> \`stats\``,
          value: `︰・*help stats*`,
          inline: true
        },
        {
            name : "nem",
            value: '[support server](https://discord.gg/6RMejTZZVB) | [invite nem](https://discord.com/api/oauth2/authorize?client_id=803683520001343528&permissions=8&scope=bot)',
            
        }
      )
      .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816376397525811271/unknown.png?width=442&height=442')
      return message.channel.send(embed)
  }

  if(args[0] === 'misc') {
    const embed = new MessageEmbed()
      .setTitle(`> \`🌿\` 𓂃．misc`)
      .setColor('#f5da9f')
      .setDescription(`**To view a command individually, do \`help (command)\`.**`)
      .addFields(
        {
          name: `>  \`meme\``,
          value: `︰・ *help meme*`,
          inline: true
        },
        {
          name: `> \`steal\``,
          value: `︰・*help steal*`,
          inline: true
        },
        {
          name: `> \`invite\``,
          value: `︰・*help invite*`,
          inline: true
        },
        {
            name : "nem",
            value: '[support server](https://discord.gg/6RMejTZZVB) | [invite nem](https://discord.com/api/oauth2/authorize?client_id=803683520001343528&permissions=8&scope=bot)',
            
        }
      )
      .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816377866828775434/unknown.png?width=442&height=442')
      return message.channel.send(embed)
  }



    const embed = new MessageEmbed()
        .setTitle("> \`🎨\` ⏤・here are my commands! ")
        .setColor('#f5da9f')
        .setDescription(`**Guide**\n\`()\` : *optional*\n\`<>\` : **not** *optional*`)
        .setThumbnail('https://media.discordapp.net/attachments/807343785763012672/816379743992938497/unknown.png?width=442&height=442')
        .addFields(
          {
            name: "・Basics <:k_paper:816369802700259358> ─╮",
            value: `> \`help basics\`\n**╰────────**`,
            inline: true
          },
          {
            name: "・Gambling <:k_cards:816365057386348614> ─╮",
            value: `> \`help gambling\`\n**╰──────────**`,
            inline: true
          },
          {
            name: "・Pets <:k_paw:816370195689111613> ─╮",
            value: `> \`help pets\`\n**╰───────**`,
            inline: true
          },
          {
            name: "・Fun <:k_party:816370958180548658> ─╮",
            value: `> \`help fun\`\n**╰───────**`,
            inline: true
          },
          {
            name: "・Info <:k_info:816376637083877386> ─╮",
            value: `> \`help info\`\n**╰───────**`,
            inline: true
          },
          {
            name: "・Misc <:k_misc:816377868070289448> ─╮",
            value: `> \`help misc\`\n**╰───────**`,
            inline: true
          },
          {
            name : "nem",
            value: '[support server](https://discord.gg/6RMejTZZVB) | [invite nem](https://discord.com/api/oauth2/authorize?client_id=803683520001343528&permissions=8&scope=bot)',
            
          },
        )
    message.channel.send(embed);

}
Object.defineProperty(Array.prototype, 'flat', {
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});
module.exports.config = {
    name: 'help', // Command Name
    description: 'Shows you information on commands!', // Description
    usage: 'nem help <command name>', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI', 'ATTACH_FILES'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 2, // Amount of bank space to give when command is used.
    cooldown: 5 // Command Cooldown
}