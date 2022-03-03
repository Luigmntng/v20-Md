let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/wallpaper/wallhp?apikey=APIKEY`)).buffer(), 'Nih kak Jgn Lupa Follow ig @ahmdlui', footer, 'Makasih Bot >///<', `.estetikwallpaper`, m)

}

handler.help = ['estetikwallpaper']
handler.tags = ['wall']
handler.command = /^(estetikwallpaper)$/i
handler.register = true

handler.limit = true

module.exports = handler

