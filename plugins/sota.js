let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://server-api-rey.herokuapp.com/api/wallpaper/shota?apikey=apirey`)).buffer(), 'Udah kak Jgn Lupa Follow ig @ahmdlui', footer, 'Adek gw Banhg', `.souta`, m)

}

handler.help = ['souta']
handler.tags = ['internet']
handler.command = /^(souta)$/i
handler.register = true

handler.limit = true

module.exports = handler
