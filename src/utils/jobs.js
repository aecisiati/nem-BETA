const { MessageEmbed } = require('discord.js')

const array = [{
  name: 'dishwasher',
  description: '<:f_plate:816903249789190164> **Dishwasher**',
  canBuy: true,
  displayOnJobList: true,
  salary: 200,
  run: async (bot, message, args) => {

  }
},
{
  name: 'maid',
  description: '<:f_vaccum:816903615678513202> **Maid**',
  canBuy: true,
  displayOnJobList: true,
  salary: 200,
  run: async (bot, message, args) => {

  }
},
{
  name: `youtuber`,
  description: '<:f_video:816904979981008946> **Youtuber**',
  canBuy: true,
  displayOnJobList: true,
  salary: 250,
  run: async (bot, message, args) => {

  }
},
{
  name: `developer`,
  description: '<:f_coding:816912387285188628> **Developer**',
  canBuy: true,
  displayOnJobList: true,
  salary: 350,
  run: async (bot, message, args) => {

  }

},
{
  name: `teacher`,
  description: '<:r_board:816913778809503764> **Teacher**',
  canBuy: true,
  displayOnJobList: true,
  salary: 350,
  run: async (bot, message, args) => {

  }
}
];

module.exports = array;
