import { youtubeSearch } from '@bochilteam/scraper'
let handler = async (m, { conn, args, usedPrefix, command, text }) => {
if (!text) throw `𝙌𝙪𝙚 𝙚𝙨𝙩𝙖 𝙗𝙪𝙨𝙘𝙖𝙙𝙤?\n𝙞𝙣𝙜𝙧𝙚𝙨𝙚 𝙚𝙡 𝙘𝙤𝙢𝙖𝙣𝙙𝙤  𝙢𝙖𝙨 𝙚𝙡 𝙣𝙤𝙢𝙗𝙧𝙚 𝙙𝙚𝙡 𝙡𝙖𝙨 𝙘𝙖𝙣𝙘𝙞𝙤𝙣\n𝙀𝙟𝙚𝙢𝙥𝙡𝙤*\n*${usedPrefix + command} ozuna`
try {
const { video } = await youtubeSearch(text)
const listSections = []
let teks = [...video ].map(v => {
switch (v.type) {
case 'video': {
listSections.push([`${v.title}`, [
['Video 🎥', `${usedPrefix}ytmp4 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Videodoc 🎥', `${usedPrefix}ytmp4doc ${v.url}`, `descargar: ${v.title} (${v.url})`],    
['Audio 🎧', `${usedPrefix}ytmp3 ${v.url}`, `descargar: ${v.title} (${v.url})`],
['Audiodoc 🎧', `${usedPrefix}ytmp3doc ${v.url}`, `descargar: ${v.title} (${v.url})`]
]])
}}}).filter(v => v).join('\n\n========================\n\n')
conn.sendList(m.chat, '╭┄〔 *𝙈𝙐𝙎𝙄𝘾𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉𝘼𝘿𝘼* 〕┄⊱-\n┆~~••~~••~~••~~••~~~~', `┆𝐌𝐮𝐬𝐢𝐜𝐚 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧𝐚𝐝𝐚 𝐜𝐨𝐧: ${args.join(" ")}\n╰────────────────`, '𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐲 𝐩𝐫𝐞𝐜𝐢𝐨𝐧𝐞 𝐄𝐧𝐯𝐢𝐚𝐫', '[♦ 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 ♦]', listSections, m)
if (m.isGroup) return m.reply('*✳️ 𝙃𝙊𝙇𝘼 𝙀𝙎𝙏𝙄𝙈𝘼𝘿𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼), 𝙎𝙐 𝙋𝙀𝙍𝘿𝙄𝘿𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝙀𝙉𝙑𝙄𝘼𝘿𝙊 𝘼 𝙎𝙐 𝘾𝙃𝘼𝙏 𝙋𝙍𝙄𝙑𝘼𝘿𝙊, 𝙀𝙎𝙏𝙊 𝘾𝙊𝙈𝙊 𝙎𝙊𝙇𝙐𝘾𝙄𝙊𝙉 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇 𝘼 𝙀𝙍𝙍𝙊𝙍𝙀𝙎 𝘿𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘾𝙊𝙉 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙏𝙄𝙋𝙊 𝙇𝙄𝙎𝙏𝘼𝙎 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙊𝙉 𝙑𝙄𝙎𝙄𝘽𝙇𝙀𝙎 𝙀𝙉 𝙇𝘼𝙎 𝙑𝙀𝙍𝙎𝙄𝙊𝙉𝙀𝙎 𝙈𝘼𝙎 𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙎 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋*')        
} catch {
try {     
let get_result = await fetchJson(`https://api.lolhuman.xyz/api/ytsearch?apikey=${lolkeysapi}&query=${text}`)
let get_result2 = get_result.result 
const listSerch = []
const listSerch2 = []
const listSerch3 = []
const listSerch4 = []
let teskd = `𝐌𝐮𝐬𝐢𝐜𝐚 𝐫𝐞𝐥𝐚𝐜𝐢𝐨𝐧𝐚𝐝𝐚 𝐜𝐨𝐧: ${args.join(" ")}`
const sections = [{ title: `• • •「 🅐🅤🅓🅘🅞 」• • •`, rows: listSerch }, { title: `• • •「 🅥🅘🅓🅔🅞 」• • •`, rows: listSerch2 }, { title: `• • •「 🅓🅞🅒🅤🅜🅔🅝🅣🅞🅢 🅜🅟❸ 」• • •`, rows: listSerch3 }, { title: `|• • •「 🅓🅞🅒🅤🅜🅔🅝🅣🅞🅢 🅜🅟❹ 」• • •`, rows: listSerch4 }]
for (let x of get_result2) {
listSerch.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch2.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4 https://www.youtube.com/watch?v=${x.videoId}`})
listSerch3.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp3doc https://www.youtube.com/watch?v=${x.videoId}`})
listSerch4.push({title: x.title, description: null, rowId: `${usedPrefix}ytmp4doc https://www.youtube.com/watch?v=${x.videoId}`})}
const listMessage = { text: teskd, footer: '𝐄𝐥𝐢𝐣𝐚 𝐮𝐧𝐚 𝐨𝐩𝐜𝐢𝐨𝐧 𝐲 𝐩𝐫𝐞𝐜𝐢𝐨𝐧𝐞 𝐄𝐧𝐯𝐢𝐚𝐫', title: " 『 𝙈𝙐𝙎𝙄𝘾𝘼 𝙍𝙀𝙇𝘼𝘾𝙄𝙊𝙉𝘼𝘿𝘼 』", buttonText: "[♦ 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 ♦]", sections }
conn.sendMessage(m.chat, listMessage, { quoted: m })    
if (m.isGroup) return m.reply('*✳️ 𝙃𝙊𝙇𝘼 𝙀𝙎𝙏𝙄𝙈𝘼𝘿𝙊 𝙐𝙎𝙐𝘼𝙍𝙄𝙊(𝘼), 𝙎𝙐 𝙋𝙀𝙍𝘿𝙄𝘿𝙊 𝙃𝘼 𝙎𝙄𝘿𝙊 𝙀𝙉𝙑𝙄𝘼𝘿𝙊 𝘼 𝙎𝙐 𝘾𝙃𝘼𝙏 𝙋𝙍𝙄𝙑𝘼𝘿𝙊, 𝙀𝙎𝙏𝙊 𝘾𝙊𝙈𝙊 𝙎𝙊𝙇𝙐𝘾𝙄𝙊𝙉 𝙏𝙀𝙈𝙋𝙊𝙍𝘼𝙇 𝘼 𝙀𝙍𝙍𝙊𝙍𝙀𝙎 𝘿𝙀 𝙈𝙀𝙉𝙎𝘼𝙅𝙀 𝘾𝙊𝙉 𝘽𝙊𝙏𝙊𝙉𝙀𝙎 𝙏𝙄𝙋𝙊 𝙇𝙄𝙎𝙏𝘼𝙎 𝙌𝙐𝙀 𝙉𝙊 𝙎𝙊𝙉 𝙑𝙄𝙎𝙄𝘽𝙇𝙀𝙎 𝙀𝙉 𝙇𝘼𝙎 𝙑𝙀𝙍𝙎𝙄𝙊𝙉𝙀𝙎 𝙈𝘼𝙎 𝙍𝙀𝘾𝙄𝙀𝙉𝙏𝙀𝙎 𝘿𝙀 𝙒𝙃𝘼𝙏𝙎𝘼𝙋𝙋*')    
} catch {    
}}}
handler.command = /^playlist|playlist2$/i
handler.money = 40
handler.register = true
export default handler
async function fetchJson(url, options) {
try {
options ? options : {}
const res = await axios({ method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options })
return res.data
} catch (err) {
return err
}}
