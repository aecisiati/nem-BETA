const { MessageEmbed } = require('discord.js')
const petss = require('../utils/pets')
const itemss = require('../utils/items')
const vege = '<:m_carrot:816444621059915796>'
const bugs = '<:m_fly:816444953814106113>'
const fish = '<:f_uncommon:816418784096157727>'
const berries = '<:m_berries:816445290445799485>'
const cupcake = '<:m_cupcake:816446018912124928>'
const leveling = require('discord-leveling');

module.exports.run = async (bot, message, args) => {
let user = await bot.fetchUser(message.author.id);
const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
const lesshappy = Math.round(Math.random() * 5)+ 1
const morehappy = Math.round(Math.random() * 10) + 1
const moreenergy = Math.round(Math.random() * 10) + 1
const someenergy = Math.round(Math.random() * 5) + 1

  
  if (!args.join(' ')) {
            let buynothingerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`You can't feed nothing! Please enter your pet's \`id\`.`);

            return message.channel.send(buynothingerrorembed).catch();
        //return message.channel.send("you can't buy nothing, please enter the correct item id");
    }
  
  if(!args[1]) {
    let buynothingerrorembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
            .setDescription(`You can't feed your pet nothing! Please enter the item's \`id\`.`);

      return message.channel.send(buynothingerrorembed).catch();
  }
  const pet = petss.find(x => x.name.toLowerCase() === args.join(' ').toString().toLowerCase() || x.name.toLowerCase() === args[0].toString().toLowerCase() || x.name.toLowerCase() === `${args[0].toString().toLowerCase()}`);
  if (!pet) { 
        let wrongiderrorembed = new MessageEmbed()
        .setColor("#eda098")
        .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
        .setDescription(`I'm sorry, but you don't own that kind of pet! Please enter your pet's correct \`id\`.`);

        return message.channel.send(wrongiderrorembed).catch();
        //return message.channel.send("You can't buy an item that doesn't exist please use the correct item id");
  }
  const item = itemss.find(x => x.name.toLowerCase() === args[1].toLowerCase());
   if(!item) {
     let wrongiderrorembed = new MessageEmbed()
        .setColor("#eda098")
        .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
        .setDescription(`I'm sorry, but you don't have that item! Please enter the item's correct \`id\`.`);

        return message.channel.send(wrongiderrorembed).catch();
   }
    let founditem = user.items.find(x => x.name.toLowerCase() === item.name.toLowerCase());
    let array = [];
    array = user.items.filter(x => x.name !== item.name);
    if(!founditem) {
      let wrongiderrorembed = new MessageEmbed()
        .setColor("#eda098")
        .setTitle('> hmmmm.... <a:wheart:801471261066002432> <:girlhmmthink:804652502951395368>')
        .setDescription(`You don't own that item!`);

      return message.channel.send(wrongiderrorembed).catch();
    }


  let foundpet = user.pets.find(x => x.name.toLowerCase() === pet.name.toLowerCase());
  let array2 = [];
  array2 = user.pets.filter(x => x.name !== pet.name);

  if (user.petHappy + user.petEnergy > 185) {
    return message.channel.send(`Your pet's happiness and energy is almost maxed out! Try again when your pet's stats have decreased.`)
  }

  if(foundpet){
  leveling.AddXp(message.author.id, 8);
  if (founditem.amount === 1) {
            user.items = user.items.filter(x => x.name.toLowerCase() != item.name.toLowerCase());
            await user.save();
        }
        else {
            array.push({
                name: item.name,
                amount: founditem.amount - 1,
                description: item.description,
                type: item.type
            });
            user.items = array;
            await user.save();
        }

    if(pet.name === 'bunny') {
      if(founditem.name === 'vegetable') {
        if(user.petHappy > 85) { 
          bot.givePetEnergy(message.author.id, moreenergy);
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\`.*`)
          return message.channel.send(superembed)
        } else if(user.petEnergy > 85) {
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        } else {  
          bot.givePetEnergy(message.author.id, moreenergy);
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\` and their happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        }
      } else if(item.name === 'basicfood') {
        if(user.petHappy > 85) {
          bot.givePetEnergy(message.author.id, someenergy);
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's energy gained \`${someenergy}%\`.*`)
          return message.channel.send(kindaembed)
        } else if(user.petEnergy > 85) {
          bot.givePetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's happiness gained \`${lesshappy}%\`.*`)
          return message.channel.send(kindaembed)
        } else {
          bot.givePetEnergy(message.author.id, someenergy);
          bot.givePetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's energy gained \`${someenergy}%\` and their happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(kindaembed)
        }
      } else if (founditem.name === 'berries') { 
          bot.genPetHappy(message.author.id)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name}'s happiness has been generated thanks to ${item.description}!\n╰─*Your pet's happiness is now \`100%\`.*`)
          return message.channel.send(kindaembed)
      } else if (founditem.name === 'cupcake') { 
          bot.genPetEnergy(message.author.id)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name}'s energy has been generated thanks to ${item.description}!\n╰─*Your pet's energy is now \`100%\`.*`)
          return message.channel.send(kindaembed)
      } else {
          bot.givePetEnergy(message.author.id, someenergy);
          bot.rmvPetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} doesn't like ${item.description}!\n╰─*Your pet's energy gained \`${someenergy}%\` and their happiness decreased \`${lesshappy}%\`.*`)
          return message.channel.send(kindaembed)
      }
    
    } else if(pet.name === 'fwog') {
      if(founditem.name === 'insect') {
        if(user.petHappy > 85) { 
          bot.givePetEnergy(message.author.id, moreenergy);
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\`.*`)
          return message.channel.send(superembed)
        } else if(user.petEnergy > 85) {
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        } else {  
          bot.givePetEnergy(message.author.id, moreenergy);
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\` and their happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        }
        } else if(founditem.name === 'basicfood') {
          if(user.petHappy > 85) {
          bot.givePetEnergy(message.author.id, someenergy);
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's energy gained \`${someenergy}%\`.*`)
          return message.channel.send(kindaembed)
        } else if(user.petEnergy > 85) {
          bot.givePetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's happiness gained \`${lesshappy}%\`.*`)
          return message.channel.send(kindaembed)
        } else {
          bot.givePetEnergy(message.author.id, someenergy);
          bot.givePetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's energy gained \`${someenergy}%\` and their happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(kindaembed)
        }
      } else if (founditem.name === 'berries') { 
          bot.genPetHappy(message.author.id)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name}'s happiness has been generated thanks to ${item.description}!\n╰─*Your pet's happiness is now \`100%\`.*`)
          return message.channel.send(kindaembed)
      } else if (founditem.name === 'cupcake') { 
          bot.genPetEnergy(message.author.id)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name}'s energy has been generated thanks to ${item.description}!\n╰─*Your pet's energy is now \`100%\`.*`)
          return message.channel.send(kindaembed)
      } else {
          bot.givePetEnergy(message.author.id, someenergy);
          bot.rmvPetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} doesn't like ${item.description}!\n╰─*Your pet's energy gained \`${someenergy}%\` and their happiness decreased \`${lesshappy}%\`.*`)
          return message.channel.send(kindaembed)
      }
    } else if(pet.name === 'penguin') {
      if(founditem.name === 'common') {
         if(user.petHappy > 85) { 
          bot.givePetEnergy(message.author.id, moreenergy);
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\`.*`)
          return message.channel.send(superembed)
        } else if(user.petEnergy > 85) {
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        } else {  
          bot.givePetEnergy(message.author.id, moreenergy);
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\` and their happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        }
      } else if(founditem.name === 'basicfood') {
          if(user.petHappy > 85) {
          bot.givePetEnergy(message.author.id, someenergy);
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's energy gained \`${someenergy}%\`.*`)
          return message.channel.send(kindaembed)
        } else if(user.petEnergy > 85) {
          bot.givePetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's happiness gained \`${lesshappy}%\`.*`)
          return message.channel.send(kindaembed)
        } else {
          bot.givePetEnergy(message.author.id, someenergy);
          bot.givePetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's energy gained \`${someenergy}%\` and their happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(kindaembed)
        }
      } else if (founditem.name === 'berries') { 
          bot.genPetHappy(message.author.id)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name}'s happiness has been generated thanks to ${item.description}!\n╰─*Your pet's happiness is now \`100%\`.*`)
          return message.channel.send(kindaembed)
      } else if (founditem.name === 'cupcake') { 
          bot.genPetEnergy(message.author.id)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name}'s energy has been generated thanks to ${item.description}!\n╰─*Your pet's energy is now \`100%\`.*`)
          return message.channel.send(kindaembed)
      } else {
          bot.givePetEnergy(message.author.id, someenergy);
          bot.rmvPetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} doesn't like ${item.description}!\n╰─*Your pet's energy gained \`${someenergy}%\` and their happiness decreased \`${lesshappy}%\`.*`)
          return message.channel.send(kindaembed)
      }
    
    } else if(pet.name === 'hedgehog') {
      if(founditem.name === 'insect') {
        if(user.petHappy > 85) { 
          bot.givePetEnergy(message.author.id, moreenergy);
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\`.*`)
          return message.channel.send(superembed)
        } else if(user.petEnergy > 85) {
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        } else {  
          bot.givePetEnergy(message.author.id, moreenergy);
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\` and their happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        }
      } else if(founditem.name === 'vegetable') {
        if(user.petHappy > 85) { 
          bot.givePetEnergy(message.author.id, moreenergy);
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\`.*`)
          return message.channel.send(superembed)
        } else if(user.petEnergy > 85) {
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        } else {  
          bot.givePetEnergy(message.author.id, moreenergy);
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\` and their happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        }
      } else if(founditem.name === 'basicfood') {
          if(user.petHappy > 85) {
          bot.givePetEnergy(message.author.id, someenergy);
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's energy gained \`${someenergy}%\`.*`)
          return message.channel.send(kindaembed)
        } else if(user.petEnergy > 85) {
          bot.givePetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's happiness gained \`${lesshappy}%\`.*`)
          return message.channel.send(kindaembed)
        } else {
          bot.givePetEnergy(message.author.id, someenergy);
          bot.givePetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} didn't mind the ${item.description}.\n╰─*Your pet's energy gained \`${someenergy}%\` and their happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(kindaembed)
        }
      } else if (founditem.name === 'berries') { 
          bot.genPetHappy(message.author.id)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name}'s happiness has been generated thanks to ${item.description}!\n╰─*Your pet's happiness is now \`100%\`.*`)
          return message.channel.send(kindaembed)
      } else if (founditem.name === 'cupcake') { 
          bot.genPetEnergy(message.author.id)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name}'s energy has been generated thanks to ${item.description}!\n╰─*Your pet's energy is now \`100%\`.*`)
          return message.channel.send(kindaembed)
      } else {
          bot.givePetEnergy(message.author.id, someenergy);
          bot.rmvPetHappy(message.author.id, lesshappy)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} doesn't like ${item.description}!\n╰─*Your pet's energy gained \`${someenergy}%\` and their happiness decreased \`${lesshappy}%\`.*`)
          return message.channel.send(kindaembed)
      }
    } else if(pet.name === 'cloudie') {
        if (founditem.name === 'berries') { 
          bot.genPetHappy(message.author.id)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name}'s happiness has been generated thanks to ${item.description}!\n╰─*Your pet's happiness is now \`100%\`.*`)
          return message.channel.send(kindaembed)
        } else if (founditem.name === 'cupcake') { 
          bot.genPetEnergy(message.author.id)
          let kindaembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name}'s energy has been generated thanks to ${item.description}!\n╰─*Your pet's energy is now \`100%\`.*`)
          return message.channel.send(kindaembed)
        } else {
          if(user.petHappy > 85) { 
          bot.givePetEnergy(message.author.id, moreenergy);
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\`.*`)
          return message.channel.send(superembed)
        } else if(user.petEnergy > 85) {
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        } else {  
          bot.givePetEnergy(message.author.id, moreenergy);
          bot.givePetHappy(message.author.id, morehappy)
          let superembed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・${pet.name}`)
          .setColor("#f5da9f")
          .setDescription(`Your ${pet.name} absolutely **LOVED** the ${item.description}!\n╰─*Your pet's energy gained \`${moreenergy}%\` and their happiness gained \`${morehappy}%\`.*`)
          return message.channel.send(superembed)
        }
      }
    }

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
    name: 'feed', // Command Name
    description: 'Feed your pet so their happiness doesn\'t decrease!', // Description
    usage: 'nem feed <pet id> <food>', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 10, // Amount of bank space to give when command is used.
    cooldown: 2, // Command Cooldown
}