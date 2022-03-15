let handler = async(m, { conn, text, participants }) => {
  let teks = ` *Message : ${text ? text : 'Nothing'}*
               %readmore
		      	for (let mem of participants) {
		            teks += `࿃➡️m @${mem.id.split('@')[0]}\n`
				}
                teks += `\n⋙ *Admin Group* ⋘`
                conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
}
handler.help = ['tagall <pesan>']
handler.tags = ['group']
handler.command = /^(tagall)$/i

handler.group = true
handler.admin = true

module.exports = handler
