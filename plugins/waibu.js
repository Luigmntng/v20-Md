let fetch = require('node-fetch')
async function handler(m, {command}) {
m.reply('_Loading..._')
	conn.sendFile(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/wallpaper/${command}?apikey=APIKEY`)).buffer(), '', 'Udah kak Jgn Lupa Follow ig @ahmdlui', m)
}

handler.help = ['chitoge', 'kaori', 'nezuko', 'tsunade']
handler.tags = ['anime']
handler.command = /^(chitoge|kaori|nezuko|tsunade)$/i
handler.register = true

handler.limit = true

module.exports = handler

