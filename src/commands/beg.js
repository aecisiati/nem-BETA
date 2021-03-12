const { MessageEmbed } = require("discord.js");
const i = '<:infomation:779736273639440394>'
const x = '<:bigx:779736072367505449>'
const tick = '<:bigtick:779736050892931082>'
module.exports.run = async (bot, message, args) => {
    const user = message.author;
    const banki = Math.floor(Math.random() * 200) + 1;
    const chances = Math.floor(Math.random() * 1000) + 1;
    const randomPerson = [
        `Nicki Minaj`,
        `Cardi B`,
        `Usher`,
        `Tupac`,
        `Kim Kardashian`,
        `Big Shaq`,
        `Willy Wonka`,
        `Mr. Boombastic`, 
        `Biggie Cheese`,
        `Pitbull`,
        `Beyonce`,
        `Justin Bieber`,
        `Kanye`,
        `Jay-Z`,
        `Joe Exotic`,
        `Katy Perry`,
        `Donald Trump`,
        `Jesus`,
        `God`,
        `Ben Shapiro`,
        `T-Series`,
        `PewDiePie`,
        `Keemstar`,
        `Ronald Mcdonald`,
        `Spongebob`,
        `Patrick`,
        `Squidward`,
        `Albert Einstein`,
        `George Washington`,
        `The Mafia`,
        `Joe Biden`,
        `Doja Cat`,
        `Whitney Houston`,
        `Miley Cyrus`,
        `Lady Gaga`,
        `Jennifer Lopez`,
        `Michael Jackson`,
        `Rihanna`,
        `Eminem`,
        `Drake`,
        `Mr. Krabs`,
        `Mariah Carey`,
        `Selena Gomez`,
        `Kylie Jenner`,
        `Dwayne Johnson`,
        `Cristiano Ronaldo`,
        `Ariana Grande`,
        `Ellen DeGeneres`,
        `Will Smith`,
        `Tom Hanks`,
        `Barack Obama`,
        `Morgan Freeman`,
        `Nicolas Cage`,
        `Mike Tyson`,
        `Oprah`,
        `Jackie Chan`,
        `Adam Sandler`,
        `Harry Potter`,
        `Paul McCartney`,
        `Your Mom`,
        `Joe`,
        `Kevin Hart`
      ]
  
      const randomFail = [
        `I have no money sorry :(`,
        `Youre so lazy. just get a job yourself loser`,
        `Get a life`,
        `Lol no`,
        `Okay fine... wait nevermind`,
        `Sorry :( but get out`,
        `Why are you in my house`,
        `You get... nothing`,
        `I need money for a ps5`,
        `Ur ugly so i wont`,
        `Yeah I'm rich... I could give you some money... but no`,
        `I dont give to the poor`,
        `Go strive off of your foodstamps`,
        `Yeah.. im going to have to pass on that one`,
        `You robbed my mom the other day..`,
        `How did you even get in here`,
        `Get out of my bathroom`,
        `No`
      ]
  
    
      const person = randomPerson[Math.floor((Math.random() * randomPerson.length))];
  
      const response = randomFail[Math.floor((Math.random() * randomFail.length))];
  
      let begOdds = Math.floor(Math.random() * 100);
  
  
        if(begOdds <=60) {
        let punishembed = new MessageEmbed()
        .setDescription(`> **${person}**: ${response}\n ╰─*Maybe get job?*`)
        .setColor('#eda098')
        message.channel.send(punishembed)
        } else {
  
        let tonembed = new MessageEmbed()
        bot.giveCoins(message.author.id, chances);
        tonembed.setDescription(`> **${person}** has donated **❀ ${chances > 1 ? chances + ' coins' : chances + ' coin'}** to ${user}!\n ╰─*Maybe get a job?*`)
        tonembed.setColor('#f5da9f')
        message.channel.send(tonembed)
        }
      
}

module.exports.config = {
    name: 'beg', // Command Name
    description: 'Allows you to beg people for coins like the hobo you are.', // Description
    usage: 'nem beg', // Usage
    botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI'], // Bot permissions needed to run command. Leave empty if nothing.
    userPerms: [], // User permissions needed to run command. Leave empty if nothing.
    aliases: [], // Aliases 
    bankSpace: 130, // Amount of bank space to give when command is used.
    cooldown: 50 // Command Cooldown
}

