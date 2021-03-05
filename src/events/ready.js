module.exports = async bot => {
    bot.user.setActivity(`nem help | nem nem nem`, { type: 'WATCHING' });
    console.log(`${bot.user.tag} is online. ${bot.guilds.cache.size.toLocaleString()}`)
}
