let fetch = require('node-fetch')
async function handler(m, {command}) {
m.reply('_Loading..._')
	conn.sendFile(m.chat, await ( await fetch(`https://restapi-production-a62b.up.railway.app/api/wallpaper/${command}?apikey=APIKEY`)).buffer(), '', 'Udah kak Jgn Lupa Follow ig @ahmdlui', m)

}

handler.help = ['chitoge', 'kaori', 'nezuko', 'tsunade', 'emilia', 'asuna', 'sagiri', 'miku', 'yotsuba', 'mikasa', 'shina', 'gremory', 'akira', 'toukachan' 'kagura', 'hinata', 'minato', 'naruto', 'onepiece', 'itori', 'sasuke', 'kurumi', 'anna', 'deidara', 'shinomiya', 'eba', 'yumeko', 'akiyama', 'yuki', 'itachi', 'madara', 'hestia', 'inori', 'sakura', 'keneki', 'shinka', 'chiho', 'kaga', 'rize', 'erza', 'ayuzawa', 'kotori', 'boruto']
handler.tags = ['anime']
handler.command = /^(chitoge|kaori|nezuko|tsunade|emilia|asuna|sagiri|miku|yotsuba|mikasa|shina|gremory|akira|toukachan|kagura|hinata|minato|naruto|onepiece|itori|sasuke|kurumi|anna|deidara|shinomiya|eba|yumeko|akiyama|yuki|itachi|madara|hestia|inori|sakura|keneki|shinka|chiho|kaga|rize|erza|ayuzawa|kotori|boruto)$/i
handler.register = true

handler.limit = true

module.exports = handler
