let fetch = require('node-fetch')
let handler = async(m, { conn, args }) => {
    response = args.join (' ')
    let res = `https://restapi-production-a62b.up.railway.app/api/downloader/xnxx?query=${response}&apikey=APIKEY`
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let keqing = json.result.map((v, i) => `#${i + 1}. \n*Title:* ${v.title}\n*Info:* ${v.info}\n*Link:* ${v.link}}\n==============\n`).join('\n') 
    if (json.status) m.reply(keqing)
    else throw json
}
handler.help = ['xnxxsearch <query>']
handler.tags = ['internet']
handler.command = /^(xnxxsearch)$/i

handler.limit = 12

module.exports = handler
