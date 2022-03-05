let fetch = require('node-fetch')
let handler = async (m, { conn }) => {
  await m.reply(global.wait)
  let res = await fetch(`https://islamic-api-indonesia.herokuapp.com/api/data/json/ayatkursi`)
  if (res.status != 200) throw await res.text()
  let json = await res.json()
  if (!json.status) throw json
  let caption = `
*「 Ayat Kursi 」*
${arabic}
${latin}
Artinya:
_"${translation}"_
`.trim()
  await m.reply(caption)
}
handler.help = ['ayatkursi']
handler.tags = ['quran']
handler.command = /^(ayatkursi)$/i


module.exports = handler
