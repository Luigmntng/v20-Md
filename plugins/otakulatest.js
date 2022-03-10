let fetch = require('node-fetch')
let handler = async function (m, { text, isPrems, isOwner }) {
	let user = global.db.data.users[m.sender]
    if (!text) throw '_Ingin Cari Apa_'
    await m.reply(global.wait)
  let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/kuso?q=' + encodeURIComponent(text))
let json = src[Math.floor(Math.random() * src.length)]
  const raku =  `*Link :* "${json.result.url}"\n\n*Title:* ${json.result.title}\n\n*Category :* ${json.result.category}\n\n*Uploaded:* ${json.result.uploaded}`
     conn.sendFile(m.chat,json.result.img, 'image.jpg', raku, m)
}
handler.help = ['otakulatest']
handler.tags = ['anime']
handler.command = /^otakulatest$/i
handler.group = false

module.exports = handler



 let json = src[Math.floor(Math.random() * src.length)]
