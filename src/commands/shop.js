const cooki = '<:f_cookie:816397024357646346>'
const lock = '<:f_padlock:816399111355105310>'
const rifle = '<:f_bow:816405652192493569>'
const note = '<:f_banknote:816400649183952947>'
const axe = '<:f_axe:816404804988567622>'
const pick = '<:f_pickaxe:816406955873796096>'
const rc = '<:rainbowcoin:812000892231745546>' //RAINBOW
const gc = '<:goldcoin:812000208253616149>' // :HYDRA_GOLD_COIN_GIF:
const sc = '<:silvercoin:812000207956869170>' // :HYDRA_SILVER_COIN_GIF:
const bc = '<:bronzecoin:812000207960145942>' // :HYDRA_BRONZE_COIN_GIF: 
const ht = '<:f_trophy:816697809448468480>' // :HYDRA_THROPHY:
const hc = '<:f_clover:816402071452385312>'
const rod = '<:f_pole:816408922516750417>'
const dyn = '<:f_dynamite:816710512405381181>'
const pagination = require('discord.js-pagination')
const itemss = require(`../utils/items`)

const Discord = require("discord.js")
module.exports.run = async (bot, message, args) => {
  const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
  
  const embed = new Discord.MessageEmbed()
    .setColor('#f5da9f')
    .setTitle(`> \`🌿\` ⏤・nem's shop`)
    .setDescription(`*Items that are labeled as \`limited\` have a chance of never returning to the shop again, so try to get the item while it's available!*`)
    .setThumbnail('https://media.discordapp.net/attachments/816416430303739967/816714238311399434/unknown.png?width=442&height=442')
    .addFields(
      {
        name: `Shop Items`,
        value: `<:f_phone:817834846432919605> **Cellphone** — **❀ 2,000** coins\nCurrently not functional at the moment!\n\n${lock} **Padlock** — **❀ 5,000** coins\nStop those horrible robbers from taking your life savings!\n\n${dyn} **Dynamite** — **❀ 10,000** coins\nWhen someone tries to rob you, they have the potential of dying.\n\n${hc} **Lucky Clover** — **❀ 10,000** coins\nIncreases your chances of a successful robbery!`,
        inline: true
      }
    )

  const embed2 = new Discord.MessageEmbed()
  .setColor('#f5da9f')
  .setThumbnail('https://media.discordapp.net/attachments/816416430303739967/816714238311399434/unknown.png?width=442&height=442')
  .setTitle(`> \`🌿\` ⏤・nem's shop`)
  .setDescription(`*Items that are labeled as \`limited\` have a chance of never returning to the shop again, so try to get the item while it's available!*`)
  .addFields(
    {
      name: `Shop Items`,
      value: `${rifle} **Bow and Arrow** — **❀ 22,500** coins\nUse this to go hunting!\n\n${axe} **Axe** — **❀ 20,000** coins\nChop down some trees... hurt the environment!\n\n${rod} **Fishing Rod** — **❀ 15,000** coins\nCatch some stupid fish..\n\n${pick} **Pickaxe** — **❀ 30,000** coins\nMine some gems and earn some big cash`,
      inline: true
    }
  )

  const embed3 = new Discord.MessageEmbed()
  .setColor('#f5da9f')
  .setDescription(`*Items that are labeled as \`limited\` have a chance of never returning to the shop again, so try to get the item while it's available!*`)
  .setThumbnail('https://media.discordapp.net/attachments/816416430303739967/816714238311399434/unknown.png?width=442&height=442')
  .setTitle(`> \`🌿\` ⏤・nem's shop`)
  .addFields(
    {
      name: `Shop Items`,
      value: `${ht} **Nem's Trophy** — **❀ 100,000,000** coins\nWhoever has this is absolutely crazy. Also you stole from nem!`,
      inline: true
    }
  )

    const pages = [
      embed,
      embed2,
      embed3
    ]

    const emojiList = ["⏪", "⏩"];

    const timeout = '250000';

  pagination(message, pages, emojiList, timeout)


}
/*
        let timeEmbed = new Discord.MessageEmbed()
        .setColor("#FFFFFF")
        .setAuthor(`Hydra+ Shop`)
        .addField("🍪 Cookie - __50__ __coins__","`id: cookie`\nUse to make you fatter")
        .addField("🔒 Padlock - __10__,__000__ __coins__","`id: padlock`\nUse this to stop those pesky robbers")
        .addField("📜 Bank Note - __20__,__000__ __coins__","id: banknote`\nUse this to increase your back capacity.")
        .addField("🔫 **Gun - __22__,__500__** __coins__")
        .addField("🪓 Axe - __10__,__000__ __coins__","`id: axe`\nUse this to cut trees down!")
        .addField("🎣 Fishing Rod - __15__,__000__ __coins__","`id: fishingrod`\nUse this to go fishing!")
        .addField("🍀 Lucky Clover - __10__,__000__ __coins__","`id: luckyclover`\nUse this to increase you chances of robbing")
        .setFooter("Shop Page 1 / page 1")
        message.channel.send(timeEmbed)

    };
*/
module.exports.config = {
    name: 'shop', // Command Name
    description: 'Displays the nems available items!', // Description
    usage: 'nem shop', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: ['store','market'], // Aliases 
    bankSpace: 2, // Amount of bank space to give when command is used.
    cooldown: 1 // Command Cooldown
}

