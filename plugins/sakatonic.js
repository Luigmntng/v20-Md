let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/wallpaper/satanic?apikey=APIKEY`)).buffer(), 'Bg Lu ateis?', footer, 'Iya bg gw ateis', `.sakatonicwallpaper`, m)

}

handler.help = ['sakatonicwallpaper']
handler.tags = ['wall']
handler.command = /^(sakatonicwallpaper)$/i
handler.register = true

handler.limit = true

module.exports = handler

