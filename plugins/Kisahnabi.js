let axios = require("axios");
let handler = async(m, { conn, text }) => {

    if (!text) return conn.reply(m.chat, 'Masukan Nama Nabi nya', m)

	axios.get(`https://restapi-production-a62b.up.railway.app/api/muslim/kisahnabi?nabi=${text}&apikey=APIKEY`).then ((res) => {
	 	let result = `*NAMA NABI*			: ${name}\n\n*TAHUN KELAHIRAN*	: ${res.data.result.kelahiran}\n\n*UMUR*				: ${res.data.result.wafat_usia}\n\n*SINGGAH*         :${res.data.singgah}\n\n*KISAH*				: ${res.data.result.kisah}`

    conn.reply(m.chat, result, m)
	})
}
handler.help = ['kisah|kisah nabi|nabi'].map(v => v + ' <nama nabi>')
handler.tags = ['quran']
handler.command = /^(kisah|kisah nabi|nabi)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0
handler.limit = false

module.exports = handler



