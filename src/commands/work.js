const { MessageEmbed } = require("discord.js");
const jobss = require("../utils/jobs");
const pagination = require("discord.js-pagination");
const prettyMilliseconds = require("pretty-ms");

module.exports.run = async (bot, message, args) => {
  const member =
    message.mentions.members.first() ||
    message.guild.members.cache.get(args[0]) ||
    message.guild.members.cache.find(
      (member) =>
        member.user.username.toLowerCase() ===
        args.join(" ").toString().toLowerCase()
    ) ||
    message.guild.members.cache.find(
      (member) =>
        member.user.username === args.slice(0).join(" ") ||
        member.user.username === args[0]
    ) ||
    message.member;
  const user = await bot.fetchUser(member.id);
  const number = 1;
  let job2 = user.jobs.slice(number - 1, number);
  const jobname = job2.map((x) => `${x.description}`);
  const dish = user.jobs.find((x) => x.name === "dishwasher");
  const maid = user.jobs.find((x) => x.name === "maid");
  const stream = user.jobs.find((x) => x.name === "youtuber");
  const dev = user.jobs.find((x) => x.name === "developer");
  const teach = user.jobs.find((x) => x.name === "teacher");
  const jobsalary = job2.map((x) => `${x.salary}`);

  if (args[0] === "list") {
    let listembed = new MessageEmbed()
      .setColor("#f5da9f")
      .setTitle(`\`🌿\` ⏤・ work list`)
      .setDescription(`To select a job, do \`nem work <job-name>\``)
      .setThumbnail(
        "https://media.discordapp.net/attachments/816416430303739967/816902783214026792/unknown.png?width=442&height=442"
      )
      .addFields({
        name: `Available Jobs`,
        value: `<:f_plate:816903249789190164> **Dishwasher**\nHours Required Per Day: \`0\` — Salary: \`❀ 200 per hour\`\n\n<:f_vaccum:816903615678513202> **Maid**\nHours Required Per Day: \`0\` — Salary: \`❀ 200 per hour\`\n\n <:f_video:816904979981008946> **Youtuber**\nHours Required Per Day: \`1\`  — Salary: \`❀ 250 per hour\`\n\n<:f_coding:816912387285188628> **Developer**\nHours Required Per Day: \`1\` — Salary: \`❀ 350 per hour\` `
      });
    let listembed2 = new MessageEmbed()
      .setColor("#f5da9f")
      .setTitle(`\`🌿\` ⏤・ work list`)
      .setDescription(`To select a job, do \`nem work <job-name>\``)
      .setThumbnail(
        "https://media.discordapp.net/attachments/816416430303739967/816902783214026792/unknown.png?width=442&height=442"
      )
      .addFields({
        name: `Job List`,
        value: `<:r_board:816913778809503764> **Teacher**\nHours Required Per Day: \`1\` — Salary: \`❀ 350 per hour\` `
      });

    const pages = [listembed, listembed2];

    const emojiList = ["⏪", "⏩"];

    const timeout = "250000";

    pagination(message, pages, emojiList, timeout);

    return;
  }

  if (args[0] === "stats") {
    if (user.jobs.length < 1) {
      let jobembed = new MessageEmbed()
        .setColor("#eda098")
        .setTitle(`> hmm... <:girlhmmthink:804652502951395368>`)
        .setDescription(
          `**No job was found!**\n╰─*Get started by doing \`nem work list\`.*`
        );
      return message.channel.send(jobembed);
    } else {
      let embed = new MessageEmbed()
        .setColor("#f5da9f")
        .setTitle(`\`🌿\` ⏤・${member.user.username}'s Job`)
        .setFooter(`- The max promo rank is 10.`)
        .addFields(
          {
            name: `Work`,
            value: `> **Employed as a:** ${jobname}\n> **Salary:** \`${jobsalary}\` per hour `,
            inline: true
          },
          {
            name: `Misc`,
            value: `\`${user.jobHours}\` hours earned\n Promotion Rank: \`${user.jobPromo}\``
          },
          {
            name: `Coins`,
            value: `> **Wallet:** ❀ ${user.coinsInWallet.toLocaleString()}`
          }
        );
      return message.channel.send(embed);
    }
  }

  if (!args[0]) {
    if (user.jobs.length < 1) {
      let jobembed = new MessageEmbed()
        .setColor("#eda098")
        .setTitle(`> hmm... <:girlhmmthink:804652502951395368>`)
        .setDescription(
          `**No job was found!**\n╰─*Get started by doing \`nem work list\`.*`
        );
      return message.channel.send(jobembed);
    }
    if (Date.parse(user.workStreak) + 1800000 > Date.now()) {
      const embed = new MessageEmbed()
        .setTitle(
          "> slow down!! <a:panic:805883559981744199> <a:wrhibud8:802298776308023316>"
        )
        .setDescription(
          `This command is on a cooldown!\n╰─*You can run this command again in : \`${prettyMilliseconds(
            Date.parse(user.workStreak) + 1800000 - Date.now()
          )}\`.*`
        )
        .setColor("#f5da9f");
      return message.channel.send(embed);
    } else {
      if (dish) {
        const randomMessage = ["steal", "glass", `cover`];
        const response =
          randomMessage[Math.floor(Math.random() * randomMessage.length)];
        if (response === "steal") {
          bot.giveJobHours(message.author.id, 1);
          let dishe = new MessageEmbed()
            .setTitle(`\`🌿\` ⏤・working`)
            .setColor("#f5da9f")
            .setDescription(
              `**A worker tells you to steal one of the expensive china plates, what do you do?**\n***A*** - Steal the china plates, risk your job.\n***B*** - Report the worker that suggested you to steal. \n╰─*Type \`A\` or \`B\`* `
            );
          message.channel.send(dishe);
          let filter = (m) => m.author.id === message.author.id;
          message.channel
            .awaitMessages(filter, {
              max: 1,
              time: 30000,
              errors: ["time"]
            })
            .then(async (message) => {
              message = message.first();
              const random = Math.round(Math.random() * 50) + 2;
              if (message.content === "a" || message.content === "A") {
                let array = [];
                array = user.jobs.filter((x) => x.name !== "dishwasher");
                user.jobs = array;
                await user.save().then((user.fired = new Date(Date.now())));
                let yay = new MessageEmbed()
                  .setTitle(`\`🌿\` ⏤・working`)
                  .setColor("#eda098")
                  .setDescription(
                    `Your boss caught you stealing the plates and became furious!\n╰─*You were immediately **fired**! No questions asked.*`
                  );
                return message.channel.send(yay);
              } else if (message.content === "b" || message.content === "B") {
                bot.giveCoins(message.author.id, 200 + random);
                let yay = new MessageEmbed()
                  .setTitle(`\`🌿\` ⏤・working`)
                  .setColor("#f5da9f")
                  .setDescription(
                    `Your boss is pleased that you reported this information to them.\n╰─*The worker got fired and you were paid **❀ 200** coins + a bonus of **❀ ${random}** coins!* `
                  );
                return message.channel.send(yay);
              } else {
                let yay = new MessageEmbed()
                  .setTitle(`\`🌿\` ⏤・canceled.`)
                  .setColor("#f5da9f")
                  .setDescription(`That wasn't an option from the list!`);
                return message.channel.send(yay);
              }
            })
            .catch((_) => {
              let timeout = new MessageEmbed()
                .setColor("#eda098")
                .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
                .setDescription(`You took too long to answer!`);
              return message.channel.send(timeout).catch();
            });
        } else if (response === "glass") {
          bot.giveJobHours(message.author.id, 1);
          let dishe = new MessageEmbed()
            .setTitle(`\`🌿\` ⏤・working`)
            .setColor("#f5da9f")
            .setDescription(
              `**One of the workers framed you for breaking the wine glasses.**\n***A*** - Tell the boss you didn't do it, and you were being framed.\n***B*** - Claim you did it, and take ownership.\n╰─*Type \`A\` or \`B\`* `
            );
          message.channel.send(dishe);
          let filter = (m) => m.author.id === message.author.id;
          message.channel
            .awaitMessages(filter, {
              max: 1,
              time: 30000,
              errors: ["time"]
            })
            .then(async (message) => {
              message = message.first();
              const random = Math.round(Math.random() * 50) + 2;
              if (message.content === "a" || message.content === "A") {
                bot.giveCoins(message.author.id, 200 + random);
                let yay = new MessageEmbed()
                  .setTitle(`\`🌿\` ⏤・working`)
                  .setColor("#f5da9f")
                  .setDescription(
                    `Your boss decided to punish the staff who framed you.\n╰─*You were paid **❀ 200** coins + a bonus of **❀ ${random}** coins!* `
                  );
                return message.channel.send(yay);
              } else if (message.content === "b" || message.content === "B") {
                let random2 = Math.round(user.coinsInWallet * 0.2);
                bot.rmvCoins(message.author.id, random2);
                let yay = new MessageEmbed()
                  .setTitle(`\`🌿\` ⏤・failed.`)
                  .setColor("#eda098")
                  .setDescription(
                    `Your boss was very disappointed.\n╰─*You were fined **❀ ${random2}** coins for alledgedly breaking the wine glasses.*`
                  );
                return message.channel.send(yay);
              } else {
                let yay = new MessageEmbed()
                  .setTitle(`\`🌿\` ⏤・canceled.`)
                  .setColor("#f5da9f")
                  .setDescription(`That wasn't an option from the list!`);
                return message.channel.send(yay);
              }
            })
            .catch((_) => {
              let timeout = new MessageEmbed()
                .setColor("#eda098")
                .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
                .setDescription(`You took too long to answer!`);
              return message.channel.send(timeout).catch();
            });
        } else if (response === "cover") {
          bot.giveJobHours(message.author.id, 1);
          let dishe = new MessageEmbed()
            .setTitle(`\`🌿\` ⏤・working`)
            .setColor("#f5da9f")
            .setDescription(
              `**Your co-worker asked you to cover for them when they sneak out, what do you do?**\n***A*** - Tell the boss they snuck out, risking their job.\n***B*** - Cover for them, risking your job.\n╰─*Type \`A\` or \`B\`* `
            );
          message.channel.send(dishe);
          let filter = (m) => m.author.id === message.author.id;
          message.channel
            .awaitMessages(filter, {
              max: 1,
              time: 30000,
              errors: ["time"]
            })
            .then(async (message) => {
              message = message.first();
              const random = Math.round(Math.random() * 50) + 2;
              if (message.content === "a" || message.content === "A") {
                bot.giveCoins(message.author.id, 200);
                let yay = new MessageEmbed()
                  .setTitle(`\`🌿\` ⏤・working`)
                  .setColor("#f5da9f")
                  .setDescription(
                    `Your co-worker was fired because you snitched on them.\n╰─*You were paid only **❀ 200** coins.* `
                  );
                return message.channel.send(yay);
              } else if (message.content === "b" || message.content === "B") {
                let random3 = Math.round(Math.random() * 200) + 1;
                bot.giveCoins(message.author.id, 200 + random3);
                let yay = new MessageEmbed()
                  .setTitle(`\`🌿\` ⏤・working`)
                  .setColor("#f5da9f")
                  .setDescription(
                    `You covered for them and the boss didn't even notice your lie!\n╰─*You were paid **❀ 200** coins + your co-worker gave you **❀ ${random3}** coins!*`
                  );
                return message.channel.send(yay);
              } else {
                let yay = new MessageEmbed()
                  .setTitle(`\`🌿\` ⏤・canceled.`)
                  .setColor("#f5da9f")
                  .setDescription(`That wasn't an option from the list!`);
                return message.channel.send(yay);
              }
            })
            .catch((_) => {
              let timeout = new MessageEmbed()
                .setColor("#eda098")
                .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
                .setDescription(`You took too long to answer!`);
              return message.channel.send(timeout).catch();
            });
        }
      }
      if (maid) {
        const randomMessage = ["broom", "glass", `mop`];
        const response =
          randomMessage[Math.floor(Math.random() * randomMessage.length)];

        if (response === "broom") {
          bot.giveJobHours(message.author.id, 1);
          let yay = new MessageEmbed()
            .setTitle(`\`🌿\` ⏤・working...`)
            .setColor("#f5da9f")
            .setDescription(
              `React with the correct reaction below!\n╰─*What do we use to sweep the floors?*`
            );
          message.channel.send(yay).then(async (message) => {
            const emojiList1 = ["📝", "🧹"];

            for (const emoji of emojiList1) await message.react(emoji);
            const reactCollector = (reaction, user) =>
              emojiList1.includes(reaction.emoji.name) &&
              user.id === message.author.id;

            const reactionCollector = message.createReactionCollector(
              (reaction, user) =>
                emojiList1.includes(reaction.emoji.name) && !user.bot,
              { time: 12000 }
            );

            reactionCollector.on("collect", async (reaction) => {
              reaction.users.remove(message.author);
              switch (reaction.emoji.name) {
                case emojiList1[0]:
                  bot.giveCoins(message.author.id, 200);
                  await message.reactions.removeAll();
                  yay.setDescription(
                    `Your employer was very angry at how you barely did anything!\n╰─*You were paid only **❀ 200** coins.`
                  );
                  message.edit(yay);
                  break;
                case emojiList1[1]:
                  const random = Math.round(Math.random() * 50) + 2;
                  bot.giveCoins(message.author.id, 200 + random);
                  await message.reactions.removeAll();
                  yay.setDescription(
                    `You cleaned the house perfectly.\n╰─*Your employer paid you **❀ 200** coins + a bonus of **❀ ${random}** coins!*`
                  );
                  message.edit(yay);
                  break;
                default:
                  break;
              }
            });
          });
        } else if (response === "glass") {
          bot.giveJobHours(message.author.id, 1);
          let yay = new MessageEmbed()
            .setTitle(`\`🌿\` ⏤・working...`)
            .setColor("#f5da9f")
            .setDescription(
              `React with the correct reaction below!\n╰─*What shines when cleaned right?*`
            );
          message.channel.send(yay).then(async (message) => {
            const emojiList1 = ["🥂", "💡"];

            for (const emoji of emojiList1) await message.react(emoji);
            const reactCollector = (reaction, user) =>
              emojiList1.includes(reaction.emoji.name) &&
              user.id === message.author.id;

            const reactionCollector = message.createReactionCollector(
              (reaction, user) =>
                emojiList1.includes(reaction.emoji.name) && !user.bot,
              { time: 12000 }
            );

            reactionCollector.on("collect", async (reaction) => {
              reaction.users.remove(message.author);
              switch (reaction.emoji.name) {
                case emojiList1[0]:
                  const random = Math.round(Math.random() * 50) + 2;
                  bot.giveCoins(message.author.id, 200 + random);
                  await message.reactions.removeAll();
                  yay.setDescription(
                    `Your employer was impressed on how well you cleaned the glasses.\n╰─*You were paid **❀ 200** coins + a bonus of **❀ ${random}** coins!*`
                  );
                  message.edit(yay);
                  break;
                case emojiList1[1]:
                  await message.reactions.removeAll();
                  bot.giveCoins(message.author.id, 200 + random);
                  yay.setDescription(
                    `Your employer was questioning on why you were cleaning a lightbulb.\n╰─*You were paid only **❀ 200** coins.`
                  );
                  message.edit(yay);
                  break;
                default:
                  break;
              }
            });
          });
        } else if (response === "mop") {
          bot.giveJobHours(message.author.id, 1);
          let yay = new MessageEmbed()
            .setTitle(`\`🌿\` ⏤・working...`)
            .setColor("#f5da9f")
            .setDescription(
              `React with the correct reaction below!\n╰─*How do we wet a mop?*`
            );
          message.channel.send(yay).then(async (message) => {
            const emojiList1 = ["🚽", "🪣"];

            for (const emoji of emojiList1) await message.react(emoji);
            const reactCollector = (reaction, user) =>
              emojiList1.includes(reaction.emoji.name) &&
              user.id === message.author.id;

            const reactionCollector = message.createReactionCollector(
              (reaction, user) =>
                emojiList1.includes(reaction.emoji.name) && !user.bot,
              { time: 12000 }
            );

            reactionCollector.on("collect", async (reaction) => {
              reaction.users.remove(message.author);
              switch (reaction.emoji.name) {
                case emojiList1[0]:
                  let array = [];
                  array = user.jobs.filter((x) => x.name !== "maid");
                  user.jobs = array;
                  await user.save().then((user.fired = new Date(Date.now())));
                  await message.reactions.removeAll();
                  yay.setDescription(
                    `Your employer was disgusted as you were using toilet water.\n╰─*You were immediately **fired** from your job! No questions asked.*`
                  );
                  message.edit(yay);
                  break;
                case emojiList1[1]:
                  const random = Math.round(Math.random() * 50) + 2;
                  bot.giveCoins(message.author.id, 200 + random);
                  await message.reactions.removeAll();
                  yay.setDescription(
                    `Your employer was glad to see you mopping.\n╰─*You were paid **❀ 200** coins + a bonus of **❀ ${random}** coins!*`
                  );
                  message.edit(yay);
                  break;
                default:
                  break;
              }
            });
          });
        }
      } else if (stream) {
        const randomImage = [
          "https://media.discordapp.net/attachments/817154556617162772/817288524537659402/unknown.png?width=884&height=442",
          "https://media.discordapp.net/attachments/817154556617162772/817285465706987560/unknown.png?width=884&height=442",
          "https://media.discordapp.net/attachments/817154556617162772/817289578779377684/unknown.png?width=884&height=442",
          "https://media.discordapp.net/attachments/817154556617162772/817291215284338698/unknown.png?width=884&height=442",
          "https://media.discordapp.net/attachments/817154556617162772/817292051347537940/unknown.png?width=884&height=442"
        ];

        const image =
          randomImage[Math.floor(Math.random() * randomImage.length)];
        const views = Math.round(Math.random() * 806948) + 2;
        const likes = Math.round(parseInt(views * 0.4));
        const dislikes = Math.round(parseInt(views * 0.3));
        const earnings = Math.round(Math.random() * 150) + 1;
        const moreearnings = Math.round(Math.random() * 250) + 1;
        const a = `Talking to Hobos (GONE WRONG)`;
        const b = `Makeup Tutorial | How to become a loser!`;
        const c = `Old Vines | Part #459593`;
        const d = `THERES A DEMON IN MY HOUSE!! | (Storytime)`;
        const e = `My wife turned out to be my sister?!`;
        const randomThing = [`success`, `fail`, `major`];
        const ratings =
          randomThing[Math.floor(Math.random() * randomThing.length)];

        let stream = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・working...`)
          .setColor("#f5da9f")
          .setDescription(
            `**Alright, what should the title of your video be?**\n***A*** - ${a}\n***B*** - ${b}\n***C*** - ${c}\n***D*** - ${d}\n***E*** - ${e}\n╰─*Type either \`A\`, \`B\`, \`C\`, etc.*`
          );
        message.channel.send(stream);
        let filter = (m) => m.author.id === message.author.id;
        message.channel
          .awaitMessages(filter, {
            max: 1,
            time: 30000,
            errors: ["time"]
          })
          .then(async (message) => {
            message = message.first();
            if (message.content === "a" || message.content === "A") {
              bot.giveJobHours(message.author.id, 1);
              let stream = new MessageEmbed()
                .setTitle(`\`🌿\` ⏤・working...`)
                .setColor("#f5da9f")
                .setImage(image)
                .setDescription(
                  `Title: **${a}**\n> *Views Gained:* **${views.toLocaleString()}**\n> *Likes:* **${likes.toLocaleString()}**\n> *Dislikes:* **${dislikes.toLocaleString()}**`
                );
              message.channel.send(stream).then((msg) => {
                if (ratings === "success") {
                  bot.giveCoins(message.author.id, earnings + 250);
                  let success = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans loved your video!\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${earnings}** coins due to ad revenue!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(success);
                } else if (ratings === "fail") {
                  bot.giveCoins(message.author.id, 250);
                  let fail = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans **HATED** your video!\n╰─*You earned **❀ 250** coins without a bonus!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(fail);
                } else if (ratings === "major") {
                  bot.giveCoins(message.author.id, moreearnings + 250);
                  let major = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans **REALLY LOVED** your video!\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${moreearnings}** coins due to ad revenue!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(major);
                }
              });
            } else if (message.content === "b" || message.content === "B") {
              bot.giveJobHours(message.author.id, 1);
              let stream = new MessageEmbed()
                .setTitle(`\`🌿\` ⏤・working...`)
                .setColor("#f5da9f")
                .setImage(image)
                .setDescription(
                  `Title: **${b}**\n> *Views Gained:* **${views.toLocaleString()}**\n> *Likes:* **${likes.toLocaleString()}**\n> *Dislikes:* **${dislikes.toLocaleString()}**\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${earnings}** coins due to ad revenue!*`
                );
              message.channel.send(stream).then((msg) => {
                if (ratings === "success") {
                  bot.giveCoins(message.author.id, earnings + 250);
                  let success = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans loved your video!\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${earnings}** coins due to ad revenue!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(success);
                } else if (ratings === "fail") {
                  bot.giveCoins(message.author.id, 250);
                  let fail = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans **HATED** your video!\n╰─*You earned **❀ 250** coins without a bonus!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(fail);
                } else if (ratings === "major") {
                  bot.giveCoins(message.author.id, moreearnings + 250);
                  let major = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans **REALLY LOVED** your video!\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${moreearnings}** coins due to ad revenue!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(major);
                }
              });
            } else if (message.content === "c" || message.content === "C") {
              bot.giveJobHours(message.author.id, 1);
              let stream = new MessageEmbed()
                .setTitle(`\`🌿\` ⏤・working...`)
                .setColor("#f5da9f")
                .setImage(image)
                .setDescription(
                  `Title: **${c}**\n> *Views Gained:* **${views.toLocaleString()}**\n> *Likes:* **${likes.toLocaleString()}**\n> *Dislikes:* **${dislikes.toLocaleString()}**\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${earnings}** coins due to ad revenue!*`
                );
              message.channel.send(stream).then((msg) => {
                if (ratings === "success") {
                  bot.giveCoins(message.author.id, earnings + 250);
                  let success = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans loved your video!\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${earnings}** coins due to ad revenue!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(success);
                } else if (ratings === "fail") {
                  bot.giveCoins(message.author.id, 250);
                  let fail = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans **HATED** your video!\n╰─*You earned **❀ 250** coins without a bonus!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(fail);
                } else if (ratings === "major") {
                  bot.giveCoins(message.author.id, moreearnings + 250);
                  let major = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans **REALLY LOVED** your video!\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${moreearnings}** coins due to ad revenue!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(major);
                }
              });
            } else if (message.content === "d" || message.content === "D") {
              bot.giveJobHours(message.author.id, 1);
              let stream = new MessageEmbed()
                .setTitle(`\`🌿\` ⏤・working...`)
                .setColor("#f5da9f")
                .setImage(image)
                .setDescription(
                  `Title: **${d}**\n> *Views Gained:* **${views.toLocaleString()}**\n> *Likes:* **${likes.toLocaleString()}**\n> *Dislikes:* **${dislikes.toLocaleString()}**\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${earnings}** coins due to ad revenue!*`
                );
              message.channel.send(stream).then((msg) => {
                if (ratings === "success") {
                  bot.giveCoins(message.author.id, earnings + 250);
                  let success = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans loved your video!\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${earnings}** coins due to ad revenue!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(success);
                } else if (ratings === "fail") {
                  bot.giveCoins(message.author.id, 250);
                  let fail = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans **HATED** your video!\n╰─*You earned **❀ 250** coins without a bonus!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(fail);
                } else if (ratings === "major") {
                  bot.giveCoins(message.author.id, moreearnings + 250);
                  let major = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans **REALLY LOVED** your video!\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${moreearnings}** coins due to ad revenue!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(major);
                }
              });
            } else if (message.content === "e" || message.content === "E") {
              bot.giveJobHours(message.author.id, 1);
              let stream = new MessageEmbed()
                .setTitle(`\`🌿\` ⏤・working...`)
                .setColor("#f5da9f")
                .setImage(image)
                .setDescription(
                  `Title: **${e}**\n> *Views Gained:* **${views.toLocaleString()}**\n> *Likes:* **${likes.toLocaleString()}**\n> *Dislikes:* **${dislikes.toLocaleString()}**\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${earnings}** coins due to ad revenue!*`
                );
              message.channel.send(stream).then((msg) => {
                if (ratings === "success") {
                  bot.giveCoins(message.author.id, earnings + 250);
                  let success = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans loved your video!\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${earnings}** coins due to ad revenue!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(success);
                } else if (ratings === "fail") {
                  bot.giveCoins(message.author.id, 250);
                  let fail = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans **HATED** your video!\n╰─*You earned **❀ 250** coins without a bonus!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(fail);
                } else if (ratings === "major") {
                  bot.giveCoins(message.author.id, moreearnings + 250);
                  let major = new MessageEmbed()
                    .setTitle(`\`🌿\` ⏤・working...`)
                    .setDescription(
                      `Your fans **REALLY LOVED** your video!\n╰─*You earned **❀ 250** coins + a bonus of **❀ ${moreearnings}** coins due to ad revenue!*`
                    )
                    .setColor("#f5da9f");
                  msg.channel.send(major);
                }
              });
            } else {
              let yay = new MessageEmbed()
                .setTitle(`\`🌿\` ⏤・canceled.`)
                .setColor("#f5da9f")
                .setDescription(`That wasn't an option from the list!`);
              return message.channel.send(yay);
            }
          })
          .catch((_) => {
            let timeout = new MessageEmbed()
              .setColor("#eda098")
              .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
              .setDescription(`You took too long to answer!`);
            return message.channel.send(timeout).catch();
          });
      } else if (dev) {
        const embed = new MessageEmbed()
          .setTitle(`\`🌿\` ⏤・working...`)
          .setDescription(`Generating some code.....`);
        message.channel.send(embed);
      }
      user.save().then((user.workStreak = new Date(Date.now())));
    }
  }

  const job = jobss.find((x) => x.name.toLowerCase() === args[0].toLowerCase());
  let foundjob = user.jobs.find(
    (x) => x.name.toLowerCase() === job.name.toLowerCase()
  );
  let array = [];
  array = user.jobs.filter((x) => x.name !== job.name);

  if (!job) {
    let jobembed = new MessageEmbed()
      .setColor("#eda098")
      .setTitle(`> hmm... <:girlhmmthink:804652502951395368>`)
      .setDescription(`That job doesn't exist!`);
    return message.channel.send(jobembed);
  }
  let jobembed = new MessageEmbed()
    .setColor("#f5da9f")
    .setTitle(`> \`🌿\` ⏤・job application`)
    .setDescription(
      `Are you sure you want to work as a ${job.description}? Type \`yes\` or \`no\`.`
    );
  message.channel.send(jobembed);
  let filter = (m) => m.author.id === message.author.id;
  message.channel
    .awaitMessages(filter, {
      max: 1,
      time: 25000,
      errors: ["time"]
    })
    .then(async (message) => {
      message = message.first();
      if (
        message.content == "yes" ||
        message.content === "Yes" ||
        message.content === "y" ||
        message.content === "Y"
      ) {
        if (foundjob) {
          let jobembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`> hmm... <:girlhmmthink:804652502951395368>`)
            .setDescription(`You have a job already!`);
          return message.channel.send(jobembed);
        } else if (user.jobs.length > 0) {
          let jobembed = new MessageEmbed()
            .setColor("#eda098")
            .setTitle(`> hmm... <:girlhmmthink:804652502951395368>`)
            .setDescription("You have a job already!");
          return message.channel.send(jobembed);
        } else if (Date.parse(user.fired) + 1800000 > Date.now()) {
          const embed = new MessageEmbed()
            .setTitle(
              "> slow down!! <a:panic:805883559981744199> <a:wrhibud8:802298776308023316>"
            )
            .setDescription(
              `You were fired from a job recently!\n╰─*You can apply for a job again in : \`${prettyMilliseconds(
                Date.parse(user.fired) + 1800000 - Date.now()
              )}\`.*`
            )
            .setColor("#f5da9f");
          return message.channel.send(embed);
        } else {
          if (job.name === "dishwasher") {
            let app = new MessageEmbed()
              .setColor("#f5da9f")
              .setTitle(`> \`🌿\` ⏤・job application`)
              .setDescription(
                `**One of the plates broke, what do you do?**\n***A*** - Hide it and don't tell the boss\n***B*** - Tell the boss, and hope they understand.\n╰─*Type \`A\` or \`B\`*`
              );
            message.channel.send(app);
            let filter = (m) => m.author.id === message.author.id;
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 25000,
                errors: ["time"]
              })
              .then(async (message) => {
                message = message.first();
                if (message.content === "a" || message.content === "A") {
                  let no = new MessageEmbed()
                    .setColor("#eda098")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `Your boss got mad and decided you weren't fit for the job. `
                    );
                  return message.channel.send(no);
                } else if (message.content === "b" || message.content === "B") {
                  let yes = new MessageEmbed()
                    .setColor("#f5da9f")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `Your boss was a little irritated about the plate, but glad you told them.`
                    );
                  return message.channel.send(yes).then(async (message) => {
                    let yes2 = new MessageEmbed()
                      .setColor("#f5da9f")
                      .setTitle(`> \`🌿\` ⏤・success`)
                      .setDescription(
                        `You are now a ${job.description}!\n╰─*Do \`nem work stats\` to view your progress!*`
                      );
                    message.channel.send(yes2);

                    user.jobs.push({
                      name: job.name,
                      description: job.description,
                      salary: job.salary
                    });
                    await user.save();
                  });
                } else {
                  let yes = new MessageEmbed()
                    .setColor("#eda098")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `That's not an option! You failed the application.`
                    );
                  return message.channel.send(yes);
                }
              })
              .catch((_) => {
                let timeout = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
                  .setDescription(`You took too long to answer!`);
                return message.channel.send(timeout).catch();
              });
          } else if (job.name === "maid") {
            let app = new MessageEmbed()
              .setColor("#f5da9f")
              .setTitle(`> \`🌿\` ⏤・job application`)
              .setDescription(
                `**You found a piece of expensive jewelery misplaced, what do you do?**\n***A*** - Hand it to the owner for safe keeping.\n***B*** - Steal the jewelery and sell it.\n╰─*Type \`A\` or \`B\`*`
              );
            message.channel.send(app);
            let filter = (m) => m.author.id === message.author.id;
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 25000,
                errors: ["time"]
              })
              .then(async (message) => {
                message = message.first();
                if (message.content === "a" || message.content === "A") {
                  let no = new MessageEmbed()
                    .setColor("#f5da9f")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `You decided to hand it to the owner. They were relieved you found it and were glad they chose you. `
                    );
                  return message.channel.send(no).then(async (message) => {
                    let yes2 = new MessageEmbed()
                      .setColor("#f5da9f")
                      .setTitle(`> \`🌿\` ⏤・success`)
                      .setDescription(
                        `You are now a ${job.description}!\n╰─*Do \`nem work stats\` to view your progress!*`
                      );
                    message.channel.send(yes2);

                    user.jobs.push({
                      name: job.name,
                      description: job.description,
                      salary: job.salary
                    });
                    await user.save();
                  });
                } else if (message.content === "b" || message.content === "B") {
                  let yes = new MessageEmbed()
                    .setColor("#eda098")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `The owner caught you and reported you to the police. Seems like no one will want to hire you any time soon...`
                    );
                  return message.channel.send(yes);
                } else {
                  let yes = new MessageEmbed()
                    .setColor("#eda098")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `That's not an option! You failed the application.`
                    );
                  return message.channel.send(yes);
                }
              })
              .catch((_) => {
                let timeout = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
                  .setDescription(`You took too long to answer!`);
                return message.channel.send(timeout).catch();
              });
          } else if (job.name === "youtuber") {
            if (user.jobHours < 10) {
              let uhoh = new MessageEmbed()
                .setColor("#eda098")
                .setTitle(`> hmmm... <:girlhmmthink:804652502951395368>`)
                .setDescription(
                  `The hours required to become a youtuber is \`10\`.`
                );
              return message.channel.send(uhoh);
            }
            let app = new MessageEmbed()
              .setColor("#f5da9f")
              .setTitle(`> \`🌿\` ⏤・job application`)
              .setDescription(
                `**Someone posted a video of you saying insensitive things, what do you do?**\n***A*** - Create a sincere apology.\n***B*** - Shift the blame onto the person who shared the video.\n╰─*Type \`A\` or \`B\`*`
              );
            message.channel.send(app);
            let filter = (m) => m.author.id === message.author.id;
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 25000,
                errors: ["time"]
              })
              .then(async (message) => {
                message = message.first();
                if (message.content === "a" || message.content === "A") {
                  let no = new MessageEmbed()
                    .setColor("#f5da9f")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `People are still questioning you, but in the end you gained a larger audience. `
                    );
                  return message.channel.send(no).then(async (message) => {
                    let yes2 = new MessageEmbed()
                      .setColor("#f5da9f")
                      .setTitle(`> \`🌿\` ⏤・success`)
                      .setDescription(
                        `You are now a ${job.description}!\n╰─*Do \`nem work stats\` to view your progress!*`
                      );
                    message.channel.send(yes2);

                    user.jobs.push({
                      name: job.name,
                      description: job.description,
                      salary: job.salary
                    });
                    await user.save();
                  });
                } else if (message.content === "b" || message.content === "B") {
                  let yes = new MessageEmbed()
                    .setColor("#eda098")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `Your account was terminated from most platforms. There goes your online career...`
                    );
                  return message.channel.send(yes);
                } else {
                  let yes = new MessageEmbed()
                    .setColor("#eda098")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `That's not an option! You failed the application.`
                    );
                  return message.channel.send(yes);
                }
              })
              .catch((_) => {
                let timeout = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
                  .setDescription(`You took too long to answer!`);
                return message.channel.send(timeout).catch();
              });
          } else if (job.name === "developer") {
            if (user.jobHours < 20) {
              let uhoh = new MessageEmbed()
                .setColor("#eda098")
                .setTitle(`> hmmm... <:girlhmmthink:804652502951395368>`)
                .setDescription(
                  `The hours required to be employed as a developer is \`20\`. `
                );
              return message.channel.send(uhoh);
            }
            let app = new MessageEmbed()
              .setColor("#f5da9f")
              .setTitle(`> \`🌿\` ⏤・job application`)
              .setDescription(
                `**Which one of these is a coding language?**\n***A*** - Divine\n***B*** - Rust\n╰─*Type \`A\` or \`B\`*`
              );
            message.channel.send(app);
            let filter = (m) => m.author.id === message.author.id;
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 25000,
                errors: ["time"]
              })
              .then(async (message) => {
                message = message.first();
                if (message.content === "a" || message.content === "A") {
                  let no = new MessageEmbed()
                    .setColor("#eda098")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `Your program you attempted to make with a non-existing language failed... Who would've thought?`
                    );
                  return message.channel.send(no);
                } else if (message.content === "b" || message.content === "B") {
                  let yes = new MessageEmbed()
                    .setColor("#f5da9f")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `You got your program up and running, even if it took you a few hours!`
                    );
                  return message.channel.send(yes).then(async (message) => {
                    let yes2 = new MessageEmbed()
                      .setColor("#f5da9f")
                      .setTitle(`> \`🌿\` ⏤・success`)
                      .setDescription(
                        `You are now a ${job.description}!\n╰─*Do \`nem work stats\` to view your progress!*`
                      );
                    message.channel.send(yes2);

                    user.jobs.push({
                      name: job.name,
                      description: job.description,
                      salary: job.salary
                    });
                    await user.save();
                  });
                } else {
                  let yes = new MessageEmbed()
                    .setColor("#eda098")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `That's not an option! You failed the application.`
                    );
                  return message.channel.send(yes);
                }
              })
              .catch((_) => {
                let timeout = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
                  .setDescription(`You took too long to answer!`);
                return message.channel.send(timeout).catch();
              });
          } else if (job.name === "teacher") {
            if (user.jobHours < 20) {
              let uhoh = new MessageEmbed()
                .setColor("#eda098")
                .setTitle(`> hmmm... <:girlhmmthink:804652502951395368>`)
                .setDescription(
                  `The hours required to be employed as a teacher is \`20\`.`
                );
              return message.channel.send(uhoh);
            }
            let app = new MessageEmbed()
              .setColor("#f5da9f")
              .setTitle(`> \`🌿\` ⏤・job application`)
              .setDescription(
                `**You noticed one of your students sending test answers to the whole class, what do you do?**\n***A*** - Punish the student and those that cheated.\n***B*** - Ignore whats happening.\n╰─*Type \`A\` or \`B\`*`
              );
            message.channel.send(app);
            let filter = (m) => m.author.id === message.author.id;
            message.channel
              .awaitMessages(filter, {
                max: 1,
                time: 25000,
                errors: ["time"]
              })
              .then(async (message) => {
                message = message.first();
                if (message.content === "a" || message.content === "A") {
                  let no = new MessageEmbed()
                    .setColor("#f5da9f")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `Even thought they were disappointing with their grades, most of the students learned to not cheat anymore.`
                    );
                  return message.channel.send(no).then(async (message) => {
                    let yes2 = new MessageEmbed()
                      .setColor("#f5da9f")
                      .setTitle(`> \`🌿\` ⏤・success`)
                      .setDescription(
                        `You are now a ${job.description}!\n╰─*Do \`nem work stats\` to view your progress!*`
                      );
                    message.channel.send(yes2);

                    user.jobs.push({
                      name: job.name,
                      description: job.description,
                      salary: job.salary
                    });
                    await user.save();
                  });
                } else if (message.content === "b" || message.content === "B") {
                  let yes = new MessageEmbed()
                    .setColor("#eda098")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `In attempts to become the "cool" teacher, you were fired for letting your students cheat under your supervision.`
                    );
                  return message.channel.send(yes);
                } else {
                  let yes = new MessageEmbed()
                    .setColor("#eda098")
                    .setTitle(`> \`🌿\` ⏤・job application`)
                    .setDescription(
                      `That's not an option! You failed the application.`
                    );
                  return message.channel.send(yes);
                }
              })
              .catch((_) => {
                let timeout = new MessageEmbed()
                  .setColor("#eda098")
                  .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
                  .setDescription(`You took too long to answer!`);
                return message.channel.send(timeout).catch();
              });
          }
        }
      } else if (
        message.content == "no" ||
        message.content === "No" ||
        message.content === "N" ||
        message.content === "n"
      ) {
        let no = new MessageEmbed()
          .setColor("#f5da9f")
          .setTitle(`> \`🌿\` ⏤・job application`)
          .setDescription(`You have canceled this option.`);
        message.channel.send(no);
      } else {
        let wrong = new MessageEmbed()
          .setColor("#eda098")
          .setTitle(`> hmm... <:girlhmmthink:804652502951395368>`)
          .setDescription(`Sorry, that wasn't an option from the list!`);
        message.channel.send(wrong);
      }
    })
    .catch((_) => {
      let timeout = new MessageEmbed()
        .setColor("#eda098")
        .setTitle(`> uh oh... <:girlhmmthink:804652502951395368>`)
        .setDescription(`You took too long to answer!`);
      return message.channel.send(timeout).catch();
    });
};

module.exports.config = {
  name: "work",
  description:
    "Work a job to earn coins and gain promotions.\n\nOther helpful commands are `nem work list` and `nem work stats`",
  usage: "nem work",
  botPerms: ['EMBED_LINKS', 'SEND_MESSAGES', 'EXTERNAL_EMOJI', 'ATTACH_FILES', 'ADD_REACTIONS'],
  userPerms: [],
  aliases: [],
  bankSpace: 1,
  cooldown: 2
};
