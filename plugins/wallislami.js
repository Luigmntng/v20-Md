let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/wallpaper/islami?apikey=APIKEY`)).buffer(), 'Nih kak Jgn Lupa solat dan Juga Follow ig @ahmdlui :v', footer, 'Subhanallah (>-<)', `.wallislami`, m)

}

handler.help = ['wallislami']
handler.tags = ['wall']
handler.command = /^(wallislami)$/i
handler.register = true

handler.limit = true

module.exports = handler

