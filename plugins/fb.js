let fetch = require('node-fetch')
let fs = require('fs')
let handler = async(m, { conn, usedPrefix, text, command }) => {
    if (!text) throw `Harap masukkan URL\n\nContoh : .fb https://www.facebook.com/alanwalkermusic/videos/277641643524720`
    let res = await fetch(`https://api-kaysa.herokuapp.com/api/fbdl?url=${text}&apikey=KaysaS`)
    if (!res.ok) throw await `${res.status} ${res.statusText}`
    let json = await res.json()
    await conn.sendFile(m.chat, json.medias.url, 'kntl.mp4', `*Nih*`, m)
}
handler.help = ['fb'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^f((b|acebook)(dl|download)?(er)?)$/i

handler.limit = true

module.exports = handler
