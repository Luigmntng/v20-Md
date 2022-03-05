let fetch = require('node-fetch')
let handler = async (m, { conn, text }) => {
  if (!text) return conn.reply(m.chat, 'Masukan Nama Nabi nya', m)
  await m.reply(global.wait)
  let res = await fetch(`https://restapi-production-a62b.up.railway.app/api/muslim/kisahnabi?nabi=${text}&apikey=APIKEY`)
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let caption = `
*「 Kisah Nabi 」*
*Nama Nabi* : ${name}
*Kelahiran* : ${kelahiran}
*Usia* : ${wafat_usia}
*Singgah* : ${singgah}
Kisah : _${kisah}_
`.trim()
  await m.reply(caption)
}
handler.help = ['kisah|kisahnabi|nabi'].map(v => v + ' <nama nabi>')
handler.tags = ['quran']
handler.command = /^(kisah|kisahnabi|nabi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler
