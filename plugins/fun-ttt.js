import TicTacToe from '../lib/tictactoe.js' 
let handler = async (m, { conn, usedPrefix, command, text }) => {
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

conn.game = conn.game ? conn.game : {}
if (Object.values(conn.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw `*${lenguajeGB['smsAvisoAG']()}𝙏𝙤𝙙𝙖𝙫𝙞𝙖 𝙖𝙡𝙜𝙪𝙞𝙚𝙣 𝙚𝙨𝙩𝙖 𝙟𝙪𝙜𝙖𝙣𝙙𝙤 𝙚𝙣 𝙡𝙖 𝙨𝙖𝙡𝙖 𝙨𝙞 𝙦𝙪𝙞𝙚𝙧𝙚 𝙖𝙗𝙖𝙣𝙙𝙤𝙣𝙖𝙧 𝙚𝙨𝙘𝙧𝙞𝙗𝙖 *salir*\n𝙏𝙖𝙢𝙗𝙞𝙚𝙣 𝙥𝙪𝙚𝙙𝙚𝙨 𝙚𝙡𝙞𝙢𝙞𝙣𝙖𝙧 𝙡𝙖 𝙨𝙖𝙡𝙖 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 *${usedPrefix}delttt*`
if (!text) throw `*${lenguajeGB['smsAvisoFG']()}𝘿𝙚𝙗𝙚 𝙙𝙚 𝙖𝙜𝙧𝙚𝙜𝙖 𝙪𝙣 𝙣𝙤𝙢𝙗𝙧𝙚 𝙖 𝙡𝙖 𝙨𝙖𝙡𝙖\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤\n${usedPrefix + command} Sala bot*`
let room = Object.values(conn.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true)) 
if (room) {
await conn.reply(m.chat, `${lenguajeGB['smsAvisoEG']()}𝘼𝙡𝙜𝙪𝙞𝙚𝙣 𝙨𝙚 𝙝𝙖 𝙪𝙣𝙞𝙙𝙤 𝙖 𝙡𝙖 𝙨𝙖𝙡𝙖 *${text}*\n𝙔𝙖 𝙥𝙪𝙚𝙙𝙚𝙣 𝙟𝙪𝙜𝙖𝙧!! 😼`, fkontak, m)

await conn.reply(m.chat, `${lenguajeGB['smsAvisoRG']()}⭕️ *Clásico Juego del Gato, 3 en raya o tateti* ❌\n\n*¿Cómo jugar?*\n_Responde al Juego con un Número, el mensaje debe contener la posiscion en la que quieras estar (1,2,3,4,5,6,7,8,9)_`, fkontak, m)

room.o = m.chat
room.game.playerO = m.sender
room.state = 'PLAYING'
let arr = room.game.render().map(v => {
return {
X: '❎',
O: '⭕',
1: '1️⃣',
2: '2️⃣',
3: '3️⃣',
4: '4️⃣',
5: '5️⃣',
6: '6️⃣',
7: '7️⃣',
8: '8️⃣',
9: '9️⃣',
}[v]})
let str = `💖 𝙅𝙪𝙚𝙜𝙤 𝙩𝙖𝙩𝙚𝙩𝙞
🫂 𝙅𝙪𝙜𝙖𝙙𝙤𝙧𝙚𝙨:
*┈┈┈┈┈┈┈┈┈*
❎ = @${room.game.playerX.split('@')[0]}
⭕ = @${room.game.playerO.split('@')[0]}
*┈┈┈┈┈┈┈┈┈*
     ${arr.slice(0, 3).join('')}
     ${arr.slice(3, 6).join('')}
     ${arr.slice(6).join('')}
*┈┈┈┈┈┈┈┈┈*
𝙏𝙪𝙧𝙣𝙤 𝙙𝙚:
@${room.game.currentTurn.split('@')[0]}
`.trim()

if (room.x !== room.o) await conn.sendMessage(room.x, { text: str, mentions: this.parseMention(str)}, { quoted: fkontak, m })
await conn.sendMessage(room.o, { text: str, mentions: conn.parseMention(str)}, { quoted: fkontak, m })
        
} else {
room = {
id: 'tictactoe-' + (+new Date),
x: m.chat,
o: '',
game: new TicTacToe(m.sender, 'o'),
state: 'WAITING' }
        
if (text) room.name = text     
let imgplay = `https://img.freepik.com/vector-premium/juego-tres-raya-icono-contorno-lineal-neon_7280-2422.jpg`
await conn.reply(m.chat, `😼 𝙅𝙪𝙚𝙜𝙤𝙨 𝙏𝙖𝙩𝙚𝙩𝙞

🐈 𝙀𝙨𝙥𝙚𝙧𝙖𝙣𝙙𝙤 𝙖𝙡 𝙨𝙚𝙜𝙪𝙣𝙙𝙤 𝙟𝙪𝙜𝙖𝙙𝙤𝙧 𝙥𝙪𝙚𝙙𝙚 𝙞𝙣𝙜𝙧𝙚𝙨𝙖 𝙪𝙨𝙖𝙣𝙙𝙤 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤
*${usedPrefix + command} ${text}*

𝙎𝙞 𝙦𝙪𝙞𝙚𝙧𝙚𝙨 𝙖𝙗𝙖𝙣𝙙𝙤𝙣𝙖𝙧 𝙡𝙖 𝙨𝙖𝙡𝙖 𝙪𝙨𝙖 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤 
*${usedPrefix}delttt*`, fkontak, m)
conn.game[room.id] = room
}}
handler.command = /^(tictactoe|ttc|ttt|xo)$/i
export default handler
