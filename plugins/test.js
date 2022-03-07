
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
    let res = await fetch(global.API('lui', '/api/downloader/xnxx', { query: text }, 'apikey'))
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Info:* ${v.info}\n*Link:* ${v.link}}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['xnxxsearch <query>']
handler.tags = ['internet']
handler.command = /^(xnxxsearch)$/i

handler.limit = true

module.exports = handler
