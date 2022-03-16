let fetch = require('node-fetch')
let handler = async function (m, { conn, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    await m.reply(global.wait)
  let res = await fetch('http://docs-jojo.herokuapp.com/api/liputan6')
  let json = src[Math.floor(Math.random() * src.length)]
  const raku =  `*JUDUL :* "${json.result.title}"\n\n*informasi:* ${json.result.description}\n\n*Upload :* ${json.result.uploaded}`
     conn.sendFile(m.chat,json.result.img, 'image.jpg', raku, m)
}
handler.help = ['berita']
handler.tags = ['berita']
handler.command = /^berita$/i
handler.group = false


module.exports = handler


//jgn di bully bg msih pemula
