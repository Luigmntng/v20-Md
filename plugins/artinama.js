let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) return m.reply('Nama siapa?')
  let res = await fetch(global.API('lui',  '/api/primbon/artinama', { text: text }, 'apikey'))
  let json = await res.json()
  if (json.status !== true) throw json
  m.reply(m.chat, json.result, m)
}
handler.help = ['artinama'].map(v => v + ' [nama]')
handler.tags = ['kerang']
handler.command = /^(artinama)$/i

module.exports = handler
