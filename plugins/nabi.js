let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  response = args.join (' ')
  let res = await fetch('https://restapi-production-a62b.up.railway.app/api/muslim/kisahnabi?nabi=${response[0]}&apikey=APIKEY')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let caption = `
Nama nabi: ${json.name}
Kelahiran: ${json.kelahiran}
Usia: ${json.wafat_usia}
Singgah: ${json.singgah}
Kisah: _${json.kisah}_
`.trim()
await conn.sendReply(m.chat, caption, m)
}
handler.help = ['kisahnabi']
handler.tags = ['alquran']
handler.command = /^kisahnabi|nabi$/i


module.exports = handler
