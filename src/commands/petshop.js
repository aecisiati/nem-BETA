const { MessageEmbed } = require('discord.js');
const fwog = '<:p_fwog:816683329696825385>'
const bun = '<:p_bunny:816685223366492180>'
const hedge = '<:p_hedgehog:816685537259290654>'
const pen = '<:p_penguin:816686209270808617>'
const vege = '<:m_carrot:816444621059915796>'
const bugs = '<:m_fly:816444953814106113>'
const fish = '<:f_commonfish:816418641619976273>'
const berries = '<:m_berries:816445290445799485>'
const cupcake = '<:m_cupcake:816446018912124928>'
const pagination = require('discord.js-pagination')

module.exports.run = async (bot, message, args) => {
    const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    
    const embed = new MessageEmbed()
      .setColor('#f5da9f')
      .setDescription('*Pets that are labeled as \`limited\` have a chance of never returning to the shop again, so try to adopt the pet while its available!*')
      .setTitle(`>  \`🌿\` ⏤・nem's pet shop`)
      .setThumbnail('https://images-ext-1.discordapp.net/external/LH0SFxGmHM_OUnGL00wb4EIlolFJJGHP6qS4iShGpUA/%3Fwidth%3D442%26height%3D442/https/media.discordapp.net/attachments/807343785763012672/816370194590728232/unknown.png')
      .addFields(
        {
          name: `Pets`,
          value: `${fwog} **Beta Fwog** — [ω 1](https://www.youtube.com/watch?v=Cna9OLn20Ac)\nFwog is special, fwog is cute.\n\n${bun} **Bunny** — [ω 250](https://www.youtube.com/watch?v=Cna9OLn20Ac)\nBunnies are adorable and helpful!\nID — \`bunny\`\n\n${pen} **Penguin** — [ω 600](https://www.youtube.com/watch?v=Cna9OLn20Ac)\nAlways careful, and there to lend a hand.\nID — \`penguin\`\n\n${hedge} **Hedgehog** — [ω 1500](https://www.youtube.com/watch?v=Cna9OLn20Ac)\nHedgehogs will always be there to protect you!\nID — \`hedgehog\``,
          inline: true
        }
        
      )

    const embed2 = new MessageEmbed()
      .setTitle(`>  \`🌿\` ⏤・nem's pet shop`)
      .setDescription('*By items you earn outside of the shop, you might be able to use those to feed your pets.*')
      .setColor('#f5da9f')
      .setThumbnail('https://images-ext-1.discordapp.net/external/LH0SFxGmHM_OUnGL00wb4EIlolFJJGHP6qS4iShGpUA/%3Fwidth%3D442%26height%3D442/https/media.discordapp.net/attachments/807343785763012672/816370194590728232/unknown.png')
      .addFields(
        {
          name: `Food`,
          value: `<:t_dogfood:816757653220753438> **Basic Food** — [❀ 100](https://www.youtube.com/watch?v=Cna9OLn20Ac)\nSatisfies any kind of small hunger.\n\n${vege} **Vegetable** — [❀ 150](https://www.youtube.com/watch?v=Cna9OLn20Ac)\nGreat for herbivores such as bunnies.\n\n${bugs} **Insect** — [❀ 200](https://www.youtube.com/watch?v=Cna9OLn20Ac)\nEven though it's not appetizing for us, it's a great source of nutrition for fwogs!\n\n${fish} **Common Fish** — [❀ 250](https://www.youtube.com/watch?v=Cna9OLn20Ac)\nA whole meal for penguins. You can also feed your pets the fish you earn by fishing!\n\n${berries} **Berries** — [❀ 14,500](https://www.youtube.com/watch?v=Cna9OLn20Ac)\nRegenerates your pet's happiness to \`100%\`\n\n${cupcake} **Cupcake** — [❀ 15,500](https://www.youtube.com/watch?v=Cna9OLn20Ac)\nRegenerates your pet's energy to \`100%\``,
          inline: true
        }
      )
    
    const pages = [
      embed,
      embed2
    ]

    const emojiList = ["⏪", "⏩"];

    const timeout = '250000';

    pagination(message, pages, emojiList, timeout)
  
  }

module.exports.config = {
    name: 'petshop', // Command Name
    description: 'Purchase pets from the shop!', // Description
    usage: 'nem petshop', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI', 'ATTACH_FILES', 'ADD_REACTIONS'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 0, // Amount of bank space to give when command is used.
    cooldown: 2 // Command Cooldown
}