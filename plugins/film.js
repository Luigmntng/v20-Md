let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_Ingin Cari Apa_'
    await m.reply(global.wait)
  let res = await fetch('http://docs-jojo.herokuapp.com/api/lk21?q=' + encodeURIComponent(text))
let json= await res.json()
  const raku =  `*JUDUL :* "${json.title}"\n\n*genre:* ${json.genre}\n\n*yahun :* ${json.year}\n\n*durasi:* ${json.duration}\n\n*dilihat:* ${json.view}\n\n*deskripsi:* ${json.description}\n\n*pemain:* ${json.actor}\n\n*rilis:* ${json.release}\n\n*bahasa:* ${json.language}\n\n*link download:* ${json.download_link}`
     conn.sendFile(m.chat,json.image, 'image.jpg', raku, m)
}
handler.help = ['film <judul>']
handler.tags = ['premium']
handler.command = /^film$/i
handler.group = false

handler.premium = true

module.exports = handler
