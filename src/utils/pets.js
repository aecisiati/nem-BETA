
const { MessageEmbed } = require('discord.js')
const fwog = '<:p_fwog:816683329696825385>'
const hedge = '<:p_hedgehog:816685537259290654>'
const pen = '<:p_penguin:816686209270808617>'
const bunny = '<:p_bunny:816685223366492180>'

const array = [{
    name: 'bunny',
    description: `**Bunny** <:p_bunny:816685223366492180>`,
    about: `Bunnies are very social. They love hanging out with other pets and exercising. If you fail to do this, your bunny may not want to do things for you!\n╰─*Bunnies don't like robbing people!*`,
    canBuy: true,
    displayOnPetShop: true,
    price: 250,
    type: `Agility • 10% Fast`,
    social: `True`,
    symbol: bunny,
    socials: true,
    keep: true, 
    run: async (bot, message, args) => {

    }
},
{
    name: 'fwog',
    description: `**Beta Fwog** ${fwog}`,
    about: `Fwogs are very social. They always hang out within their friend groups. If you fail to do this, your fwog will get tired!\n╰─*Fwogs get tired very easily!*`,
    canBuy: true,
    displayOnPetShop: true,
    price: 1,
    type: `Sneaky • 20% Clever`,
    social: `True`,
    symbol: fwog,
    socials: true,
    keep: true, 
    run: async (bot, message, args) => {

    }
},
{
    name: 'penguin',
    description: `**Penguin** ${pen}`,
    about: `Penguins are very social. They love meeting new animals and exploring. If you fail to do this, your penguin won't do anything!\n╰─*Penguins very slowly regenerate happiness!*`,
    canBuy: true,
    displayOnPetShop: true,
    price: 600,
    type: `Protection • 13% Protective`,
    social: `True`,
    symbol: pen,
    socials: true,
    keep: true, 
    run: async (bot, message, args) => {

    }
},
{
    name: 'hedgehog',
    description: `**Hedgehog** ${hedge}`,
    about: `Hedgehogs are very anti-social. They love snuggling up and eating some insects/vegetables. If you fail to do this, your hedgehog won't do anything!\n╰─*Hedgehogs don't like contact with other pets!*`,
    canBuy: true,
    displayOnPetShop: true,
    price: 1500,
    type: `Attack • 15% More Damage`,
    social: `False`,
    symbol: hedge,
    socials: false,
    keep: true, 
    run: async (bot, message, args) => {

    }
},
{
  name: 'cloudie',
  description: `**Cloudie** <:p_cloud:816613179487682571>`,
  about: `Cloudies are very shy, but will sometimes socialize! They can eat basically anything. They aren't picky considering they're just made out of water.\n╰─*Cloudies love everything!* `,
  canBuy: false,
  displayOnPetShop: false,
  price: 1,
  type: `Protection • 20% Protection`,
  social: `True`,
  symbol: '<:p_cloud:816613179487682571>',
  socials: true,
  keep: true,
  run: async (bot, message, args) => {

  }
}
];

module.exports = array;
