import MessageType from '@adiwajshing/baileys'
let handler = async (m, { conn, usedPrefix, command }) => {
const fkontak = {
	"key": {
    "participants":"0@s.whatsapp.net",
		"remoteJid": "status@broadcast",
		"fromMe": false,
		"id": "Halo"
	},
	"message": {
		"contactMessage": {
			"vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
		}
	},
	"participant": "0@s.whatsapp.net"
}  

let room = Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))
if (room == undefined) return await conn.reply(m.chat, `𝑵𝒐 𝒆𝒔𝒕𝒂 𝒆𝒏 𝒏𝒊𝒏𝒈𝒖𝒏𝒂 𝒑𝒂𝒓𝒕𝒊𝒅𝒂 𝒆𝒏 𝒆𝒍 𝒋𝒖𝒆𝒈𝒐𝒔 𝒕𝒂𝒕𝒆𝒕𝒊`, fkontak, m),
//conn.sendButton(m.chat, `𝑵𝒐 𝒆𝒔𝒕𝒂 𝒆𝒏 𝒏𝒊𝒏𝒈𝒖𝒏𝒂 𝒑𝒂𝒓𝒕𝒊𝒅𝒂 𝒆𝒏 𝒆𝒍 𝒋𝒖𝒆𝒈𝒐𝒔 𝒕𝒂𝒕𝒆𝒕𝒊`, wm, null, [['💫 𝑰𝒏𝒊𝒄𝒊𝒂 𝒑𝒂𝒓𝒕𝒊𝒅𝒂', `${usedPrefix}ttt sala nueva`]], fkontak, m)
delete conn.game[room.id]

await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}ʟᴀ sᴀʟᴀ ᴅᴇʟ ᴛᴀᴛᴇᴛɪ ғᴜᴇ ᴇʟɪᴍɪɴᴀᴅᴀ`, fkontak, m)}
//await conn.sendButton(m.chat, `ʟᴀ sᴀʟᴀ ᴅᴇʟ ᴛᴀᴛᴇᴛɪ ғᴜᴇ ᴇʟɪᴍɪɴᴀᴅᴀ`, wm, null, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪 ☘️', '/menu'] ], fkontak, m)}  
handler.command = /^(delttt|deltt|delxo|deltictactoe)$/i
handler.fail = null
export default handler
