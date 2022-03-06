let fetch = require('node-fetch')
async function handler(m, {command}) {
m.reply('_Loading..._')
	conn.sendFile(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/wallpaper/islami${command}?apikey=APIKEY`)).buffer(), '', 'Udah kak Jgn Lupa Follow ig @ahmdlui', m)

}

handler.help = ['islami', 'katakata', 'pentol', 'satanic', 'wallhp', 'anime', 'hekel', 'doraemon', 'pubg', 'programing', 'tatasurya', 'teknologi', 'cogan', 'cecan', 'gaming', 'cyberspace']
handler.tags = ['wall']
handler.command = /^(islami|katakata|pentol|satanic|wallhp|anime|hekel|doraemon|pubg|programming|tatasurya|teknologi|cogan|cecan|gaming|cyberspace)$/i
handler.register = true

handler.limit = true

module.exports = handler

