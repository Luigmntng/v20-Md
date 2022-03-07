let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let res = await fetch(global.API('lui', '/api/downloader/pornhub', { query: text }, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.results.map((v, i) => `#${i + 1}. \n*Judul:* ${v.title}\n*Dilihat:* ${v.views}\n*Pembuat:* ${v.author}\n*Durasi:* ${v.duration}*HD:* {v.hd}\n*PREMIUM:* ${v.premium}\n*Link:* ${v.link}}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['pornhubsearch <judul>']
handler.tags = ['bokep']
handler.command = /^(pornhubsearch)$/i

handler.limit = true

module.exports = handler
