
const { MessageEmbed } = require('discord.js')
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
const hc = '<:i_leaf:812371493689622629>'
const rod = '<:f_pole:816408922516750417>'
const dyn = '<:f_dynamite:816710512405381181>'

const array = [{
    name: 'cookie',
    description: `${cooki} **Cookie**`,
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 10,
    type: 'Power-Up',
    price: 50,
    keep: false,
    run: async (bot, message, args) => {
        const user = message.author;
        let coinsInWallet = await bot.fetchUser(message.author.id);
        let randomAmount = Math.floor((Math.random() * 500));
        bot.giveCoins(message.author.id, randomAmount);
        const cookieRandom = [
            `You stuffed the cookie in your face and achieved enlightenment. You gained **❀ ${randomAmount}** coins.`,
            `You choked on a cookie and almost died from a heart attack. At least you choked out **❀ ${randomAmount}** coins.`,
            `The cookie tasted pleasant, until you found out the chocolate chips were made from rabbit droppings. Nem handed you **❀ ${randomAmount}** coins for pity.`
        ];
        const yes = cookieRandom[Math.floor(Math.random() * cookieRandom.length)];
        message.channel.send(`${yes}`);
    }
},
{
    name: 'padlock',
    description: `${lock} **Padlock**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 2000,
    price: 5000,
    type: 'Tool',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'fishingrod',
    description: `${rod} **Fishing Rod**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 15000,
    type: 'Tool',
    keep: true,
    run: async (bot, message, args) => {
      
    }
},
{
    name: 'common',
    description: '<:f_commonfish:816418641619976273> **Common Fish**',
    canUse: false,
    canBuy: true,
    displayOnShop: false,
    sellAmount: 25,
    price: 25,
    type: `Sellable`,
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'uncommon',
    description: '<:f_uncommon:816418784096157727> **Uncommon Fish**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 50,
    type: 'Sellable',
    price: 0,

    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'rare',
    description: '<:f_rare:816419715479371806> **Rare Fish**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 500,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'veryrare',
    description: '<:f_veryrare:816419570885328916> **Very Rare Fish**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 700,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'legendary',
    description: `<:f_legendary:816421422951694407> **Legendary Whale** `,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 1000,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'banknote',
    description: `${note} **Bank Note**`,
    canUse: true,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 6667,
    price: 20000,
    type: 'Power-Up',
    keep: false,
    run: async (bot, message, args) => {
        const random = Math.ceil((Math.random() * 5000) + 10000);
        const e = await bot.giveBankSpace(message.author.id, random);
        message.channel.send(`You redeemed a banknote, which increased your bank space by **${random.toLocaleString()}**! You now have **${e.bankSpace.toLocaleString()}** bank space.`);
    }
}, 
{
    name: 'bow',
    description: `${rifle} **Bow and Arrow**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 22500,
    type: 'Tool',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'deer',
    description: '<:f_deer:816424535652958228> **Deer**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 50,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'bear',
    description: '<:f_bear:816424188448866364> **Bear**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 60,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'duck',
    description: '<:f_duck:816425281182236742> **Duck**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 25,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'pig',
    description: '<:f_pig:816425950938005525> **Pig**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 80,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'cow',
    description: '<:f_cow:816427150588248104> **Cow**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 120,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'fox',
    description: '<:f_fox:816426321700978781> **Fox**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 100,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'rabbit',
    description: '<:f_rabbit:816424679815249921> **Rabbit**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 30,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'chicken',
    description: '<:f_chicken:816427791998124122> **Chicken**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 50,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'boar',
    description: '<:f_boar:816428251316224090> **Boar**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 10,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'pickaxe',
    description: `${pick} **Pickaxe**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 30000,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'gem',
    description: '💎 **Gem**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 10,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'diamond',
    description: `<:d_diamond:816410071172251678> **Diamond**`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 200,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'ruby',
    description: `<:d_ruby:816410275116089364> **Ruby**`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 225,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'jade',
    description: `<:d_jade:816411787334778900> **Jade**`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 500,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'amethyst',
    description: `<:d_amethyst:816410443295227936> **Amethyst**`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 1050,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'precious',
    description: `<:d_precious:816410650589790248> **Precious**`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 2000,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'axe',
    description: `${axe} **Axe**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 3000,
    price: 20000,
    type: 'Tool',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'tree',
    description: '<:f_tree:816414291346718761> **Tree**',
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 400,
    price: 0,
    type: 'Sellable',
    keep: true,
    run: async (bot, message, args) => {

    }
},
{
    name: 'luckyclover',
    description: `<:f_clover:816402071452385312> **Lucky Clover**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 4000,
    price: 10000,
    type: 'Power-Up',
    keep: false,
    run: async (bot, message, args) => {

    }
},

{
    name: 'trophy',
    description: `${ht} **Nem's Trophy**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: false,
    price: 100000000,
    type: 'Collectable',
    keep: false,
    run: async (bot, message, args) => {

    }
},
{
    name: 'berries',
    description: `<:m_berries:816445290445799485> **Berries**`,
    canUse: false,
    canBuy: true,
    displayOnShop: false,
    sellAmount: 20,
    price: 14500,
    type: 'Sellable',
    keep: true, 
    run: async (bot, message, args) => {

    }
},
{
    name: 'branch',
    description: `<:f_branch:816414838246211594> **Branch**`,
    canUse: false,
    canBuy: false,
    displayOnShop: false,
    sellAmount: 100,
    price: 0,
    type: 'Sellable',
    keep: true, 
    run: async (bot, message, args) => {

    }
},
{
  name: 'dynamite',
    description: `${dyn} **Dynamite**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 1000,
    price: 10000,
    type: 'Tool',
    keep: true, 
    run: async (bot, message, args) => {
      
    }
},
{
    name: 'basicfood',
    description: `<:t_dogfood:816757653220753438> **Basic Food**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 2,
    price: 100,
    type: 'Sellable',
    keep: true, 
    run: async (bot, message, args) => {
      
    }
},
{
    name: 'vegetable',
    description: `<:m_carrot:816444621059915796> **Vegetable**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 10,
    price: 150,
    type: 'Sellable',
    keep: true, 
    run: async (bot, message, args) => {
      
    }
},
{
    name: 'insect',
    description: `<:m_fly:816444953814106113> **Insect**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 20,
    price: 200,
    type: 'Sellable',
    keep: true, 
    run: async (bot, message, args) => {
      
    }
},
{
    name: 'cupcake',
    description: `<:m_cupcake:816446018912124928> **Cupcake**`,
    canUse: false,
    canBuy: true,
    displayOnShop: true,
    sellAmount: 40,
    price: 15500,
    type: 'Sellable',
    keep: true, 
    run: async (bot, message, args) => {
      
    }
}
];

module.exports = array;
