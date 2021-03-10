const path = require('path')
module.exports = async bot => {
    bot.user.setActivity(`nem help | nem nem nem`, { type: 'WATCHING' });
    console.log(`${bot.user.tag} is online. ${bot.guilds.cache.size.toLocaleString()}`)
    
    
    const express = require('express')
    const app = express();

    const port = 3000 || 3001;
    app.get('/', (req, res) => {
    res.status(200).send('hi')
    })
    app.listen(port, () => console.log(`I am listening at https://localhost:${port}`))






}
