let fetch = require("node-fetch")

let handler = async (m, { conn }) => {
  let res = await fetch('https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=MIMINGANZ)
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  await conn.sendFile(m.chat, json.result.male, '', 'Nih cwo nya jgn Lupa follow ig saya @ahmdlui', m)
  await conn.sendFile(m.chat, json.result.female, '', 'Nih cwe nya jgn Lupa follow ig saya @ahmdlui', m)
}
handler.help = ['ppcouple', 'ppcp']
handler.tags = ['internet', 'anime']
handler.command = /^(pp(cp|couple))$/i
handler.limit = true

module.exports = handler
