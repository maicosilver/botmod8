const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'ola':
tujuh = fs.readFileSync('./media/Todocuriosoe.m4a');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender))) throw 'Kamu masih berada di dalam anonymous chat'
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !([room.a, room.b].includes(m.sender)))
            if (room) {
                this.sendMessage(room.a, 'Menemukan partner!', MessageType.text)
                room.b = m.sender
                room.state = 'CHATTING'
                m.reply('Menemukan partner!')
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING'
                }
                m.reply('Menunggu parter...')
            }
            break
        }
    }
}
handler.help = ['start', 'leave', 'next']
handler.tags = 'anonymous'

handler.command = ['start', 'leave', 'next']
handler.private = true

module.exports = handler
