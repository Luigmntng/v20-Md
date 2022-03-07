let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let res = await fetch(global.API('lui', '/api/muslim/kisahnabi', { nabi: text }, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let nabi = json.result.map((v, i) => `*NAMA NABI:* ${v.name}\n*Kelahiran:* ${v.kelahiran}\n*Usia:* ${v.wafat_usia}\n*Singgah:* ${v.singgah}\n*Kisah:* ${v.kisah}`)
    if (json.status) m.reply(nabi)
    else throw json
}
handler.help = ['kisahnabi <nama nabi>']
handler.tags = ['quran']
handler.command = /^(kisahnabi)$/i

handler.limit = true

module.exports = handler


