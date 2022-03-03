 fetch = require('node-fetch')

let handler = async (m, { conn, usedPrefix, command }) => {
	let res = await fetch(API('https://hmtai.herokuapp.com', '/nsfw/' + command, {}))
	if (!res.ok) throw `${res.status} ${res.statusText}`
	let json = await res.json()
	if (json.url) {
		let buffer = await (await fetch(json.url)).buffer()
		await conn.sendFile(m.chat, url, 'json.url', `Sagne sama kartun ?`.trim(), m)
}

handler.help = ['ass', 'bdsm', 'blowjob', 'boobjob', 'cum', 'creampie', 'cuckold', 'ero', 'elves', 'femdom', 'foot', 'gangbang', 'glasses', 'hentai', 'incest', 'masturbation', 'pantsu', 'orgy', 'tentacles', 'thighs', 'uniform', 'vagina', 'yuri' ]
handler.tags = ['dewasa']
handler.command = /^(ass|bdsm|blowjob|boobjob|cum|creampie|cuckold|ero|elves|femdom|foot|gangbang|glasses|hentai|incest|masturbation|pantsu|orgy|tentacles|thighs|uniform|vagina|yuri)$/i
module.exports = handler

