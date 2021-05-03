case 'nomemusica': 
if (isBanned) return reply(mess.only.benned)    
tujuh = fs.readFileSync('./umapasta/nomeaudio.mp3');
client.sendMessage(from, tujuh, MessageType.audio, {quoted: mek, mimetype: 'audio/mp4', ptt:true})
break
