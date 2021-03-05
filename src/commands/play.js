const { MessageEmbed } = require('discord.js')
const pagination = require('discord.js-pagination');
const petss = require('../utils/pets')
const leveling = require('discord-leveling');
const ball = "<:t_ball:816440999663370283>"
const wheel = '<:t_wheel:816440767656099891>'
const teddy = "<:t_teddy:816440506124337192>"
const bone = '<:t_bone:816441086703698001> '

module.exports.run = async (bot, message, args) => {
let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const lesshappy = Math.round(Math.random() * 9);
const morehappy = Math.round(Math.random() * 16) + 1;
const fwogenergy = Math.round(Math.random() * 9) + 4;
const energy = Math.round(Math.random() * 6) + 1;

  
  if (!args.join(' ')) {
            let buynothingerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`Please enter your pet's \`id\`.`);

            return message.channel.send(buynothingerrorembed).catch();
        //return message.channel.send("you can't buy nothing, please enter the correct item id");
    }
  const pet = petss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase() || x.name.toLowerCase() === args[0].toString().toLowerCase() || x.name.toLowerCase() === `${args[0].toString().toLowerCase()}`);
  if (!pet) {
        let wrongiderrorembed = new MessageEmbed()
        .setColor("#eda098")
        .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
        .setDescription(`You don't own that kind of pet! Please enter your pet's correct \`id\`.`);

        return message.channel.send(wrongiderrorembed).catch();
        //return message.channel.send("You can't buy an item that doesn't exist please use the correct item id");
  }

  let foundpet = user.pets.find(x => x.name.toLowerCase() === pet.name.toLowerCase());
  let array = [];
  array = user.pets.filter(x => x.name !== pet.name);

  if (user.petEnergy < 45) {
    return message.channel.send(`Your ${pet.name} is very tired. Try gaining more energy for your pet by doing \`nem feed <pet-id>\`.`)
  }

   if (user.petHappy + user.petEnergy > 175) {
    return message.channel.send(`Your pet's happiness and energy is almost maxed out! Try again when your pet's stats have decreased.`)
  }

  if (user.petHappy > 84) {
    return message.channel.send(`Your pet's happiness is almost maxed out! Try again when your pet's stats have decreased.`)
  }
  

  if(foundpet) {

    const embed = new MessageEmbed()
    .setColor('#c4f2cc')
    .setFooter(message.author.tag, message.author.displayAvatarURL({ dyanmic: true }))
    .setTitle('> playtime! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
    .setDescription(`**What do you want to your pet to play with?**\n╰─*Type one of the toys below in the chat!*\n\n ***If you change your mind, type \`cancel\`.***\n\n**Toy List:**\n${ball} **Ball**  — **ω 20** trinkets\nFun for a while...?\n\n${bone} **Bone** — **ω 25** trinkets\nChewy and delicious, until its all gone.\n\n${wheel} **Wheel** — **ω 35** trinkets\nAddicting for hedgehogs and other small rodents.\n\n**Special Items:**\n${teddy} **Teddy** — **ω 110** trinkets\nRegenerates energy and happiness to \`15%\` more!  `);
    message.channel.send(embed)
    let filter = m => m.author.id === message.author.id;
    message.channel.awaitMessages(filter, {
            max: 1,
            time: 25000,
            errors: ['time']
        }).then(message => {
            message = message.first()
            if (message.content === 'cancel' || message.content === 'cancel') {
              let cancel = new MessageEmbed()
              .setTitle('> canceled! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
              .setDescription('*You have canceled this option.*')
              .setColor("#c4f2cc")
              return message.channel.send(cancel)
            } else if (message.content === 'ball' || message.content === 'Ball') {
               if (user.trinkets < 20) {
                   const trinketmore = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
                .setDescription(`You don't have enough trinkets to purchase this!`);
                return message.channel.send(trinketmore)
              }
              const randomMessage = [
              'fun',
              'bored',
              'missed'
              ];
              const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];
              if (response === 'fun') { 
              leveling.AddXp(message.author.id, 8);
              let balle = new MessageEmbed() 
              .setDescription('*Alright! Your pet seems excited. Type \`throw\`!*')
              .setColor('#f5da9f')
              message.channel.send(balle)
              let filters = m => m.author.id === message.author.id;
              message.channel.awaitMessages(filters, {
                max: 1,
                time: 25000,
                errors: ['time']
              }).then(async message => {
               message = message.first()
               if(message.content === 'throw' || message.content === 'Throw') {
                 if (pet.name === 'fwog') { 
                bot.rmvPetEnergy(message.author.id, fwogenergy)
                bot.givePetHappy(message.author.id, morehappy)
                bot.rmvTrinkets(message.author.id, 20) 
                } else {
                bot.rmvPetEnergy(message.author.id, energy)
                bot.givePetHappy(message.author.id, morehappy)
                bot.rmvTrinkets(message.author.id, 20) 
                }
                 let throwe = new MessageEmbed()
                 .setDescription(`${pet.symbol}━━━━━${ball}`)
                 .setColor('#f5da9f')
                 let msg = await message.channel.send(throwe).then(msg => {
                   throwe.setDescription(`━${pet.symbol}━━━━${ball}`)
                   msg.edit(throwe).then(msg => {
                     throwe.setDescription(`━━${pet.symbol}━━${ball}`)
                     msg.edit(throwe).then(msg => {
                       throwe.setDescription(`━━━${pet.symbol}━${ball}`)
                       msg.edit (throwe).then(msg => {
                         throwe.setDescription(`━━━━${pet.symbol}${ball}`)
                         msg.edit(throwe).then(msg => {
                           if (pet.name === 'fwog') { 
                           let caught = new MessageEmbed()
                           .setTitle(`> hurray! <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                           .setDescription(`**Your ${pet.name} caught the ball!**\n╰─*Your pet gained **${morehappy}%** happiness but lost **${fwogenergy}%** energy!*`)
                           .setColor("#c4f2cc")
                            message.channel.send(caught)
                           } else {
                           let caught = new MessageEmbed()
                           .setTitle(`> hurray! <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                           .setDescription(`**Your ${pet.name} caught the ball!**\n╰─*Your pet gained **${morehappy}%** happiness but lost **${energy}%** energy!*`)
                           .setColor("#c4f2cc")
                            message.channel.send(caught)
                           }
                         })
                       })
                     })
                   })
                 })
               }
              })
              } else if (response === 'bored') {
                let bored = new MessageEmbed()
                .setDescription(`**For now, your ${pet.name} is bored of their ball**.\n╰─*You can try a different toy!* `)
                .setColor('#f5da9f')
                return message.channel.send(bored)
              } else if (response === 'missed') {
                leveling.AddXp(message.author.id, 8);
                let balle = new MessageEmbed() 
              .setDescription('*Alright! Your pet seems excited. Type \`throw\`!*')
              .setColor('#f5da9f')
              message.channel.send(balle)
              let filters = m => m.author.id === message.author.id;
              message.channel.awaitMessages(filters, {
                max: 1,
                time: 25000,
                errors: ['time']
              }).then(async message => {
               message = message.first()
               if (pet.name === 'fwog') { 
               bot.rmvPetEnergy(message.author.id, fwogenergy)
              bot.givePetHappy(message.author.id, morehappy)
              bot.rmvTrinkets(message.author.id, 20) 
              } else {
              bot.rmvPetEnergy(message.author.id, energy)
              bot.givePetHappy(message.author.id, morehappy)
              bot.rmvTrinkets(message.author.id, 20) 
              }
               if(message.content === 'throw' || message.content === 'Throw') {
                 let throwe = new MessageEmbed()
                 .setDescription(`━━━━━${pet.symbol}${ball}`)
                 .setColor('#f5da9f')
                 let msg = await message.channel.send(throwe).then(msg => {
                   throwe.setDescription(`━━━━${pet.symbol}━${ball}`)
                   msg.edit(throwe).then(msg => {
                     throwe.setDescription(`━━━${pet.symbol}━━${ball}`)
                     msg.edit(throwe).then(msg => {
                       throwe.setDescription(`━━${pet.symbol}━━━━${ball}`)
                       msg.edit (throwe).then(msg => {
                         throwe.setDescription(`${pet.symbol}━━━━━${ball}`)
                         msg.edit(throwe).then(msg => {
                           if (pet.name === 'fwog') { 
                           let caught = new MessageEmbed()
                           .setTitle(`> aww.. <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                           .setDescription(`**Your ${pet.name} lost the ball!**\n╰─*Your pet gained **${lesshappy}%** happiness but lost **${fwogenergy}%** energy!*`)
                           .setColor("#c4f2cc")
                            message.channel.send(caught)
                           } else {
                           let caught = new MessageEmbed()
                           .setTitle(`> aww... <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                           .setDescription(`**Your ${pet.name} lost the ball!**\n╰─*Your pet gained **${lesshappy}%** happiness but lost **${energy}%** energy!*`)
                           .setColor("#c4f2cc")
                            message.channel.send(caught)
                           }
                         })
                       })
                     })
                   })
                 })
               }
              })
              }
            } else if(message.content === 'bone' || message.content === 'Bone') {
              if (user.trinkets < 25) {
                   const trinketmore = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
                .setDescription(`You don't have enough trinkets to purchase this!`);
                return message.channel.send(trinketmore)
              }
              const randomMessage = [
              'fun',
              'bored'
              ];
              const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];

              if (response === 'fun') {
                if (pet.name === 'hedgehog') {
                bot.rmvTrinkets(message.author.id, 25)
                let bonf = new MessageEmbed()
                .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
                .setDescription(`I don't think ${pet.name}s like to chew on bones!\n╰─*Their happiness and energy did not change.*`)
                .setColor("#eda098")
                return message.channel.send(bonf)
                } else if (pet.name === 'penguin') {
                bot.rmvTrinkets(message.author.id, 25)
                let bonf = new MessageEmbed()
                .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
                .setDescription(`I don't think ${pet.name}s like to chew on bones!\n╰─*Their happiness and energy did not change.*`)
                .setColor("#eda098")
                return message.channel.send(bonf)
                } else if (pet.name === 'bunny') {
                  
                bot.rmvTrinkets(message.author.id, 25)
                let bonf = new MessageEmbed()
                .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
                .setDescription(`I don't think ${pet.name}s like to chew on bones!\n╰─*Their happiness and energy did not change.*`)
                .setColor("#eda098")
                 return message.channel.send(bonf)
                } else if (pet.name === 'frog') {
                bot.rmvTrinkets(message.author.id, 25)
                let bonf = new MessageEmbed()
                .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
                .setDescription(`I don't think ${pet.name}s like to chew on bones!\n╰─*Their happiness and energy did not change.*`)
                .setColor("#eda098")
                return message.channel.send(bonf)
                } else {
                bot.rmvTrinkets(message.author.id, 25)
                leveling.AddXp(message.author.id, 8);
                let bonf = new MessageEmbed()
                .setTitle(`> hurray! <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                .setDescription(`**Your ${pet.name} loved the bone!**\n╰─*Your pet gained **${morehappy}%** happiness but lost **${energy}%** energy!*`)
                .setColor("#c4f2cc")
                return message.channel.send(bonf)
              }
            } else if (response === 'bored') {
              let bored = new MessageEmbed()
                .setDescription(`**For now, your ${pet.name} is bored of their bone**.\n╰─*You can try a different toy!* `)
                .setColor('#f5da9f')
                return message.channel.send(bored)
            }
          } else if (message.content === 'wheel' || message.content === 'Wheel') {
            if (user.trinkets < 35) {
                   const trinketmore = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
                .setDescription(`You don't have enough trinkets to purchase this!`);
                return message.channel.send(trinketmore)
              }
              const randomMessage = [
              'bored',
              'wheeltime'
              ];
              const response = randomMessage[Math.floor((Math.random() * randomMessage.length))];

              if (response === 'wheeltime') {
                leveling.AddXp(message.author.id, 8);
                if (pet.name === 'hedgehog') { 
                  bot.rmvPetEnergy(message.author.id, energy)
                  bot.givePetHappy(message.author.id, morehappy)
                  bot.rmvTrinkets(message.author.id, 35)
                  let wheel = new MessageEmbed()
                  .setDescription(`*Your hedgehog may need a push! Type \`spin\` to help them!*`)
                  .setColor('#f5da9f')
                  message.channel.send(wheel)
                  let filters = m => m.author.id === message.author.id;
                  message.channel.awaitMessages(filters, {
                    max: 1,
                    time: 25000,
                    errors: ['time']
                  }).then(message => {
                    message = message.first()
                    if(message.content === 'spin' || message.content === 'Spin') {
                      const wheel = '<:t_wheel:816440767656099891>'
                      let spin = new MessageEmbed()
                      .setDescription(`**PUSH!**`)
                      .setColor('#f5da9f')
                      message.channel.send(spin).then(msg => {
                        spin.setDescription(`${wheel}━━━`)
                        msg.edit(spin).then(msg => {
                          spin.setDescription(`━━${wheel}━━`)
                          msg.edit(spin).then(msg => {
                            spin.setDescription(`━━━${wheel}━`)
                            msg.edit(spin).then(msg => {
                              spin.setDescription(`━━━━${wheel}`)
                              msg.edit(spin).then(message => {
                              let caught = new MessageEmbed()
                              .setTitle(`> hurray! <a:wheart:801471261066002432> <a:emoon:802256873327034428>`)
                              .setDescription(`**Your ${pet.name} is spinning!**\n╰─*Your pet gained **${morehappy}%** happiness but lost **${energy}%** energy!*`)
                              .setColor("#c4f2cc")
                               message.channel.send(caught)
                              })
                            })
                          })
                        })
                      })
                    }
                  })
                } else {
                bot.rmvTrinkets(message.author.id, 35)
                let bonf = new MessageEmbed()
                .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
                .setDescription(`I don't think ${pet.name}s can fit in hamster wheels!\n╰─*Their happiness and energy did not change.*`)
                .setColor("#eda098")
                 return message.channel.send(bonf)
                }
              } else if (response === 'bored') {
                let bored = new MessageEmbed()
                .setDescription(`**For now, your ${pet.name} doesn't want to use the wheel.**\n╰─*You can try a different toy!* `)
                .setColor('#f5da9f')
                return message.channel.send(bored)
              }

          } else if (message.content === 'teddy' || message.content === 'Teddy' || message.content === 'bear' || message.content === 'Bear') {
            if (user.trinkets < 120) {
                   const trinketmore = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
                .setDescription(`You don't have enough trinkets to purchase this!`);
                return message.channel.send(trinketmore)
            } else if (user.petHappy > 81) {
               bot.rmvTrinkets(message.author.id, 120)
                bot.givePetEnergy(message.author.id, 20)
                let berryyum = new MessageEmbed()
                .setColor('#c4f2cc')
                .setTitle('> yum! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription(`Your pet's energy has been generated to \`20%\` more than what is was originally! `)
                return message.channel.send(berryyum)
            } else if (user.petEnergy > 81) {
                bot.rmvTrinkets(message.author.id, 120)
                bot.givePetHappy(message.author.id, 20)
                let berryyum = new MessageEmbed()
                .setColor('#c4f2cc')
                .setTitle('> yum! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription(`Your pet's happiness has been generated to \`20%\` more than what is was originally! `)
                return message.channel.send(berryyum)
            } else { 
                bot.rmvTrinkets(message.author.id, 120)
                bot.givePetHappy(message.author.id, 20)
                bot.givePetEnergy(message.author.id, 20)
                let berryyum = new MessageEmbed()
                .setColor('#c4f2cc')
                .setTitle('> yum! <a:wheart:801471261066002432> <a:emoon:802256873327034428>')
                .setDescription(`Your pet's happiness and energy has been generated to \`20%\` more than what is was originally! `)
                return message.channel.send(berryyum)
            }
            
          }
        }).catch(_ => {
            let timeout = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
            .setDescription(`You took too long to answer!`);
            return message.channel.send(timeout).catch();
        })
  } else if (user.pets.length < 1) {
    let nomoneyerrorembed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`You don't have a pet! Use \`nem petshop\` to adopt one!`);
    return message.channel.send(nomoneyerrorembed)
  
  } else if (!foundpet) {
    let sell3embed = new MessageEmbed()
    .setColor("#eda098")
    .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
    .setDescription(`You don't own this kind of pet.`);
    return message.channel.send(sell3embed);
  }





}    

module.exports.config = {
    name: 'play', // Command Name
    description: 'Feed your pet so their happiness doesn\'t decrease!', // Description
    usage: 'nem play <pet id>', // Usage
    botPerms: [], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 50, // Amount of bank space to give when command is used.
    cooldown: 30, // Command Cooldown
}