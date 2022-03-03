let fetch = require('node-fetch')
let handler = async (m, { conn, command, usedPrefix }) => {
	
	conn.sendButtonImg(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/nsfw/neko2?apikey=APIKEY`)).buffer(), 'Afah antum birahi sama Kartun ?', footer, 'Get Dosa Again', `.nsfwnekov2`, m)

}

handler.help = ['nsfwneko']
handler.tags = ['nsfw']
handler.command = /^(nsfwneko)$/i
handler.register = true

handler.premium = true
handler.register = true
handler.nsfw = true

module.exports = handler
