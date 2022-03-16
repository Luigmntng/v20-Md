let fetch = require('node-fetch')
let handler = async (m, { conn, command }) => {
  let res = await fetch('http://docs-jojo.herokuapp.com/api/cersex')
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let caption = `
_*${json.judul}*_
_${json.cersex}_
`.trim()
await conn.sendFile(m.chat, json.img, 'sex.jpg', caption, m)
}
handler.help = ['cersex']
handler.tags = ['internet', 'fun', 'quotes']
handler.command = /^cersex$/i


module.exports = handler
