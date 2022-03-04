let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('https://x-restapi.herokuapp.com/api/random-cehor?apikey=BETA')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let caption = `
_*${json.judul}*_
_${json.desc}_
`.trim()
await conn.sendFile(m.chat, json.thumb, 'hantu.jpg', caption, m)
}
handler.help = ['ceritahoror', 'ceritahrorr']
handler.tags = ['internet', 'fun', 'quotes']
handler.command = /^ceritahoror|ceritahorror$/i


module.exports = handler
