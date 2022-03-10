let fetch = require('node-fetch')
let handler = async (m, { text }) => {
  if (!text) return m.reply('Mimpi apa? ')
  let res = await fetch(global.API('lui',  '/api/primbon/artimimpi', { text: text }, 'apikey'))
  let json = await res.json()
  if (json.status !== true) throw json
  conn.reply(m.chat, json.result, m)
}
handler.help = ['artimimpi'].map(v => v + ' [mimpi]')
handler.tags = ['kerang']
handler.command = /^(artimimpi)$/i

module.exports = handler
