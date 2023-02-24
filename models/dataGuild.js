const mongoose = require('mongoose')

const guildData = new mongoose.Schema({
    guildID: String,
    tickets: Array,
    ticketCounter: {
        type: Number,
        default: 0
    },
    usersBlacklisted: Array,
    transcriptChannel: String,
    mentionStaff: String,
    staffRole: String,
    maxTickets: {
        type: Number,
        default: 1
    }
})

module.exports = mongoose.model('guildData', guildData, "guildData")

//===========================================================\\
//===================| Coded By Uo#1428 |====================\\
//==================| https://uo1428.tk/ |===================\\
//===========================================================\\
//=============| ΛLL IN ONΞ™ | Development </> |=============\\
//=============| https://discord.gg/pXRT2FusPb |=============\\
//===========================================================\\ 